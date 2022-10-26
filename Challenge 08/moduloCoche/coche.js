import { Motor } from "./motor";
import { Rueda } from "./rueda";
import { Puerta } from "./puerta";

class Coche{

    motor;
    ruedas = [4];
    puertas = [2];

    constructor(){
        this.motor = new Motor();
        for(let i = 0; i < this.ruedas.length ; i++){
            this.ruedas[i] = new Rueda();
        }
        for(let i = 0; i < this.puertas.length ; i++){
            this.puertas[i] = new Puerta();
        }
    }



}