//EJERCICIO 2
//Se crea una clase llamada UsuarioBase que contenga propiedades como nombre y correo (name & mail)
interface IUser {
    id: number;
    name: string;
    email: string;
}
type UserPreview = Pick<IUser, 'id' | 'name' | 'email'>;
const userPreview: UserPreview = { id: 1, name: 'Pepe', email: "pepe@.com" }; 

//Se implementa una clase llamada Admin que pueda extender el UsuarioBase para tener el permiso extra commo poder gestionarUsuarios.
//Usando herencia
class UsuarioBase {
    constructor(public nombre: string) {}
    ingresar(): void {
        console.log(`${this.nombre} otorgando permiso.`);
    }
}
class Admin extends UsuarioBase {
    ingresar(): void {
        console.log(`${this.nombre} otorgando permiso.`);
    }
}

const SuperAdmin = new UsuarioBase("Pepe");
Pepe.ingresar();   // Pepe está ingresando.
Tito.ingresar();   // Tito está ingresando.
Javi.ingresar();   // Javi está ingresando.

type UserNamesById = Record<number, string>;
const userNamesById: UserNamesById = { 1: 'Pepe', 2: 'Tito', 3: 'Javi' };

//Se inventa una clase SuperAdmin que amplíe el UsuarioBase y también tenga permisos extras como gestionarUsuarios.
type RequiredIUser = Required<PartialIUser>;
const requiredUser: RequiredIUser = { id: 1, name: 'Pepe', email: 'pepe@.com' };

//Se implementan una clase genérica que permista asignar permisos en base a su tipo de usuario.
type ReadonlyIUser = Readonly<IUser>;
const user: ReadonlyIUser = { id: 1, name: 'Pepe', email: 'pepe@.com' };