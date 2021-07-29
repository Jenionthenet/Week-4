/*Your task is to display news to the user. The news.zip file (attached) already 
has a JSON formatted object which contains the news. Create a page which displays 
the following information related to the news.

author
title
description
url (hyperlink to go to the news)
urlToImage (image associated with the news) 
publishedAt
HARD MODE:

There is a js file called "sources.js" in the attached download. Use that file to 
display all the sources. When the user clicks on a particular source then show the 
user news from that source. If there is no news for the source then display no news 
found.

HARDER MODE:

Only display the sources which contains at least one news item.
 */

const newsUl = document.getElementById("newsUl")
const articles = news.articles 
const newsSelect = document.getElementById("selectDropDown")
const sourcesCos = sources.sources

//const sourcesBtn = document.getElementById("sourcesBtn")
//const allBtn = document.getElementById("allBtn")

newsSelect.addEventListener("change", function(){
    const selectedView = this.value 
    console.log(selectedView)
    if (selectedView == "All") {
        displayNews(articles)
    } else  {
        displaySources(articles)
    } /*else {
        //
        const filteredNews = articles.filter(function(article) {
            return article.
        } )
    }*/
})



function displayNews(newsToDisplay) {
    newsUl.innerHTML = ""
    const newsItems = newsToDisplay.map(function(article) {
       return `
        <li>
            <h2>${article.title}</h2>
            <h4>${article.author}</h4>
            <p>${article.publishedAt}</p>
            <p><a href="${article.url}">${article.url}</a></p>
            <img class= "newsPics" src="${article.urlToImage}" alt="Image related to article">
            <p>${article.description}</p>
        </li>
        `
        
    })
    newsUl.innerHTML = newsItems.join("")
}

function getSources(sourceArr) {
    const dropDown = document.querySelector("#selectdropDown")
     sourceArr.forEach(function(source) {
        
        const optionEl = document.createElement("option")
        optionEl.value = `${source.name}`
        optionEl.innerHTML = `${source.name}`
        dropDown.append(optionEl)
    })
}

function displaySources(sourceCompanies) {
    
    const select = document.querySelector("#selectDropDown")
    const filteredCos = sourceCompanies.filter(function(company) {
        return company.source.name === select.value;

    })  
    console.log(filteredCos)
    if (filteredCos.length > 0) {
        displayNews(filteredCos) 
    return
    }else{
        const ul = document.querySelector("ul")
        ul.innerHTML = "No News"

    }
    }


  


displayNews(articles)
getSources(sourcesCos)

/*window.addEventListener("load", function(){
    articles.map(function(article) {
        const content = `
        <li>
            <h2>${article.title}</h2>
            <h4>${article.author}</h4>
            <p>${article.publishedAt}</p>
            <p><a href="${article.url}">${article.url}</a></p>
            <img class= "newsPics" src="${article.urlToImage}" alt="Image related to article">
            <p>${article.description}</p>
        </li>
        `
        
    })
    newsUl.insertAdjacentHTML("beforeend", content)
}) */




