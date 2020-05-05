import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  results='';
  response:any;
  constructor(private http:HttpClient,public service:StudentService) { 
    this.response=this.service.getme()
  }
  ngOnInit(): void {
  }



  
  //for getting data
  getme(){
    this.http.get(`http://localhost:3000/student`).toPromise() // for the promise way
    .then((students) =>{
    
    console.log(students);
    });
  }
  //for posting data
  postme()
  {
    const reqt =this.http.post(`http://localhost:3000/student`,
{
  "StudentID":"444",
  "StudentName":"Selvamani",
  "StudentGrade":"D",
  "Course":"Mech",
  "Address":"No:25,Dory St.,nemocity",
  "PhoneNo":"9835271682"
})
.subscribe(
  customers => {
    console.log(customers);
  },
);
  }
//for put
putme()
  {
    const reqt =this.http.put(`http://localhost:3000/student/111`,
    {
      "StudentID":"111",
      "StudentName":"Yogalakshmi",
      "StudentGrade":"A",
      "Course":"Information Technology",
      "Address":"No:27,Hellokitty St.,Pinkcity",
      "PhoneNo":"9835271682"
    })
    .subscribe(
      students => {
        console.log(students);
      },
    );
  }
  //for deleting the data
  deleteme()
  {
    const reqt =this.http.delete(`http://localhost:3000/student/444`)
    .subscribe(
      students => {
        console.log(students);
      },
      
    );
 }
}
