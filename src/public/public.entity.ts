import { User } from "src/user/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Publica {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    title: string
    @Column()
    content: string
    @Column()
    autorId: number
    @ManyToOne(() => User, user => user.pulication)
    autor: User;
}