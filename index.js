const walkcycleDoc = document.getElementById("walkcycle-1");

document.addEventListener("keypress", (event)=>{
  if (event.keycode == "w") {
    console.log("w")
  } else if (event.keycode == "s") {
    console.log("s")
  } else if (event.keycode == "a") {
    console.log("a")
  } else if (event.keycode == "d") {
    console.log("d")
  } else {
    return;
  }
})