export class Cliente{
    private id : string;
    private fone : string;

    private constructor(id: string, fone: string) {
        this.id = id;
        this.fone = fone;
    }
    public getId(): string {
        return this.id;
    }
    public setId(id : string): void {
        this.id = id;
    }
    public getFone(): string {
        return this.fone;
    }
    public setFone(fone: string): void{
        this.fone = fone;
    }
    public toString(): string {
        let esse: string = "";
        esse += "id: " + this.id + "\n";
        esse += "fone: " + this.fone + "\n";
        return esse;
    }
}