import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/user.model';
import { UserService } from '../../../shared/user.service';

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],

    providers: [UserService]
})
export class SignupComponent implements OnInit {
    userRegistrationForm: FormGroup;
    errorMessage: any;
    title: string = "Create";
    userId: number;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    constructor(private userService: UserService, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router) {
        if (this._avRoute.snapshot.params["userId"]) {
            this.userId = this._avRoute.snapshot.params["userId"];
        }

        this.userRegistrationForm = this._fb.group({
            userId: 0,
            userName: ['', [Validators.required]],
            password: ['', [Validators.required]],
            email: ['', [Validators.required]],
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]]


        })
    }

    ngOnInit() {
    }


    save() {
        if (this.title == "Create") {
            this.userService.registerUser(this.userRegistrationForm.value)
                .subscribe((data) => {
                    alert("User Added Successfully!!");

                    this._router.navigate(['/sign-up']);
                    this.userRegistrationForm.reset();
                }, error => this.errorMessage = error)
        }
        //else if (this.title == "Edit") {
        //    this.userService.updateOrganization(this.userRegistrationForm.value)
        //        .subscribe((data) => {
        //            this._router.navigate(['/audit']);
        //            this.userRegistrationForm.reset();
        //        }, error => this.errorMessage = error)
        //}
    }

    cancel() {
        if (this.title == "Create") {
            this.userRegistrationForm.reset();
        }
        //else if (this.title == "Edit") {
        //    this._router.navigate(['/audit']);
        //}
    }
    get userName() { return this.userRegistrationForm.get('userName'); }
    get password() { return this.userRegistrationForm.get('password'); }
    get email() { return this.userRegistrationForm.get('email'); }
    get firstName() { return this.userRegistrationForm.get('firstName'); }
    get lastName() { return this.userRegistrationForm.get('lastName'); }



}
    

