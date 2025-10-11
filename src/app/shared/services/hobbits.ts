import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Hobbits {
  constructor(private readonly http: HttpClient){}

  getHobbits(): Observable<any>{
    return this.http.get('../assets/config/hobbits.json');
  }
}
