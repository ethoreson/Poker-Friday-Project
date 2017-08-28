import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PersonService {
  people: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.people = database.list('people');
  }

  getPeople() {
    return this.people;
  }

  addPerson(newPerson) {
    this.people.push(newPerson);
  }

 getPersonById(personId: string){
   return this.database.object('/people/' + personId);
 }

 updatePerson(localUpdatedPerson){
   var personEntryInFirebase = this.getPersonById(localUpdatedPerson.$key);
   personEntryInFirebase.update({name: localUpdatedPerson.name, netWinLoss: localUpdatedPerson.netWinLoss, bestHand: localUpdatedPerson.bestHand});
 }

 deletePerson(localPersonToDelete){
   var personEntryInFirebase = this.getPersonById(localPersonToDelete.$key);
   personEntryInFirebase.remove();
 }

}
