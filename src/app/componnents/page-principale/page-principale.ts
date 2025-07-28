import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterModule,Router } from '@angular/router';
import { MatSnackBar,MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-page-principale',
  imports: [
    RouterModule,
    CommonModule,
    MatSnackBarModule
  ],
  templateUrl: './page-principale.html',
  styleUrl: './page-principale.css'
})
export class PagePrincipale {
constructor(
  private router : Router,
  private snakbar : MatSnackBar
){}



welcometosignin(){
  this.router.navigate(['/signin']);
  this.snakbar.open('welcome to sign in page','close' , {duration:3000});
}

welcometosignup(){
  this.router.navigate(['/signup']);
  this.snakbar.open('welcome to sign up page','close' , {duration:3000});

}

welcometoaddformation(){
  this.router.navigate(['/addformation']);
  this.snakbar.open('welcome to add formation page','close' , {duration:3000});
}

GoToSignIn(){
  this.welcometosignin();
}


GoToSignUp(){
  this.welcometosignup();
}

AddFormation(){
  this.welcometoaddformation();
}


}
