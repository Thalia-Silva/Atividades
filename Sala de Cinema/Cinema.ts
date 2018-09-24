import { Cliente } from "./Cliente";

export class Cinema {
    private cadeiras: Array<Cliente>;

    private constructor(assentos: number) { //lotacao virou assentos :-)
        for (let i: number = 0; i < assentos; i += 1) {
            this.cadeiras.push(new Cliente("", ""));
        }
    }
    public reservar(id: string, fone: string, indice: number): boolean {
        for (let i of this.cadeiras) {
            if (i.getId() == id) {
                console.log("esse id ja existe")
                return false
            }
        }
        if (this.cadeiras[indice].getId() == "") {
            this.cadeiras[indice].setId(id);
            this.cadeiras[indice].setFone(fone);
            return true;
        }
        else {
            console.log("essa cadeira deu nao")
            return false;
        }
    }
    public cancelar(id: string): boolean {
        for (let i in this.cadeiras) {
            if (this.cadeiras[i] == id) {
                this.cadeiras[i].setId("");
                this.cadeiras[i].setFone("");
                return true;
            }
        }
        console.log("não encontrado")
        return false;
    
    }
    public show(): string {
        let texto: string = "";
        for (let i of this.cadeiras) {
            texto += i.toString();
        }
        return texto;
    }
}