import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/admin';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  createAccount(accountNumber: number, description: string, balance: number, userId: number): Observable<any> {
    return this.http.post(
      AUTH_API + '/createAccount',
      {
        accountNumber,
        description,
        balance,
        userId
      },
      httpOptions
    );
  }
  createTransaction(amount: number, description: string, transtype: boolean, accountNumber: number): Observable<any> {
    if (transtype = true)
      amount = -Math.abs(amount)
    else
      amount = Math.abs(amount)

    return this.http.post(
      AUTH_API + '/createTransaction',
      {
        amount,
        description,
        accountNumber
      },
      httpOptions
    );
  }

}
