import { Component } from '@angular/core';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    name: string = 'Vishnu Cherumadathil';
    heroes: any[] = [{
        'name': 'vishnu',
        'age': 26
    }, { 'name': 'cherumadathil', 'age': 30 }];
}
