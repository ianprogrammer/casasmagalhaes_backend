import RoutesProtocol from './interface/routes-protocol';
import { ProdutoAddController } from '@/presentation/controllers/produtos/produto-add/produto-add-controller';
import { LojaPostgresRepository } from '@/infra/db/typeorm/repositories/postgres/loja-repository';
import { ProdutoPostgresRepository } from '@/infra/db/typeorm/repositories/postgres/produto-repository';
import { RouterHelper } from './helper/router-helper';
import * as express from "express"
import { Request, Response } from 'express'
import { produtoAddValidator, produtoGetValidator, produtoRemoveValidator, produtoUpdateValidator } from './validators/produto/produto-add-validator';
import { ProdutoGetAllController } from '@/presentation/controllers/produtos/produto-get/produto.getAll-controller';
import { ProdutoGetController } from '@/presentation/controllers/produtos/produto-get/produto-get-controller';
import { ProdutoRemoveController } from '@/presentation/controllers/produtos/produto-remove/produto-remove-controller';
import { ProdutoUpdateController } from '@/presentation/controllers/produtos/produto-update/produto-update-controller';

export class ProdutoRoutes implements RoutesProtocol {

    public router = express.Router({ mergeParams: true });
    private readonly lojaRepository: LojaPostgresRepository = new LojaPostgresRepository()
    private readonly produtoRepository: ProdutoPostgresRepository = new ProdutoPostgresRepository(this.lojaRepository)

    constructor() {
        this.initRoutes()
    }
    public initRoutes() {
        this.router.post("/loja/:id/produto", this.addProduto);
        this.router.put("/produto/:idProduto", this.updateProduto);
        this.router.delete("/produto/:idProduto", this.removeProduto);
        this.router.get("/produtos", this.getAllProduto);
        this.router.get('/produto/:id', this.getProduto)

    }

    addProduto = async (req: Request, res: Response) => {
        const controller = new ProdutoAddController(produtoAddValidator(), this.produtoRepository)
        await RouterHelper(req, res, controller)
    }
    getProduto = async (req: Request, res: Response) => {
        const controller = new ProdutoGetController(produtoGetValidator(), this.produtoRepository)
        await RouterHelper(req, res, controller)
    }

    getAllProduto = async (req: Request, res: Response) => {
        const controller = new ProdutoGetAllController(this.produtoRepository)
        await RouterHelper(req, res, controller)
    }

    removeProduto = async (req: Request, res: Response) => {
        const controller = new ProdutoRemoveController(produtoRemoveValidator(), this.produtoRepository)
        await RouterHelper(req, res, controller)
    }

    updateProduto = async (req: Request, res: Response) => {
        const controller = new ProdutoUpdateController(produtoUpdateValidator(), this.produtoRepository)
        await RouterHelper(req, res, controller)
    }

}


