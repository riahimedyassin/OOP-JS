class Personne {
    constructor(id,nom,address,nbHours){
        this.id=id;
        this.nom=nom;
        this.address=address;
        this.nbHours=nbHours;
    }
    getID=() => {
        return this.id
    }
    getNom=() => {
        return this.nom
    }
    getAddress=() => {
        return this.address
    }
    getNbHours=() => {
        return this.nbHours
    }
    affichier=() => {
        console.log(`ID: ${this.getID()} Nom: ${this.getNom()} Address: ${this.getAddress()} nbHours: ${this.getNbHours()}`);
    }
}
export default Personne