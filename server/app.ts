import express from 'express';
import bodyParser from 'body-parser';
import {SqlClientManager} from "../dbLayer/connectionManager";
import {ProductRoutes} from "./routes/productRoutes";
import {CategoryRoutes} from "./routes/categoryRoutes";

class App {
    public app: express.Application;
    constructor() {
       this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(
            bodyParser.urlencoded({
                extended: false,
            }),
        );
        this.routes()
    }
    public async init(): Promise<any> {
        try {
            await new SqlClientManager().getConnection();
            console.log('Sql-server started successfully!')
        } catch (e) {
            console.log('Unable to connect the sql-server, Exception :', e);
        }
    }

    public  routes(): void {
        new ProductRoutes(this.app);
        new CategoryRoutes(this.app);
    }
}
function expressApp(): any {
    const app = new App();
    app.init().then(() => {
        return app.app;
    }).catch(error => {
        console.log('Not able to start the server, Exiting from here.', error);
        process.exit(1);
        return 1;
    });
    return app.app;
}
export default expressApp;