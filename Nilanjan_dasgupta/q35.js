let pluralDict = {
    "geek": "geeks",
    "spy": "spies",
    "foot": "feet",
    "woman": "women"
  }
  function plurazie(singularWord,count) {
    return count>1? pluralDict[singularWord] :singularWord  
  }
  console.log(plurazie("woman",2));