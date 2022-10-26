import {conexion} from '../conexion/mongodb';
import {Mqtt} from '../mqtt';
const mqtt = new Mqtt();
export class LogsClass {
  static newLog(dato1: any, dato2: any) {
    conexion.then((conexionInstance) => {
      const database = conexionInstance.db('tocgame');
      const logs = database.collection('logs');
      logs.insertOne({dato1, dato2});
    }).catch((err) => {
      mqtt.loggerMQTT(err);
    });
  }
}
