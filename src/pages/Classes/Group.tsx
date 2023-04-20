class Group {
    nome: string;
    code: number;
    members:number[];
    lists: object;

    constructor(nome: string, code: number, creatorCode:number ) {
        this.nome = nome;
        this.code = code;
        this.members = [creatorCode];
        this.lists = [];
    }

    set removeMember(member:number){
        
    }

    set includeMember(member:number){
        this.members.push(member)
    }

    set includeList(list:number){

    }

    set removeList(list:number){

    }




}