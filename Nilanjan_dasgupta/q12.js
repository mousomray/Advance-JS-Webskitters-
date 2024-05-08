
function low_grt(arr)
{
    let len=arr.length;
    arr.sort();
    console.log("Second Lowest: "+arr[1]);
    console.log("Second Largest: "+arr[len-2]);
    
}
let arr=[32,2,1,34,55,65]
low_grt(arr)