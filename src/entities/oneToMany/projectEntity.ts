import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {StudentEntity} from "./studentEntity";
import {ValueEntity} from './valueEntity'
@Entity() 
export class ProjectEntity {  

   @PrimaryGeneratedColumn() 
   idProjects: string; 
   
   @Column() 
   projectsName: string; 
   
   @ManyToOne(type => StudentEntity, studentName => studentName.projects)
   projectDataStudent: StudentEntity; 

//    @OneToMany((type) => ValueEntity, (value) => value.valueProjects)
//    valueProjects: ValueEntity[];
}