import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProjectEntity } from "./projectEntity";
import {ValueEntity} from './valueEntity'

@Entity()
export class StudentEntity {
  @PrimaryGeneratedColumn()
  idStudent: string;

  @Column()
  name: string;

  @OneToMany((type) => ProjectEntity, (project) => project.projectDataStudent)
  projects: ProjectEntity[];

//   @OneToMany((type) => ValueEntity, (value) => value.valueProjects)
//   values: ValueEntity[];
  
}
