import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegundaPage } from './segunda';

@NgModule({
  declarations: [
    SegundaPage,
  ],
  imports: [
    IonicPageModule.forChild(SegundaPage),
  ],
})
export class SegundaPageModule {}
