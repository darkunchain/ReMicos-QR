import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    this.http.post<any>('http://app.remicos.com.co:8081/api/addPromo',promo).subscribe(data => {
        this.idPromo = data.token;
        this.id$.next(this.idPromo);
        console.log('this.idPromo: ',typeof this.idPromo)
      })
  }

  traeId():Observable<String>{
    return this.id$.asObservable();
  }

 }
