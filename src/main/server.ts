import "reflect-metadata";
import 'module-alias/register';
import App from "./app";
import { LojaRoutes, ProdutoRoutes } from '../main/routes'
import helmet from 'helmet';
import * as express from 'express'
import { APP_CONFIG } from '@/config';
import { cors } from './cors';

const app = new App({
  port: +APP_CONFIG.port,
  controllers: [
    new LojaRoutes(),
    new ProdutoRoutes()
  ],
  middleWares: [express.json(), cors, helmet()],
});
app.listen()

