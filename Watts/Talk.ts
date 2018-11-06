import {Mensagem} from"./Mensagem";
import {User} from"./User";
import {Chat} from"./Chat";
import {UserInbox} from"./UserInbox";
import {Repository} from"./Repository"; 

class Talk extends Chat{
	constructor(chatId: string, user: User, user2: User){
		super (chatId, user);
		this.rgUserInbox.set(user2.getId(), new UserInbox(user2));
		user2.addChat(this);
	}
	public exit(nome: string){
		throw new Error ("voce nao pode sair de um talk");
	}
	public invite(nome: string, user: User){
		throw new Error ("voce nao pode adicionar pessoas em um talk")
	}
}