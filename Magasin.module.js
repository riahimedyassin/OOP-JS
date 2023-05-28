class Magasin {
    constructor(id,address,capacite,products,employee) {
        this.id=id;
        this.address=address;
        this.capacite=capacite;
        this.products=products;
        this.employee=employee
    }
    getID=()=> {
        return this.id
    }
    getAddress=() => {
        return this.address
    }
    getCapacite=() => {
        return this.capacite
    }
    getProducts=() => {
        return this.products
    }
    getEmployee=() =>  {
        return this.employee
    }
    setProduct=(product) =>{
        this.products.length <50 && !this.chercherProduits(product) ? this.products.push(product) : console.log("Impossible")
    }
    affichier=() =>{
        console.log(`ID : ${this.getID()} | Address : ${this.getAddress()} | Capacité : ${this.getCapacite()} | Prodcuts : `)
        this.getProducts().map(product=> {
            product.affichier()
        })
        this.getEmployee().map(el=> {
            el.affichier()
            console.log(`Salaire : ${el.getSalaire()}`)
        })
    }
    comparer=(product1,product2) => {
        return product1.libelle==product2.libelle && product1.id==product2.id && product1.prix==product2.prix
    }
    chercherProduits=(product) => {
        let found=false
        for(let i=0;i<this.getProducts().length && !found;i++) {
            if(this.comparer(product,this.getProducts()[i])) {
                found=true
            }
        }
        return found  
    }

    setEmployee=(employee)=> {
        this.employee.push(employee);
    }

}
export default Magasin