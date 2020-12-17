let doorImage1 = document.getElementById('door_a')
let doorImage2 = document.getElementById('door_b')
let doorImage3 = document.getElementById('door_c')
let flyDoorPath =  "findfly.png"
let oceanDoorPath =  "ocean.png"
let forestDoorPath = "forest.png"

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;


const randomFindDoorGenerator = () =>{
let findDoor = Math.floor(Math.random() *3)
if(findDoor == 0){
     openDoor1 = flyDoorPath
     openDoor2 = oceanDoorPath
     openDoor3 = forestDoorPath

} else if(findDoor == 1){
    openDoor2 = flyDoorPath
    openDoor3 = oceanDoorPath 
    openDoor1 = forestDoorPath

}else if (findDoor ==2){
    openDoor3 = flyDoorPath
    openDoor1 = oceanDoorPath
    openDoor2 = forestDoorPath

}
}

randomFindDoorGenerator();
doorImage1.onclick = ()=>{
    doorImage1.src = openDoor1
}
doorImage2.onclick = ()=>{
    doorImage2.src = openDoor2
}
doorImage3.onclick = ()=>{
    doorImage3.src = openDoor3
}


function playDoor(){
    
}






