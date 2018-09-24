import { Cliente } from "./Cliente";
import { Cinema } from ".Cinema";

export class Main {
    private cinema: Cinema

    private constructor() {
        let lot: number = readline.question("digite o tamanho do cinema");
        this.cinema = new Cinema(lot);
    }
    public static processline() {
        let main = new main();
        let str: string = "";
        while (str != "fim") {
            let jp = readline.question("fale seu comando").split(" ");
            let cmd = jp[0];

            if (cmd == "reservar") {
                if (cinema.reservar(jp[1], jp[2], jp[3])) {
                    console.log("deu certo");
                }
                else {
                    console.log("erro");
                }
            }
            if (cmd == "cancelar") {
                if (cinema.cancelar(jp[1])) {
                    console.log("deu certo");
                }
                else {
                    console.log("erro");
                }
            }
            if (cmd == "show") {
                console.log(cinema.show());
            }
        }
    
    }

}