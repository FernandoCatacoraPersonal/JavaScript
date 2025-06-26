/*// callbacks

function sumar(a,b, callback) {
    setTimeout(()=>{
        if(typeof a != 'number' || typeof b != 'number'  ){
            return callback(new Error('Hay un error'));
        }
        callback(null, a+b);
    }, 1000);
}
sumar(5,"6",(error,resultado)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(resultado);
    }
});
*/

/*//promesas
function sumar(a, b) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(typeof a != 'number' || typeof b != 'number'  ){
            reject(new Error("ambos argumentos deben ser numeros pvto!"));
        } 
        else{
            resolve(a+b);
        }
        },1000);
    });
}

sumar(5,"8")
.then((resultado)=>{
    console.log(resultado);
}).catch((error)=>{console.error(error)});
*/
//async await
async function sumar(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw new Error("algun argumento no es numero");
    }
    return a+b;
}
async function manjaErrores() {
    try {
        let resultado= await sumar("7",3);
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

manjaErrores();