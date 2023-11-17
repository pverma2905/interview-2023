// document.getElementById("child").addEventListener('click',(e)=>{
//     console.log(`child click from ${e.target.id}`)
// },true)
// document.getElementById("parent").addEventListener('click',(e)=>{
//     console.log(`parent click from ${e.target.id}`)
// }, true)
document.getElementById("grandParent").addEventListener('click',(event)=>{
    if(event.target.id=="child"){
        console.log("child clicked")
    } else if(event.target.id=="parent"){
        console.log("child clicked")
    }if(event.target.id=="grandParent"){
        console.log("child clicked")
    }
}, false)