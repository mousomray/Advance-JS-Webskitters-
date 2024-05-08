let article ={
    title: 'Java script',
    writter: 'Chamera',
}


let {title, subtitle = 'No subtitle',writter} = article;

let display = (article) =>{
    console.log(article.title,' ',writter);
}

display(article);

