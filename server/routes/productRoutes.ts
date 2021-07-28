import express from 'express';
import { CommonRoutesConfig } from '../common/commonRouteSettings';
import productController from "../controllers/productController";

export class ProductRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'ProductRoutes');
    }

    public configureRoutes(): any {
        this.app.route('/api/v1/products')
        .post(
            productController.addProduct
        )
        return this.app;
    }
}
