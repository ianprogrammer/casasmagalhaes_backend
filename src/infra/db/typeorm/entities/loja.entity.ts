import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Produto } from './produto.entity';

@Entity()
export class Loja {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string

    @Column()
    cnpj: string

    @Column()
    nomeFantasia: string
    
    @OneToMany(type => Produto, produto => produto.loja,  { onDelete: 'CASCADE' })
    produtos: Produto[];

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt!: Date;
}
