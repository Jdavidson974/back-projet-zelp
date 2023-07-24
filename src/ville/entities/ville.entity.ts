import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Entity } from "typeorm";

@Entity()
export class Ville {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ unique: true })
    name: string;
    @Column()
    cp: string;
    @OneToMany(() => Restaurant, (restaurant) => restaurant.ville)
    restaurants: Restaurant[]
}
