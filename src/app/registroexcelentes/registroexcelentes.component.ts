import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

@Component({
  selector: 'app-registroexcelentes',
  templateUrl: './registroexcelentes.component.html',
  styleUrls: ['./registroexcelentes.component.css']
})
export class RegistroexcelentesComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;

    perJuridica:boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      primernombre: ['', Validators.required],
      segundonombre: [''],
      primerapellido: ['', [Validators.required]],
      segundoapellido: [''],
      usuario: ['', [Validators.required]],
      correoelectronico: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      fechanacimiento: ['', [Validators.required]],
      recorreoelectronico: ['', [Validators.required]],
      tipodocumento: ['', [Validators.required]],
      numerodocumento: ['', [Validators.required]],
      paisdomicilio: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      numerotelefonico: ['', [Validators.required]],
      tipopersona: ['', [Validators.required]],
      razonsocial: [''],
      nit: [''],
      ultimonumero: [''],
      cb: ['', [Validators.required]],
  },{
      validator: MustMatch('correoelectronico', 'recorreoelectronico')
  });
  
  }

  selectInput(e){
    let selected = e.target.value;
    if(selected == "1"){
        this.perJuridica = false;
    }else if(selected == "2"){
        this.perJuridica = true;
    }else{
        this.perJuridica = false;
    }
}

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    swal.fire(
      'Ser Excelente Ahora',
      'Hemos enviado un correo para confirmar tu cuenta, revisa la bandeja de recibidos.',
      'success'
    )
      
    this.submitted = false;
    this.registerForm.reset();

  }

}
