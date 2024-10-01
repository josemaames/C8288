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
type ReadonlyIUser = Readonly<IUser>;
const user: ReadonlyIUser = { id: 1, name: 'Pepe', email: 'pepe@.com' };

//Se implementan una clase genérica que permista asignar permisos en base a su tipo de usuario.

function identidad<T>(arg: T): T {
    return arg;
}

let num = identidad<number>(5);  // num es de tipo number
let str = identidad<string>("Hola");  // str es de tipo string

class usuario<Pepe> {
    private content: Pepe;

    constructor(content: Pepe) {
        this.content = content;
    }

    pediridentidad(): Pepe {
        return this.content;
    }

    ponerContenido(content: Pepe): void {
        this.content = content;
    }
}

interface L {
    length: number;
}

function logLongitud<T extends L>(arg: T): void {
    console.log(arg.length);
}

logLongitud("Hello");  // Funciona: string tiene una propiedad length
logLongitud([1, 2, 3]);  // Funciona: los arrays tienen una propiedad length
// logLongitud(42);  // Error: number no tiene una propiedad length