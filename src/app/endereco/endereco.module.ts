import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EnderecoService } from './services/endereco.service';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';



@NgModule({
  declarations: [
    ListarEnderecoComponent,
    EditarEnderecoComponent,
    InserirEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
