const apiKey = "2059bc58c2544fdb8469a46394b8f3eb"
const blogcontainer = document.getElementById("blog-container");
 async function fetchRandomNews() {
const searchfield=document.getElementById("search-input");
// const subbutton=document.getElementById("search-btn");
    try {
        const apiUrl =`
        https://newsapi.org/v2/everything?q=tesla&pageSize=15&apikey=${apiKey}`
        const response = await fetch(apiUrl)
        const data= await response.json();
      return data.articles;
    } catch (error) {
        console.log("Error fetching random news",error);
        return[]
    }
}
// subbutton.addEventListener("click",async()=>{
//     const query =searchfield.ariaValueMax.trim()
//     if (query !== ""){
//         try{
// const article = await fetchNewsQuery(query)
// displayBlogs(article)
//         }catch(error){
//             console.log("Error fetching news by query",error);
//     }
// }
// });
 async function fetchNewsQuery(query){
    try {
        const apiUrl =`
        https://newsapi.org/v2/everything?q=${query}tesla&pageSize=15&apikey=${apiKey}`
        const response = await fetch(apiUrl)
        const data= await response.json();
      return data.articles;
    } catch (error) {
        console.log("Error fetching random news",error);
        return[]
    }
}
function displayBlogs(articles){
blogcontainer.innerHTML=""
articles.forEach((article) =>{
const blogcard = document.createElement("div")
blogcard.classList.add("blog-card")
const img = document.createElement("img")
img.src = article.urlToImage
img.alt=article.title
const title =document.createElement("h2")
const trunkcatedtitle=article.title.length>30?article.title.slice(0,30) + "....." :
article.title;
title.textContent =trunkcatedtitle;
const description = document.createElement("p");
const trunkcateddescription=article.description.length>120?article.description.slice(0,120) + "....." :
article.description;
description.textContent =trunkcateddescription;
description.textContent = article.description;
description.textContent =trunkcateddescription;

blogcard.appendChild(img);

blogcard.appendChild(title);

blogcard.appendChild(description);
blogcard.addEventListener("click",(
    
)=>{
    window.open(article.url,"_blank");
});
blogcontainer.appendChild(blogcard);
})
}
(async ()=>{
    try{
       const articles= await fetchRandomNews
        ();

       displayBlogs(articles);
    }
    catch(error) {
        console.error("Error fetching random news",error);
    }
})();