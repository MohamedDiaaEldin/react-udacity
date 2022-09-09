

/// destruction
const points = [10, 20, 30 ]
const [c, v,b] = points 
// console.log(points)
// console.log(c)
// console.log(v)
// console.log(b)


// object literal shorthand 
const ob = {
    c,
    v, 
    b
}
// console.log(ob)

//// loops 
for ( const point of points ){
    // console.log(point)
}

//destruction arrays 
const books = ['arabic', 'english']
const books2 = books
const books3 = [...books]
// console.log(books === books2)
// console.log(books2 === books3)


//// rest parameter
const languages = ['arabic', 'english', 'anyting', 'hdsfkaj']
const [ar, en, ...all] = languages
// console.log(ar)
// console.log(all)


// map 
const languages_plus = languages.map( lang => lang + '!')
// console.log(languages_plus)
// console.log(languages_plus === languages)

// filter 
const ages = [20, 30, 60]
const old_people = ages.filter( age => age>20 )
// console.log(old_people)


