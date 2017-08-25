import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [PersonService]
})
export class MembersComponent implements OnInit {
  people: Person[];

  constructor(private router: Router, private personService: PersonService) {}

  ngOnInit(){
    this.people = this.personService.getPeople();
  }

  goToStatsPage(clickedPerson: Person) {
    this.router.navigate(['people', clickedPerson.id]);
  };
}
