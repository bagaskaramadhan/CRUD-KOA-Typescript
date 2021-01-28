import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {ProjectEntity} from "./projectEntity"; 
@Entity() 
export class ValueEntity {  

   @PrimaryGeneratedColumn() 
   idValue: string; 
   
   @Column() 
   value: string; 
   
   @ManyToOne(type => ProjectEntity, studentName => studentName.projectDataStudent)
   valueProjects: ProjectEntity; 
}