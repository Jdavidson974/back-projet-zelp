import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { User } from "src/users/entities/user.entity";
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from "typeorm";

@Entity()
export class Avis {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string;
    @Column()
    rating: number;
    @ManyToOne(() => User, (user) => user.avis)
    user: User;
    @ManyToOne(() => Restaurant, (restaurant) => restaurant.avis)
    restaurant: Restaurant;

}
