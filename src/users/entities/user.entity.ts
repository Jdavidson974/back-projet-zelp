import { Avis } from "src/avis/entities/avis.entity";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { Ville } from "src/ville/entities/ville.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    @ManyToOne(() => Ville, (ville) => ville.users)
    ville: Ville;
    @OneToMany(() => Avis, (avis) => avis.user)
    avis: Avis[]
}
