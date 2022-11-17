import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/shared/models/estado.model';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {
  @ViewChild("formEstado") formEstado!: NgForm;
  estado!: Estado;
  constructor(private estadoService: EstadoService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.estadoService.buscarPorId(id);
    if (res !== undefined) {
      this.estado = res;
    } else {
      throw new Error("Estado não encontrado: id = " + id);
    }
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formEstado.form.valid) {
      // Efetivamente atualiza a pessoa
      this.estadoService.atualizar(this.estado);
      // Redireciona para /pessoas/listar
      this.router.navigate(['/estados']);
    }
  }

}
