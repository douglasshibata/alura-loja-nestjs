import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "src/usuario/usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";

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
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            mensagem: 'usuário criado com sucesso'
        };
    }

    @Get()
    async listarUsuario() {
        const usuarios = await this.usuarioRepository.listar();
        const usuarioLista = usuarios.map((user) => new ListaUsuarioDTO(user.id, user.nome))
        return usuarioLista;
    }
}