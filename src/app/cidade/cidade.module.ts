import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { CidadeService } from './services/cidade.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    EditarCidadeComponent,
    InserirCidadeComponent,
    ListarCidadeComponent,
    ModalCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
