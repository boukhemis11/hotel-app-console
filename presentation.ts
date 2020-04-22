import readline from 'readline';
import{Service} from './service';
  function start(){
    console.log("1. Lister les clients");
    console.log("2. Ajouter un client");
    console.log("3. Rechercher un client par nom");
    console.log("99. Sortir");
    
  rl.question("Veuillez choisir une option svp : ",function (saisie){
    if(saisie=='1'){
      console.log(">> Liste des clients");
      Service.listeClients(function(listeClients:any){
              for (let c of listeClients) {
                console.log(c.nom +" " +c.prenoms); // 1, "string", false
            }
            start();
          });

  
    }else if (saisie =='2'){
        rl.question("Veuillez entrer un nom : ",function (nom){
            rl.question("Veuillez entrer un prenom : ",function (prenom){
              Service.addClients(nom,prenom);
                console.log(`Un nouveau client ${nom} ${prenom} s'est ajouté.`);
                start();
            });
        });


      }else if (saisie =='3'){
        console.log(">> Client(s)");
        rl.question("Veuillez entrer un nom : ",function (nom) {

            console.log(Service.findClients(nom));

            });
            start();   

      } else if (saisie =='99'){
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
export { start };