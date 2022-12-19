import { Request, Response } from 'express';

import { IUseCase } from '../use_cases/IUseCase';

class Cilindro_Controller {
    cilindro_usecase: IUseCase;

    constructor(cilindro_usecase: IUseCase) {
        console.log(typeof cilindro_usecase)
        console.log(cilindro_usecase)
        
        this.cilindro_usecase = cilindro_usecase;
    }

    listar_cilindro(req: Request, resp: Response) {
        const cilindro = this.cilindro_usecase.recuperarCilindro();
        return resp.status(200).json(cilindro)
    }
}

export { Cilindro_Controller };
