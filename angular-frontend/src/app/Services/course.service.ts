import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8081/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  get(id:any ): Observable<any> {
    return this.http.get(`${baseUrl +'/get/'+ id}`);
  }
  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id:any, data:any): Observable<any> {
    return this.http.put(`${baseUrl +'/update/'+ id}`, data);
  }
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl +'/delete/'+ id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  
}
