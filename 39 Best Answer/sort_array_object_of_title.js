const array = [
    { title: 'Apple' },
    { title: 'Orange' },
    { title: 'Banana' },
    { title: 'Pineapple' }
  ];
  
  /*const sortedArray = array.sort((a, b) => a.title.localeCompare(b.title));
  console.log(sortedArray);*/

  let mysort = array.sort((a,b) => a.title.localeCompare(b.title));
  console.log(mysort);

  
  