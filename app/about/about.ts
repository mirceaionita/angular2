import {Component, View} from 'angular2/core';

@Component({
    selector: 'about'
})

@View({
    templateUrl: 'app/about/about.html'
})

export class About {
    message: string;
    m: string;
    names=['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

    showName(name: string){
        this.message = name;
    }

    showN(event: any){
        this.m = event.target.value;
    }
}