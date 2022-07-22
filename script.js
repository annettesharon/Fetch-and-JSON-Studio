// TODO: add code here
// window.addEventListener("load", function(){
//     let json = [];
//     this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
//         //console.log(response);
//         return response.json().then(function(json) {
//             const container = document.querySelector("#container");
//             console.log(json);
//             let astronauts ="";
//             for(astronaut of json) {
               

//                 astronauts +=`
//             <div class="astronaut" id="container">
//             <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
//             <ul>
//              <li>Hours in space: ${astronaut.hoursInSpace}</li>
//              <li color:green>Active: ${astronaut.active}</li>
//              <li id="skills">Skills: ${astronaut.skills}</li>
//              </ul>
//              <img class="avatar" src=${astronaut.picture}>
//             </div>
            
//             `;
//             if(astronaut.active==true){
//                 `${astronaut.active}.text-color : green`
//             }
            
//         }
//         <p> Number of astronauts : `${Number(astronauts)}` </p>
//             container.innerHTML = astronauts;
//         });
        
//     });
// });

window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
        return response.json();
    })
    .then((json) => {
        const container = document.getElementById("container");
        let astronautHTML = "";
        for(astronaut of json) {
            console.log(astronaut);
            astronautHTML += `
            <div class="astronaut">
   <div class="bio">
      <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
      <ul>
         <li>Hours in space: ${astronaut['hoursInSpace']}</li>
         <li id="active">Active: ${astronaut['active']}</li>
         <li>Skills: ${astronaut.skills.join(",")}</li>
      </ul>
   </div>
   <img class="avatar" src=${astronaut.picture}>
</div>
`;
        }
        
        container.innerHTML = astronautHTML;
    });

});