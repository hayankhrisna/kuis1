import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewUser = false;
  UserCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  UserName: string = '';

  constructor() {
    setTimeout(()=> {
      this.allowNewUser = true;
    }, 2000)
  }
    
  ngOnInit() {
  }
  onCreationStatus() {
    this.UserCreationStatus = 'UserName telah dibuat!';
  }

  onUpdateServerName(event: Event) {
    this.UserName = (<HTMLInputElement>event.target).value;
  }
  onReset(){
    this.UserName='';
  }

}
