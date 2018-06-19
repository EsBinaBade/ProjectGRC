import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'inviteAdmin',
    templateUrl: './InviteAdmin.component.html',
    styleUrls: ['../ProductKey.component.css']
})

export class InviteAdminComponent {
    private data: string;
    admin: string="admin";
    InviteISMSForm: FormGroup;
    headers: Headers;
    options: RequestOptions;
    private isLogged: boolean = false;
    constructor(private _http: Http, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
        

    }


    OnSubmit(email) {
        let key = {
            "Email": email,
            "Role":this.admin
        }
        let body = JSON.stringify(key);
        console.log(body);
        this._http.post("api/inviteAdmin", body, this.options)
            .subscribe(
            (data: any) => {
                alert("Invitation to Admin Sent Successfully!!");
                this._router.navigate(['/sign-in']);

            })
    }

    cancel() {
        window.location.reload();

    }
}