import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { SharedProp } from './SharePropEntity';

@Entity()
export class ContohEntity extends SharedProp {
    @PrimaryGeneratedColumn('increment')
    contoh_id: number

    @Column({ name: 'contoh_name', nullable: false })
    contohName: string

    @Column({ name: 'contoh_address', nullable: false })
    contohAddress: string

    @Column({ unique: true, nullable: false })
    contohEmail: string
}