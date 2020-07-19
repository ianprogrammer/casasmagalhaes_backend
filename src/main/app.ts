import express = require('express');
import { Application } from 'express'
import connection from '../infra/db/typeorm/config.db'
import { serve, setup } from 'swagger-ui-express'
import swaggerConfig from './doc'
class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; middleWares: any; controllers: any }) {
    this.app = express();
    this.port = appInit.port

    this.middlewares(appInit.middleWares);
    this.app.use('/api-docs',  serve, setup(swaggerConfig))
    this.routes(appInit.controllers);
    this.assets();

  }

  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void }) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private assets() {
    this.app.use(express.static("public"));
  }

  public listen() {
    connection().then(c => {
      
      console.log('Database Conectado')
      this.app.listen(this.port, () => {
        console.log(`API http://localhost:${this.port}`)
      })
    }).catch(console.error)
  }
}

export default App;
