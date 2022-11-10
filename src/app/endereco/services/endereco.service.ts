import { Injectable } from '@angular/core';
import { Endereco } from 'src/app/shared/models/endereco.model';

const LS_CHAVE: string = "enderecos";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  listarTodos(): Endereco[] {
    const endereco = localStorage[LS_CHAVE];
    return endereco ? JSON.parse(endereco) : [];
  }

  buscarPorId(id: number): Endereco | undefined {
    const listaEnderecos: Endereco[] = this.listarTodos();

    return listaEnderecos.find(endereco => endereco.id === id);
  }

  inserir(endereco: Endereco): void {
    const listaEnderecos = this.listarTodos();

    endereco.id = new Date().getTime();
    listaEnderecos.push(endereco);

    localStorage[LS_CHAVE] = JSON.stringify(listaEnderecos);
  }

  atualizar(endereco: Endereco): void {
    const listaEnderecos: Endereco[] = this.listarTodos();

    listaEnderecos.forEach(
      (obj, index, objs) => {
        if (endereco.id === obj.id) {
          objs[index] = endereco;
        }
      }
    );

    localStorage[LS_CHAVE] = JSON.stringify(listaEnderecos);
  }

  remover(id: number): void{
    let listaEnderecos: Endereco[] = this.listarTodos();

    listaEnderecos = listaEnderecos.filter(endereco => endereco.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(listaEnderecos);
  }

}
