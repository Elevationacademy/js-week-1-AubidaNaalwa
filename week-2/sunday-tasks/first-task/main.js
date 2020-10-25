const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

const strand = []
strand.push(...genes)
console.log(strand)
strand.splice(2,1,genes[genes.length-1])
strand[strand.length-1] = genes[2]
console.log(strand)
let removedItem = strand.splice(3,1)
strand.push(removedItem[0],removedItem[0])
console.log(strand)
strand.unshift("FXT")
console.log(strand)
// Extra work 
let p = document.getElementById('answer')
p.innerHTML = "new strand" + "<br>"
for(i = 0 ; i< strand.length ; i++){
    p.innerHTML += i+ strand[i] + "<br>"
}