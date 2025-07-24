function printPyramid() {
    const y = 13; 
    const x = 9;   
    for (let i = 1; i <= x; i++) {
      
        console.log("*".repeat(i));
    }


    for (let i = x - 1; i >= 1; i--) {
      
        console.log("*".repeat(i));
    }
}


printPyramid();