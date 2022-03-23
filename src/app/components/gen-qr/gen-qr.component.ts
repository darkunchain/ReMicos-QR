import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
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
  centerImage:String = ''

  constructor(
    private sendDataService:SendDataService,
    private readonly router:Router,
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.subscriber1 = this.sendDataService.traeId().subscribe(data => {
      this.idToken = data;
      this.centerImage = this.ImgCaprichos
      this.valor = 'http://back.remicos.com.co:8081/api/promos/' + data;
      //this.valor = 'http://app.remicos.com.co:84/';
      console.log('token en QR: ', data, 'valor: ', this.valor)
    })

    const btnElement = (<HTMLElement>this.el.nativeElement)
      .querySelector('.canvasqr');


    const elcanvas = (<HTMLElement>this.el.nativeElement)
    .querySelector('qr-code')?.getAttributeNames
      console.log('btnElement: ',btnElement, 'elcanvas: ', elcanvas)




  }

  goToRedimir(){
    this.document.location.href = 'http://back.remicos.com.co:8081/api/promos/' + this.idToken;
  }

  ngOnDestroy(){
    this.subscriber1.unsubscribe()
  }

}
