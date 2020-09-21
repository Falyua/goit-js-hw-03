const findBestEmployee = function(employees) {
  let bestWorker = Object.entries(employees);
  
  
  let bestName = bestWorker[0][0];
  let bestScore = bestWorker[0][1];
  // console.log(bestName, bestScore);
  for(let i = 1; i < bestWorker.length; i += 1){
    // console.log(bestWorker[i]);
    const innerWorker = bestWorker[i];
  
    let name = innerWorker[0];
  
    let score = innerWorker[1];
  
    if(bestScore < score){
      bestScore = score;
      bestName = name;
  
    }
  }
  return bestName;
  };
  
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  );
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  );
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  );