//*********************************IF ELSE *******************************/

function changeToInt(v){
    let result = Number.parseInt(v)
    if(!result){
        return 'please provide a value which is able to convert'
    }
    return result
}

let result =changeToInt('877.32')
console.log(result)

//##########################################################//#endregion

//**********************************try catch ***************************/

function makeWords(text){
 try{
     let str = text.trim()
     let words =str.split(' ')
     return words
 }catch(e){
      console.log(e.message)  //error message
 }
}

// let words = makeWords('    32    kausar islam           ')    //(6) ["32", "", "", "", "kausar", "islam"]
let words = makeWords(67)
console.log(words)       //text.trim is not a function

//########################################################################//#endregion

//****************************throw an error***************************************** */

try{
    console.log('line 1')
    console.log('line 2')
    throw new Error('this is the error')  //custom error
    
    console.log('line 3')
    console.log('line 4')
}catch(e){
    console.log(e.message)
}

//########################################################################//#endregion

//***************************Finally block ****************************** */

try{
    console.log('line 1')
    console.log('line 2')
    throw new Error('this is the error')  //custom error
    
    console.log('line 3')
    console.log('line 4')
}catch(e){
    console.log(e.message)
}finally{
    console.log('finally block')  //always  be execute 
}


//#####################################################################//#endregion

//**************************************Custom error */


class CustomError extends Error{
    constructor(msg) {
        super(msg)
        if(Error.captureStackTrace){
            Error.captureStackTrace(this,CustomError)
        }
        
    }
}
try{
        console.log('line 1')
        console.log('line 2')
        throw new CustomError('this is the error')  //custom error
        
        console.log('line 3')
        console.log('line 4')
    }catch(e){
        console.dir(e)
    }finally{
        console.log('finally block')  //always  be execute 
    }