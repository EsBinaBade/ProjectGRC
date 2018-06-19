import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClassificationLevel} from './ClassificationLevel.model';
import { ClassificationLevelService } from './ClassificationLevel.service';
//import { Popup} from 'ng2-opd-popup';
import { AddClassificationLevelComponent } from './AddClassificationLevel.component';

@Component({
    selector: 'classificationlevel',
    templateUrl: './ClassificationLevel.component.html',
    providers: [ClassificationLevelService]
})
export class ClassificationLevelComponent implements OnInit{
    classificationLevel: ClassificationLevel[];
    errorMessage: any;
    constructor(public _http: Http, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router, private classificationLevelService: ClassificationLevelService) {
        this.getClassificationlevel();

      
    }

    ngOnInit() {
       
    }
    
    
    //selectedBatchId(id: number) {
    //    this._router.navigate(['batch/edit'], { queryParams: { id: id } });
    //}
   
    getClassificationlevel() {
        this.classificationLevelService.getClassificationlevel().subscribe(
            data => this.classificationLevel=data)
    }

    //EditClassificationLevel(classificationLevelId){
    //    this._router.navigate(['/addClassificationLevel']);
    //}
    
  

    DeleteClassificationLevel(classificationLevelId) {
        var ans = confirm("Do you want to delete Classification Level??" + classificationLevelId);

        if (ans) {
            this.classificationLevelService.DeleteClassificationlevel(classificationLevelId).subscribe((data) => {
                window.location.reload();
            })
        }
    }
   
  
    //Edit() {
    //    this.popup.show();
    //}


}

