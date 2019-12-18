import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  '../../assets/css/animate.css',
  '../../assets/css/bootstrap.css',
  '../../assets/css/style.css',
  '../../assets/css/si-style.css']
})
export class HomeComponent implements OnInit {
  pathImages:string ='assets/images/'
  pathCSS:string ='assets/css/'
  pathJS:string ='assets/js/'
  pathRaiz:string ='assets'

  constructor() { }

  ngOnInit() {
  }

}
