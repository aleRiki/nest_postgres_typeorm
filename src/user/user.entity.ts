import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Profile } from './profileuser.entity'
import { Publica } from 'src/public/public.entity'
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    name: string
    @Column({unique: true})
    user: string
    @Column()
    email: string
    @Column()
    password: string
    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile
    @OneToMany(() => Publica, pulication => pulication.autor)
    pulication : Publica;
}