import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }
  @Input() items:{id:string,name:string}={id:'',name:''}
  ngOnInit(): void {
  }

}
