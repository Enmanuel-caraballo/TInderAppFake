import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonComponent } from './components/select-button/select-button.component';
import { ChipComponent } from './components/chip/chip.component';
import { CardComponent } from './components/card/card.component';

const  modules = [IonicModule, RouterModule, ReactiveFormsModule, FormsModule];
const components = [ButtonComponent, InputComponent, SelectButtonComponent, ChipComponent, CardComponent];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule, modules
  ],
  exports: [modules, components]
})
export class SharedModule { }
