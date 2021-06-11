
 /* eslint-disable */


let clicked = true;

export default() => {
    if(!clicked) {
      clicked = true;
      document.getElementById('btn').innerHTML = "On"
      document.getElementById('output').innerHTML = "Switched On"
    } else {
      clicked = false
      document.getElementById('btn').innerHTML = "Off"
      document.getElementById('output').innerHTML = "Switched Off"
    }
  }