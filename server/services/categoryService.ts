import categoryDao from "../../dbLayer/daos/categoryDao";

class CategoryService {
    public static getInstance(): CategoryService {
        if (!CategoryService.instance) {
            CategoryService.instance = new CategoryService();
        }
        return CategoryService.instance;
    }
    private static instance: CategoryService;

    public async getCategory(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await categoryDao.getCategory());
            } catch (err) {
                reject(err);
            }
        });
    }
    public async getSubCategory(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await categoryDao.getSubCategory());
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default CategoryService.getInstance();
