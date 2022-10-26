import * as schClientes from './clientes.mongodb';
import {ClientesInterface} from './clientes.interface';
import axios from 'axios';
import {parametrosInstance} from 'src/parametros/parametros.clase';
import {Mqtt} from '../mqtt';
const mqtt = new Mqtt();
export class Clientes {
  private clienteVip: boolean = false;
  /* Busca tanto nombres como tarjeta cliente */
  buscar(cadena: string) {
    return schClientes.buscar(cadena).then((res: ClientesInterface[]) => {
      if (res.length > 0) {
        mqtt.loggerMQTT(res);
        return res;
      } else {
        return [];
      }
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return [];
    });
  }

  getClienteByID(idCliente: string): Promise<ClientesInterface> {
    return schClientes.getClieneteByID(idCliente).then((res: ClientesInterface) => {
      return res;
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return null;
    });
  }

  insertarClientes(arrayClientes) {
    return schClientes.insertarClientes(arrayClientes).then((res) => {
      return res.acknowledged;
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return false;
    });
  }

  getPuntosCliente(idClienteFinal: string) {
    return axios.post('clientes/getPuntosCliente', {database: parametrosInstance.getParametros().database, idClienteFinal}).then((res: any) => {
      if (res.data.error == false) {
        return res.data.info;
      } else {
        mqtt.loggerMQTT(res.data.error);
        return 0;
      }
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return 0;
    });
  }

  setEstadoClienteVIP(nuevoEstado: boolean) {
    try {
      this.clienteVip = nuevoEstado;
    } catch (err) {
      mqtt.loggerMQTT(err);
    }
  }

  getEstadoClienteVIP() {
    return this.clienteVip;
  }
}
export const clienteInstance = new Clientes();
