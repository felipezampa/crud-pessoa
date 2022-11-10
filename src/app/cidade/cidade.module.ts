import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { CidadeService } from './services/cidade.service';



@NgModule({
  declarations: [
    EditarCidadeComponent,
    InserirCidadeComponent,
    ListarCidadeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
