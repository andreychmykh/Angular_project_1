import { Pipe, PipeTransform } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives/number_value_accessor';


@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value:string, limit?: number) {
        if (!value) return null;


    let actualLimit = (limit) ? limit : 50;
    return value.substr(0, actualLimit) + '...'    
    }
}