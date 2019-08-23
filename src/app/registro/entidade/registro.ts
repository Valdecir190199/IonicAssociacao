import { Materia } from 'src/app/materia/entidade/materia';

export class Registro {
    materia: Materia;
    data: Date = new Date();
    conceito: string;
    conteudo: string;
}
