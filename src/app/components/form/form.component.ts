import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/Interfaces/cliente';
import { SendDataService } from 'src/app/services/send-data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  datosValidos:boolean = false
  formulario: FormGroup;
  correo: FormControl = new FormControl;
  telefono: FormControl = new FormControl;
  codigo: FormControl = new FormControl;


  validationMessages = {
    'correo': [
      { type: 'required', message: 'El correo es un campo requerido' },
      { type: 'pattern', message: 'Debe digitar un correo valido' },
    ]}




  constructor(private sendDataService:SendDataService) {

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
      console.log('this.contactform:',datos)
      console.log('datos validos')
      this.datosValidos=true
    }else{
      console.log('datos no validos')
    }

    this.formulario.reset();
    this.datosValidos=false
  }

  redimir(datos:Cliente) {
    console.log('clase redimir', datos)
  }

}
