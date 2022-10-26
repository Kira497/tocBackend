import {Controller, Post, Body} from '@nestjs/common';
import axios from 'axios';
import {parametrosInstance} from '../parametros/parametros.clase';
import {articulosInstance} from '../articulos/articulos.clase';
import {cestas} from '../cestas/cestas.clase';
import {tecladoInstance} from './teclado.clase';
import {ofertas} from 'src/promociones/promociones.clase';

import {Mqtt} from '../mqtt';
const mqtt = new Mqtt();
@Controller('teclado')
export class TecladoController {
    @Post('clickTeclaArticulo')
  clickTecla(@Body() params) {
    return cestas.addItem(params.idArticulo, params.idBoton, params.peso, params.infoPeso, params.idCesta).then((res) => {
      return {
        error: false,
        bloqueado: false,
        cesta: res,
      };
    }).catch((err) => {
      mqtt.loggerMQTT(err);
      return {
        error: true,
        mensaje: 'Error en addItem',
      };
    });
  }
    @Post('actualizarTeclado')
    actualizarArticulos() {
      return tecladoInstance.actualizarTeclado();
    }
    @Post('cambiarPosTecla')
    cambiarPosTecla(@Body() params) {
      if (params.idArticle && params.nuevaPos && params.nombreMenu) {
        return tecladoInstance.cambiarPosTecla(params.idArticle, params.nuevaPos, params.nombreMenu).then((res) => {
          if (res) {
            return {error: false, info: res};
          }
          return {error: true, mensaje: 'Error en teclado/cambiarPosTecla'};
        });
      } else {
        return {error: true, mensaje: 'Faltan datos en teclado/cambiarPosTecla'};
      }
    }

    @Post('anadirProducto')
    anadirProducto(@Body() params) {
      if (params.nombreArticulo && params.precioConIva && params.precioBase && params.tipoIva && params.menus && params.posicion) {
        return articulosInstance.insertarArticulo({nombre:params.nombreArticulo,precioConIva:params.precioConIva,tipoIva: params.tipoIva,esSumable:params.esSumable,familia:params.menus,precioBase:params.precioBase}).then((res) => {
          if (res) {
            return tecladoInstance.creartecla(res['insertedId'], params.posicion, params.menus,params.esSumable,params.nombreArticulo).then((res) => {
              if (res) {
                return {error: false, info: res};
              }
              return {error: true, mensaje: 'Error en teclado/anadirProducto'};
            });

           
          }
          return {error: true, mensaje: 'Backend: Error, faltan datos'};
        });
      } else {
        return {error: true, mensaje: 'Backend: Faltan datos en articulos/editarArticulo'};
      }
    }

}
