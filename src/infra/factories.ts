import { Dado_Controller } from "../controller/dado_Controller";
import { DadosRepository } from "../repository/dados_repository";
import { DadosUseCase } from "../use_cases/dados_usecase";


function criaRepositoryFactory() {
    const repo = new DadosRepository();
    return repo;
}


function criaUseCaseFactory() {
    const repo = criaRepositoryFactory();
    const useCase = new DadosUseCase(repo);
    return useCase;
}

function criaControllerFactory() {
    const usecase = criaUseCaseFactory();
    const controller = new Dado_Controller(usecase);
    return controller;
}

export { criaRepositoryFactory, criaUseCaseFactory , criaControllerFactory }