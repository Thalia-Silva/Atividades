import {Mensagem} from"./Mensagem";
import {User} from"./User";
import {Chat} from"./Chat";
import {UserInbox} from"./UserInbox";
import {Talk} from"./Talk"; 

export class Repository<T>{
	private map: Map<string, T>;
    private filetype: string;

    public constructor(filetype: string){
        this.filetype = filetype;
        this.map = new Map<string, T>();
    }
	public add(nome: string, t : T){
		this.map.set(nome, t);
	}
	public showAll(): string{
		let Tusers = "["
		this.map.forEach(chaves);
        Tusers += text;
        text = ""
		Tusers += "]";
		return Tusers;
	}
	public get(nome : string): T{
		if (!this.map.has(nome))
			throw new Error ("Usuario nao existe");
		return this.map.get(nome);
	}
	public existe(nome: string){
		if(this.map.has(nome))
			throw new Error(this.filetype + "ja existe")
	}
}