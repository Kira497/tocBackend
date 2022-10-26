import * as schParamsTicket from './params-ticket.mongo';
import {Mqtt} from '../mqtt';
const mqtt = new Mqtt();
export class ParamsTicketClass {
  insertarParametrosTicket(data) {
    return schParamsTicket.insertarParametrosTicket(data).then((res) => {
      if (res) {
        return true;
      } else {
        return false;
      }
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return false;
    });
  }

  getParamsTicket() {
    return schParamsTicket.getParamsTicket().then((res) => {
      return res;
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return [];
    });
  }
}
export const paramsTicketInstance = new ParamsTicketClass();
