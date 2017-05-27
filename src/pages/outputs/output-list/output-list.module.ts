import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutputListPage } from './output-list';

@NgModule({
  declarations: [
    OutputListPage,
  ],
  imports: [
    IonicPageModule.forChild(OutputListPage),
  ],
  exports: [
    OutputListPage
  ]
})
export class OutputListPageModule {}
