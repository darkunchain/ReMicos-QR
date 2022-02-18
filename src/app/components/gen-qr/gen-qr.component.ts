import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendDataService } from 'src/app/services/send-data.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-gen-qr',
  templateUrl: './gen-qr.component.html',
  styleUrls: ['./gen-qr.component.css']
})
export class GenQRComponent implements OnInit, OnDestroy{

  subscriber1:any
  valor:String =''
  title = '';
  elementType = '';
  value = '';
  idToken:String =''
  ImgRemicos="./assets/img/logo-cubos.svg"
  ImgCaprichos="./assets/img/caprichos.svg"

  constructor(
    private sendDataService:SendDataService,
    private readonly router:Router,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.subscriber1 = this.sendDataService.traeId().subscribe(data => {
      this.idToken = data;
      this.valor = 'http://app.remicos.com.co:8081/api/promos/' + data;
      console.log('token en QR: ', data, 'valor: ', this.valor)
    })

  }

  goToRedimir(){
    this.document.location.href = 'http://app.remicos.com.co:8081/api/promos/' + this.idToken;
  }

  ngOnDestroy(){
    this.subscriber1.unsubscribe()
  }

}
