import { IsNotEmpty } from "class-validator/types/decorator/common/IsNotEmpty";
import { IsEmail, MinLength } from "class-validator/types/decorator/decorators";

export class CriaUsuarioDTO {

    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string;

    @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
    email: string;

    @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
    senha: string;
}