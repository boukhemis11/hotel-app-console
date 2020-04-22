import request from 'request-promise-native';

class Service {
    static listeClients(callback:any){
        request('http://localhost:8080/clients?start=0&size=10', { json: true }, (err,
        res, body) => {
          if (err) { return console.log('Erreur', err); }
          callback(body);
    
        });
    }
    
    static addClients(name:any,fname:any){
        request.post('http://localhost:8080/clients', { json: {
            nom : `${name}`,
            prenoms: `${fname}`
        }
    
        });
    }
    
    static findClients(name:any){
        request(`http://localhost:8080/clients/nom/${name}`,  { json: true },(err,
        res, body) => {
            console.log(body);
            return body;
        });
        }
}



export { Service };



