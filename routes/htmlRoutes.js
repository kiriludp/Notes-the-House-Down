const path = require('path');

module.exports = (app) => {

app.get('/notes', (req, res) => { 
    res.sendFile(path.join(_dirname, '../public/notes.html'));
})

};