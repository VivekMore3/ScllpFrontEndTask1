import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-data',
  standalone: false,
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css'
})
export class AddDataComponent {
  user = {
    firstName: '',
    lastname: '',
    emailId: '',
    phoneNumber: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  addUser() {
    this.userService.addUser(this.user).subscribe(response => {
      alert('User added successfully!');
      this.user = { firstName: '', lastname: '', emailId: '', phoneNumber: '', password: '' }; // Reset form
    }, error => {
      alert('Error adding user!');
    });
  }
}
