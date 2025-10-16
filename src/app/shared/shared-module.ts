import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonComponent } from './components/select-button/select-button.component';
import { ChipComponent } from './components/chip/chip.component';
import { CardComponent } from './components/card/card.component';
import {
  register as registerSwiperElement
} from 'swiper/element/bundle';
import { TabComponent } from './components/tab/tab.component';
import { SheetModalComponent } from './components/sheet-modal/sheet-modal.component';
registerSwiperElement();

const  modules = [IonicModule, RouterModule, ReactiveFormsModule, FormsModule];
const components = [ButtonComponent, InputComponent, SelectButtonComponent,
   ChipComponent, CardComponent, TabComponent, SheetModalComponent];
@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [components],
  imports: [
    CommonModule, modules
  ],
  exports: [modules, components]
})
export class SharedModule { }
