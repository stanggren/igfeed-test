// $(document).ready(function(){
//     var useFeed = new Instafeed({
//         get: 'user',
//         userId: '17841400323040171',
//         limit: 12,
//         resolution: 'standard_resolution',
//         accessToken: 'IGQVJYN29uRmsxZAzJ3Uk15ZAFdtTGI3dnpIckpLc0JpRWI3RDdEZAlk4M014WlFWWUNnT3dlUHkycTlYbFBRRVFIV1lFQjRhRDR5RDdGUDVXU0t5eUVlTkJzUEY0OHB5MHpIemhFNG5ZAWFk4d21PaHllegZDZD',
//         sortBy: 'most-recent',
//         template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>'
//     });
//     useFeed.run();
// })

const token = 'IGQVJYN29uRmsxZAzJ3Uk15ZAFdtTGI3dnpIckpLc0JpRWI3RDdEZAlk4M014WlFWWUNnT3dlUHkycTlYbFBRRVFIV1lFQjRhRDR5RDdGUDVXU0t5eUVlTkJzUEY0OHB5MHpIemhFNG5ZAWFk4d21PaHllegZDZD';
const michaToken = 'IGQVJWVmg0VjlGUWNhd0hmNUdDNGd4LUhfRWdsX3BBRl8talUwRWFhWFVUYWRlUGdlZA182V2ViLUthczJUdGxOSXVhZA3ptVjd6NWpfWE9IWVZA1cUxkNjIydUlmTFJ3bk5fNUtjZAUpQbWVkRHE3LW1VSUlxQmV2cnVJT2pr';
async function fetchData(u) {
    try {
        const url = u
        const result = await fetch(url);
        const data = await result.json();
        // console.log(data.data);
        getPosts(data.data);
    } catch (error) {
        console.error(error);
    }
}


async function getPosts(d){
    for (let i = 0; i < 9; i++){
        try {
            const url = `https://graph.instagram.com/${d[i].id}?fields=id,media_type,media_url,permalink,username,timestamp&access_token=${michaToken}`
            const result = await fetch(url);
            const data = await result.json();
            createElement(data, i);
        } catch (error) {
            console.error(error);
        }
    }
}

fetchData(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${michaToken}`);

function createElement(d, i){
    let a = document.createElement('a');
    a.href = d.permalink;

    if(i == 0 || i == 5 || i == 6 ){
        a.classList.add('ig-img-big');
    } else {
        a.classList.add('ig-img-small');
    }


    let img = document.createElement('img');
    img.src = d.media_url;
    img.classList.add("img");

    a.appendChild(img);
    if (i == 0){
        let parent = document.getElementById('ig-group-1');
        console.log(parent);
        parent.appendChild(a);   
    } else if (i == 5){
        let parent = document.getElementById('ig-group-2');
        parent.appendChild(a); 
    } else if (i == 6){
        let parent = document.getElementById('ig-group-3');
        parent.appendChild(a); 
    } else if (i == 1 || i == 2){
        let parent = document.getElementById('ig-sub-group-1');
        parent.appendChild(a);
    } else if (i == 3 || i == 4){
        let parent = document.getElementById('ig-sub-group-2');
        parent.appendChild(a);
    } else if (i == 7 || i == 8){
        let parent = document.getElementById('ig-sub-group-3');
        parent.appendChild(a);
    }
}

let templateList = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg'];

// for (let t = 0; t < templateList.length; t++){
//     createElementTemplate(t, templateList[t]);
// }

function createElementTemplate(t, src){
    let a = document.createElement('a');
    //a.href = d.permalink;

    if(t == 0 || t == 5 || t == 6 ){
        a.classList.add('ig-img-big');
    } else {
        a.classList.add('ig-img-small');
    }


    let img = document.createElement('img');
    img.src = `./images/${src}`;
    img.classList.add("img");


    a.appendChild(img);

    console.log(a);
    if (t == 0){
        let parent = document.getElementById('ig-group-1');
        console.log(parent);
        parent.appendChild(a);   
    } else if (t == 5){
        let parent = document.getElementById('ig-group-2');
        parent.appendChild(a); 
    } else if (t == 6){
        let parent = document.getElementById('ig-group-3');
        parent.appendChild(a); 
    } else if (t == 1 || t == 2){
        let parent = document.getElementById('ig-sub-group-1');
        parent.appendChild(a);
    } else if (t == 3 || t == 4){
        let parent = document.getElementById('ig-sub-group-2');
        parent.appendChild(a);
    } else if (t == 7 || t == 8){
        let parent = document.getElementById('ig-sub-group-3');
        parent.appendChild(a);
    }


}





// switch(i){
//     case 0:
//         a.classList.add('a');
//         a.classList.add('big');
//         break;
//     case 1:
//         a.classList.add('b');
//         a.classList.add('small');
//         break;
//     case 2: 
//         a.classList.add('c');
//         a.classList.add('small');
//         break;
//     case 3:
//         a.classList.add('d');
//         a.classList.add('small');
//         break;
//     case 4:
//         a.classList.add('e');
//         a.classList.add('small');
//         break;
//     case 5:
//         a.classList.add('f');
//         a.classList.add('big');
//         break;
//     case 6:
//         a.classList.add('g');
//         a.classList.add('big');
//         break;
//     case 7:
//         a.classList.add('h');
//         a.classList.add('small');
//         break;
//     case 8:
//         a.classList.add('j');
//         a.classList.add('small');
//         break;
// }