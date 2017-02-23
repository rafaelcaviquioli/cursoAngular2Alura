import {Pipe, PipeTransform} from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name : 'filtrorPorTitulo'
})
export class FiltrorPorTitulo implements PipeTransform {
    transform(fotos : FotoComponent[], digitado : string) : FotoComponent[] {
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase()));
    }
}