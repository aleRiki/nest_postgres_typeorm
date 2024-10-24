import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createuser.dto';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/updateuser.dto';

import { CreateProfileDtio } from './dto/createprofile.dto';
import { ApiTags } from '@nestjs/swagger';
@Controller('users')
@ApiTags('user')
export class UserController {
    constructor(private userServices: UserService) { }
    
    @Post()
    createUser(@Body() newUser: CreateUserDto) {
        return this.userServices.createUser(newUser);
    }
    @Get()
    getUsers(): Promise<User[]> {
        return this.userServices.getUsers();
    };
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) 
     {
        return this.userServices.getUser(id);
    }
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        return this.userServices.deleteuser(id);
    }
    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto){
        return this.userServices.updateUser(id, user)
    }
    @Post(':id/profile')
    createProfile(
        @Param('id',ParseIntPipe) id: number,
        @Body() profile: CreateProfileDtio
    ){
        return this.userServices.createProfile(id, profile)
    }


}
