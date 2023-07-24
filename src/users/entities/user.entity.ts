import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;
    @Column()
    role: "admin" | "restaurateur" | "client";
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @OneToMany(() => Restaurant, (restaurant) => restaurant.user)
    restaurants: Restaurant[]
}
