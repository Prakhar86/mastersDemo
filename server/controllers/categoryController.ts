import * as express from 'express';
import categoryService from "../services/categoryService";

class CategoryController {
    public static getInstance(): CategoryController {
        if (!CategoryController.instance) {
            CategoryController.instance = new CategoryController();
        }
        return CategoryController.instance;
    }
    private static instance: CategoryController;

    public async getCategory(
        request: express.Request,
        response: express.Response
    ): Promise<any> {
        try {
             const category = await categoryService.getCategory();
            response.status(200).send(category);
        } catch (err) {
            console.log(err);
        }
    }

    public async getSubCategory(
        request: express.Request,
        response: express.Response
    ): Promise<any> {
        try {
            const subCategory = await categoryService.getSubCategory();
            response.status(200).send(subCategory);
        } catch (err) {
            console.log(err);
        }
    }
}

export default CategoryController.getInstance();
