import { Component, OnDestroy, OnInit } from '@angular/core';
import { SendDataService } from 'src/app/services/send-data.service';


@Component({
  selector: 'app-gen-qr',
  templateUrl: './gen-qr.component.html',
  styleUrls: ['./gen-qr.component.css']
})
export class GenQRComponent implements OnInit, OnDestroy{

  subscriber1:any
  valor:String =''
  title = 'app';
  elementType = 'url';
  value = 'Techiediaries';
  idToken:String =''

  constructor(private sendDataService:SendDataService) { }

  ngOnInit(): void {
    this.subscriber1 = this.sendDataService.traeId().subscribe(data => {
      this.idToken = data;
      this.valor = 'http://app.remicos.com.co:8081/api/promos/' + data;
      console.log('token en QR: ', data, 'valor: ', this.valor)
    })
  }

  ngOnDestroy(){
    this.subscriber1.unsubscribe()
  }

}
