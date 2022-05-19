export class Newperson {
    dni?: string;
    name: string;
    lastname: string;
    phone: string;
    type: string;
   
    constructor(dni:string, name: string, lastname: string,phone: string,type: string ) {
        this.dni = dni;
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.type = type;
      
        
             
    }
}
