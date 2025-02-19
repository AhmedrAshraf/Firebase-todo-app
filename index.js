const arr = [11, 13, 15, 20]

for(let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i]
    if(diff > 1) {
        for(let j = 1; j < diff; j++) {
            arr.splice(i + j ,0 , arr[i] + j)
        }
    }
}
console.log("arr", arr);
