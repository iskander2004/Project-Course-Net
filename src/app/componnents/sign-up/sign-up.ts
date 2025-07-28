/*import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { MatSnackBar,MatSnackBarModule } from '@angular/material/snack-bar';
import { signup } from '../../model/user.model';
import { AuthServ } from '../../services/auth-serv';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MatSnackBarModule
  ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})

export class SignUp {
  user : signup ={
      nom_et_prenom : '',
      age :  0,
      numero_de_telephone : 0,
      email : '',
      password : '',
      confirm_password : ''
  };
  
  constructor(
    private authserv :AuthServ,
    private router : Router,
    private snakbar : MatSnackBar
  ){}

  checkEmail(email:string){
    const emailRe : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email !== '' && emailRe.test(email);
  }

  WelcomeToSignUp(){
    this.router.navigate(['/signin'])
    this.snakbar.open('Welcome to sign in' , 'close',{duration:3000});
  }


  onEnvoyerSignUp(){
    if (this.checkEmail(this.user.email)){
      this.authserv.signup(this.user).subscribe({
      next : response => {
          if(response.success){
            this.WelcomeToSignUp(); 
          }else{
            if (response.error_id == 1){
              this.router.navigate(['/signin'])
              this.snakbar.open('You have an account Please Log in !' , 'close',{duration:3000});
            }else{
              if (response.error_id == 2){
                this.router.navigate(['/signin'])
                this.snakbar.open('Fatal Error Please Contact Us !' , 'close',{duration:3000}); 
              }
            }
            
          }
        }
      });
      }else{
        this.snakbar.open("Check Form", "close", {duration : 3000});
      }
    }
}*/
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { signup } from '../../model/user.model';
import { AuthServ } from '../../services/auth-serv';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MatSnackBarModule
  ],
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.css']
})
export class SignUp {
  user: signup = {
    nom_et_prenom: '',
    age: 0,
    numero_de_telephone: 0,
    email: '',
    password: '',
    confirm_password: ''
  };

  constructor(
    private authserv: AuthServ,
    private router: Router,
    private snakbar: MatSnackBar
  ) {}

 valide_nom_et_prenom(nom_et_prenom: string): boolean {
    let nom_et_prenomvalue=nom_et_prenom.trim()
    if(nom_et_prenomvalue==""){
      this.showError('nom-prenom', 'Le champ est requis');
      return false;
    }else{
      if(nom_et_prenomvalue.indexOf(' ') ==-1){
         this.showError('nom-prenom', 'Entrez le nom complet (prénom et nom)');
        return false;
      }
    }
    this.clearError('nom-prenom');
    return true; 
  }

 valide_age(age: number): boolean {
  if (isNaN(age)) {
    this.showError('age', 'Veuillez vérifier votre âge');
    return false;
  }else {
    if (age <= 9 || age > 120) {
    this.showError('age', 'Entrez un âge valide entre 10 et 120');
    return false;
    } 
  }
  this.clearError('age');
  return true;
}
valide_numero_de_telephone(numero_de_telephone: number): boolean {
  let numerovalue =numero_de_telephone;
  if(!numerovalue){
    this.showError('num-telephone', 'Le numéro est requis');
    return false;
  }else{
    if(isNaN(numerovalue)){
      this.showError('num-telephone', 'verifier votre numero de telephone');
      return false;
    }else{
      let numv = numero_de_telephone.toString()
      if(numv.length <8 || numv.length >8){
        this.showError('num-telephone', 'Le numéro doit contenir exactement 8 chiffres');
        return false;
      }
    }
  }
  this.clearError('num-telephone');
  return true;
}


checkEmail(email: string): boolean {
  let emailValue = email.trim();
  if(!emailValue){
    this.showError('email', 'L\'email est requis');
    return false;
  } else {
    if(!emailValue.includes('@') || !emailValue.includes('.')){
      this.showError('email', 'email must contain @ or .');
      return false;
    }
    else{
      if (emailValue.startsWith('@') || emailValue.startsWith('.') || emailValue.endsWith('@') || emailValue.endsWith('.')){
        this.showError('email', 'email must not start or end ith @ or .');
        return false;
      }
      else{
        if(!(emailValue.endsWith('.com') || emailValue.endsWith('.net') || emailValue.endsWith('.tn') || emailValue.endsWith('.fr'))){
          this. showError('email','verif your domaine');
          return false;
        }
        else{
          let split1 = emailValue.split('@');
          let emaildomaine=split1[1].split('.')[0];
          if (!(emaildomaine.toUpperCase()=='GMAIL' || emaildomaine.toUpperCase()=='YAHOO' || emaildomaine.toUpperCase()=='OUTLOOK')) {
            this.showError('email', 'verif youy domaine');
            return false;
          }
        }
      }
    }
  }
  this.clearError('email');
  return true;
}

