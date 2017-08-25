import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { PEOPLE } from './mock-people';

@Injectable()
export class PersonService {

  constructor() { }

  getPeople() {
    return PEOPLE;
  }

  getPersonById(personId: number){
    for (var i = 0; i <= PEOPLE.length - 1; i++) {
      if (PEOPLE[i].id === personId) {
        return PEOPLE[i];
      }
    }
  }

}
