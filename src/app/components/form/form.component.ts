import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Interfaces/cliente';
import { SendDataService } from 'src/app/services/send-data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  datosValidos:boolean = false
  idToken:String = ''
  subscribe1:any
  formulario: FormGroup;
  correo: FormControl = new FormControl;
  telefono: FormControl = new FormControl;
  codigo: FormControl = new FormControl;


  validationMessages = {
    'correo': [
      { type: 'required', message: 'El correo es un campo requerido' },
      { type: 'pattern', message: 'Debe digitar un correo valido' },
    ]}




  constructor(private sendDataService:SendDataService, private router: Router,) {

    this.correo = new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]);
    this.telefono = new FormControl();
    this.codigo = new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]);

    this.formulario = new FormGroup({
      correo: this.correo,
      telefono: this.telefono,
      codigo: this.codigo
    });
  }

  ngOnInit(): void {



  }

  onSubmit(datos:Cliente) {
    if (this.formulario.valid){
      this.sendDataService.postPromo(datos)
      this.subscribe1 = this.sendDataService.traeId().subscribe(data => {
        this.idToken = data
        console.log('data: ', data)
      })

      //this.sendDataService.genQR(this.idToken)
      this.datosValidos=true
      this.router.navigate(['/qrgen'])
    }else{
      console.log('datos no validos')
      this.router.navigate(['/home'])
    }

    this.formulario.reset();
    this.datosValidos=false
  }



  redimir(datos:Cliente) {
    console.log('clase redimir', datos)
  }

  ngOnDestroy(){
    this.subscribe1.unsubscribe()
  }

}
