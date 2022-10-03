import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-app';
  carss : any;
  cars = [
    { id: 'a', name: 'Volvo' },
    { id: 'b', name: 'Saab' },
    { id: 'c', name: 'Opel' },
    { id: 'd', name: 'Audi' },
  ];
  users =[
    {name:'leya',email:'leya@gmail.com'},
    {name:'miya',email:'miya@gmail.com'},
    {name:'leka',email:'leka@gmail.com'},
    
  ];


submit(){
  console.log('hloo')
  
};

}
