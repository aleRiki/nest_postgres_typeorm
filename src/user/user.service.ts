import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createuser.dto';
import { UpdateUserDto } from './dto/updateuser.dto';
import { CreateProfileDtio } from './dto/createprofile.dto';
import { Profile } from './profileuser.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}
  async createUser(user: CreateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: {
        user: user.user,
      },
    });
    if (userFound) {
      return new HttpException('el ususario ya existe ', HttpStatus.NOT_FOUND);
    }

    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
  getUsers() {
    return this.userRepository.find({
     // relations: ['publica', 'profile']
    });
  }
  async getUser(id: number) {
    const userFound = await this.userRepository.findOne({
      where: {
        id,
      },
      //relations:['publica']
    });
    if (!userFound) {
      return new HttpException(
        'no se encontro el usuario',
        HttpStatus.NOT_FOUND,
      );
    }
    return userFound;
  }
  async deleteuser(id: number) {
    const userFound = this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      return new HttpException(
        'no se encontro el usuario',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.userRepository.delete({ id });
  }
  async updateUser(id: number, user: UpdateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: {
        id,
      },
      
    });
    if (!userFound) {
      return new HttpException('el ususario no existe ', HttpStatus.NOT_FOUND);
    }
    const updateUser = Object.assign(userFound, user);
    return this.userRepository.save(updateUser);
  }
  async createProfile(id: number, profile: CreateProfileDtio) {
    const userFound = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!userFound) {
      return new HttpException(
        'el usuario no fue encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
    const newProfile = 
    this.profileRepository.create(profile)
    const savedProfile = await this.profileRepository.save
    (newProfile)
     userFound.profile = savedProfile
     return this.userRepository.save(userFound)
  }
}
