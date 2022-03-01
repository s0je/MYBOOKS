export class User {
    
    nombre: String;
    apellido: string;
    email:string;
    url: string;
    password: string;

    constructor(nombre:string, apellido:string, email:string, url:string, password:string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.url = url;
        this.password = password;
    }
}
