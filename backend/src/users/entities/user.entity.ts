import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column({type: "varchar", length: 255})
    user_username!: string;

    @Column({default: false})
    user_isActive!: boolean;

    @CreateDateColumn()
    user_account_created_at!: Date;

    @UpdateDateColumn()
    user_last_active_at!: Date;
}
