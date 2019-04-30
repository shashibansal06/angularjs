import { Component, OnInit , Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  constructor(private renderer: Renderer2 ) { }
  public sticky = false;
  public scroll;
  menutoggle = false;

  menu() {
    this.menutoggle = !this.menutoggle;
  }
  ngOnInit() {
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY );
   });
  }
}
