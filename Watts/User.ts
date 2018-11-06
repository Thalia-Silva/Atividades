import {Mensagem} from"./Mensagem";
import {UserInbox} from"./UserInbox";
import {Chat} from"./Chat";
import {Talk} from"./Talk"; 
import {Repository} from"./Repository";

export class User{
	private userId : string;
	private chats : Map<string, Chat>;
	
	constructor(userId : string){
		this.userId = userId;
		this.chats = new Map<string, Chat>();
    }
    public getUserId(): string{
		return this.userId;
	}
	public setUserId(userId: string): void{
        this.userId = userId;
    }
	public addChat(chat){
		if (this.chats.has(chat.getId()))
			throw new Error ("ja existe");
		this.chats.set(chat.getId(), chat);
	}
	public toString(): string{
		let Tchat = "[ ";
        this.chats.forEach;
        Tchat += text;
        text = ""
		Tchat += "]";
		return Tchat;
	}
	public getId(): string{
		return this.userId;
	}
	public notify(): string{
        let Tnot = "[";
        let essenome = this.userId;
        function valores2(valor, chave, mapa) {
            let valores: Chat;
            valores = (valor)
            Tnot += valores.getId() + "(" + valores.getnots(essenome) + ")";
        }
        this.chats.forEach(valores2); 
		Tnot += "]";
		return Tnot;
	}
	public exit(nome: string){
		this.chats.delete(nome);
	}
}