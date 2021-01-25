import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm'
  import { SharedProp } from './SharePropEntity'
  import { UserEntity } from './UserEntity'
  
  @Entity({ name: 'posts' })
  export class PostsEntity extends SharedProp {
    @PrimaryGeneratedColumn()
    id: number
  
    @Column()
    title: string
  
    @Column({ type: 'text' })
    body: string
  
    @Column({ nullable: false, name: 'user_id' })
    userId: number
  
    @ManyToOne(() => UserEntity, (user: UserEntity) => user.posts)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity
  }