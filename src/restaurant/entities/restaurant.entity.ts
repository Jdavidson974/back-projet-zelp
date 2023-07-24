import { User } from "src/users/entities/user.entity";
import { Ville } from "src/ville/entities/ville.entity";
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from "typeorm";

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ unique: true })
    name: string;
    @Column()
    description: string;
    @ManyToOne(() => Ville, (ville) => ville.restaurants)
    ville: Ville;
    @ManyToOne(() => User, (user) => user.restaurants)
    user: User;
}
