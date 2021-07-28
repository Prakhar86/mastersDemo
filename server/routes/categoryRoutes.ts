import express from 'express';
import { CommonRoutesConfig } from '../common/commonRouteSettings';

import categoryController from "../controllers/categoryController";

export class CategoryRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'CategoryRoutes');
    }

    public configureRoutes(): any {
        this.app.route('/api/v1/category')
            .get(
                categoryController.getCategory
            )
        this.app.route('/api/v1/subcategory').
        get(
            categoryController.getSubCategory
        )
        return this.app;
    }
}
