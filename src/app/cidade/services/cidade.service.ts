import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/shared/models/cidade.model';

const LS_CHAVE: string = "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

  listarTodos(): Cidade[] {
    const cidade = localStorage[LS_CHAVE];
    return cidade ? JSON.parse(cidade) : [];
  }

  buscarPorId(id: number): Cidade | undefined {
    const listaCidades: Cidade[] = this.listarTodos();

    return listaCidades.find(cidade => cidade.id === id);
  }

  inserir(cidade: Cidade): void {
    const listaCidades = this.listarTodos();

    cidade.id = new Date().getTime();
    listaCidades.push(cidade);

    localStorage[LS_CHAVE] = JSON.stringify(listaCidades);
  }

  atualizar(cidade: Cidade): void {
    const listaCidades: Cidade[] = this.listarTodos();

    listaCidades.forEach(
      (obj, index, objs) => {
        if (cidade.id === obj.id) {
          objs[index] = cidade;
        }
      }
    );

    localStorage[LS_CHAVE] = JSON.stringify(listaCidades);
  }

  remover(id: number): void {
    let listaCidades: Cidade[] = this.listarTodos();

    listaCidades = listaCidades.filter(cidade => cidade.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(listaCidades);
  }

}
