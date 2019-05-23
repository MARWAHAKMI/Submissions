
const stringSize = (text) => {
    var counter = 0
    for(var i =0 ; i < text.length ; i++)
    {
        counter++ ;
    }
    return counter 
}
const replaceCharacterE = (text) => {
   var newText = text.replace("e", " ")

    return newText 
}
const concatString = (text1, text2) => {
    return text1 + text2 

    
}
const showChar5 = (text) => {
    return text.substring(4, 5)

    
}
const showChar9 = (text) => {
    var char9 = text.substring(0, 9)
    return char9  
}
const toCapitals = (text) => {
    var upperText = text.toUpperCase()
    return upperText 
}
const toLowerCase = (text) => {
    var lowerText = text.toLowerCase()
    return lowerText
}
const removeSpaces = (text) => {
    return text.trim()
}
const IsString = (text) => {
    return(typeof(text) == "string")
}

const getExtension = (text) => {
    return text.split('.').pop()
}
const countSpaces = (text) => {
    return text.split(" ").length -1 
}
const InverseString = (text) => {
    return text.split('').reverse().join('')
}

const power = (x, y) => {
    return Math.pow(x, y)
}
const absoluteValue = (num) => {
    return Math.abs(num)
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs)
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * (Math.pow(radius , 2)))
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab , ac)
}
const BMI = (weight, height) => {
    return parseFloat( (weight / (Math.pow(height,2))).toFixed(2))
}

const createLanguagesArray = () => {
    var arrayLangueges = ["Html","CSS","Java","PHP"]
    return arrayLangueges 
}

const createNumbersArray = () => {
    var list =[0,1,2,3,4,5]
    return list
}

const replaceElement = (languages) => {
    languages.splice(2,1,"Javascript")
    return languages 
}

const addElement = (languages) => {
    languages.push("Ruby" , "Python")
    return languages
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2 , -1)
    return numbers
}

const removeFirst = (languages) => {
    languages.shift(0)
    return languages
}

const removeLast = (languages) => {
    languages.pop()
    return languages 
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(',')
}

const convertArrToStr = (languages) => {
    return languages.toString()
}

const sortArr = (social_arr) => {
    return social_arr.sort()
}

const invertArr = (social_arr) => {
    return social_arr.reverse()
}