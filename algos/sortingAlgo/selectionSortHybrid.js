const list = [1, 4, -9, 10, 2, 3]

// implement sort (O(N^2))

// start from first index and compare each item and swap if needed to keep the order
// at the end of each iteration, we know that the smallest item is added at the beginning
// => we don't check from the beginning again, we check currentIndex + 1
// we stop after the currentIndex reaches length - 2

const bubbleSort = list => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        // swap
        let temp = list[j]
        list[j] = list[i]
        list[i] = temp
      }
    }
  }
}

bubbleSort(list)
console.log(list)
