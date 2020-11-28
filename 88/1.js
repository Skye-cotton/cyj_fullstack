// function merge{

// }
//JS 里面变量的类型是由值决定的， 弱类型
// m+n <= length
/*const merge =(nums1,m,nums2,n) =>{//箭头函数 es6
// 把nums2合并到nums1中
	// [1,2,3,0,0,0]
	// 重新排序
	let current2 = n-1;//定义一个指针
	for(let i = nums1.length - 1;i >= nums1.length - n;i--){
		nums1[i] = nums2[current2--];//好理解 nums2 有个遍历
	}
    // console.log(nums1);
    return nums1.sort((a,b) => a-b) // a-b从小到大排序，b-a 从大到小排序
}
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))*/

const merge =(nums1,m,nums2,n) =>{
	let i =m-1;
	let j =n-1;
	let k =m+n-1;
	for(;i>=0&& j>=0;k--){
		if(nums1[i]>nums2[j]){
			nums1[k]=nums1[i]
			i--
		}else{
			nums1[k]=nums2[j]
			j--
		}
	}
	for(;j>=0;k--){
		nums1[k]=nums2[j]
		j--
	}
	console.log(nums1);
}
merge([1,2,3,0,0,0],3,[2,5,6],3)