import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {


  showMenu(){
    document.getElementById("navigation").classList.toggle('mobileMenu');
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