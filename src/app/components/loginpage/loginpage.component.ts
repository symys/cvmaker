import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import * as alertifyjs from 'alertifyjs';

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
  wrongPasswordHolder : number = 1;
  disableLoginButton: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
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
        // console.log(user.id)
        this.disableLoginButton = false;

        this.authService.login(user.id);
        this.router.navigate(['/profile']);
        alertifyjs.success('Giriş Başarılı!');
      }
      else{
        if(this.wrongPasswordHolder < 3){
          if(this.wrongPasswordHolder === 2){
            alert("2 kez hatalı giriş denemesi! 3. kez hatalı giriş olduğunda 10 dakika bekletilirsiniz.")
          }else{
            alert("email veya şifrenizi kontrol ederek tekrar deneyin lütfen")
          }
          this.wrongPasswordHolder += 1;
          
        }else if(this.wrongPasswordHolder === 3){
          this.wrongPasswordHolder = 0;
          this.disableLoginButton = true;
          alert("3 kez hatalı giriş yapıldı. 10 dakika bekletileceksiniz.")
          setTimeout(() => {this.disableLoginButton = false;}, 100000)
        }
      }

      
    }
  }
}
