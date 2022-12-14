import { Request, Response } from 'express';

import { DadosUseCase } from '../use_cases/dados_usecase'
import { IUseCase } from '../use_cases/IUseCase';

class Dado_Controller {
    dados_usecase: IUseCase;

    constructor(dados_usecase: IUseCase) {
        this.dados_usecase = dados_usecase;
    }
    listar_dados(req: Request, resp: Response) {

        const dados = this.dados_usecase.recuperaDados();
        return resp.status(200).json(dados)
    }
}

export { Dado_Controller };
