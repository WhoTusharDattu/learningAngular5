import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: './servers.component.html',
  templateUrl: './servers.component.html',

  styleUrls: ['./servers.component.css'],
  styles:[`
  .white-text={
    color:white
  }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = 'Test Server';
  username = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer1'];
  data = [];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.data.push(new Date());
    this.serverCreationStatus='server was created! Name is: ' + this.serverName;
  }
  onUpdateServerName(event : any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onClearInput(){
    this.username = '';
  }

}
