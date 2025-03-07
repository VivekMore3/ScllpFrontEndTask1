import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiUrl = 'http://localhost:8080/users';  // Base URL from RestController

  constructor(private http: HttpClient) { }

  // Fetch all users (Use the correct "/getAll" endpoint)
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAll`);
  }

  // Add a new user (Use the correct "/add" endpoint)
  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, user);
  }


}
