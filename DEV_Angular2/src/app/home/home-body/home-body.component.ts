import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-body',
  templateUrl: 'home-body.component.html',
  styleUrls: ['home-body.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeBodyComponent implements OnInit {


  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    console.log("LoggedIn:"+this.loginService.isLoggedIn());
    if(this.loginService.isLoggedIn()){
      this.router.navigate(["../main"]);
    }
  }

  private login(){
    this.loginService.login("farin","sdgf",false);
  }

  showDialog = false;

}
