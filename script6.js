function changeBackground() {
     
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
  
    document.getElementById(
      "igra6"
    ).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }