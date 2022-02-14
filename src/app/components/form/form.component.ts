import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/Interfaces/cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  checkoutForm

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      correo: '',
      telefono: '',
      codigo:'',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData:Cliente) {
    // Process checkout data here
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerData);
  }

}
