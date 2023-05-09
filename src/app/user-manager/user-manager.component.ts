import { Component } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'app-user-manager',
    templateUrl: './user-manager.component.html',
    styleUrls: ['./user-manager.component.scss'],
})
export class UserManagerComponent {
    private users: User[] = [];

    constructor() {}

    getUsers(): User[] {
        return this.users;
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    deleteUser(user: User): void {
        const index = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }

    updateUser(user: User): void {
        const index = this.users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }

    onSubmit() {
        return false;
    }
}
