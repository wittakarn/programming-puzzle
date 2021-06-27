var rotate = function (nums, k) {
    const actualRotateCount = k % nums.length;
    const rotateArray = nums.splice(nums.length - actualRotateCount);
    nums.unshift(...rotateArray);
    console.log(nums);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([1, 2], 3);