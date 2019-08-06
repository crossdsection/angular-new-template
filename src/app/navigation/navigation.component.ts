import { Component, OnInit } from '@angular/core';

export class showObject {
  aboutus: Boolean  = false; 
  philosophy: Boolean = false; 
  contactUs: Boolean = false;
  home: Boolean = false;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private toggle : boolean = false;
  private show = new showObject();
  constructor() {
    this.show["home"] = true;
  }

  ngOnInit() {
  }

  toggleFunc(event){
    this.toggle = !this.toggle;
  }

  menuClicked( arg, event ){
    if( arg != "weare" && arg != "wedo" ){
      for( var i in this.show ){
        if( arg == i ){
          this.show[ arg ] = true;
        } else{
          this.show[ i ] = false;
        }
      }
      this.toggle = false;
    } else {
      this.show[ arg ] = !this.show[ arg ];
    }
  }
}