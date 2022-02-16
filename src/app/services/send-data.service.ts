import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Interfaces/cliente';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  idPromo:String=''

  constructor(private http: HttpClient) { }

  postPromo(promo:Cliente){
    this.http.post<any>(
      'http://app.remicos.com.co:3000/api/addPromo',promo).subscribe(data => {
        this.idPromo = data.id;
        console.log('this.idPromo: ',data)
      })
  }
}
