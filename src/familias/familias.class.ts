import * as schFamilias from './familias.mongodb';
import {Mqtt} from '../mqtt';
const mqtt = new Mqtt();
export class FamiliasClass {
  insertarFamilias(arrayFamilias) {
    return schFamilias.insertarFamilias(arrayFamilias).then((res) => {
      return res.acknowledged;
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return false;
    });
  }
}
export const familiasInstance = new FamiliasClass();
