interface IDados {
    msg: string;
}

class Dados implements IDados {
    msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }
    
    // get getmsg() {
    //     return this.msg;
    // }
}

export { IDados, Dados }