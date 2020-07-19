import { LojaPostgresRepository } from '../../infra/db/typeorm/repositories/postgres/loja-repository';
import { LojaAddController } from '../../presentation/controllers/lojas/loja-add/loja-add-controller';
import RoutesProtocol from './interface/routes-protocol';
import { lojaAddValidator, lojaGetValidator, lojaRemoveValidator, lojaUpdateValidator } from './validators/loja/loja-validators';
import { RouterHelper } from './helper/router-helper';
import { LojaGetController } from '@/presentation/controllers/lojas/loja-get/loja-get-controller';
import { LojaGetAllController } from '@/presentation/controllers/lojas/loja-get/loja-getAll-controller';
import * as express from "express"
import { Request, Response } from 'express'
import { LojaRemoveController } from '@/presentation/controllers/lojas/loja-remove/loja-remove-controller';
import { LojaUpdateController } from '@/presentation/controllers/lojas/loja-update/loja-update-controller';

export class LojaRoutes implements RoutesProtocol {

    public router = express.Router();
    private readonly lojaRepository: LojaPostgresRepository = new LojaPostgresRepository()

    constructor() {
        this.initRoutes()
    }
    public initRoutes() {
        this.router.post("/loja", this.addLoja);
        this.router.get("/lojas", this.getLojas)
        this.router.get("/loja/:id", this.getLoja)
        this.router.delete("/loja/:id", this.removeLoja)
        this.router.put("/loja/:id", this.updateLoja)
    }

    addLoja = async (req: Request, res: Response) => {
        const controller = new LojaAddController(lojaAddValidator(), this.lojaRepository);
        await RouterHelper(req, res, controller)
    }
    getLoja = async (req: Request, res: Response) => {
        const controller = new LojaGetController(lojaGetValidator(), this.lojaRepository);
        await RouterHelper(req, res, controller)
    }
    getLojas = async (req: Request, res: Response) => {
        const controller = new LojaGetAllController(this.lojaRepository);
        await RouterHelper(req, res, controller)
    }

    removeLoja = async (req: Request, res: Response) => {
        const controller = new LojaRemoveController(lojaRemoveValidator(), this.lojaRepository);
        await RouterHelper(req, res, controller)
    }
    updateLoja = async (req: Request, res: Response) => {
        const controller = new LojaUpdateController(lojaUpdateValidator(), this.lojaRepository);
        await RouterHelper(req, res, controller)
    }
}

