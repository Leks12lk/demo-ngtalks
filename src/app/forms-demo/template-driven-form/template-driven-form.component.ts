import { IHero } from '../models/hero';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'template-driven-form',
	templateUrl: './template-driven-form.component.html',
	styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
	powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
	hero = {
		name: 'Dr IQ 3000',
		age: 40,
		superpower: this.powers[0],
		city: []
	}

	cities = [ 
    {value: "boston", name: "Boston"}, 
    {value: "washington", name: "Washington"},
		{value: "new york", name: "New York"},
		{value: "chicago", name: "Chicago"}
	];

	constructor() { }

	ngOnInit() {
	}

}
