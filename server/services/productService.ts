import {IAddProductModel} from "../../dbLayer/dtos/productModel";
import productDao from "../../dbLayer/daos/productDao";

class ProductService {
    public static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }
    private static instance: ProductService;

    public async addProduct(product: IAddProductModel): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await productDao.addProduct(product));
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default ProductService.getInstance();
