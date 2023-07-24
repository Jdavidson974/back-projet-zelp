import { Avis } from "src/avis/entities/avis.entity";
import { User } from "src/users/entities/user.entity";
import { Ville } from "src/ville/entities/ville.entity";
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, OneToMany } from "typeorm";

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string;
    @Column()
    description: string;
    @ManyToOne(() => Ville, (ville) => ville.restaurants)
    ville: Ville;
    @ManyToOne(() => User, (user) => user.restaurants)
    user: User;
    @OneToMany(() => Avis, (avis) => avis.restaurant)
    avis: Avis[]
}
