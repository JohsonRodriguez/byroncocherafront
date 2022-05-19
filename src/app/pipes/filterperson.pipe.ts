import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterperson'
})
export class FilterpersonPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultname=[];
    for(const name of value){
      if(name.name.toUpperCase().indexOf(arg.toUpperCase())>-1 || name.lastname.toUpperCase().indexOf(arg.toUpperCase())>-1){

        resultname.push(name);
      };
    };
    return resultname;
  }

}
