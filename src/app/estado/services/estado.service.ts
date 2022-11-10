import { Injectable } from '@angular/core';
import { Estado } from 'src/app/shared/models/estado.model';

const LS_CHAVE: string = "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  listarTodos(): Estado[] {
    const estado = localStorage[LS_CHAVE];
    return estado ? JSON.parse(estado) : [];
  }

  buscarPorId(id: number): Estado | undefined {
    const listaEstados: Estado[] = this.listarTodos();

    return listaEstados.find(estado => estado.id === id);
  }

  inserir(estado: Estado): void {
    const listaEstados = this.listarTodos();

    estado.id = new Date().getTime();
    listaEstados.push(estado);

    localStorage[LS_CHAVE] = JSON.stringify(listaEstados);
  }

  atualizar(estado: Estado): void {
    const listaEstados: Estado[] = this.listarTodos();

    listaEstados.forEach(
      (obj, index, objs) => {
        if (estado.id === obj.id) {
          objs[index] = estado;
        }
      }
    );

    localStorage[LS_CHAVE] = JSON.stringify(listaEstados);
  }

  remover(id: number): void {
    let listaEstados: Estado[] = this.listarTodos();

    listaEstados = listaEstados.filter(estado => estado.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(listaEstados);
  }

}
