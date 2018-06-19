import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { User } from '../../../shared/user.model';
import { UserService } from '../../../shared/user.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginViewModel } from '../../../shared/LoginViewModel.model';

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['../user.component.css'],

    providers: [UserService]
})

export class SignInComponent {
    private data: string;
    headers: Headers;
    options: RequestOptions;
    private isLogged: boolean = false;
    constructor(private _http: Http, private _router: Router) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

  
    OnSubmit(userName, password) {
        let user = {
            "userName": userName,
            "password": password
        }

        let body = JSON.stringify(user);
        console.log(body);
        this._http.post("api/Login", body, this.options)
            .subscribe(
            (data:any) => {
                this._router.navigate(['/ismsOrganizationsetup']);
                
            })
    }
       
}
