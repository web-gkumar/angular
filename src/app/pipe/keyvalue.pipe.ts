import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyvalue'
})
export class KeyvaluePipe implements PipeTransform {

  transform(value:any) : any {
    let keys:any;
    let objectKeys = Object.keys;

    for (let key in value) {
      for(let keyvalue in objectKeys(key))
      keys = keyvalue
    }
    return keys;
  }

}
