import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent {
  constructor(private router: Router, private authService: AuthService){}

 logOut(){
  this.authService.logout();
  this.router.navigate(['/home'])
 }
}
