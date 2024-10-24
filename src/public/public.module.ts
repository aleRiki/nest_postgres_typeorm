import { Module } from '@nestjs/common';
import { PublicController } from './public.controller';
import { PublicService } from './public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publica } from './public.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Publica]),
    UserModule,
  ],
  providers: [PublicService],
  controllers: [PublicController],
})
export class PublicModule {}
