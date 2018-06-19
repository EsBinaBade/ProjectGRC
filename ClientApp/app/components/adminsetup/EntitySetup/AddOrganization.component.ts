import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Organization} from './OrganizationModel';
import { IOrganization } from '../../../shared/Organization.model';
import { OrganizationService } from './organization.service';
import { AuditComponent} from '../Audit/audit.component';

@Component({
    //selector: 'addOrganization',
    templateUrl: './AddOrganization.component.html',
    styleUrls: ['../ProductKey.component.css'],
    providers: [OrganizationService]
})
export class AddOrganizationComponent implements OnInit {
    organizationForm: FormGroup;
    errorMessage: any;
    title: string = "Create"; 
    organizationId: number; 
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _organizationService: OrganizationService, private _router: Router) {

        if (this._avRoute.snapshot.params["organizationId"]) {
            this.organizationId = this._avRoute.snapshot.params["organizationId"];
        }

        this.organizationForm = this._fb.group({
            organizationId: 0,
            organizationName: ['', [Validators.required]],
            legalName: ['', [Validators.required]],
            dateAndTime: ['', [Validators.required]]

        }) 

    }



    ngOnInit() {
        if (this.organizationId > 0) {
            this.title = "Edit";
            this._organizationService.getOrganizationById(this.organizationId)
                .subscribe(resp => this.organizationForm.setValue(resp)
                , error => this.errorMessage = error);
        } }

    save() {
        if (this.title == "Create") {
            this._organizationService.saveOrganization(this.organizationForm.value)
                .subscribe((data) => {
                    alert("Organization add Successful");

                    this._router.navigate(['/inviteISMS']);
                    this.organizationForm.reset();
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._organizationService.updateOrganization(this.organizationForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/audit']);
                    this.organizationForm.reset();
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        if (this.title == "Create") {
            this.organizationForm.reset();
        }
        else if (this.title == "Edit") {
            this._router.navigate(['/audit']);
        }
    }
    get organizationName() { return this.organizationForm.get('organizationName'); } 
    get legalName() { return this.organizationForm.get('legalName'); } 
    get dateAndTime() { return this.organizationForm.get('dateAndTime'); } 

}
