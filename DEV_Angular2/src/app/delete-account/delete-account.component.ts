import { Component, OnInit } from '@angular/core';
import {ApiCommunicatorService} from "../api-communicator.service";
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor(private errorService: ErrorService, private apiCommunicatorService:ApiCommunicatorService) {
  }

  ngOnInit() {
  }

  public deleteAccount() {
    let password = (<HTMLInputElement>document.getElementById('passwordField')).value;
    console.log("password:"+password);
    this.apiCommunicatorService.deleteStudent().subscribe((res: any) => {
        this.errorService.setSuccessLogout();
        this.errorService.throwSuccess("Ihr Benutzer wurde erfolgreich gelöscht!");
      },
    (err) => this.errorService.throwError("Fehler beim Löschen des Accounts, bitte versuchen Sie es erneut!"));
  }

}
