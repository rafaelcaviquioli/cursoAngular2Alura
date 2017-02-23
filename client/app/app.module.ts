import 'rxjs/add/operator/map';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';

import { PainelComponent } from './painel/painel.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FotoModule, HttpModule, routing, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, CadastroComponent, ListagemComponent, PainelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }