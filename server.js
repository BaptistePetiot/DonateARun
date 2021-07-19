let express = require('express');
let path = require('path');
const cors = require("cors");

let app = express();

let nice = 0;
let notNice = 0;

let crypto = 0;
let notCrypto = 0;

let donate = 0;
let notDonate = 0;

let run = 0;
let notRun = 0;

let goodies = 0;
let notGoodies = 0;

let use = 0;
let notUse = 0;

let invest = 0;
let notInvest = 0;

app.use(cors());

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/nice', () => {
    nice++;
    console.log(nice)
})

app.get('/api/notNice', () => {
    notNice++;
    console.log(notNice);
})

app.get('/api/crypto', () => {
    crypto++;
    console.log(crypto)
})

app.get('/api/notCrypto', () => {
    notCrypto++;
    console.log(notCrypto);
})

app.get('/api/donate', () => {
    donate++;
    console.log(donate)
})

app.get('/api/notDonate', () => {
    notDonate++;
    console.log(notDonate);
})

app.get('/api/run', () => {
    run++;
    console.log(run)
})

app.get('/api/notRun', () => {
    notRun++;
    console.log(notRun);
})

app.get('/api/goodies', () => {
    goodies++;
    console.log(goodies)
})

app.get('/api/notGoodies', () => {
    notGoodies++;
    console.log(notGoodies);
})

app.get('/api/use', () => {
    use++;
    console.log(use)
})

app.get('/api/notUse', () => {
    notUse++;
    console.log(notUse);
})

app.get('/api/invest', () => {
    invest++;
    console.log(invest)
})

app.get('/api/notInvest', () => {
    notInvest++;
    console.log(notInvest);
})

app.get('/api/results', (req, res) => {
    res.send({"nice": nice, "notNice": notNice, "crypto": crypto, "notCrypto": notCrypto, "donate": donate, "notDonate": notDonate, "run": run, "norRun": notRun, "goodies": goodies, "notGoodies": notGoodies, "use": use, "notUse": notUse, "invest": invest, "notInvest":notInvest});
})

let server = app.listen(process.env.PORT || 8080, function(){
    console.log('listening to request on port 8080');
});
