import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/services/estado.service';
import { Estado } from 'src/app/shared';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})

export class EditarCidadeComponent implements OnInit {
  @ViewChild("formCidade") formCidade!: NgForm;
  cidade!: Cidade;
  estados: Estado[] = [];

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos();
    let id = +this.route.snapshot.params['id'];
    const res = this.cidadeService.buscarPorId(id);
    if (res !== undefined) {
      this.cidade = res;
    } else {
      throw new Error("Cidade não encontrada: id = " + id);
    }
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formCidade.form.valid) {
      // Efetivamente atualiza a cidade
      this.cidadeService.atualizar(this.cidade);
      // Redireciona para /cidades/listar
      this.router.navigate(['/cidades']);
    }
  }
}