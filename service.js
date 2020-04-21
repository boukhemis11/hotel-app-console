var request = require('request');


function listeClients(callback){
    request('http://localhost:8080/clients?start=0&size=10', { json: true }, function(err,
    res, body) {
      if (err) { return console.log('Erreur', err); }
      // body contient les données récupérées
      callback(body);

    });
}

function addClients(name,fname){
    request.post('http://localhost:8080/clients', { json: {
        nom : `${name}`,
        prenoms: `${fname}`
    }

    });
}

function findClients(name){
    request(`http://localhost:8080/clients/nom/${name}`,  { json: true }, function(err,
    res, body) {
        console.log(body);
    });
    }

exports.listeClients=listeClients;
exports.addClients=addClients;
exports.findClients=findClients;
