// Code your solution here
function findMatching(drivers, name){
    let result = drivers.filter(item => item.toLowerCase() === name.toLowerCase())
    if(result){
        return result
    }
}

function fuzzyMatch(drivers, name){
    let result = drivers.filter(item => item[0] === name[0])
    if(result){
        return result
    }
}

function matchName(drivers, name){
    let result = drivers.filter(item => item.name === name)
    if(result){
        return result
    }
}