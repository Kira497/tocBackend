// 100%

import {ArticulosInterface} from './articulos.interface';
import * as schArticulos from './articulos.mongodb';
import {Mqtt} from '../mqtt';
const mqtt = new Mqtt();
export class Articulos {
  public estadoTarifaVIP: boolean;
  constructor() {
    this.estadoTarifaVIP = false;
  }

  setEstadoTarifaEspecial(payload: boolean) {
    try {
      this.estadoTarifaVIP = payload;
    } catch (err) {
      mqtt.loggerMQTT(err);
    }
  }

  getEstadoTarifaEspecial() {
    return this.estadoTarifaVIP;
  }

  /* Devuelve un articulo */
  async getInfoArticulo(idArticulo: number): Promise<ArticulosInterface> {
    if (this.getEstadoTarifaEspecial() != true) {
      return await schArticulos.getInfoArticulo(idArticulo);
    } else {
      return await schArticulos.getInfoArticuloTarifaEspecial(idArticulo);
    }
  }

  /* InsertMany de articulos o articulosEspeciales */
  insertarArticulos(arrayArticulos, esTarifaEspecial = false) {
    return schArticulos.insertarArticulos(arrayArticulos, esTarifaEspecial).then((res) => {
      return res.acknowledged;
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return false;
    });
  }
  insertarArticulo(articulo, esTarifaEspecial = false) {
    

    return schArticulos.insertarArticulo(articulo, esTarifaEspecial).then((res) => {
      return res;
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return false;
    });
  }

  async getSuplementos(suplementos) {
    return await schArticulos.getSuplementos(suplementos);
  }
  buscar(busqueda: string) {
    return schArticulos.buscar(busqueda).then((res: any) => {
      if (res.length > 0) {
        return res;
      } else {
        return [];
      }
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return [];
    });
  }

  async editarArticulo(id, nombre, precioBase, precioConIva) {
    const resultado = await schArticulos.editarArticulo(id, nombre, precioBase, precioConIva);
    // mqtt.loggerMQTT(resultado)
    return resultado;
  }
}
const articulosInstance = new Articulos();
export {articulosInstance};
