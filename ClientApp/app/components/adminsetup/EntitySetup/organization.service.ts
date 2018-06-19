import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class OrganizationService {
    myAppUrl: string = ""; 

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    saveOrganization(organization) {
        return this._http.post(this.myAppUrl + 'api/AddOrganization', organization)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    } 

   
    getOrganizations() {
        return this._http.get(this.myAppUrl + 'api/GetOrganizations')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    } 
    getOrganizationById(organizationId: number) {
        return this._http.get(this.myAppUrl + "api/getOrgById/" + organizationId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    } 

    updateOrganization(organization) {
        return this._http.put(this.myAppUrl + 'api/editOrganization', organization)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    } 

    deleteOrganization(organizationId) {
        return this._http.delete(this.myAppUrl + "api/deleteOrganization/" + organizationId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    } 

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    } 
}