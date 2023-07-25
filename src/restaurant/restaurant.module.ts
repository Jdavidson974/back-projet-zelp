import { Module, OnModuleInit } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Ville } from 'src/ville/entities/ville.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, Ville, User])],
  controllers: [RestaurantController],
  providers: [RestaurantService]
})
export class RestaurantModule implements OnModuleInit {
  constructor(private restaurantService: RestaurantService) { }
  onModuleInit() {
    // this.restaurantService.count().then(
    //   haveValue => {
    //     if (!haveValue) {
    //       this.restaurantService.createInitRestaurant();
    //       console.log('création de resto');
    //     } else {
    //       console.log('pas de création de resto');
    //     }
    //   }
    // )
  }
}
