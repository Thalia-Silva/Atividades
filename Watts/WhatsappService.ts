import {Mensagem} from"./Mensagem";
import {User} from"./User";
import {UserInbox} from"./UserInbox";
import {Chat} from"./Chat";
import {Talk} from"./Talk"; 
import {Repository} from"./Repository"; 

export class WhatsappService {
	private rep_chat: Repository<Chat>;
	private rep_user: Repository<User>;

	constructor() {
		this.rep_chat = new Repository<Chat>("chat");
		this.rep_user = new Repository<User>("user");
	}

	public processline(line: string): string {
		let ui = line.split(" ");
		let cmd = ui[0];

		if (cmd == "help") {
			return "1.adduser_username \n 2.showuser \n 3.newchat_username_chat \n 4.chats_username \n 5.invite_user_invitado_chat \n 6.users_chat \n 7.exit_user_chat \n 8.zap_user_chat_msg \n 9.ler_user_chat \n 10.notify_user";
		}
		else if (cmd == "addUser") {
			this.rep_user.existe(ui[1]);
			let usu = new User(ui[1]);
			this.rep_user.add(ui[1], usu);
			return "done";
		}
		else if (cmd == "allUser") {
			return this.rep_user.showAll();
		}
		else if (cmd == "newChat"){
			this.rep_chat.existe(ui[2]);
			let chat = new Chat(ui[2], this.rep_user.get(ui[1]));
			this.rep_chat.add(ui[2], chat);
			return "done";
		}
		else if (cmd == "chats"){
			return this.rep_user.get(ui[1]).toString();
		}
		else if (cmd == "invite"){
			let usu2 = this.rep_user.get(ui[2]);
			this.rep_chat.get(ui[3]).invite(ui[1], usu2);
			return "done";
		}
		else if (cmd == "users"){
			return this.rep_chat.get(ui[1]).toString();
		}
		else if (cmd == "leave"){
			this.rep_chat.get(ui[2]).exit(ui[1]);
			return "done";
		}
		else if (cmd == "zap") {
			let msg = ""
			for (let elem in ui) {
				if (Number(elem) > 2) {
					msg += ui[elem] + " "
				}
			}
			this.rep_chat.get(ui[2]).zap(ui[1], msg);
			return "done";
		}
		else if (cmd == "notify"){
			return this.rep_user.get(ui[1]).notify();
		}
		
		else if (cmd == "ler"){
			return this.rep_chat.get(ui[2]).ler(ui[1]);
		}
		else if (cmd == "newtalk"){
			let nome = ui[1] + "-" + ui[2];
			this.rep_chat.existe(nome);
			let talk = new Talk(nome, this.rep_user.get(ui[1]), this.rep_user.get(ui[2]));
			this.rep_chat.add(nome, talk);
			return "done";
		}
		return "digite um comando valido";
	}
	static main(){
		let c: WhatsappService = new WhatsappService();
		
		let line= "";
		while (line != "fim") {
			line = prompt("digite um comando, ou help, ou fim");
			if (line == "" || line == "fim") {
				continue;
			}		
			try{
				alert(c.processline(line));
			}catch(e){
				alert("seu comando nao foi valido:" + e);
			}
		}
	}
}