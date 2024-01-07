import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:8080/User';
  constructor(private http: HttpClient) {}

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/allUsers');
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url + '/', user);
  }
}
