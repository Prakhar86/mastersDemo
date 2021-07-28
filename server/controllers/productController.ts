import * as express from 'express';
import productService from "../services/productService";

class ProductController {
    public static getInstance(): ProductController {
        if (!ProductController.instance) {
            ProductController.instance = new ProductController();
        }
        return ProductController.instance;
    }
    private static instance: ProductController;

    public async addProduct(
        request: express.Request,
        response: express.Response
    ): Promise<any> {
        try {
            if(request.body) {
                const product = await productService.addProduct(request.body);
                response.status(200).send('Product Added..')
            } else {
                response.status(409).send('Not added')
            }

        } catch (err) {
        }
    }
}

export default ProductController.getInstance();
