import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css'],
})
export class ProfilepageComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  users: any;
  user:any;

  ngOnInit() {
    this.http.get('http://localhost:3000/users').subscribe((res) => {
      this.users = res;
    });

    setTimeout(() => {
      const currentUserId = this.authService.getLoggedInUserId();

      this.user = this.users.find((u: any) => u.id === currentUserId);

      console.log(this.user);
    }, 2000);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
