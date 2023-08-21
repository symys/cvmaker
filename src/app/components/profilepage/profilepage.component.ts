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
  searchText: string = ''; // Filtreleme için Arama metni
  originalCvList: any;
  
  ngOnInit() {
    this.http.get('http://localhost:3000/users').subscribe((res) => {
      this.users = res;
    });

    setTimeout(() => {
      const currentUserId = this.authService.getLoggedInUserId();

      this.user = this.users.find((u: any) => u.id === currentUserId);
      this.originalCvList = this.user.cvList;

      console.log(this.user);
    }, 2000);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  deleteCv(index:number){
    // this.user.cvList = this.user.cvList.filter((cv : any, cvIndex:number) => cvIndex !== index)

    const loggedInUserId = this.authService.getLoggedInUserId();
    // const user = this.users.find((u: any) => u.id === loggedInUserId);

   this.user.cvList = this.user.cvList.filter((cv : any, cvIndex:number) => cvIndex !== index)

    this.http.put(`http://localhost:3000/users/${loggedInUserId}`, this.user).subscribe(() =>{
      this.router.navigate(['/profile'])
    })
  }

  filterCvs() {
    // searchText'e göre CV'leri filtrele
    if (this.searchText) {
      this.user.cvList = this.originalCvList.filter(
        (cv: any) =>
          cv.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      // Arama metni boşsa, tüm CV'leri göster
      this.user.cvList = this.originalCvList;
    }
  }
}
