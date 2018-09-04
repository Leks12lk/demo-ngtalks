import { IPerson } from '../models/person';
import { of } from 'rxjs/observable/of';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
	selector: 'formly-form-demo',
	templateUrl: './formly-form-demo.component.html',
	styleUrls: ['./formly-form-demo.component.scss']
})
export class FormlyFormDemoComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}

	cities = [
		{
			value: null,
			label: null
		},
		{
			value: 1,
			label: 'Kyiv'
		},
		{
			value: 2,
			label: 'Kharkiv'
		},
		{
			value: 3,
			label: 'Lviv'
		},
		{
			value: 4,
			label: 'Odesa'
		}
	];

	cities$ = of(this.cities);
	
	form = new FormGroup({});
	
	model: IPerson = {
		id: 123,
		firstname: 'Oleksii',
		age: 27,
		hasTwitter: false,
		twitter: null,
		cityId: null
	};

	fields: FormlyFieldConfig[] = [
		{
			key: 'firstname',
			type: 'input',
			templateOptions: {
				required: true,
				label: 'Firstname',
			}
		},
		{
			key: 'age',
			type: 'input',
			templateOptions: {
				label: 'Age',
				type: 'number',
				min: 18
			},
			validation: {
				messages: {
					min: 'Sorry, you have to be of legal age.'
				}
			}
		},
		{
			key: 'hasTwitter',
			type: 'checkbox',
			templateOptions: {
				label: 'Do you have Twitter?',
				type: 'checkbox'
			}
		},
		{
			key: 'twitter',
			type: 'input',
			templateOptions: {
				label: 'Twitter',
			},
			hideExpression: model => !model.hasTwitter
		},
		{
			key: 'cityId',
			type: 'select',
			templateOptions: {
				label: 'City',
				options: this.cities$
			}
		},
		{
			key: 'zipCode',
			type: 'input',
			templateOptions: {
				label: 'ZipCode',
				type: 'number'
			},
			expressionProperties: {
				'templateOptions.disabled': '!model.cityId',
				'templateOptions.required': model => !!model.cityId
			}
		}
	];

	submit() {
		// here handle submit event
	}

}

