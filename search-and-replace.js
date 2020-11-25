function myReplace(str, before, after) {
  let modifiedAfter;

  if (before[0] == before[0].toUpperCase()) {
    modifiedAfter = after.charAt(0).toUpperCase() + after.slice(1)
     }
  else if (before[0] == before[0].toLowerCase()){
      modifiedAfter = after.charAt(0).toLowerCase() + after.slice(1)
  }

  console.log(str.replace(before, modifiedAfter))
  return str.replace(before, modifiedAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");
