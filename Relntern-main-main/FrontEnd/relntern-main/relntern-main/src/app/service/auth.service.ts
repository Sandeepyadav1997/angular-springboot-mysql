import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url = "http://localhost:8081/user"

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('role');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }


  getAll() {
    return this.http.get('http://localhost:3000/interns');
  }
  postUserData(userJson: any) {
    return this.http.post<User>(this.base_url + "/validates", userJson);
  }
  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.base_url}`);
  }
  postregisterIntern(registerData: any) {
    return this.http.post(this.base_url + "/signupIntern", registerData);
  }

  postregisterMentor(registerData: any) {
    return this.http.post(this.base_url + "/signupMentor", registerData);
  }
  postregisterAdmin(registerData: any) {
    return this.http.post(this.base_url + "/signupAdmin", registerData);
  }
  requestOtp(userJson: any): Observable<any> {
    return this.http.post<any>(`${this.base_url}/request-otp`, userJson);
  }
  verifyOtp(otpData: any): Observable<any> {
    return this.http.post<any>(`${this.base_url}/verify-otp`, otpData);
  }
}
