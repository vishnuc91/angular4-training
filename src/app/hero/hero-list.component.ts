import { Component } from '@angular/core';

@Component({
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent {
    name: string = 'Vishnu Cherumadathil';
    heroes: any[] = [{
        'name': 'vishnu',
        'age': 26
    }, { 'name': 'cherumadathil', 'age': 30 }];
}
