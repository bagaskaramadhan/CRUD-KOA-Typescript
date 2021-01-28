import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm"; 

import {Details} from "./details"; 

@Entity() 
export class Customer { 

   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   name: string; 
   
   @ManyToOne(type => Details, detailsData => detailsData.gender)
   details: Details;
}