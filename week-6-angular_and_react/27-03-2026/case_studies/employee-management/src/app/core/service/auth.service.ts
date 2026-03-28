import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  // login(username: string, password: string){
  //   if(username === 'admin' && password === 'admin'){
  //     this.isLoggedIn = true;
  //     localStorage.setItem('token', 'dummy token');
  //     return true;
  //   }
  // }


  login(username: string, password: string): boolean {
  if (username === 'admin' && password === 'admin') {
    this.isLoggedIn = true;
    localStorage.setItem('token', 'dummy token');
    return true;
  }
  return false;   // ✅ FIX: always return something
}

  logout()
  {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean{
    return !!localStorage.getItem('token');
  }

  
}
