import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { Ville } from 'src/ville/entities/ville.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class RestaurantService {

  @InjectRepository(Restaurant) private restaurantRepo: Repository<Restaurant>;
  @InjectRepository(User) private userRepo: Repository<User>;
  @InjectRepository(Ville) private villeRepo: Repository<Ville>;

  createInitRestaurant() {
    this.userRepo.find({
      where: {
        role: 'restaurateur',
      },
    }).then(users => {
      this.villeRepo.find().then(
        villes => {
          const restaurantSettings: { name: string, description: string }[] = [
            {
              name: "Odyssé", description: "Super bon ! "
            },
            {
              name: "Case à Pizza", description: "Super bon pour pas cher !"
            }
          ]
          users.forEach((user, index) => {
            const resto = this.restaurantRepo.create({
              user: user,
              ville: villes[index],
              description: restaurantSettings[index].description,
              name: restaurantSettings[index].name,
            })
            this.restaurantRepo.save(resto)
          });
        }
      )
    })
  }

  count(): Promise<boolean> {
    return this.restaurantRepo.find().then(
      resto => {
        if (resto.length) {
          return true;
        } else {
          return false
        }
      }
    )
  }
  create(createRestaurantDto: CreateRestaurantDto) {
    return 'This action adds a new restaurant';
  }

  findAll() {
    return this.restaurantRepo.find({ relations: { avis: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
