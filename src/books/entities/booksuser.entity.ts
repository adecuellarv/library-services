import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booksuser {
    @PrimaryGeneratedColumn()
    idbooksuser: number;

    @Column()
    idbook: number;

    @Column()
    iduser: number;
}