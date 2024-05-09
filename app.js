
const headingTitle="Make"
document.getElementById('heading').innerHTML=headingTitle

document.getElementById('headingtwo').innerHTML= ` remote work`

document.getElementById("paragraph").innerHTML = `Get your team in sync, no matter your location. 
<br> Streamline processes, create team rituals, and
 <br>watch productivity soar.`;


const icons = [
    {
        id:1,
        picture:"images/client-databiz.svg", 

    },

    {
        id:2,
        picture:"images/client-audiophile.svg",

    },

    {
        id:3,
        picture:"images/client-meet.svg",

    },

    {
        id:4,
        picture:"images/client-maker.svg",

    },

]

const bottomIcons = document.querySelector(".bottomIcons")

window.addEventListener("DOMContentLoaded", function(){

    const showInhtlml = icons.map((icons,index) =>{
        return `
        <div class="bottomIcons">
        <img class="bottompics" src=${icons.picture}> 
     
        
        </div>
    
    `

    })

    bottomIcons.innerHTML = showInhtlml


} )





