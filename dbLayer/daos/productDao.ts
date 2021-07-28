import * as sqldbManager from '../connectionManager';
import SqlServerManager = sqldbManager.SqlClientManager;
import {IAddProductModel} from "../dtos/productModel";
class ProductDao {
    public static getInstance(): ProductDao {
        if (!ProductDao.instance) {
            ProductDao.instance = new ProductDao();
        }
        return ProductDao.instance;
    }
    private static instance: ProductDao;


    public async addProduct(product: IAddProductModel): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const db = await new SqlServerManager().instance();
            try {
                    const dbResult = await db.request()
                        .input('name', product.name)
                        .input('category', product.category)
                        .input('subcategory', product.subCategory)
                        .execute('InsertProduct');
                    resolve(dbResult.rowsAffected.length > 3);
            } catch (err) {
                reject(err);
            }
        });
    }

}

export default ProductDao.getInstance();
