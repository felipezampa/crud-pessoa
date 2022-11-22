import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Diretivas
import { NumericoDirective, MinimoValidatorDirective } from './directives';
// Pipes
import { MeuPipePipe } from './pipes';


@NgModule({
  declarations: [
    NumericoDirective,
    MinimoValidatorDirective,
    MeuPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumericoDirective,
    MinimoValidatorDirective,
    MeuPipePipe
  ]
})
export class SharedModule { }
