import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltrorPorTitulo } from './foto.pipes';

@NgModule({
    declarations : [FotoComponent, FiltrorPorTitulo],
    exports : [FotoComponent, FiltrorPorTitulo]
})

export class FotoModule {
    
}