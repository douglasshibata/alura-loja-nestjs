import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "src/usuario/usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";

@Controller("/usuarios")
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criaUsuario(@Body() dadosUsuarios: CriaUsuarioDTO) {
        this.usuarioRepository.salvarUsuario(dadosUsuarios);
        return dadosUsuarios;
    }

    @Get()
    async listarUsuario() {
        return this.usuarioRepository.listar();
    }
}