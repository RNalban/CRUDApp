import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from './policy';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http:localhost/backend/";
  constructor(private httpClient: HttpClient) { }
  readPolicies(): Observable<Policy[]>{
     return this.httpClient.get<Policy[]>(`http://localhost/backend/api/read.php/`);
     }
     createPolicy(policy: Policy): Observable<Policy>{
       return this.httpClient.post<Policy>(`http://localhost/backend/api/create.php`, policy);
       }
       updatePolicy(policy: Policy){
         return this.httpClient.put<Policy>(`http://localhost/backend/api/update.php`, policy);
         }
         deletePolicy(id: number){
           return this.httpClient.delete<Policy>(`http://localhost/backend/api/delete.php/?id=${id}`);
           }

}
