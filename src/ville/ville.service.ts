import { Injectable } from '@nestjs/common';
import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ville } from './entities/ville.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VilleService {
  @InjectRepository(Ville) private villeRepo: Repository<Ville>
  initVille() {
    this.villeRepo.find().then(
      ville => {
        if (ville.length) {
          console.log("pas de create ville");
        } else {
          const ville: Ville[] = [
            {
              id: 1,
              cp: "97441",
              name: "Sainte Suzanne",
              restaurants: [],
              users: []

            },
            {
              id: 2,
              cp: "97400",
              name: "Saint Denis",
              restaurants: [],
              users: []

            },
            {
              id: 3,
              cp: "97400",
              name: "Saint Denis",
              restaurants: [],
              users: []

            },
            {
              id: 4,
              cp: "97412",
              name: "Bras Panon",
              restaurants: [],
              users: []

            },
            {
              id: 5,
              cp: "97410",
              name: "Saint Pierre",
              restaurants: [],
              users: []

            },
            {
              id: 6,
              cp: "97438",
              name: "Sainte-Marie",
              restaurants: [],
              users: []

            },
          ]
          this.villeRepo.save(ville);
        }

      }
    )
  }
  create(createVilleDto: CreateVilleDto) {
    return 'This action adds a new ville';
  }

  findAll() {
    return `This action returns all ville`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ville`;
  }

  update(id: number, updateVilleDto: UpdateVilleDto) {
    return `This action updates a #${id} ville`;
  }

  remove(id: number) {
    return `This action removes a #${id} ville`;
  }
}
