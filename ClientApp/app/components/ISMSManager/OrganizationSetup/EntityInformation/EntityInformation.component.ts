import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EntityInformations} from './EntityInformation.model';
import { EntityService} from './Entity.service';

@Component({
    selector: 'entityInformation',
    templateUrl: './EntityInformation.component.html',
    styleUrls: ['../OrganizationSetup.component.css'],
    providers: [EntityService]
})
export class EntityInformationComponent {
    entityInfoForm: FormGroup;
    errorMessage: any;
    constructor(private _entityService: EntityService, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private router: Router) {
        this.entityInfoForm = this._fb.group({
            entityInformationId: 0,
            entityInformation: ['', [Validators.required]]
        })
    }

    save() {
        this._entityService.saveEntityInfo(this.entityInfoForm.value)
            .subscribe((data) => {
                this.router.navigate(['/entityInformation']);
                this.entityInfoForm.reset();
            }, error => this.errorMessage = error)
    }

    cancel() {
        this.entityInfoForm.reset();
    }
    //save(entityInformation) {
    //    let key = {
    //        "EntityInformation": entityInformation
    //    }
    //    let body = JSON.stringify(key);
    //    console.log(body);
    //    this._http.post("api/addEntityInfo", body)
    //        .subscribe(
    //        (data: any) => {
    //            this._router.navigate(['/inviteAdmin']);

    //        })
    //}

    get entityInformation() { return this.entityInfoForm.get('entityInformation'); } 
}


