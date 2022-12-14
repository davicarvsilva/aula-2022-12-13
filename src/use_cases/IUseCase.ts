import { IDados } from "../domain/Dados"

interface IUseCase {
    recuperaDados(): IDados;
}

export { IUseCase }