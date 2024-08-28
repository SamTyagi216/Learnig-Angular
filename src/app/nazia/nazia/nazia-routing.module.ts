import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaziaComponent } from './nazia.component';

const routes: Routes = [
    { path: 'nazia', component: NaziaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NaziaRoutingModule { }
