import { Module, OnModuleInit } from '@nestjs/common';
import { VilleService } from './ville.service';
import { VilleController } from './ville.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ville } from './entities/ville.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ville])],
  controllers: [VilleController],
  providers: [VilleService]
})
export class VilleModule implements OnModuleInit {
  constructor(private villeService: VilleService) { }
  onModuleInit() {
    this.villeService.initVille();
  }
}
