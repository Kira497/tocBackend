import {Controller, Post, Body} from '@nestjs/common';
import {devolucionesInstance} from './devoluciones.clase';
import {Mqtt} from '../mqtt';
const mqtt = new Mqtt();
@Controller('devoluciones')
export class DevolucionesController {
    @Post('nuevaDevolucion')
  nuevaDevolucion(@Body() params) {
    if (params.total != undefined && params.idCesta != undefined) {
      return devolucionesInstance.nuevaDevolucion(params.total, params.idCesta).then((res) => {
        if (res) {
          return {error: false};
        } else {
          return {error: true, mensaje: 'Error en nuevaDevolucion()'};
        }
      }).catch((err) => {
        mqtt.loggerMQTT(err);
        return {error: true, mensaje: 'Error, ver log en nest'};
      });
    } else {
      return {error: true, mensaje: 'Datos no definidos'};
    }
  }
}
