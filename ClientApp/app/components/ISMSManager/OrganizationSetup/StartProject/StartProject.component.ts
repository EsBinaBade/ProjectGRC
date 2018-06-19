import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IsoProject } from './IsoProject.model';
import { IsoStandardService} from './IsoStandard.service';

@Component({
    selector: 'startProject',
    templateUrl: './StartProject.component.html',
    styleUrls: ['../OrganizationSetup.component.css'],
    providers: [IsoStandardService]

})

export class StartProjectComponent implements OnInit {
    standardList: IsoProject[];
    SetupCompleteForm: FormGroup;
    standardId: number;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _isoStandardService: IsoStandardService, private _router: Router) {

        if (this._avRoute.snapshot.params["standardId"]) {
            this.standardId = this._avRoute.snapshot.params["standardId"];
        }  

        this.SetupCompleteForm = this._fb.group({
            standardId: 0,
            standardName: ['', [Validators.required]]
        })
    }

    ngOnInit() {
        this._isoStandardService.getIsoStandard().subscribe(
            data => this.standardList = data
        )

    }

    save() {

    }

    get standardName() { return this.SetupCompleteForm.get('standardName'); }
}