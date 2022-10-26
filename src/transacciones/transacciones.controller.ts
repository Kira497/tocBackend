import {Controller, Get} from '@nestjs/common';
import {transaccionesInstance} from './transacciones.class';
import {Mqtt} from '../mqtt';
const mqtt = new Mqtt();
@Controller('transacciones')
export class TransaccionesController {
    @Get('getTest')
  test() {
    mqtt.loggerMQTT(66);
  }
}
