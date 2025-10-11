import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register5PageRoutingModule } from './register5-routing.module';

import { Register5Page } from './register5.page';
import { SharedModule } from "src/app/shared/shared-module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register5PageRoutingModule,
    SharedModule
],
  declarations: [Register5Page]
})
export class Register5PageModule {}
