import { Component, OnInit, } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
