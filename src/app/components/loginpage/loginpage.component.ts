import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  registerForm: FormGroup;
  title = 'formvalidation';
  submitted = false;

  users: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // validation rules
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.http.get('http://localhost:3000/users').subscribe((res) => {
      this.users = res;
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    } else {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;

      const user = this.users.find((u: any) => u.email === email && u.password === password);

      if(user){
        this.router.navigate(['/profile']);
      }
      else{
        alert("email veya şifrenizi kontrol ederek tekrar deneyin lütfen")
      }

      
    }
  }
}
