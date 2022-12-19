import { ICilindro } from "../domain/Cilindro";

interface IRepository {
    read(): Array<ICilindro>;
}

export { IRepository }