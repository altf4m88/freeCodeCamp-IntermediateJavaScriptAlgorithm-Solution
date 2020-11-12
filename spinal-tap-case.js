function spinalCase(str) {
  let regex1 = /([a-z])([A-Z])/g
  let regex2 = /\s+|_+/g;
  

  let spacedStr = str.replace(regex1, "$1 $2");

  let spinalStr = spacedStr.replace(regex2, "-").toLowerCase();

  return spinalStr;
}

spinalCase('ThisIsSpinalTap');
