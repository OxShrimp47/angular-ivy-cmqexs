import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataFetchService} from 'src/app/services/data-fetch.service.ts';

@Component({
  selector: 'app-data-fetch',
  templateUrl: './data-fetch.component.html',
  styleUrls: ['./data-fetch.component.css']
})
export class DataFetchComponent implements OnInit{
  constructor(private dataFetchService: DataFetchService){}
    users: [] = [];
    time = new Observable<string>(observer => {
        setInterval(() => observer.next(new Date().toDateString()));
    });
    ngOnInit(): void{
      this.dataFetchService.getUsers().subscribe({
        next: users => {
          this.users = users;
        }
      })
    }
  
}