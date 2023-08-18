import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  registerForm: FormGroup; 
  title='formvalidation';
  submitted=false;
  
  constructor(private formBuilder:FormBuilder, private router: Router){}

  ngOnInit(){
    // validation rules
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(){
    this.submitted = true

    if(this.registerForm.invalid){
      return
    }
    else{this.router.navigate(['/profile']); }
  }
}
