import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'inviteISMS',
    templateUrl: './InviteISMS.component.html',
    styleUrls: ['../ProductKey.component.css']
})

export class InviteISMSComponent {
    private data: string;
    ISMS: string = "ISMS";
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
            "Role": this.ISMS

        }
        let body = JSON.stringify(key);
        console.log(body);
        this._http.post("api/inviteAdmin", body, this.options)
            .subscribe(
            (data: any) => {
                alert("Invitation to ISMS Manager Sent Successfully!!");
                this._router.navigate(['/sign-in']);

            })
    }

    cancel() {
        window.location.reload();

    }
}