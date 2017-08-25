import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

constructor(private router: Router){ }

  people: Person[] = [
    new Person('Hannah', 5, 'Three of a kind - 7s', 1),
    new Person('Jacob', -2, 'Full House', 2),
    new Person('Claire', 8, 'Straight', 3)
  ];

  goToStatsPage(clickedPerson: Person) {
    this.router.navigate(['people', clickedPerson.id]);
  };
}
