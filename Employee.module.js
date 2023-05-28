import Personne from './Personne.module.js'

class Casissier extends Personne {
    constructor(id,nom,address,nbHours) {
        super(id,nom,address,nbHours)
    }
    getSalaire=() => {
        return (this.getNbHours()/180)*180*5+this.getNbHours()%180*5.75
    }
}
class Responsable extends Personne {
    constructor(id,nom,address,nbHours,prime) {
        super(id,nom,address,nbHours)
        this.prime=prime
    }
    getPrime=() => {
        return this.prime
    }
    getSalaire=() => {
        return this.getPrime()+(this.getNbHours()/160)*160*10+(this.getNbHours()%160)*12
    }
}
class Vendeur extends Personne {
    constructor(id,nom,address,nbHours,tauxDeVente,numeroDeCaisse) {
        super(id,nom,address,nbHours)
        this.tauxDeVente=tauxDeVente;
        this.numeroDeCaisse=numeroDeCaisse
    }
    getTauxDeVente=() => {
        return this.tauxDeVente
    }
    getNumeroDeCaisse=() => {
        return this.numeroDeCaisse
    }
    getSalaire=() => {
        return this.getTauxDeVente()/100*450
    }
}
export {Casissier,Vendeur,Responsable}