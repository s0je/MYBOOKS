import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refPipe'
})
export class RefPipePipe implements PipeTransform {

  transform(value: number): String 
  {
    let result: string;
    result = "Ref: "+value;

    return result;
  }

}
