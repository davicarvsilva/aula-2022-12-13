import { Request, Response } from 'express';

import { DadosUseCase } from '../use_cases/dados_usecase'

class Dado_Controller {
    listar_dados(req: Request, resp: Response) {

        const dados_usecase = new DadosUseCase();
        const dados = dados_usecase.recuperaDados();
        return resp.status(200).json(dados)
    }
}

export default new Dado_Controller();