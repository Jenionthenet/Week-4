let names = ["Jim", "Johnson", "Jenifer", "Jane", "James", "Jenifer", "Jane"]
let newNames = []

function removeDuplicate(){
   
 newNames = [... new Set(names)]

}


 removeDuplicate()
 console.log(newNames)

 