import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from './policy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = 'http://localhost/backend';
  read = 'http://localhost/backend/api/read.php';
  write = 'http://localhost/backend/api/create.php';
  update = 'http://localhost/backend/api/update.php';
  delete = 'http://localhost/backend/api/delete.php';

  constructor(private httpClient: HttpClient) { }
  readPolicies(): Observable<Policy[]> {
    return this.httpClient.get<Policy[]>(`${this.read}`);
  }
  createPolicy(policy: Policy): Observable<Policy> {
    return this.httpClient.post<Policy>(`${this.write}`, policy);
  }
  updatePolicy(policy: Policy) {
    return this.httpClient.put<Policy>(`${this.update}`, policy);
  }
  deletePolicy(id: number) {
    return this.httpClient.delete<Policy>(`${this.delete}?id=${id}`);
  }
}