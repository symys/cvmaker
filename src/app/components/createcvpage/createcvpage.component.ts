import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createcvpage',
  templateUrl: './createcvpage.component.html',
  styleUrls: ['./createcvpage.component.css'],
})
export class CreatecvpageComponent {
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  title:string="";
  name: string = '';
  lastname: string = '';
  age: number = 0;
  birthday: Date;
  birthcity: string = '';
  birthcountry: string = '';
  talents:string="";
  summary:string="";

  users:any;

  ngOnInit() {
    this.http.get('http://localhost:3000/users').subscribe((res) => {
      this.users = res;
    });
  }

  submitCv() {
    if(this.title !== ""){
      const loggedInUserId = this.authService.getLoggedInUserId();
    const user = this.users.find((u: any) => u.id === loggedInUserId);

    // console.log(user)
    const newCv = {
      title:this.title,
      name: this.name,
      lastname: this.lastname,
      age: this.age,
      birthday: this.birthday,
      birthcity: this.birthcity,
      birthcountry: this.birthcountry,
      talents:this.talents,
      summary:this.summary
    };

    user.cvList.push(newCv)

    this.http.put(`http://localhost:3000/users/${loggedInUserId}`, user).subscribe(() =>{
      this.router.navigate(['/profile'])
    })
    
    } else{
      alert("Lütfen bir başlık belirleyiniz")
    }
  }
}
