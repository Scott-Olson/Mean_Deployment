console.log("3--- Routes Set");

const weatherCtrl = require('./../controllers/weather.ctrl');

module.exports = (app) => {

    // Retrieve base
    app.get('/api/', (req, res) => {
        
        
    });
    
    // Retrieve seattle
    app.get('/api/seattle', (req, res) => {
        

    });

    // Retrieve sanjose
    app.get('/api/sanjose', (req, res) => {
        
        
    });

    // Retrieve burbank
    app.get('/api/burbank', (req, res) => {
        
        
    });

    // Retrieve dalas
    app.get('/api/dalas', (req, res) => {
        
        
    });

    app.all('*', (req, res, next) =>{
        res.sendFile(path.resolve('./public/dist/public/index.html'))
    });
    
    
}
