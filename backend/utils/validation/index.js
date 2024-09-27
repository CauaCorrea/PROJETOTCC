export default class Validation {
    constructor(){
    }

    validationDataExist(data){
        const atributos = Object.keys(data)
        const values = Object.values(data)
        let count = 0
        for(let i of values){
            console.log(count)
            count++
        }

       
        return false
    }

    validationEmail(email){
        const ponto = email.substring(email.indexOf("@") + 1)
        if(!email.indexOf('@') || !ponto.indexOf(".") || !email.indexOf(" ")) throw new Error( 'Verifique se o email está correto!' )
        return false
    }

    validationTel(tel){
        const ddd = tel.substring(0, 2).length
        const cel = tel.substring(2, 11).length
        const total = ddd + cel
        if( ddd !== 2 &&  cel !== 9 && total !== 11){
            throw new Error( 'Verifique se o telefone está correto!' )
        }
        return false
    }
};