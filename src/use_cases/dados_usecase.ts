import { IDados } from '../domain/Dados'
import { IUseCase } from './IUseCase';

class DadosUseCase implements IUseCase {
    recuperaDados(): IDados {
        return { msg: 'Oi' }
    }
}

export { DadosUseCase }