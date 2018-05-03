module.exports = function(app){
    var fileUpload = require('express-fileupload');

    app.use(fileUpload());
 
    app.post('/upload', function(req, res) {
        console.log(req.files);
        if (!req.files)
            return res.status(400).send('No files were uploaded.');
        
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.sampleFile;
        
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv( 'files\\' +sampleFile.name, function(err) {
            if (err)
                return res.status(500).send(err);
        
            
            var options = {
                root: 'files'
            };
            
            res.sendFile('\\relatorio_analitico_carga_20536.xlsx', options);
        });
    });
}