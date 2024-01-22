const addThree = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}


const three = addThree(10)(20)(30)
console.log(three)