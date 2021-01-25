import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
@Entity('product') //Table
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name', nullable: false })
    name: string

    @Column({ name: 'age', nullable: false })
    age: number

    @Column({ name: 'address', nullable: false })
    address: string

}