import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
    private usuarios = [];

    async salvarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }

    async existeComEmail(email: string) {
        const possivelusuario = this.usuarios.find((user) => user.email === email);
        return possivelusuario !== undefined;
    }
}