import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService{
  constructor(private _http: HttpClient){}
  getUsers(): Observable<[]>{
    return this._http.get<[]>('https://jsonplaceholder.typicode.com/users');
  }
}
