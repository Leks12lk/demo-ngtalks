import { IHero } from '../models/hero';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'reactive-form',
	templateUrl: './reactive-form.component.html',
	styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
	form: FormGroup;

	powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
	hero: IHero = {
		name: 'Dr IQ 3000',
		age: 40,
		superpower: this.powers[0]
	}

	constructor(private fb: FormBuilder) {
		this.form = fb.group({
			name: ['', [Validators.required, Validators.minLength(3)]],
			age: ['', [Validators.max(120), Validators.min(18)]],
			superpower: ''			
		});
	}

	ngOnInit() {
		this.form.patchValue(this.hero);
	}

	onSubmit() {
		this.hero = this.form.value;
	}


}
