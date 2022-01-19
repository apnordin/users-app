import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-app';
  newUser = {};
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

  addUser() {
    const userAddress = {
      street: this.newStreet,
      city: this.newCity,
      state: this.newState,
      zip: this.newZip,
    }
    this.newUser = {
      username: this.newUsername,
      address: userAddress,
      phone: this.newPhone,
      email: this.newEmail,
      age: this.newAge,
      employment: this.allEmployment,
    }
    console.log(this.newUser)
  }


}
