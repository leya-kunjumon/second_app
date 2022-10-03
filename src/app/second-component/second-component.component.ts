import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor() { }
  @Input() items:{name:string,email:string}={name:'',email:''}
  ngOnInit(): void {
  }

}
