
var ArrayID=[];
document.getElementById("colorThemeBtn").addEventListener("click",()=>{
  var element =document.body;
  element.classList.toggle("dark-mode");
});
    async function fetchData() {
      try {
          const response = await fetch('./assest/data.json');
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    }
    
  
    document.addEventListener("DOMContentLoaded", async () => {
     
      const container =document.getElementById('topics');
      const data = await fetchData();
    
      if (!data) {
          return;
      }
      data.forEach(item => {
         
          const container_card =  document.createElement('div');
          
          const card = document.createElement('div');
          card.classList.add('card');
          card.addEventListener("click",async()=>{
            sessionStorage.setItem("id",item.id);
            window.open("./detailsPage.html");
          });
          const cardImg= document.createElement('img');
          cardImg.src=item.image;
          cardImg.classList.add('topic-img');
          const category=document.createElement('p');
          category.classList.add("topicCategory");
          category.textContent=item.category;
          const title = document.createElement('h2');
          title.textContent = item.topic;
    
          const body = document.createElement('p');
          body.textContent = "Auther :"+item.name;
          body.classList.add("auther-p");
          const li1=document.createElement('li');
    li1.innerHTML='<ion-icon class="star-filled" name="star"></ion-icon>';
    const li2=document.createElement('li');
    li2.innerHTML='<ion-icon class="star-filled" name="star"></ion-icon>';
    const li3=document.createElement('li');
    li3.innerHTML='<ion-icon class="star-filled" name="star"></ion-icon>';
    const li4=document.createElement('li');
    li4.innerHTML='<ion-icon class="star-filled" name="star"></ion-icon>';
    const li5=document.createElement('li');
    li5.innerHTML='<ion-icon class="star-outline" name="star-outline"></ion-icon>';
    const ul=document.createElement('ul');
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
          card.appendChild(cardImg);
          card.appendChild(category);
          card.appendChild(title);
          card.appendChild(ul);
          card.appendChild(body);
          container_card.appendChild(card);
          container.appendChild(container_card);
      });
    });

    // let restorge=sessionStorage.getItem("ArrayID");
    // let rearray=JSON.parse(restorge);
     console.log(JSON.parse(localStorage.getItem("array")));