import { ICilindro, Cilindro } from '../domain/Cilindro'
import { IRepository } from '../repository/IRepository';
import { IUseCase } from './IUseCase';

class CilindroUseCase implements IUseCase {
    repo: IRepository;
    cilindro: Cilindro;

    constructor(repo: IRepository) {
        this.repo = repo;
    }

    recuperarCilindro(): ICilindro {
        const cilindro = new Cilindro(
                        4.54, 
                        'Cilindro de CO² 4KG', 
                        new Date(),
                        new Date("05/08/2016"),
                        "Campos Fire",
                        "Campos Fire",
                        "Azul",
                        "Cilindro azul com fundo enferrujado");

        return cilindro;
    }

    verificaNecessidadeNovaAvaliacao(): string {
        const data_atual = new Date('12/19/2022');
        const diferenca = data_atual.getTime() - this.cilindro.ultima_avaliacao.getTime();

        var diferenca_em_dias = diferenca / (1000 * 3600 * 24); 
        
        if(diferenca_em_dias > 30){
            return "É necessária nova avaliação neste cilindro";
        }
        else{
            return "Não é necessária nova avaliação neste cilindro";
        }
    }
}

export { CilindroUseCase }