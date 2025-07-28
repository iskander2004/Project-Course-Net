import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from '../model/user.model';
import { signup } from '../model/user.model';
import { formations } from '../model/formation.model';
@Injectable({
  providedIn: 'root'
})
export class AuthServ {
  private apiUrl = 'http://localhost/api2'
  constructor(
    private http:HttpClient
  ){}
  login(data:login):Observable<any>{
    return this.http.post<login>(`${this.apiUrl}/login.php`,data)
  }
  signup(data:signup):Observable<any>{
    return this.http.post<signup>(`${this.apiUrl}/signup.php`,data)
  }
  ajformation(data:formations): Observable<any> {
    return this.http.post<formations>(`${this.apiUrl}/add-formation.php`, data);
  }
}
