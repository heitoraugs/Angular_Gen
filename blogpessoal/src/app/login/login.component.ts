import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

userLogin: UserLogin = new UserLogin
senha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
  }

entrar(){
  this.authService.logar(this.userLogin).subscribe((resp: UserLogin)=>{
  this.userLogin=resp
  localStorage.setItem('token',this.userLogin.token)
  this.router.navigate(['/feed'])
  })
}



}
