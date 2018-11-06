import {Mensagem} from"./Mensagem";
import {User} from"./User";
import {UserInbox} from"./UserInbox";
import {Talk} from"./Talk"; 
import {Repository} from"./Repository";

export class Chat{
	protected chatId : string;
	protected rgUserInbox : Map<string, UserInbox>;
	
	constructor(chatId : string, user: User){
		this.chatId = chatId;
		this.rgUserInbox = new Map<string, UserInbox>();
		this.rgUserInbox.set(user.getId(), new UserInbox(user));
		user.addChat(this);
	}
	public getId(): string{
		return this.chatId;
	}
	public invite(nome : string , user : User){
		if (!this.rgUserInbox.has(nome))
			throw new Error("dono nao esta no grupo");
		if (this.rgUserInbox.has(user.getId()))
			throw new Error("ja esta no grupo");
		this.rgUserInbox.set(user.getId(), new UserInbox(user));
		user.addChat(this);
	}
	public toString(): string{
		let Tusers = "[ ";
		this.rgUserInbox.forEach(chaves);
        Tusers += text;
        text = ""
		Tusers += "]";
		return Tusers;
	}
	public exit(nome :  string){
		if (!this.rgUserInbox.has(nome))
			throw new Error("nunca nem vi");
		this.rgUserInbox.get(nome).exit(this.chatId);
		this.rgUserInbox.delete(nome);
	}
	public zap(nome : string, msg : string){
		if (!this.rgUserInbox.has(nome))
			throw new Error("nunca nem vi");
        let zap = new Zap(nome, msg);
        let usersInbox= new Array<UserInbox>();
        function valores(valor, chave, mapa) {
            usersInbox.push(valor);
        }
        this.rgUserInbox.forEach(valores)
        for (let elem of usersInbox) {
            elem.addZap(zap, nome);
        }
	}
    public getnots(nome: string): number{
        let NumNots :number;
        function nots(valor, chave, mapa) {
            if ((chave) == nome) {
                NumNots = (valor).getnots();
            }
        }
        this.rgUserInbox.forEach(nots);
        return NumNots;
	}
	public ler(nome : string):string{
		if (!this.rgUserInbox.has(nome))
			throw new Error("nunca nem vi");
		return this.rgUserInbox.get(nome).toString();
    }
}
