import { Module } from '@nestjs/common';
import { AvisService } from './avis.service';
import { AvisController } from './avis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avis } from './entities/avis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Avis])],
  controllers: [AvisController],
  providers: [AvisService]
})
export class AvisModule { }
