import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controller/usuario.controller';
import { UsuarioRepository } from 'src/usuario/usuario.repository';

@Module({
    imports: [],
    controllers: [UsuarioController],
    providers: [UsuarioRepository],
})
export class UsuarioModule { }
