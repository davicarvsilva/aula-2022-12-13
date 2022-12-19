import { ICilindro } from "../domain/Cilindro"

interface IUseCase {
    recuperarCilindro(): ICilindro;
    verificaNecessidadeNovaAvaliacao(): string;
}

export { IUseCase }