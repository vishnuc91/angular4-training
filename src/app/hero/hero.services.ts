import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {
    constructor(private _http: Http) {
        console.log('SERVICE CONSTRUCTOR');
    }

    getServices() {
        let urlStr = '/sessions?email=vishnucherumadathil@gmail.com';
        let myHeaders = new Headers();
        myHeaders.append('authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OWU0NzZjZTQ2YWM5ZjFlNjI5ZDJiNjgiLCJlbWFpbCI6InZpc2hudWNoZXJ1bWFkYXRoaWxAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkcDVPL1BpZDREWUxtZ0Zkd2lEYS42LmZ2N3NSanAzbDU2U3J0TVpXT00wSG9zdzgxYWFwZGEiLCJsYXN0bmFtZSI6IkNoZXJ1bWFkYXRoaWwiLCJmaXJzdG5hbWUiOiJWaXNobnUiLCJfX3YiOjB9.f7V35cm4mfaEHlYuCx5t4QUnTYD2XMSQgjSBf9KM-YI');
        myHeaders.append('Access-Control-Allow-Origin', '*');
        let httpOptions = new RequestOptions({ headers: myHeaders });
        return this._http.get(urlStr, httpOptions)
            .toPromise()
            .then(response => {
                console.log(response);

                return response.json().data;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    // public getMyServices() {
    //     // console.log('insideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    //     // let myHeaders = new Headers();
    //     // myHeaders.append('authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OWU0NzZjZTQ2YWM5ZjFlNjI5ZDJiNjgiLCJlbWFpbCI6InZpc2hudWNoZXJ1bWFkYXRoaWxAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkcDVPL1BpZDREWUxtZ0Zkd2lEYS42LmZ2N3NSanAzbDU2U3J0TVpXT00wSG9zdzgxYWFwZGEiLCJsYXN0bmFtZSI6IkNoZXJ1bWFkYXRoaWwiLCJmaXJzdG5hbWUiOiJWaXNobnUiLCJfX3YiOjB9.f7V35cm4mfaEHlYuCx5t4QUnTYD2XMSQgjSBf9KM-YI')
    //     // console.log("BEFORE GET");

    //     // let options = new RequestOptions({ headers: myHeaders });
    //     // return this._http.get('http://localhost:3000/sessions?email=vishnucherumadathil@gmail.com', options)

    //         // .subscribe(response => {
    //         //     console.log("INSIDE RESPONSE");

    //         //     const todos = response.json();
    //         //     console.log('resultssss', todos);
    //         //     return '';
    //         // });
    //     // .catch(this.handleError);
    // }
}