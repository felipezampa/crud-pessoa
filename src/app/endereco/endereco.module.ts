import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EnderecoService } from './services/endereco.service';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { SharedModule } from '../shared';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component'
import { NgSelectModule } from '@ng-select/ng-select';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarEnderecoComponent,
    EditarEnderecoComponent,
    InserirEnderecoComponent,
    ModalEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule,
    NgSelectModule
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
