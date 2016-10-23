import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mashit'
})
export class MashitPipe implements PipeTransform {

  transform(inputText: string, toUpperCase: boolean): string {
    return '<-= ' + (toUpperCase ? inputText.toUpperCase() : inputText.toLowerCase()) + ' =->';
  }

}
