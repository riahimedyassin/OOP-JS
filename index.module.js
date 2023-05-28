import Magasin from "./Magasin.module.js";
import {Casissier,Vendeur,Responsable} from './Employee.module.js'

class DateObject {
    constructor(day,month,year) {
        this.day=day;
        this.month=month
        this.year=year
    }
    getDay() { 
        return this.day
    }
    getMonth=() => {
        return this.month
    }
    getYear=() => {
        return this.year
    }
}

class Product extends DateObject{
    constructor(id,libelle,marque,prix,day,month,year) {
        super(day,month,year)
        this.id=id  
        this.libelle=libelle
        this.marque=marque
        this.prix=prix
    }
    getId=() => {
        return this.id
    }
    getLibelle=() => {
        return this.libelle
    }
    getMarque=() =>{
        return this.marque
    }
    getPrix=() => {
        return this.prix
    }
    setPrix=(prix) => {
        this.prix=prix
    }
    getDate=() => {
        return `Day : ${this.getDay()} | Month : ${this.getMonth()} | Yearh : ${this.getYear()}`
    }
    affichier=() => {
        console.log(`ID : ${this.getId()} | Nom du Produit : ${this.getLibelle()} | Marque : ${this.getMarque()} | Prix : ${this.getPrix()}
            Date : ${this.getDate()}
        `)
    }
}


//MAIN
let lait=new Product("1021","Lait","Delice",0,12,12,12)
let Yaourt=new Product("2510","Yaourt","Vitalait",0,10,25,36)
let Tomate=new Product("3250","Tomate","Sicam",1200,21,85,96);
let Yassin=new Casissier("1","Riahi Yassin","Thibar",20);
let Syrine = new Responsable("1","Syrine Zahar","Ariana",20,10);
let Haythem=new Vendeur("1","Haythem Mardessi","Thibar",10,20,5);
let Monoprix=new Magasin("1","Menzeh 6","Beja",0,[],[]);
let Carrefour=new Magasin("2","Centre Ville",0,[],[]);

Monoprix.setEmployee(Haythem);
Carrefour.setEmployee(Syrine);
Carrefour.setEmployee(Yassin);
Monoprix.setProduct(lait)
Carrefour.setProduct(lait)
Carrefour.setProduct(Tomate)
Carrefour.affichier()


