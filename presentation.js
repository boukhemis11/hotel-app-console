var readline = require('readline');
var service = require('./service');
  function start(){
    console.log("1. Lister les clients");
    console.log("2. Ajouter un client");
    console.log("3. Rechercher un client par nom");
    console.log("99. Sortir");
    
  rl.question("Veuillez choisir une option svp : ",function (saisie){
    if(saisie==1){
      console.log(">> Liste des clients");
      service.listeClients(function(listeClients){
          listeClients.forEach(element => {
              console.log(element.nom +" " +element.prenoms);
            
          });
          start();
      });
    }else if (saisie ==2){
        rl.question("Veuillez entrer un nom : ",function (nom){
            rl.question("Veuillez entrer un prenom : ",function (prenom){
                service.addClients(nom,prenom);
                console.log(`Un nouveau client ${nom} ${prenom} s'est ajouté.`);
                start();
            });
        });


      }else if (saisie ==3){
        console.log(">> Liste des clients");
        rl.question("Veuillez entrer un nom : ",function (nom){
            service.findClients(nom);
            start();
        });

        


      } else if (saisie ==99){
      console.log("Aurevoir");
      rl.close();
    }
    });
  }
  
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
;
exports.start=start;