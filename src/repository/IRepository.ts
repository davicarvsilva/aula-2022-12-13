import { IDados } from "../domain/Dados";

interface IRepository {
    read(): Array<IDados>;
}

export { IRepository }