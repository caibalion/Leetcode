const numberOfSteps = (num) => {
    let value = num;
    let steps = 0;
    for (let i = 0; value > 0; i++) {
      if (value % 2 === 0) {
        value = value / 2;
        steps++;
      }
      if (value % 2 !== 0){
        value = value - 1;
        steps++;
      }
    }
    return steps
  }
numberOfSteps(14);
