import { Request, Response } from 'express';

import { IUseCase } from '../use_cases/IUseCase';

class Dado_Controller {
    dados_usecase: IUseCase;

    constructor(dados_usecase: IUseCase) {
        console.log(typeof dados_usecase)
        console.log(dados_usecase)
        
        this.dados_usecase = dados_usecase;
    }

    listar_dados(req: Request, resp: Response) {

        const dados = this.dados_usecase.recuperaDados();
        return resp.status(200).json(dados)
    }
}

export { Dado_Controller };
