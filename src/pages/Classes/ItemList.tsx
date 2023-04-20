class ItemList {
    note: string;
    stats: string;
    code: number;
    creationDate: string;
    constructor(note: string) {
        this.note = note;
        this.stats = "";
        this.code = 1;
        this.creationDate = String(new Date())
    }
}