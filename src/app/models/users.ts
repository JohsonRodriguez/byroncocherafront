export class Users{
    id:number;
    nombre: string;
    nombreUsuario: string;
    password: string;
    state: boolean;
    roles:Array<any>;

    constructor(id:number,nombre:string, nombreUsuario: string, password: string, state: boolean,roles:Array<any>) {
        this.id = id;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.state = state;
        this.roles = roles;
    }
}