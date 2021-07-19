let express = require('express');
let path = require('path');
const cors = require("cors");

let app = express();

app.use(cors());

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/results', () => {
    console.log()
})

let server = app.listen(process.env.PORT || 8080, function(){
    console.log('listening to request on port 8080');
});
