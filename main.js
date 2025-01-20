class Perso {
    constructor(nom, pv, attaque, precision) {
        this.nom = nom;
        this.pv = pv;
        this.attaque = attaque;
        this.precision = precision;
    }

    attaquer(adversaire) {
        if (this.verifierPrecision()) {
            console.log(`${this.nom} attaque ${adversaire.nom} et inflige ${this.attaque} points de dégâts !`);
            adversaire.pv -= this.attaque;
        } else {
            console.log(`${this.nom} manque son attaque contre ${adversaire.nom}.`);
        }
    }

    verifierPrecision() {
        return Math.random() < this.precision;
    }
}

const perso1 = new Perso("Grec", 100, 15, 0.8);
const perso2 = new Perso("Romain", 100, 20, 0.6);

while (perso1.pv > 0 && perso2.pv > 0) {
    perso1.attaquer(perso2);

    if (perso2.pv <= 0) {
        console.log(`${perso2.nom} est vaincu ! ${perso1.nom} gagne le combat !`);
        break;
    }

    perso2.attaquer(perso1);

    if (perso1.pv <= 0) {
        console.log(`${perso1.nom} est vaincu ! ${perso2.nom} gagne le combat !`);
        break;
    }

    console.log(`État actuel : ${perso1.nom} - ${perso1.pv} PV, ${perso2.nom} - ${perso2.pv} PV`);
}

console.log("Fin du combat !");
