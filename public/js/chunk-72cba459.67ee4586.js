(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72cba459"],{4461:function(t,e,c){"use strict";c.r(e);c("26e9"),c("fb6a"),c("b680");var n=c("7a23"),o=function(t){return Object(n["A"])("data-v-2fe4fb6e"),t=t(),Object(n["y"])(),t},i={class:"col"},l=o((function(){return Object(n["h"])("br",null,null,-1)})),a={class:"row"},r={class:"table-responsive"},b={class:"table"},s=o((function(){return Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",{scope:"col"},"Número ticket"),Object(n["h"])("th",{scope:"col"},"Hora"),Object(n["h"])("th",{scope:"col"},"Forma de pago"),Object(n["h"])("th",{scope:"col"},"Total")])],-1)})),u=["onClick"],j={style:{"text-align":"center"}},O={key:0,class:"col"},h={class:"row"},d={class:"col"},f=o((function(){return Object(n["h"])("i",{class:"bi bi-printer-fill iconosBootstrap"},null,-1)})),k=[f],v=o((function(){return Object(n["h"])("br",null,null,-1)})),p={class:"col mt-5"},m=o((function(){return Object(n["h"])("i",{class:"bi bi-trash iconosBootstrap"},null,-1)})),g=[m];function T(t,e,c,o,f,m){var T=Object(n["F"])("DetalleTicket");return Object(n["x"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",i,[l,Object(n["h"])("div",a,[Object(n["h"])("div",r,[Object(n["h"])("table",b,[s,Object(n["h"])("tbody",null,[(Object(n["x"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(o.listaTickets.slice().reverse(),(function(t,e){return Object(n["x"])(),Object(n["g"])("tr",{key:{index:e},onClick:function(e){return o.setTicketActivo(t)},class:Object(n["r"])({estiloActivoTicketCaja:t._id===o.activo})},[Object(n["h"])("td",j,Object(n["I"])(t._id),1),Object(n["h"])("td",null,Object(n["I"])(o.moment.unix(t.timestamp/1e3).format("DD/MM/YYYY hh:mm:ss")),1),Object(n["h"])("td",null,Object(n["I"])(t.tipoPago),1),Object(n["h"])("td",null,Object(n["I"])(t.total.toFixed(2))+" €",1)],10,u)})),128))])])])])]),null!=o.ticketInfo?(Object(n["x"])(),Object(n["g"])("div",O,[Object(n["k"])(T,{ticket:o.ticketInfo},null,8,["ticket"]),Object(n["h"])("div",h,[Object(n["h"])("div",d,[Object(n["h"])("button",{onClick:e[0]||(e[0]=function(t){return o.imprimirTicket()}),type:"button",class:"btn btn-secondary botonesPrincipales w-100 btn-block botonesWidth"},k)])]),v,Object(n["h"])("div",p,[Object(n["h"])("button",{onClick:e[1]||(e[1]=function(t){return o.esborraTicket()}),type:"button",class:"btn btn-danger w-100 btn-block botonesWidth"},g)])])):Object(n["f"])("",!0)],64)}var C=c("3f20"),I=(c("47e6"),c("53ed"),c("bc3a")),w=c.n(I),x=c("c1df"),y=c.n(x),A=c("5502"),D=c("a18c"),_=c("0180"),P=Object(_["b"])(),Y={name:"Caja",setup:function(){var t=Object(n["C"])(null),e=Object(n["C"])(0),c=Object(n["C"])([]),o=Object(n["C"])(null);Object(A["b"])();function i(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(e=c.value[c.value.length-1]),o.value=e,c.value.length>0&&(t.value=e._id)}function l(t){D["a"].push(t)}function a(){null!=t.value?(w.a.post("impresora/imprimirTicket",{idTicket:t.value}),l("/")):console.log("Primero selecciona un ticket")}function r(){null!=t.value?confirm("¿Confirma ANULACIÓN de ticket?")&&w.a.post("tickets/rectificativa",{ticketID:t.value}).then((function(t){t.data.error?P.error(t.data.mensaje):(P.success(t.data.mensaje),l("/"))}))["catch"]((function(t){P.error(t.message)})):P.error("Primero selecciona un ticket")}return Object(n["v"])((function(){w.a.post("tickets/getTicketsIntervalo").then((function(t){e.value=0;for(var n=0;n<t.data.length;n+=1)e.value+=t.data[n].total;c.value=t.data,i("",!0)}))})),{goTo:l,listaTickets:c,setTicketActivo:i,activo:t,total:e,moment:y.a,ticketInfo:o,imprimirTicket:a,esborraTicket:r}},components:{DetalleTicket:C["a"]}},F=(c("c225"),c("d959")),N=c.n(F);const B=N()(Y,[["render",T],["__scopeId","data-v-2fe4fb6e"]]);e["default"]=B},c225:function(t,e,c){"use strict";c("e38c")},e38c:function(t,e,c){}}]);
//# sourceMappingURL=chunk-72cba459.67ee4586.js.map