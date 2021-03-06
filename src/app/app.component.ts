import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators';

export interface User {
  username: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: number | undefined;
  };
  phone: string;
  email: string;
  age: number | undefined;
  employment: {
    company: string;
    position: string;
    responsibilities: string[];
  }[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userCollectionRef: AngularFirestoreCollection<User>;
  user$: Observable<User[]>;
  
  constructor(private afs: AngularFirestore) {
    this.userCollectionRef= afs.collection("users");
    this.user$ = this.userCollectionRef.valueChanges()
  }
  
  title = 'users-app';
  newUsername = "";
  newStreet = "";
  newCity = "";
  newState = "";
  newZip: number | undefined = undefined;
  newPhone = "";
  newEmail = "";
  newAge: number | undefined = undefined;
  allEmployment: {
    company: string;
    position: string;
    responsibilities: string[];
  }[] = [];
  newCompany = "";
  newRespons = "";
  newPosition = "";
  addEmploymentError = "";
  addUserError = "";
  searchTerm = "";
  allUsers: User[] = [];
  tableUsers: User[] = [];

  onUsernameInput(username: string) {
    this.newUsername = username;
  }

  onStreetInput(street: string) {
    this.newStreet = street;
  }

  onCityInput(city: string) {
    this.newCity = city;
  }

  onStateInput(state: string) {
    this.newState = state;
  }

  onZipInput(zip: string) {
    this.newZip = Number(zip);
  }
  
  onPhoneInput(phone: string) {
    this.newPhone = phone;
  }

  onEmailInput(email: string) {
    this.newEmail = email;
  }
   onAgeInput(age: string) {
    this.newAge = Number(age);
  }
  
  onCompanyInput(company: string) {
    this.newCompany = company;
  }

  onPositionInput(position: string) {
    this.newPosition = position;
  }

  onResponsInput(respons: string) {
    this.newRespons = respons;
  }

  addEmployment() {
    if (!this.newCompany || !this.newPosition || !this.newRespons) {
      this.addEmploymentError = "Please include a company, position, and list of responsibilities"
      return
    }
    this.addEmploymentError = ""
    const responsArray= this.newRespons.split("\n")
    const newJob = {
      company: this.newCompany,
      position: this.newPosition,
      responsibilities: responsArray,
    }
    this.allEmployment.push(newJob)
    this.newCompany = "";
    this.newPosition = "";
    this.newRespons = "";
  }

  async addUser() {
    if (this.allEmployment.length <= 0) {
      this.addUserError = "Please include at least one job in employment history"
      return
    }
    this.addUserError = "";
    const userAddress = {
      street: this.newStreet,
      city: this.newCity,
      state: this.newState,
      zip: this.newZip,
    }
    const thisUser: User = {
      username: this.newUsername,
      address: userAddress,
      phone: this.newPhone,
      email: this.newEmail,
      age: this.newAge,
      employment: this.allEmployment,
    }
    this.userCollectionRef.add(thisUser)
    this.newUsername = "",
    this.newEmail = "",
    this.newPhone = "",
    this.newAge = undefined,
    this.newStreet = "",
    this.newCity = "",
    this.newState = "" 
    this.newZip = undefined
    this.allEmployment = []
  }

  searchUsers() {
    const tableUsers: User[] = []
    this.allUsers.forEach((user) => {
      const usernameEmail = user.username.concat(" ", user.email).toLowerCase();
      if (usernameEmail.includes(this.searchTerm.toLowerCase())) {
        tableUsers.push(user)
      }
    })
    this.tableUsers = [...tableUsers]
  }

  onSearchInput(term: string) {
    this.searchTerm = term;
    this.searchUsers()
  }


  ngOnInit() {
      this.user$.subscribe(
        data => this.allUsers = this.tableUsers = data
        
      )
  }

}
