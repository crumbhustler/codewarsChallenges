// Description:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
  let sa = (depth * width + depth * height + width * height) * 2
  let vol = width * height * depth
  let answer = [sa, vol]
  return answer;
  
}