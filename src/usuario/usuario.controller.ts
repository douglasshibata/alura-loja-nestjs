import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "src/usuario/usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from 'uuid';

@Controller("/usuarios")
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criaUsuario(@Body() dadosUsuarios: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosUsuarios.email;
        usuarioEntity.nome = dadosUsuarios.nome;
        usuarioEntity.senha = dadosUsuarios.senha;
        usuarioEntity.id = uuid();
        this.usuarioRepository.salvarUsuario(usuarioEntity);
        return {
            id: usuarioEntity.id,
            mensagem: 'usuário criado com sucesso'
        };
    }

    @Get()
    async listarUsuario() {
        return this.usuarioRepository.listar();
    }
}