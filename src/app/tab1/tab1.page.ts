import { Component } from '@angular/core';
import { Empresas } from '../Models/Models';
import { FirestoreService } from '../Services/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: Empresas={
    Nombre: '',
    Tipo: '',
    Foto: null,
    Telefono: '',
    Direccion: '',
    Latitud: '',
    Longuitud: '',
  }
  

  constructor(private database: FirestoreService) {}

Crearnuevo(){
  const path ='Empresas'
  const id=this.database.getId();
  this.database.CreateDoc(this.data, path, id)
}

}
