import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class DataService{

    items: Array<any>;

    constructor(http: Http){
        this.items = [
            { name: 'A'},
            { name: 'B'},
            { name: 'C'}
        ];
    }

    getItems(){
        return this.items;
    }
}