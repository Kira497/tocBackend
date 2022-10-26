const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost')

export class Mqtt{

     loggerMQTT(string){
        client.publish('hit.software/error',`${string}`)
        console.log(string)
    }
}