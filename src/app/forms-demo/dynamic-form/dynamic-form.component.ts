import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'dynamic-form',
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
	form: FormGroup;
	
	person = {
		firstname: 'Oleksii',
		age: 27,
		surname: 'Riabyshev',
		twitter: '@a_riabyshev'
	 };

	 personProps: any[];
 
	constructor() {
	}
 
	ngOnInit() {

		const formDataObj = Object.keys(this.person).reduce((formObj, prop) => {
			formObj[prop] = new FormControl(this.person[prop]);
			return formObj;
	 }, {});

	 this.form = new FormGroup(formDataObj);

	 this.personProps = Object.keys(this.person); 
	 
	}

	onSubmit() {
		this.person = this.form.value;
	}

}
