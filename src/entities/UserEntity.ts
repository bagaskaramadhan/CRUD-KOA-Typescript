import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
// export type UserType = 'admin' | 'user'

@Entity() //ENTITAS
export class UserEntity {
    @PrimaryGeneratedColumn() //id PRIMARY KEY
    id: number

    @Column({ name: 'first_name', nullable: false })
    firstName: string

    @Column({ name: 'last_name', nullable: false })
    lastName: string

    @Column({ name: 'birth_date', nullable: false, type: 'date' })
    birthDate: Date

    // @Column({ unique: true, nullable: false })
    // email: string

    // @Column({ default: 'user' })
    // type: UserType
}