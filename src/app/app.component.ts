import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShowAndHideElement';

  Element:boolean=true;

  addon(){
    this.Element =!this.Element;
  }
}
