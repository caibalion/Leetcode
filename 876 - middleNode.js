const middleNode = (head) => {
    console.log('length: ', head.length)
    let nodeIndex = Math.floor(head.length/2)
    console.log('middleNode: ',nodeIndex)
    let arr = head.splice(nodeIndex)
    console.log(arr)
    return arr
  }

  middleNode([20,21,24,25,56,31])
  middleNode([0,1,2,3,4,5,6])
  middleNode([5,4,3,2,1])