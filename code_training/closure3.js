const words = [
    'oi', 'como', 'vai', 'você', 'seu', 'idiota'
]

const blacklist = [
    'idiota', 'babaca', 'fdp'
]

const add = (x) => (y) => x + y

const cleanWords = (blacklist) => (value) => !blacklist.includes(value)

const filterWords = (blacklist) => (words) => words.filter(cleanWords(blacklist))

const filterBlacklist = cleanWords(blacklist)

const filterWords = filterBlacklist(words)

console.log(filterWords)


// const cleanWords = (blacklist) => (word) =>
//     !blacklist.includes(word)

// const filterWords = (blacklist) => (words) =>
//     words.filter(cleanWords(blacklist))

// const filterBlacklist = filterWords(blacklist)
// const wordsClean = filterBlacklist(words)

// console.log('wordsClean: ', wordsClean)
// wordsClean: [ 'oi', 'como', 'vai', 'você', 'seu' ]