import { IDados } from "../domain/Dados";
import { IRepository } from "./IRepository";

class DadosRepository implements IRepository {
    read() : Array<IDados> {
        const lista = new Array<IDados>();
        return lista;
    }
}

export { DadosRepository }