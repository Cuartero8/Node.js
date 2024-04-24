import figlet from "figlet";

figlet("Testing npm with Figlet", (err, data) => {
    if(err) {
        console.log(`An errror has ocurried:`);
        console.dir(err);
        return;
    }
    console.log(data)
});
