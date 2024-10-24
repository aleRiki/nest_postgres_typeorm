import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePublicaDto } from './dto/createPublica.dto';
import { PublicService } from './public.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('public')
@ApiTags('public')
export class PublicController {
    constructor(
        private pulicasService: PublicService
    ){}
    @Post()
    createPublic(@Body() publica: CreatePublicaDto){
        return this.pulicasService.createPublic(publica);
    }
    @Get()
    getPublica(){
        return this.pulicasService.getPublica();
    }
}
