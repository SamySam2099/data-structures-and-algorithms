const splitArray = (nums, pivot) => {
  const left = []
  const right = []
  for (const num of nums) {
    if (num >= pivot) {
      right.push(num)
    } else {
      left.push(num)
    }
  }

  return { left, right }
}

const quickSort = nums => {
  // base case (already sorted)
  if (nums.length <= 1) {
    return nums
  }

  const pivot = nums[nums.length - 1]
  const { left, right } = splitArray(nums.slice(0, nums.length - 1), pivot)

  const sortedLeft = quickSort(left)
  const sortedRight = quickSort(right)

  return [...sortedLeft, pivot, ...sortedRight]
}

const arrays = [
  [],
  [1],
  [5, 3, 8, 1, 2],
  [10, 9, 8, 7, 6],
  [3, 3, 2, 1, 4, 4],
  [-5, 10, 0, -3, 8],
]

arrays.forEach(arr => {
  console.log('Original:', arr)
  console.log('Sorted:', quickSort(arr))
  console.log('---')
})
