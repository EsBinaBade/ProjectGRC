import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';  
import { User } from './user.model';
import { LoginViewModel } from '../shared/LoginViewModel.model';
import { IOrganization} from '../shared/Organization.model';
import { ProductKey } from './ProductKey.model';



@Injectable()
export class UserService {
    errorHandler: any;
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string, private _router: Router) {
        this.myAppUrl = baseUrl;
    }  

    registerUser(user) {
        return this._http.post(this.myAppUrl + 'api/Adduser', user)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    } 

    //addOrganization(organizations: Organization) {
    //    const body = {
    //        OrganizationName: organizations.OrganizationName,
    //        LegalName: organizations.LegalName,
    //        DateAndTime: organizations.DateAndTime
    //    }
    //    console.log(body);
    //    return this._http.post(this.myAppUrl + '/api/AddOrganization', body);
    //}

    //addOrganization(organization: {}) {
    //    let body = JSON.stringify(organization);
    //    console.log("this is passed data" + body + this.myAppUrl);
    //    this._http.post(this.myAppUrl + '/api/AddOrganization', body, this.options)
    //        .subscribe(
    //        data => {
    //            this.data = data.json();
    //            console.log("Finding the bool value" + this.data);
    //            if (this.data)
    //                this._router.navigate(['success']);
    //            else
    //                alert("Error");
    //        },
    //        error => {
    //            console.log(error);
    //        }
    //        );
    //}

    //addOrganization(organization) {
    //    return this._http.post(this.myAppUrl + 'api/AddOrganization', organization)
    //        .map((response: Response) => response.json())
    //        .catch(this.errorHandler)
    //} 

    addProductKey(productKey: ProductKey) {
        const body = {
            ProductKeyName: productKey.ProductKeyName
        }
        console.log(body);
        return this._http.post(this.myAppUrl + '/api/AddProductKey', body);
    }

    //addProductKey(productKey: {}) {
    //    let body =JSON.stringify(productKey);
    //    console.log("this is passed data" + body + this.myAppUrl);
    //    return this._http.post(this.myAppUrl + '/api/AddProductKey', body);
    //}

   
    //loginUser(userName, password) {
    //    console.log("here" + userName + password);
    //    let body = userName + password;
        
    //    return this._http.post(this.myAppUrl + '/api/Login', body);

    //}
    //saveUser(user) {
    //    return this._http.post(this.myAppUrl + 'api/Adduser', user)
    //        .map((response: Response) => response.json())
    //        .catch(this.errorHandler)
    //} 
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server Error");
    }
}