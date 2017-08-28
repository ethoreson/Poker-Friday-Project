import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PersonService]
})
export class AdminComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  submitForm(name: string, netWinLoss: number, bestHand: string) {
    var newPerson: Person = new Person(name, netWinLoss, bestHand);
    this.personService.addPerson(newPerson);
  }

}
