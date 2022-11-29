import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CidadeService } from 'src/app/cidade/services/cidade.service';
import { Cidade } from 'src/app/shared';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrls: ['./inserir-endereco.component.css']
})

export class InserirEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco;
  cidades: Cidade[] = [];

  constructor(
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.endereco = new Endereco();
    this.cidades = this.cidadeService.listarTodos();
  }

  inserir(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.inserir(this.endereco);
      this.router.navigate(["/enderecos"]);
    }
  }
}
