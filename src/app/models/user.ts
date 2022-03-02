export class User {
    
    public nombre: String;
    public apellido: string;
    public email:string;
    public url: string;
    public password: string;

    constructor(nombre:string, apellido:string, email:string, url:string, password:string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.url = url;
        this.password = password;
    }
}
