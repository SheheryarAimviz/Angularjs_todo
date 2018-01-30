import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http , Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
     this.dataDisplay();
     // this.httpClient.post('https://jsonplaceholder.typicode.com/posts', {
     //    title: 'foo',
     //    body: 'bar',
     //    userId: 1
     //  }).subscribe(
     //      res => {
     //        console.log(res);
     //      },
     //      err => {
     //        console.log("Error occured");
     //      }
     //  );

  }

  name:string = '';
  age:number;
  myarrayName = [];

  insert()
  {
    this.httpClient.get('http://localhost/angularjs/todoapi/create_form.php?name='+this.name+'&age='+this.age)
    .subscribe(
      (data:any[])=>{
        console.log(this.name);
        // if(data == "Sucess"){
            this.dataDisplay();
        // }
      }
    )
  }

  delete(event)
  {
    this.httpClient.get('http://localhost/angularjs/todoapi/delete.php?id='+event)
    .subscribe(
      (data:any[])=>{
        // if(data == "Sucess"){
          this.dataDisplay();
        // }
      }
    )
  }

  dataDisplay()
  {
    this.httpClient.get('http://128.10.1.189/angularjs/todoapi/data_retrive.php')
    .subscribe(
      (data:any[])=>{
        this.myarrayName = data;
      }
    )
  }
}
