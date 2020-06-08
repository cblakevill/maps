import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MapService } from 'src/app/map/service/map.service';
import { ChatService } from '../service/chat.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {

  public text: string = "";

  constructor( public chatService: ChatService,
    private mapService: MapService ) { }

  ngOnInit(): void {
    this.chatService.newReply.subscribe(() => {
      this.scrollDown();
    })
  }

  ngAfterViewInit(): void {
    this.scrollDown();
  }

  submit() {
    if(this.text !== "") {
      this.chatService.sendMessage(this.text.trim());
      this.text = "";    
      this.scrollDown();
    }
  }

  async scrollDown() {
    await new Promise(resolve => setTimeout(resolve, 50));
    var view =  document.getElementById('output');
    view.scrollTop = view.scrollHeight;
  }

  locationIncluded(text): boolean {
    if(this.mapService.markers[text])
      return true;

    var regex = /-?([0-9.]+)([SsNn]),?\s*-?([0-9.]+)([WwEe])/g
    var match = regex.exec(text)
    if(match) {
      var ns = match[2];
      var ew = match[4];
      var lat = Number(match[1]);
      var lon = Number(match[3]);

      lat = 'Ss'.includes(ns) ? -lat : lat;
      lon = 'Ww'.includes(ew) ? -lon : lon;
      this.mapService.addMarker([lon, lat], text, "q");
      return true;
    }
    
    return false;
  }

  panTo(text) {
    this.mapService.panTo(this.mapService.markers[text].coord); 
  }
  
}
