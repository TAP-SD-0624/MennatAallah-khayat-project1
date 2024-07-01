
var ID=sessionStorage.getItem("id");
var array1=[];
document.getElementById("dark-Mode-Btn").addEventListener("click",()=>{
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
    const data = await fetchData();
    let ChosenData=data.filter(item=>item.id ==ID);
    const container =document.getElementById('details-info');
    const container_div=document.createElement("div");
    const category=document.createElement("h4");
    category.textContent=ChosenData[0].category;
    console.log(category);
    const topic=document.createElement('h3');
    topic.textContent=ChosenData[0].topic;
    topic.classList.add("details-h3");
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

    container_div.appendChild(category);
    container_div.appendChild(topic);
    container_div.appendChild(ul);
    const details_p=document.createElement('p');
    details_p.textContent=ChosenData[0].description;
    details_p.classList.add('details_p');
    container.appendChild(container_div);
    container.appendChild(details_p);
    
    const topic_img=document.getElementById('topic-img-div');
    const img=document.createElement('img');
    img.src=ChosenData[0].image;
    img.alt=ChosenData[0].topic;
    topic_img.appendChild(img);

    const name=document.getElementById('name');
    const details_topic=document.createElement('h4');
    details_topic.textContent=ChosenData[0].topic +" by ";
    const details_name=document.createElement('a');
    details_name.textContent=ChosenData[0].name;
    details_name.href="#";
    name.appendChild(details_topic);
    name.appendChild(details_name);

    const subtopics_div=document.getElementById('subtopics-div');
    const topic_sub=document.createElement('h4');
    topic_sub.classList.add('subtopics-h4');
    topic_sub.textContent=ChosenData[0].topic +" Sub Topics";
    subtopics_div.appendChild(topic_sub);
    ChosenData[0].subtopics.forEach(element => {
        const subtopic=document.createElement('div');
        subtopic.classList.add('subtopic');
        const button=document.createElement('button');
        button.classList.add('flex');
        button.classList.add('gab');
        button.classList.add('btn');
        const span=document.createElement("span");
        span.textContent=element;
        button.innerHTML='<ion-icon class="check-icon" name="checkmark-circle-outline"></ion-icon>';
        button.appendChild(span);
        subtopic.appendChild(button);
        subtopics_div.appendChild(subtopic);

        
    });

  });
 
let removeID=(array,id)=>{
  let newArr=[];
  for(var i=0;i<array.length;i++){
    if(array[i] !=id){
      newArr.push(array[i]);
    }
  }
  return newArr;
};
  document.getElementById('add').addEventListener("click",()=>{
    const btn=document.getElementById('add');
    if(btn.textContent =='Add to Favourites'){
      btn.textContent='Remove';
      let existingArray = JSON.parse(localStorage.getItem('array')) || [];
    existingArray.push(ID);
    localStorage.setItem("array",JSON.stringify(existingArray));
    }
    else if(btn.textContent =='Remove'){
      btn.textContent='Add to Favourites';
      let existingArray = JSON.parse(localStorage.getItem('array')) || [];
      existingArray=removeID(existingArray,ID);
      localStorage.setItem("array",JSON.stringify(existingArray));

    }
    
  });

  // document.getElementById('favourites-click-btn').addEventListener("click",async ()=>{
    
  //   const  favourites_div=document.getElementById("favourites-div");
  //   favourites_div.classList.toggle('show');
  //   const data = await fetchData();
  //   // let ChosenData=data.filter(item=>item.id ==ID);
  //   let existingArray = JSON.parse(localStorage.getItem('array')) || [];
  //   for(let i=0;i<existingArray.length;i++){
  //     let ChosenData=data.filter(item=>item.id ==existingArray[i]);
  //     const topic_div = document.createElement("div");
  //     topic_div.classList.add("favourite-topic");
  
  //     const topic_img_div = document.createElement("div");
  //     topic_img_div.classList.add("topic-img", "favourites-topic-img");
  
  //     const imgElement = document.createElement("img");
  //     imgElement.src = ChosenData[0].image;
  //     imgElement.alt = ChosenData[0].topic;
  
  //     topic_img_div.appendChild(imgElement);
  
  //     const info_div = document.createElement("div");
  //     info_div.classList.add("information-for-topic");
  
  //     const h3Element = document.createElement("h3");
  //     h3Element.textContent = ChosenData[0].topic;
  
  //     const stars_ul = document.createElement("ul");
  //     const li1=document.createElement('li');
  //   li1.innerHTML='<ion-icon class="star-filled" name="star"></ion-icon>';
  //   const li2=document.createElement('li');
  //   li2.innerHTML='<ion-icon class="star-filled" name="star"></ion-icon>';
  //   const li3=document.createElement('li');
  //   li3.innerHTML='<ion-icon class="star-filled" name="star"></ion-icon>';
  //   const li4=document.createElement('li');
  //   li4.innerHTML='<ion-icon class="star-filled" name="star"></ion-icon>';
  //   const li5=document.createElement('li');
  //   li5.innerHTML='<ion-icon class="star-outline" name="star-outline"></ion-icon>';
  //   stars_ul.appendChild(li1);
  //   stars_ul.appendChild(li2);
  //   stars_ul.appendChild(li3);
  //   stars_ul.appendChild(li4);
  //   stars_ul.appendChild(li5);
  //     info_div.appendChild(h3Element);
  //     info_div.appendChild(stars_ul);
  
  //     topic_div.appendChild(topic_img_div);
  //     topic_div.appendChild(info_div);
  
  //     favourites_div.appendChild(topic_div);

  //   }
  //      });
