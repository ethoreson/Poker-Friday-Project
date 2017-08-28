import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
  providers: [PersonService]
})

export class EditPersonComponent implements OnInit {
  @Input() selectedPerson;

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  beginUpdatingPerson(personToUpdate){
    this.personService.updatePerson(personToUpdate);
  }

}
