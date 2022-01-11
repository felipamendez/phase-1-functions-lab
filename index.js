// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
     return block - 42 }
   else if (block < 42) {
    return 42 - block }
  }

  distanceFromHqInBlocks(50);

  function distanceFromHqInFeet(block) {
    if (block > 42) {
       return (block - 42)*264 }
     else if (block < 42) {
      return (42 - block)*264 }
    }

    distanceFromHqInFeet(20);

    function distanceTravelledInFeet(start, destination) {
        if (start > destination) {
        return (start - destination)*264 }
        else if (start < destination) {
        return (destination - start)*264 }
      }

      distanceTravelledInFeet(26, 30);

      function calculatesFarePrice(start, destination) {
        function distance() {
            if (start > destination) {
            return (start - destination)*264 }
            else if (start < destination) {
            return (destination - start)*264 } 
        }
        if (distance() < 400) {
            return 0 }
            else if (distance() < 2000) {
                return ((distance()-400) * .02)}
            else if (distance() < 2500)
                return 25
            else if (distance() > 2500) {
                return 'cannot travel that far'
            }
      }

      calculatesFarePrice(34, 32);