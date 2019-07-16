// task - 0
const getNumbers = str => {
    const array = str.split('').filter(element => {
        if (typeof +element === 'number' && !isNaN(+element) && element !== ' ') {
            return +element
        }
        return null
    })
    return array;
};

//task - 1
const findTypes = (...arg) => {
    let typeObject = {};
    for (let j = 0; j < arg.length; j++) {
        typeObject[typeof arg[j]] = 0;
    }

    for (let i = 0; i < arg.length; i++) {
        switch (typeof arg[i]) {
            case 'number':
                typeObject.number += 1;
                break;
            case 'string':
                typeObject.string += 1;
                break;
            case'"object':
                typeObject.object += 1;
                break;
            case 'symbol':
                typeObject.symbol += 1;
                break;
            case 'boolean':
                typeObject.boolean += 1;
                break;
            case 'undefined':
                typeObject.undefined += 1;
                break;
            case 'function':
                typeObject.function += 1;
                break;
            default:
                break;
        }
    }
    return typeObject;
};

// task 2
const executeforEach = (array, fn) => {
    let data = []
    for (let y = 0; y < array.length; y++) {
        data.push(fn(array[y]));
    }
    return data;
};

// task 3
const mapArray = (arrayData, fn) => {
    return executeforEach(arrayData, fn);
};

// task 4 
const filterArray = (arrayData, fn) => {
    let filteredArr = executeforEach(arrayData, fn);
    let finalArr = [];
    for(let a = 0; a < filteredArr.length; a++){
        filteredArr[a] === true ? finalArr.push(arrayData[a]) : null
    }
    return finalArr;
}

// task 5 
const showFormattedDate = (date) => {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `Date: ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}

// task 6
const canConvertToDate = (date) => {
    return Date.parse(date) > 0;
    
}

// task 7
const daysBetween = (firstDate, secondDate) => {
    let days = secondDate - firstDate;
    const msec = 1000,
        sec = 60,
        min = 60,
        hour= 24
    return Math.round(days / (msec * sec * min * hour));

}

// task 8
const getAmountOfAdultPeople = (folk) => {
    const AGE = 18;
    let amount = 0;
    filterArray(folk, (person) => {
        let birthday = new Date(person.birthday);
        birthday.setFullYear(birthday.getFullYear() + AGE)
        daysBetween(birthday, new Date()) > 0 ? amount += 1 : null;
    })
    return amount
}

// task 9
const keys = (object) => {
    let arrayOfKeys = [];
    for(let key in object){
        if(object.hasOwnProperty(key)){
            arrayOfKeys.push(key)
        }
    }
    return arrayOfKeys;
}

// task 10
const values = (obj) => {
    let arrayOfValues = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            arrayOfValues.push(obj[key])
        }
    }
    return arrayOfValues
}