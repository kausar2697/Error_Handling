//*********************************IF ELSE */

function changeToInt(v){
    let result = Number.parseInt(v)
    if(!result){
        return 'please provide a value which is able to convert'
    }
    return result
}

let result =changeToInt('877.32')
console.log(result)