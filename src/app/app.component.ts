import { Component } from '@angular/core';
import {PopUpService} from './popupService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  constructor(private closeDialoge: PopUpService){
    this.closeDialoge.closePopUp.subscribe((canClose) => {
      if(canClose) {
        this.showPopUp = !canClose;
      }
    });
  }
  showPopUp:boolean;

  showMenu(){
    document.getElementById("navigation").classList.toggle('mobileMenu');
  }
  showForm(){
    this.showPopUp = true;
  }


}

window.onscroll = function() {
  // console.log(window.pageYOffset);
  var nav = document.getElementById('navigation');
  if ( window.pageYOffset > 40 ) {
    nav.classList.add("navbar1");
  } else {
    nav.classList.remove("navbar1");
  }
}