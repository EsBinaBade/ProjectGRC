import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService} from '../EntitySetup/organization.service';

@Component({
    selector: 'audit',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.css'],
    providers:[OrganizationService]
})

export class AuditComponent {

    public audits: Organization[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _router: Router, private organizationService: OrganizationService) {
        http.get(baseUrl + 'api/GetOrganizations').subscribe(result => {
            this.audits = result.json() as Organization[];
        }, error => console.error(error));
    }

  

    deleteOrganization(organizationId) {
        var ans = confirm("Do you want to delete Organization with Id: " + organizationId);
        if (ans) {
            this.organizationService.deleteOrganization(organizationId).subscribe((data) => {
                window.location.reload();

            }, error => console.error(error))
        } 
    }
   
}

interface Organization {
    OrganizationId: number;
    OrganizationName: string;
    LegalName: number;
    DateAndTime: number;
}