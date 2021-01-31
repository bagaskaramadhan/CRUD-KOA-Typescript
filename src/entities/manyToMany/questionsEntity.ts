import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {CategoryEntity} from "../manyToMany/categoryEntity";

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToMany(() => CategoryEntity)
    @JoinTable()
    categories: CategoryEntity[];

}