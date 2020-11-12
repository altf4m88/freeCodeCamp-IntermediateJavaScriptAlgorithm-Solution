function whatIsInAName(collection, source) {
  var arr = [];
  let sourcekeys = Object.keys(source)

  console.log(sourcekeys)
  arr = collection.filter(function(obj){
    for(let x = 0; x < sourcekeys.length; x++){
      if(!obj.hasOwnProperty(sourcekeys[x]) 
        || obj[sourcekeys[x]] !== source[sourcekeys[x]]){
        return false;
      }
    }
    return true;
  })

  console.log(arr)
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
