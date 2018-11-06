import {UserInbox} from"./UserInbox";
import {User} from"./User";
import {Chat} from"./Chat";
import {Talk} from"./Talk"; 

let text = "";
function chaves(valor, chave, mapa) {
	text += (chave) + " ";
}
export class Mensagem {
	private userID : string;
	private msg : string;
	
	constructor(user : string, msg : string){
		this.userID = user;
		this.msg = msg;
    }
    public getUserID(): string{
		return this.userID;
	}
	public setUserID(userID: string): void{
        this.userID = userID;
    }
    public getMsg(): string{
            return this.msg;
    }
    public setMsg(msg: string): void{
            this.msg = msg;
    }
	toString(): string{
		return this.userID + ": " + this.msg;
	}
}