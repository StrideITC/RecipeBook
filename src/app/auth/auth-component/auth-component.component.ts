import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  isLogginMode = true;
  constructor() { }

  onSwitchMode()
  {
    this.isLogginMode = !this.isLogginMode;
  }
  ngOnInit() {
  }

}
