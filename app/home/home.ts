import {Component} from 'angular2/core';

import {DataService} from '../services/dataService';
import {Multiplier} from '../pipes/multiplier'

@Component({
    providers: [DataService],
    templateUrl: 'app/home/home.html',
    pipes: [Multiplier]
})
export class Home {
    names: Array<any>;
    currentDate: Date;

    constructor(dataService: DataService){
        this.currentDate = new Date();
        this.names = dataService.getItems();
    }

}