import { Component } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SessionService } from './hero.services';

@Component({
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css'],
    providers: [SessionService]
})

export class HeroListComponent {
    name: string = 'Vishnu Cherumadathil';
    value: string = '';
    heroes: any[] = [{
        'name': 'vishnu',
        'age': 26
    }, { 'name': 'cherumadathil', 'age': 30 }];

    constructor(private _sessions: SessionService) { }

    ngOnInit(): void {
        //console.log('sdsdsdsdsdsdsdsdsdsd', this._sessions.getMyServices());
        console.log(this._sessions.getServices());
    }
}
