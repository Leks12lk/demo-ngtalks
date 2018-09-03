import { IHero } from '../models/hero';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'template-driven-form',
	templateUrl: './template-driven-form.component.html',
	styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
	powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
	hero: IHero = {
		name: 'Dr IQ 3000',
		age: 40,
		superpower: this.powers[0]
	}
	constructor() { }

	ngOnInit() {
	}

}
