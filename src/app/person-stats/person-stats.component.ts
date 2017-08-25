import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-stats',
  templateUrl: './person-stats.component.html',
  styleUrls: ['./person-stats.component.css'],
  providers: [PersonService]
})

export class PersonStatsComponent implements OnInit {
  personId: number;
  personToDisplay: Person;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private personService: PersonService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.personId = parseInt(urlParameters['id']);
    });
    this.personToDisplay = this.personService.getPersonById(this.personId);
  }

}
