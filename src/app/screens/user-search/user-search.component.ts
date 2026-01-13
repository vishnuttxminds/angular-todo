import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User, UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = [];

  searchControl = new FormControl('');
  activeFilter: 'name' | 'email' = 'name';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      this.filteredUsers = data;
    });

    this.searchControl.valueChanges.subscribe((value: string | null) => {
      this.applyFilter(value || '');
    });
  }

  setFilter(type: 'name' | 'email') {
    this.activeFilter = type;
    this.applyFilter(this.searchControl.value || '');
  }

  applyFilter(value: string) {
    this.filteredUsers = this.users.filter((user: User) =>
      user[this.activeFilter]
        .toLowerCase()
        .includes(value.toLowerCase())
    );
  }
}
