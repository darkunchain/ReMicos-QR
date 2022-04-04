import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../Interfaces/cliente';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  private id$: Subject<String>
  private token$: Subject<String>
  idPromo:String=''

  constructor(private http: HttpClient) {
    this.id$ = new Subject();
    this.token$ = new Subject();
  }

  postPromo(promo:Cliente){
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache');
    let options = { headers: httpHeaders };
    this.http.post<any>('http://back.remicos.com.co:8081/api/addPromo',promo,options).subscribe(data => {
        this.idPromo = data.token;
        this.id$.next(this.idPromo);
      })
  }

  traeId():Observable<String>{
    return this.id$.asObservable();
  }

 }
