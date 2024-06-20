// [{}, {},{}]

const arr = [1,2,3,4,5,6,7]


// for of loop
for (const key in arr) {
    // console.log(key);
}

//loop for map

const map = new Map()
map.set('IN', "India")
map.set("USA", 'United state of America')
map.set("Fr", 'france')
map.set("IN", "India")  //Map values are the unique so this map value is not going to print

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
    
}


//we can't iterate map using for in



                                        




