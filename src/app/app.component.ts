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
  newAddress = "";
  newPhone = "";
  newEmail = "";
  newAge: number | undefined = undefined;
  newExperience = "";
  newEmployment = "";

  onUsernameInput(username: string) {
    this.newUsername = username;
  }

  onAddressInput(address: string) {
    this.newAddress = address;
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

  onExperienceInput(experience: string) {
    this.newExperience = experience;
  }

  onEmploymentInput(employment: string) {
    this.newEmployment = employment;
  }

  addUser() {
    this.newUser = {
      username: this.newUsername,
      address: this.newAddress,
      phone: this.newPhone,
      email: this.newEmail,
      age: this.newAge,
      experience: this.newExperience,
      employment: this.newEmployment,
    }
    console.log(this.newUser)
  }


}
