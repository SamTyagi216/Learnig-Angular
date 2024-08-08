import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NaziaComponent } from './nazia/nazia.component';
import { NaziaRoutingModule } from './nazia/nazia-routing.module';

@NgModule({
  declarations: [NaziaComponent],
  imports: [
    CommonModule,
    NaziaRoutingModule
  ],
  exports: [NaziaComponent]
})
export class NaziaModule { }
