import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-redimir',
  templateUrl: './redimir.component.html',
  styleUrls: ['./redimir.component.css']
})
export class RedimirComponent implements OnInit {

  id:String = ''

  constructor(private readonly router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params:Params) => {
      this.id = params['id']
    })
  }


}
