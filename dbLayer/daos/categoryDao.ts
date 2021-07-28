import * as sqldbManager from '../connectionManager';
import SqlServerManager = sqldbManager.SqlClientManager;
class ProductDao {
    public static getInstance(): ProductDao {
        if (!ProductDao.instance) {
            ProductDao.instance = new ProductDao();
        }
        return ProductDao.instance;
    }
    private static instance: ProductDao;


    public async getCategory(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const db = await new SqlServerManager().instance();
            try {
                const dbResult = await db.query('Select * from Category');
                resolve(dbResult?.recordsets);
            } catch (err) {
                reject(err);
            }
        });
    }

    public async getSubCategory(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const db = await new SqlServerManager().instance();
            try {
                const dbResult = await db.query('Select * from SubCategory');
                resolve(dbResult?.recordsets);
            } catch (err) {
                reject(err);
            }
        });
    }

}

export default ProductDao.getInstance();
