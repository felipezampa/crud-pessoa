import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {
  @ViewChild("formEndereco") formendereco!: NgForm;
  endereco!: Endereco;
  constructor(private enderecoService: EnderecoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.enderecoService.buscarPorId(id);
    if (res !== undefined) {
      this.endereco = res;
    } else {
      throw new Error("endereco não encontrada: id = " + id);
    }
  }

  atualizar(): void {
    // Verifica se o formulário é válido
    if (this.formendereco.form.valid) {
      // Efetivamente atualiza a endereco
      this.enderecoService.atualizar(this.endereco);
      // Redireciona para /enderecos/listar
      this.router.navigate(['/enderecos']);
    }
  }
}
