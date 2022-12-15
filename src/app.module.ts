import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario.module';
@Module({
  imports: [
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
