import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { CheckProductkeyViewModel } from '../../../shared/CheckProductkeyViewModel';


@Component({
    selector: 'checkProductKey',
    templateUrl: './CheckProductKey.component.html',
    styleUrls: ['../ProductKey.component.css']
})

export class CheckProductKeyComponent {
    private data: string;
    headers: Headers;
    options: RequestOptions;
    private isLogged: boolean = false;
    constructor(private _http: Http, private _router: Router) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }


    OnSubmit(productKeyName) {
        let key = {
            "productKeyName": productKeyName
        }
        let body = JSON.stringify(key);
        console.log(body);
        this._http.post("api/checkProductKey", body, this.options)
            .subscribe(
            (data: any) => {
                this._router.navigate(['/inviteAdmin']);

            })
    }

}
