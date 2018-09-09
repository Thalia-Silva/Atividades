declare function require(name: string): any;
var readline = require('readline-sync');

class Carro {
    gas: number
    gasMax: number
    pass: number
    passMax: number
    km: number

    constructor(gas: number, gasMax: number, pass: number, passMax: number, km: number) {
        this.gas = gas;
        this.gasMax = gasMax;
        this.pass = pass;
        this.passMax = passMax;
        this.km = km;
    }
    in(): boolean {
        if (this.pass == this.passMax) { // o carro ta lotado
            return false;
        }
        else {
            this.pass += 1; // se não tiver lotado
            return true;
        }
    }
    out(): boolean {
        if (this.pass == 0) { // não tem como tirar sem ninguém
            return false;
        }
        else {
            this.pass -= 1; // tirar gente
            return true;
        }
    }
    fuel(value: number): void {
        if (this.gas + value > this.gasMax) {
            console.log("gasolina cheia man, taloko bixo"); // gasolina cheia demais
        }
        else {
            this.gas += value;
            console.log("ta cheinho eim, doidera uhhul"); // gasolina cheia
        }
    }
    drive(dis: number): boolean {
        let pos: number = this.gas * 10;
        if (dis > pos) {
            console.log("sem gasolina, ixi se lascou"); // distancia maior do que é possível
            return false;
        }
        else {
            this.gas -= dis / 10;
            this.km += dis;
            return true;
        }
    }
    tostring(): string {
        let texto: string = this.pass + "," + this.gas + "," + this.km;
        return texto;
    }
}   
class Main{
    carro: Carro;

    constructor() {
        this.carro = new Carro(0,10,0,2,0);
    }
    static processline(){
        let main = new Main();
        let st: string = "";
        while(st != "fim"){
            let ui = readline.question("digite seu comando ").split(" ");
            let cmd = ui[0];

            if(cmd == "in"){
                if (main.carro.in()) {
                    console.log("ok");
                }
                else {
                    console.log("erro");
                }

            }

            if(cmd == "out"){
                if (main.carro.out()) {
                    console.log("ok");
                }
                else {
                    console.log("erro");
                }
            }
            if(cmd == "fuel"){
                main.carro.fuel(Number(ui[1]));
            }
            if(cmd == "drive"){
                if (main.carro.drive(Number(ui[1]))) {
                    console.log("ok");
                }
                else {
                    console.log("erro");
                }
            }
            if(cmd == "show"){
                console.log(main.carro.tostring());
            }
        }
    }
}

Main.processline();