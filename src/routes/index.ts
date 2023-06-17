import { Router } from "express";
import form from "../controller/form";
import category from "../controller/category";
import products from "../controller/products";
import news from "../controller/news";
import top_product from "../controller/top_product";
const router=Router()

// form
router.get("/form",form.Get);
router.get("/form/:id",form.GetId);
router.post("/form",form.Post);
router.put("/form/:id",form.Put);
router.delete("/form/:id",form.Delete);

// news
router.get("/news",news.Get);
router.get("/news/:id",news.GetId);
router.post("/news",news.Post);
router.put("/news/:id",news.Put);
router.delete("/news/:id",news.Delete);


// category
router.get("/category",category.Get);
router.get("/category/:id",category.GetId);
router.post("/category",category.Post);
router.put("/category/:id",category.Put);
router.delete("/category/:id",category.Delete);

// products
router.get("/products",products.Get);
router.get("/products/:id",products.GetId);
router.post("/products",products.Post);
router.put("/products/:id",products.Put);
router.delete("/products/:id",products.Delete);
// top
router.get("/news-product",top_product.Get);
router.get("/news-product/:id",top_product.GetId);
router.post("/news-product",top_product.Post);
router.put("/news-product/:id",top_product.Put);
router.delete("/news-product/:id",products.Delete);

export default router;