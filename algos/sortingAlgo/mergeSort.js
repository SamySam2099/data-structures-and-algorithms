const mergeSortedArrays = (leftArray, rightArray) => {
  let leftIndex = 0
  let rightIndex = 0
  const sortedMergedArray = []
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortedMergedArray.push(leftArray[leftIndex])
      leftIndex++
    } else if (leftArray[leftIndex] > rightArray[rightIndex]) {
      sortedMergedArray.push(rightArray[rightIndex])
      rightIndex++
    } else {
      sortedMergedArray.push(leftArray[leftIndex])
      sortedMergedArray.push(rightArray[rightIndex])
      leftIndex++
      rightIndex++
    }
  }

  if (leftIndex === leftArray.length) {
    sortedMergedArray.push(...rightArray.slice(rightIndex))
  } else if (rightIndex === rightArray.length) {
    sortedMergedArray.push(...leftArray.slice(leftIndex))
  }

  return sortedMergedArray
}

const mergeSort = nums => {
  // base case 0 or 1 element
  if (nums.length <= 1) {
    return nums
  }

  const midIndex = Math.floor(nums.length / 2)
  const leftHalfArray = nums.slice(0, midIndex)
  const rightHalfArray = nums.slice(midIndex)

  const sortedLeft = mergeSort(leftHalfArray)
  const sortedRight = mergeSort(rightHalfArray)

  return mergeSortedArrays(sortedLeft, sortedRight)
}

const testArrays = [
  [], // empty array
  [1], // single element
  [5, 3, 8, 1, 2], // random order
  [10, 9, 8, 7, 6], // reverse sorted
  [1, 2, 3, 4, 5], // already sorted
  [3, 3, 2, 1, 4, 4], // with duplicates
  [-5, 10, 0, -3, 8], // with negative and positive numbers
]

testArrays.forEach(arr => {
  console.log('Original:', arr)
  console.log('Sorted:', mergeSort(arr))
  console.log('---')
})
