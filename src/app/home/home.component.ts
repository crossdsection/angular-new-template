import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
     trigger('visibilityChanged', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('true => false', animate('700ms')),
      transition('false => true', animate('500ms')),
    ])
  ]
})
export class HomeComponent implements OnInit {

  chevronRight = faChevronRight;
  chevronLeft = faChevronLeft;
  private selectedImage = 0;
  

  constructor() { }

  carouselToggle( arg, $event){
    if( arg != null ){
      this.selectedImage = parseInt( arg );
    } else {
      this.selectedImage = (this.selectedImage + 1)%3;
    }
  }
  
  ngOnInit() {
  }
}