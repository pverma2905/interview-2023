document.getElementById("child").addEventListener('click',(e)=>{
    console.log(`child click from ${e.target.id}`)
},true)
document.getElementById("parent").addEventListener('click',(e)=>{
    console.log(`parent click from ${e.target.id}`)
}, true)
document.getElementById("grandParent").addEventListener('click',(e)=>{
    console.log(`grandParent click from ${e.target.id}`)
}, true)