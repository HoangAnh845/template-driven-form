import { Component } from '@angular/core';
import { Hero } from '../hero';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model: Hero = {
    name: "",
    power: "",
    alterEgo: ""
  };

  submitted = false;

  onSubmit(heroForm: NgForm) { // Chứa thông tin đối tượng Form 
    this.submitted = true;
    if(heroForm.form.status === "INVALID"){
      alert("Vui lòng nhập đủ thông tin")
    }

  }
}
