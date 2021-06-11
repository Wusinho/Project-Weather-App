
 import functionToCelsius from './functionToCelsius'



export default async (value) => {
   
    document.getElementById('output').innerText = functionToCelsius(value)  
    
  }