import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink ,RouterModule , Router } from '@angular/router';
import { login } from '../../model/user.model';
import { MatSnackBar,MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthServ } from '../../services/auth-serv';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    FormsModule,
    RouterModule,
    CommonModule,
    MatSnackBarModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  user : login = {
    email: '',
    password : ''
  };
  
  constructor(
    private authServ : AuthServ,
    private router : Router,
    private snackbar : MatSnackBar
  ){}


  ErrorLoginUser(){
    this.router.navigate(['/signup']);
  }

  WelcomeToWebsite(){
    this.router.navigate(['/home']);
    this.snackbar.open('Welcome to Our Website' , 'close', {duration: 3000});
  }
  
  /*OnSubmit(){
      this.WelcomeToWebsite();
  }*/
  OnSubmit(){
    this.authServ.login(this.user).subscribe({
      next :response=>{
        if(response.success){
          this.WelcomeToWebsite();
          localStorage.setItem('user_id', response.user.user_id);
          localStorage.setItem('user_name', response.user.user_name);
        }else{
          this.ErrorLoginUser();
        }
      }
    })
    
  }

}
