import {Pipe, PipeTransform} from "angular2/core";

@Pipe({name: 'multiplier'})

export class Multiplier implements PipeTransform{
    transform(value: number, args: string[]){
        return value * parseInt(args[0]);
    }
}