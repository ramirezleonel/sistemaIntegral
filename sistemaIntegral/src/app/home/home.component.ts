import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pathImages:string ='assets/images/'
  pathCSS:string ='assets/css/'
  pathJS:string ='assets/js/'
  pathRaiz:string ='assets/'

  constructor() { }

  ngOnInit() {
  }

}
