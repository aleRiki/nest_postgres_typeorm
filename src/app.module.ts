import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from './user/user.entity';
import { Profile } from './user/profileuser.entity';
import { PublicService } from './public/public.service';
import { PublicModule } from './public/public.module';
import { Publica } from './public/public.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: 'postgres',
      database: 'proyect',
      entities: [User, Profile, Publica],
      synchronize: true,
    }),
    UserModule,
    PublicModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
