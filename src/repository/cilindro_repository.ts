import { ICilindro } from "../domain/Cilindro";
import { IRepository } from "./IRepository";

class CilindroRepository implements IRepository {
    read() : Array<ICilindro> {
        const lista = new Array<ICilindro>();
        return lista;
    }
}

export { CilindroRepository }