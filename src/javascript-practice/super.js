class BronzeLevelUser extends User {
    //we add the cc info property to the user here
    constructor(username, password, ccinfo){
        super(username, password);
        this.type = 'Bronze User',
        this.ccinfo = ccinfo
    }

    getInfo() {
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronzel1234', 0000111122223333);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);