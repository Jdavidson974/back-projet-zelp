import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { User } from "src/users/entities/user.entity";
import { PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Entity } from "typeorm";

@Entity()
export class Ville {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string;
    @Column()
    cp: string;
    @OneToMany(() => Restaurant, (restaurant) => restaurant.ville)
    restaurants: Restaurant[]
    @OneToMany(() => User, (user) => user.ville)
    users: User[]
}
