import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Profile } from './profileuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile])],
  providers:[UserService],
  controllers: [UserController],
  exports:[UserService],
})
export class UserModule { }
