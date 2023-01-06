class HttpError extends Error {
    code: number;

    constructor(code: number, name: string, message: string){
        super();
        this.code = code;   
        this.message = message;
        this.name = name;
    }
}