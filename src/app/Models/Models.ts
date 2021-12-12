import { Reference } from "@angular/compiler/src/render3/r3_ast";
import { Byte } from "@angular/compiler/src/util";

export interface Empresas{
Nombre: string,
Tipo: string,
Foto: Reference,
Telefono: string,
Direccion: string,
Latitud: string,
Longuitud: string
}