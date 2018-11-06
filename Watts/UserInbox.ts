import {Mensagem} from"./Mensagem";
import {User} from"./User";
import {Chat} from"./Chat";
import {Talk} from"./Talk"; 
import {Repository} from"./Repository";

export class UserInbox{
	private user : User
	private inbox : Zap[];
	
	constructor(user : User){
		this.user = user;
		this.inbox = [];
	}
	public getUser(): string{
		return this.user;
	}
	public setUser(user: string): void{
        this.user = user;
	}
    public addZap(zap: Zap, nome: string) {
        let Id: string = this.user.getId();
		if(Id != nome)
			this.inbox.push(zap);
	}
	public getnots(): number{
		return this.inbox.length;
	}
	public toString() : string{
		let texto = "";
		for(let elem of this.inbox){
			texto += elem.toString() + "\n";
		}
		this.inbox = [];
		return texto;
    }
    public exit(nome: string) {
        this.user.exit(nome);
    }
}
