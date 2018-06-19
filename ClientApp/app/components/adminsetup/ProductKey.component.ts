import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductKey } from '../../shared/ProductKey.model';
import { ProductKeyService } from './InviteAdmin/productKey.service';



@Component({
    selector: 'productKey',
    templateUrl: './ProductKey.component.html',
    styleUrls: ['./ProductKey.component.css'],
    providers: [ProductKeyService]
})

export class ProductKeyComponent implements OnInit{

    ProductKeyForm: FormGroup;
    errorMessage: any;
    constructor(private _productKeyService: ProductKeyService, private _fb: FormBuilder, private _avRoute: ActivatedRoute, private router: Router) {

        this.ProductKeyForm = this._fb.group({
            productId: 0,
            productKeyName: ['', [Validators.required]]
        })
    }

    ngOnInit() { }

    save() {
        this._productKeyService.saveProductKey(this.ProductKeyForm.value)
            .subscribe((data) => {
                this.router.navigate(['/productKey']);
                this.ProductKeyForm.reset();
            }, error => this.errorMessage = error)
    }

    cancel() {
        this.ProductKeyForm.reset();
    }
    get productKeyName() { return this.ProductKeyForm.get('productKeyName'); } 
}