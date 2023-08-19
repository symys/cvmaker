import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css'],
})
export class RegisterpageComponent {
  registerForm: FormGroup;
  title = 'formvalidation';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private registerService: RegisterService
  ) {}

   users: any;

  ngOnInit() {
    // validation rules
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.http.get('http://localhost:3000/users').subscribe(res => {
    this.users=res
  })
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    } 
    else 
    {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;

      const emailExists = this.users.map((user: any) => user.email).includes(email);

      if(emailExists){
        alert("Bu mail adresiyle daha önce kayıt yapılmış")
      }
      else{
        this.registerService.signUp(email, password).subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.error('Error while saving data:', error);
          }
        );
  
        // this.router.navigate(['/login']);
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      }

      // console.log("ben email:" + email)
      // console.log("ben sifre:" + password)

      
    }
  }
}
