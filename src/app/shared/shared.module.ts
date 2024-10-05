import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/button/button.component';

const COMPONENTS = [
  InputComponent,
  ButtonComponent,
];

const MODULES = [
  CommonModule,
FormsModule,
IonicModule,
ReactiveFormsModule,

]

@NgModule({
  declarations: [... COMPONENTS],
  imports: [
    ...MODULES
  ],
  exports: [... COMPONENTS, ...MODULES],
})
export class SharedModule { }
