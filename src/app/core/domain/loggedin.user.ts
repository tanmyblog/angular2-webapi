export class LoggedInUser {
    public id: string;
    public access_token: string;
    public username: string;
    public fullname: string;
    public email: string;
    public avartar: string;

    constructor(access_token: string, username: string, fullname: string, email: string, avartar: string) {
        this.access_token = access_token;
        this.username = username;
        this.fullname = fullname;
        this.email = email;
        this.avartar = avartar;
    }
}