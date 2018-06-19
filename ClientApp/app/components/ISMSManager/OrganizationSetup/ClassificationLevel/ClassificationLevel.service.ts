import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { ClassificationLevel} from './ClassificationLevel.model';

@Injectable()
export class ClassificationLevelService {
    myAppUrl: string = "";
    _classificationLevel: ClassificationLevel[] = [];
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    } 

    getClassificationlevel() {
        return this._http.get(this.myAppUrl + 'api/GetClassificationLevel')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    } 

    saveClassificationLevel(classificationLevel) {
        return this._http.post(this.myAppUrl + "api/addClassificationLevel", classificationLevel)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getClassificationLevelById(classificationLevelId: number) {
        return this._http.get(this.myAppUrl + "api/GetClassificationLevelById/" + classificationLevelId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updateClassificationLevelId(classificationlevel) {
        return this._http.put(this.myAppUrl + "api/editClassificationLevel", classificationlevel)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
            
    }

    DeleteClassificationlevel(classificationLevelId) {
        console.log(classificationLevelId);
        return this._http.delete(this.myAppUrl + 'api/DeleteClassificationLevel/' + classificationLevelId)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}