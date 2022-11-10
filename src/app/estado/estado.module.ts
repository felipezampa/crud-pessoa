import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { EstadoService } from './services/estado.service';



@NgModule({
  declarations: [
    InserirEstadoComponent,
    ListarEstadoComponent,
    EditarEstadoComponent
  ],
  imports: [
    CommonModule
  ],  
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
