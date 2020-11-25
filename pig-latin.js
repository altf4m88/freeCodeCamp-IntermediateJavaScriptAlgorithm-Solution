function translatePigLatin(str) {
  let regex = /^[^aiueo]+/;
  let consonantCheck = str.match(regex);
  let pigLatin;
  console.log(consonantCheck)

  if(consonantCheck === null){
    pigLatin = str.concat("way");
  }else{
    pigLatin = str.replace(regex, "")
    .concat(consonantCheck)
    .concat("ay");
  }
  console.log(pigLatin)
  return pigLatin;
}

translatePigLatin("california");
