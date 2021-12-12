import { Component } from '@angular/core';
import { Empresas } from '../Models/Models';
import { FirestoreService } from '../Services/firestore.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  resultado: Empresas[] = [];

  constructor( private database: FirestoreService) {}
  ngOnInit(){
    this.getResultado()
  }

  getResultado(){
    this.database.getCollection<Empresas>('Empresas').subscribe(res =>{
      console.log('datos', res);
      this.resultado=res;
    })
    
  }
}
