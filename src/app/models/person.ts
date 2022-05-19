import { Car } from './car';
export class Person {
    dni?: string;
    name: string;
    lastname: string;
    phone: string;
    type: string;
    enabled:boolean ;
    cars:Array<any>;
   
    constructor(dni:string, name: string, lastname: string,phone: string,type: string,enabled: boolean,cars:Array<any> ) {
        this.dni = dni;
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.type = type;
        this.enabled = enabled;
        this.cars=cars;
             
    }
}

