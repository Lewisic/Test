const Owlbot = require('owlbot-js');
const token = '34c41aabe34a273f226d13afde510740491536b3';


class Bot {
    constructor() {
        this.client = Owlbot(token);
        this.$onUse = document.getElementById("useButton");
        //this.onUse = this.onUse.bind(this);
        this.addClickHandlers();
}
onUse(){
    let response = this.client.define('owl');
    console.log(response)
}

addClickHandlers() {
    this.onUse = this.onUse.bind(this);
    this.$onUse.addEventListener("click", this.onUse);
}

}

window.onload = () => {new Bot()};