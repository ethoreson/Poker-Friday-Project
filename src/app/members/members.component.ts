import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [PersonService]
})
export class MembersComponent implements OnInit {
  people: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private personService: PersonService) {}

  ngOnInit(){
    this.people = this.personService.getPeople();
  }

 goToStatsPage(clickedPerson) {
     this.router.navigate(['people', clickedPerson.$key]);
 };
}
