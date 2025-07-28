import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServ } from '../../services/auth-serv';
import { formations } from '../../model/formation.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-formation',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-formation.html',
  styleUrl: './add-formation.css'
})
export class AddFormation {

  forma: formations={
    titre:'',
    description:'',
    date: new Date(),
    lieu:'',
    formateur:'',
    duree:0,
    prix:0,
    image:'',
    categorie:'',
    places_dispo:0,
  }
   constructor(
    private authserv:AuthServ,
  ) {}
  ajouterFormation() {
    this.authserv.ajformation(this.forma).subscribe({
    next: (response) => {
      if (response.success) {
        console.log('Formation ajoutée avec succès', response);
      }
    },
  });

  }

}