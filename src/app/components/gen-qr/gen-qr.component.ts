import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-qr',
  templateUrl: './gen-qr.component.html',
  styleUrls: ['./gen-qr.component.css']
})
export class GenQRComponent implements OnInit {

  title = 'app';
  elementType = 'url';
  value = 'Techiediaries';

  constructor() { }

  ngOnInit(): void {
  }

}
