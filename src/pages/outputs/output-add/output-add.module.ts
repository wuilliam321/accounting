import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutputAddPage } from './output-add';

@NgModule({
  declarations: [
    OutputAddPage,
  ],
  imports: [
    IonicPageModule.forChild(OutputAddPage),
  ],
  exports: [
    OutputAddPage
  ]
})
export class OutputAddPageModule {}
