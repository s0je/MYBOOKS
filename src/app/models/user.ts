export class User {
    
    public id_usuario:Number;
    public nombre: String;
    public apellidos: string;
    public correo:string;
    public foto: string;
    public password: string;

    constructor(id_usuario:number,nombre:string, apellidos:string, correo:string, foto:string, password:string)
    {   
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.foto = foto;
        this.password = password;
    }
}
