import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss', '../../../assets/sass/login.scss']
})
export class SigninComponent implements OnInit {
  issignin = true;


  constructor(public authService: AuthService) {}




  ngOnInit(): void {
  }
  
  authSubmit(email:any, password:any) {
    if(this.issignin) {
      this.authService.Login(email, password)
    }else {
      this.authService.Register(email, password)
    }
  }


  submitForm() {
    this.issignin = !this.issignin;
  }

}
