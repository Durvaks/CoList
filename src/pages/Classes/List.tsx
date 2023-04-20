class List{
    name: string;
    uniqueCode: number;
    groupsAssociated:number[];
    itens:string[];
    constructor(name:string, ){
        this.name = name;
        this.uniqueCode = 1;
        this.groupsAssociated = [];
        this.itens = [];
    }
    
}