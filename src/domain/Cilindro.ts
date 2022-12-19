interface ICilindro {
    peso: number;
    label: string;
    validade: Date;
    ultima_avaliacao: Date;
    fabricante: string;
    fornecedor: string;
    cor: string;
    descricao: string;

    verificaNecessidadeNovaAvaliacao(): string;
}

class Cilindro implements ICilindro {
    peso: number;
    label: string;
    validade: Date;
    ultima_avaliacao: Date;
    fabricante: string;
    fornecedor: string;
    cor: string;
    descricao: string;


    constructor(peso: number,
                label: string,
                validade: Date,
                ultima_avaliacao: Date,
                fabricante: string,
                fornecedor: string,
                cor: string,
                descricao: string) {

        this.peso = peso;
        this.label = label;
        this.validade = validade;
        this.ultima_avaliacao = ultima_avaliacao;
        this.fabricante = fabricante;
        this.fornecedor = fornecedor;
        this.cor = cor;
        this.descricao = descricao;
    }

    verificaNecessidadeNovaAvaliacao(): string {
        const data_atual = new Date('12/19/2022');
        const diferenca = data_atual.getTime() - this.ultima_avaliacao.getTime();

        var diferenca_em_dias = diferenca / (1000 * 3600 * 24); 
        
        if(diferenca_em_dias > 30){
            return "É necessária nova avaliação neste cilindro";
        }
        else{
            return "Não é necessária nova avaliação neste cilindro";
        }
    }
}

export { ICilindro, Cilindro }