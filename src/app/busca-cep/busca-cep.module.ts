import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BuscaCepPageRoutingModule } from './busca-cep-routing.module';

import { BuscaCepPage } from './busca-cep.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BuscaCepPageRoutingModule
  ],
  declarations: [BuscaCepPage]
})
export class BuscaCepPageModule {}
