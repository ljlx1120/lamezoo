import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'caretaker',
  pure: false
})
export class CaretakerPipe implements PipeTransform {

  transform(input: Animal[], desiredCareTaker) {
    var output: Animal[] = [];
    if (desiredCareTaker === 'lt6') {
      for (var i = 0; i < input.length; i ++) {
        if (input[i].caretakers < 6) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCareTaker === 'mt5') {
      for (var i = 0; i < input.length; i ++) {
        if (input[i].caretakers > 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
