import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toReference'
})
export class ToReferencePipe implements PipeTransform {

  transform(value: number): string {
    
    let resultado: string;
    resultado = "Ref-" + value;
    
    return resultado;
  }

}
