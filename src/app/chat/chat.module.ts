import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './service/chat.service';
import { ChatComponent } from './component/chat.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'
import { MapModule } from '../map/map.module';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    MapModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule 
  ],
  exports: [
    ChatComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
