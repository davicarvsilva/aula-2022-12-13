import { IDados, Dados } from '../domain/Dados'
import { IRepository } from '../repository/IRepository';
import { IUseCase } from './IUseCase';

class DadosUseCase implements IUseCase {
    repo: IRepository;
    dados: Dados;

    constructor(repo: IRepository) {
        this.repo = repo;
    }

    recuperaDados(): IDados {
        const dados = new Dados('Oi');
        return dados;
    }
}

export { DadosUseCase }