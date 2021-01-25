import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { PostsEntity } from './PostEntity'
import { SharedProp } from './SharePropEntity'
// export type UserType = 'admin' | 'user'

@Entity() //ENTITAS
export class UserEntity extends SharedProp {
    @PrimaryGeneratedColumn() //id PRIMARY KEY
    id: number

    @Column({ name: 'first_name', nullable: false })
    firstName: string

    @Column({ name: 'last_name', nullable: false })
    lastName: string

    @Column({ name: 'birth_date', nullable: false, type: 'date' })
    birthDate: Date

    @OneToMany(() => PostsEntity, (post: PostsEntity) => post.user, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    posts: Array<PostsEntity>

    // @Column({ unique: true, nullable: false })
    // email: string

    // @Column({ default: 'user' })
    // type: UserType
}