  valide_passwords(password: string):boolean{
    if (password.length <12) {
    this.showError('password', 'Le mot de passe doit contenir au moins 12 caractères');
    return false;
    }
    if(!/[A-Z]/.test(password)) {
    this.showError('password', 'Le mot de passe doit contenir au moins une lettre majuscule');
    return false;
   }
   if (!/[a-z]/.test(password)) {
    this.showError('password', 'Le mot de passe doit contenir au moins une lettre minuscule');
    return false;
  }
  if (!/[0-9]/.test(password)) {
    this.showError('password', 'Le mot de passe doit contenir au moins un chiffre');
    return false;
  }
  if (!/[!@#$%^&*/(),.?"/:{}|<>]/.test(password)) {
    this.showError('password', 'Le mot de passe doit contenir au moins un caractère spécial');
    return false;
  }
  this.clearError('password');
  return true;
  }
  valideconfirm_valide_passwords(password: string, confirm_password: string):boolean {
     if (password !== confirm_password) {
        this.showError('confirm-password', 'Les mots de passe ne correspondent pas');
        return false;
      }
      this.clearError('confirm-password');
      return true;
    }

 

  clearError(inputId: string): void {
    const inputElt = document.getElementById(inputId);
    if (!inputElt) return;

    const errorElement = inputElt.nextElementSibling;
    if (errorElement && errorElement.className === 'error-message') {
      errorElement.remove();
    }
    (inputElt as HTMLElement).style.borderColor = '';
  }

  showError(inputId: string, errormsg: string): void {
    const inputElt = document.getElementById(inputId);
    if (!inputElt) return;

    this.clearError(inputId);

    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = errormsg;
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.fontFamily = 'Arial, sans-serif';
    errorElement.style.marginTop = '3px';

    inputElt.insertAdjacentElement('afterend', errorElement);
    (inputElt as HTMLElement).style.borderColor = 'red';
  }

  WelcomeToSignUp(): void {
    this.router.navigate(['/signin']);
    this.snakbar.open('Bienvenue, veuillez vous connecter.', 'Fermer', { duration: 3000 });
  }

  onEnvoyerSignUp(): void {
    const isValid =
      this.valide_nom_et_prenom(this.user.nom_et_prenom) &&
      this.valide_age(this.user.age) &&
      this.checkEmail(this.user.email) &&
      this.valide_numero_de_telephone(this.user.numero_de_telephone)&&
      this.valide_passwords(this.user.password)&&
      this.valideconfirm_valide_passwords(this.user.confirm_password,this.user.password);
    if (!isValid) {
      this.snakbar.open('Veuillez corriger les erreurs dans le formulaire.', 'Fermer', { duration: 3000 });
      return;
    }

    this.authserv.signup(this.user).subscribe({
      next: (response) => {
        if (response.success) {
          this.WelcomeToSignUp();
        } else {
          if (response.error_id === 1) {
            this.router.navigate(['/signin']);
            this.snakbar.open('Compte existant, connectez-vous.', 'Fermer', { duration: 3000 });
          } else if (response.error_id === 2) {
            this.router.navigate(['/signin']);
            this.snakbar.open('Erreur serveur. Contactez-nous.', 'Fermer', { duration: 3000 });
          }
        }
      }
    });
  }
}

