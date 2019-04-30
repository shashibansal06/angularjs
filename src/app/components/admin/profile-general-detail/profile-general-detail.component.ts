import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-general-detail',
  templateUrl: './profile-general-detail.component.html',
  styleUrls: ['./profile-general-detail.component.scss']
})
export class ProfileGeneralDetailComponent implements OnInit {
  // id: Boolean = false;
  // private sub: any;
  constructor() { }

  ngOnInit() {
  //   this.sub = this.route.params.subscribe(params => {
  //     this.id = ( params.edit !== undefined ) ? true : false;
  //     console.log(params);
  //  });
  }
}
