let arr =[19,54,6,4,44]
for(let i=0;i<5;i++){
    console.log(arr[i])
}
arr.forEach((x,i) => {
    console.log(x,i)
})

arr.sort((a,b) => {
    if(a>b) return 1;
    else return -1;
})

console.log(arr)

var arr2 = arr.filter(x =>{
    if(x%2 == 0) return x
})

var arr3 = arr.filter( x => x%2 == 0 )  //filter doesn't change the original array but sort does...
console.log(arr2)

var s1 ={ rno : 1,name :"jhvvd"}
console.log(s1)
console.log(s1.rno)
var sarr =[{rno : 1 , name :"aditya"},{rno : 2 ,name:"dharpure"}]
sarr.forEach((x) => console.log(x))