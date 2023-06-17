import { isString, IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from "./category";

@Entity({ name: "products" })
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_uz: string

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_ru: string

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_en: string

    @Column({ type: "text"})
    @IsString()
    product_type_uz: string
    @Column({ type: "text"})
    @IsString()
    product_type_en: string
    @Column({ type: "text"})
    @IsString()
    product_type_ru: string
    @Column({ type: "text"})
    @IsString()
    contents_uz: string
    @Column({ type: "text"})
    @IsString()
    contents_ru: string
    @Column({ type: "text"})
    @IsString()
    contents_en: string

    @Column({ type: "text"})
    @IsString()
    destination_uz: string

    @Column({ type: "text"})
    @IsString()
    destination_ru: string
    @Column({ type: "text"})

    @IsString()
    destination_en: string
    @Column({ type: "text"})
    @IsString()
    
    color_uz: string
    @Column({ type: "text"})
    @IsString()

    color_en: string
    @Column({ type: "text"})
    @IsString()

    color_ru: string
    @Column({ type: "text"})
    @IsString()
    main_fabric_uz : string
    @Column({type: "text"})
    @IsString()
    main_fabric_en : string
    @Column({type: "text"})
    @IsString()
    main_fabric_ru : string
    @Column({type: "text"})
    @IsString()
    Compound : string
    @Column({type: "text"})
    @IsString()
    storage_uz : string
    @Column({type: "text"})
    @IsString()
    storage_ru : string
    @Column({type: "text"})
    @IsString()
    storage_en : string
    @Column({type: "text"})
    @IsString()
    image: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @ManyToOne(()=>CategoryEntity,(category)=>category.products)
    category:CategoryEntity

}