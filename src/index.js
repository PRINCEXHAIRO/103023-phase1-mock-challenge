// your code here

const cakeAPI = "http://localhost:3000/cakes"
const yourReview = document.getElementById('review')
const button = document.querySelector('.button')
const img1URL = "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/let-it-drip-cake.jpg"
let img = document.getElementById('cake-image')

//recieve cake data 


fetch(cakeAPI) 
.then(res => res.json)
.then ((data) => {
    console.log(img1URL)
});

function renderImage (img){ 
    img.forEach((img1)=> { 
            return cakeAPI.appendChild(img1URL)
    });
}


