import { Cilindro_Controller } from "../controller/cilindro_Controller";
import { CilindroRepository } from "../repository/cilindro_repository";
import { CilindroUseCase } from "../use_cases/cilindros_usecase";


function criaRepositoryFactory() {
    const repo = new CilindroRepository();
    return repo;
}

function criaUseCaseFactory() {
    const repo = criaRepositoryFactory();
    const useCase = new CilindroUseCase(repo);
    return useCase;
}

function criaControllerFactory() {
    const usecase = criaUseCaseFactory();
    const controller = new Cilindro_Controller(usecase);
    return controller;
}

export { criaRepositoryFactory, criaUseCaseFactory , criaControllerFactory }