import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature= 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB6LV1AzWvkU8ORtKuaFL4_PPy47uG2JZk",
      authDomain: "ng-recipe-book-7f129.firebaseapp.com"
    });
  }

  onNavigate(feature:string){
    this.loadedFeature=feature;
  }
}
