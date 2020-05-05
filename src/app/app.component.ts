import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Istudent } from './istudent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assangu';
  results='';
  constructor(private http:HttpClient){
  }
  ngOnInit():void{
    
  }
}
