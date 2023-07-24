import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { User } from "src/users/entities/user.entity";
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity()
export class Avis {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    comment: string;
    @Column({ nullable: true })
    rating: number;
    @ManyToOne(() => User, (user) => user.avis)
    user: User;
    @ManyToOne(() => Restaurant, (restaurant) => restaurant.avis)
    restaurant: Restaurant;
    @ManyToMany(() => Avis, (avis) => avis.reponse, { onDelete: "CASCADE" })
    @JoinTable()
    reponse: Avis[];
}
