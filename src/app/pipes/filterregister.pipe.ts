import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterregister'
})
export class FilterregisterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultname=[];
    for(const name of value){
      if(name.registrationplate.toUpperCase().indexOf(arg.toUpperCase())>-1 || name.person.name.toUpperCase().indexOf(arg.toUpperCase())>-1){

        resultname.push(name);
      };
    };
    return resultname;
  }

}
