let newsList = document.getElementById("container")

for(let index = 0; index < news.articles.length; index++) {
   let story = news.articles[index]
   let newsItem = `
   <li>
  
   <p> ${story.author}</p>
   <p> ${story.title}</p>
   <p> ${story.description}</p>
   <p> <a href=${story.url}>Click Here For Full Story</a> </p>
   <p> <img src="${story.urlToImage}" width="400" height="300"</p>
   <p> ${story.publishedAt}</p>
   </li>
   `

newsList.insertAdjacentHTML("beforeend",newsItem)
   
  }



