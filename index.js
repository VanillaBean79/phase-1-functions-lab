function distanceFromHqInBlocks (block) {
    
     if (block > 42){
        return (block - 42)
        
     }else {
        return (42 - block)
     }
    }


function  distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264
    
    
  
}
  function distanceTravelledInFeet(start, destination) {
        return Math.abs((start - destination) * 264);
      }
      
      function calculatesFarePrice(start, destination){
        const distanceTravelled = distanceTravelledInFeet(start, destination)
            if (distanceTravelled < 400){
                return(0)
            }else if (distanceTravelled >= 400 && distanceTravelled <= 2000){
                return (distanceTravelled -400)* .02
            } else if (distanceTravelled >= 2000 && distanceTravelled <=2500){
                return (25)
                }else if (distanceTravelled >2500){
                    return ("cannot travel that far")
                }
            } 
        
    
      
       

        
        
        
    