import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength'
})
export class StrengthPipe implements PipeTransform {

  transform(value: number): string {
    if(value < 10) {
      // added a test for "weak" potential outcomes
      return value + " (weak)";
    } else if (value >= 10 && value < 20) {
      // added a test for strong potential outcomes
      return value + " (strong)";
    } else {
      // added a test for unbelievable potential outcome
      return value + " (unbelievable)";
    }
  }
}
