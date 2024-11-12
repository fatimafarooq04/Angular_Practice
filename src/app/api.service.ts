import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiGet:HttpClient) { }

  apiCall(){
    return this.apiGet.get("https://api.escuelajs.co/api/v1/categories")
  }
}
