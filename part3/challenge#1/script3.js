function printForcast(arr) {
    let modify = arr.map((element) => `... ${element}C in ${arr.indexOf(element) + 1} day `)
    const result = modify.join(' ')
    return result
  }
  
  //temps = [17, 21, 23]
  temps = [12, 5, -5, 0, 4]
  
  console.log(printForcast(temps))