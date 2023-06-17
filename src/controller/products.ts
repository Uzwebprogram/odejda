import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { ProductsEntity } from '../entities/products';

class ProductsController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(ProductsEntity ).find());
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(ProductsEntity ).find({
            relations:{
                category:true
            },where: { id: +id }}));
    }

    public async Post(req: Request, res: Response) {
        try {
            const {title_uz,title_ru,title_en , destination_uz , destination_en , destination_ru ,main_fabric_uz , main_fabric_en , main_fabric_ru  ,  contents_uz , contents_en , contents_ru , product_type_uz , Compound  , color_uz, color_en , color_ru, storage_uz , storage_en , storage_ru , product_type_en , product_type_ru, image, category } = req.body

            const products = await AppDataSource.getRepository(ProductsEntity ).createQueryBuilder().insert().into(ProductsEntity ).values({title_uz,title_ru,title_en , destination_uz , destination_en , destination_ru ,main_fabric_uz , main_fabric_en , main_fabric_ru  ,  contents_uz , contents_en , contents_ru , product_type_uz , Compound  , color_uz, color_en , color_ru, storage_uz , storage_en , storage_ru , product_type_en , product_type_ru, image, category }).returning("*").execute()

            res.json({
                status: 201,
                message: "products created",
                data: products.raw[0]
            })
        } catch (error) {
            console.log(error);
        }

    }

    public async Put(req: Request, res: Response) {
        try {
            const {title_uz,title_ru,title_en , destination_uz , destination_en , destination_ru ,main_fabric_uz , main_fabric_en , main_fabric_ru  ,  contents_uz , contents_en , contents_ru , product_type_uz , Compound  , color_uz, color_en , color_ru, storage_uz , storage_en , storage_ru , product_type_en , product_type_ru, image, category } = req.body
            const { id } = req.params

            const products = await AppDataSource.getRepository(ProductsEntity ).createQueryBuilder().update(ProductsEntity )
                .set({title_uz,title_ru,title_en , destination_uz , destination_en , destination_ru ,main_fabric_uz , main_fabric_en , main_fabric_ru  ,  contents_uz , contents_en , contents_ru , product_type_uz , Compound  , color_uz, color_en , color_ru, storage_uz , storage_en , storage_ru , product_type_en , product_type_ru, image, category  })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "products updated",
                data: products.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const products = await AppDataSource.getRepository(ProductsEntity ).createQueryBuilder().delete().from(ProductsEntity ).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "products deleted",
                data: products.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ProductsController();