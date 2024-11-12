import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers:[ApiService]
})
export class FormComponent {
  public access:any
constructor(private ss:ApiService){}
ngOnInit(){
    this.ss.apiCall().subscribe(data=>{
this.access=data;

console.log(data)
    })  
}
  email:string="";
  password:string ="";
  submitForm(){
    alert(`email is ${this.email} and password is ${this.password}`)

   
  }
}
