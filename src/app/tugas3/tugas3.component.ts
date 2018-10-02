import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  //styleUrls: ['./tugas3.component.css']
  styles:[`
  .next{
    color:white;
  }
  `]
})
export class Tugas3Component implements OnInit {
  allowNewServer= false;
  serverCreationStatus= 'Tidak ada server baru yang telah dibuat';
 // serverName= 'TestServer';
  serverCreated= false;
  servers = ['TestServer', 'TestServer2'];
  i= 1;
  log =[];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onCreationStatus(){
    this.serverCreated= true;
    this.log.push(this.i);
    this.i++;
  }
  onUpdateServerName(event: Event){
    this.serverName= (<HTMLInputElement>event.target).value;
  }

}
