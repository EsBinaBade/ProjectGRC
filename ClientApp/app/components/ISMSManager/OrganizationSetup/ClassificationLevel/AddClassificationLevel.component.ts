import { Component, OnInit, Inject  } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ClassificationLevel } from './ClassificationLevel.model';
import { ClassificationLevelService } from './ClassificationLevel.service';
import { ClassificationLevelComponent } from './ClassificationLevel.component';

@Component({
    //selector: 'addClassificationLevel',
    templateUrl: './AddClassificationLevel.component.html',
    styleUrls: ['../OrganizationSetup.component.css'],
    providers: [ClassificationLevelService]
})
export class AddClassificationLevelComponent implements OnInit{
    levelForm: FormGroup;
    errorMessage: any;
    title: string = "Create"; 
    classificationLevelId: number;
    constructor(private classificationLevel: ClassificationLevelService, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router) {

        if (this._avRoute.snapshot.params["classificationLevelId"]) {
            this.classificationLevelId = this._avRoute.snapshot.params["classificationLevelId"];
        }
        this.levelForm = this._fb.group({
            classificationLevelId: 0,
            classificationName: ['', [Validators.required]]
        });
    }
    
    ngOnInit() {
        if (this.classificationLevelId > 0) {
            this.title = "Edit";
            this.classificationLevel.getClassificationLevelById(this.classificationLevelId)
                .subscribe(resp => this.levelForm.setValue(resp)
                , error => this.errorMessage = error);
        }
    }

    save() {
        if (this.title == "Create") {
            this.classificationLevel.saveClassificationLevel(this.levelForm.value)
                .subscribe((data) => {
                    alert("Classificationlevel added Successfully");

                    this._router.navigate(['/classificationlevel']);
                    this.levelForm.reset();
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this.classificationLevel.updateClassificationLevelId(this.levelForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/classificationlevel']);
                    this.levelForm.reset();
                }, error => this.errorMessage = error)
        }
    }

    cancel() {

            this._router.navigate(['/classificationlevel']);
        
    }
    get classificationName() { return this.levelForm.get('classificationName'); }
}



