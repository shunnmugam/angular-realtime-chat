import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SearchPipe } from './search.pipe';
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],exports: [
    MainComponent
  ],
  declarations: [MainComponent,SearchPipe]
})
export class ChatModule { }
