import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-display-data',
  standalone: false,
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})
export class DisplayDataComponent {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }

}
