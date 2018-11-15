import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@ViewChild('dropDownMenu') dropDownMenu;

  constructor() { }

  ngOnInit() {
  }

  showDropdownMenu(){
    if ( this.dropDownMenu.nativeElement.style.display==="") {
      this.dropDownMenu.nativeElement.style.display="block"
    }else if(this.dropDownMenu.nativeElement.style.display="block"){
      this.dropDownMenu.nativeElement.style.display=""
    }
    
  }
}
