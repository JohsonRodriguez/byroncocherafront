import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: any): any {
    return value ? 'Activo' : 'Anulado';;
  }

}
