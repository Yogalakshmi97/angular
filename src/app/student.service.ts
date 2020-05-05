import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Istudent } from './istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private https:HttpClient) { }
  public getme():Observable<Istudent[]>
  {
    return this.https.get<Istudent[]>('http://localhost:3000/student');
  }
}
