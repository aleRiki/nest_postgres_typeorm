import { HttpException, Injectable } from '@nestjs/common';
import{InjectRepository}from '@nestjs/typeorm'
import { Publica } from './public.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { CreatePublicaDto } from './dto/createPublica.dto';

@Injectable()
export class PublicService {
    constructor(
        @InjectRepository(Publica) private publicaRepository: Repository<Publica>,
        private userService: UserService,

    ){}
    async createPublic(publica: CreatePublicaDto){
        const userFound = await this.userService.getUser(publica.userId);
        if(!userFound)
            return new HttpException('user not found', 404);
        const  newPublica = await this.publicaRepository.create(publica);
    return  this.publicaRepository.save(newPublica);

    }
    async getPublica(){
        return this.publicaRepository.find(
           {
                relations: ['users']
            }
        );
    }
}
