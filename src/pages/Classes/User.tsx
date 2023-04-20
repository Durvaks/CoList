class User {
    name: string;
    password: string;
    email: string;
    id: number;
    group: object;


    constructor(name:string, password:string, email:string){
        this.name = name;
        this.password = password;
        this.email = email;
        this.id = 1;
        this.group = []
    }

}