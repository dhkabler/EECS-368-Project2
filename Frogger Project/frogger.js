document.addEventListener('DOMContentLoaded', ()=>
{
    const gridBlock = document.querySelectorAll('.board div')
    const car = document.querySelectorAll('.car')
    const log = document.querySelectorAll('.log')
    const gameChecker = document.querySelector('#gameChecker') 
     
    const start = document.querySelector("#start")
    const currentLevel = document.querySelector('#level')
    let level = 1
    let currentFrog = 76
    let xAxis = 5
    let yAxis = 9
    let startBackground
   
    gridBlock[currentFrog].classList.add('frog')
    

    start.addEventListener('click', () =>
    {
        level=1
        currentLevel.innerHTML = "Level 1"
        gameChecker.innerHTML = "Find your way to the checkered goal three times! Dodge the cars and the water!"
        
        gridBlock[currentFrog].classList.add('frog')
        difAndMovCheck()
        
    })
    
    function difAndMovCheck()
    {
        const difficulty = document.getElementById("difficulty").value 
        const movement = document.getElementById("movement").value 

        if(movement == "Default")
        {
            if(difficulty == "Easy")
            {
               
                clearInterval(startBackground)
                startBackground=setInterval(moveBackground, 1000)
                document.addEventListener("keydown", move, false)
            }
            else if(difficulty == "Medium")
            {
                
                clearInterval(startBackground)
                startBackground=setInterval(moveBackground, 500)
                document.addEventListener("keydown", move, false)
            }
            else if(difficulty == "Hard")
            {
                
                clearInterval(startBackground)
                startBackground=setInterval(moveBackground, 100)
                document.addEventListener("keydown", move, false)
            }
            else
            {
                
                startBackground=setInterval(moveBackground, 1000)
                document.addEventListener("keydown", move, false)
            }
        }
        else if(movement == "opposite")
        {
            if(difficulty == "Easy")
            {
               
                clearInterval(startBackground)
                startBackground=setInterval(moveBackgroundOpposite, 1000/(level))
                document.addEventListener("keydown", move, false)
            }
            else if(difficulty == "Medium")
            {
                
                clearInterval(startBackground)
                startBackground=setInterval(moveBackgroundOpposite, 500/(level))
                document.addEventListener("keydown", move, false)
            }
            else if(difficulty == "Hard")
            {
                
                clearInterval(startBackground)
                startBackground=setInterval(moveBackgroundOpposite, 100/(level))
                document.addEventListener("keydown", move, false)
            }
            else
            {
                
                startBackground=setInterval(moveBackgroundOpposite, 1000/(level))
                document.addEventListener("keydown", move, false)
            }
        }
        
    }

    

    
    

   
    function move(event)
    {
        
        gridBlock[currentFrog].classList.remove('frog')
        
        switch(event.code)
        {
            case "ArrowDown":
                if(yAxis<9)
                {
                    yAxis++
                    currentFrog=currentFrog+9
                    gridBlock[currentFrog].classList.add('frog')
                    break
                }
                
            case "ArrowRight":
                if(xAxis<9)
                {
                    xAxis++
                    currentFrog++
                    gridBlock[currentFrog].classList.add('frog')
                    break
                }
                
            case "ArrowUp":
                if(yAxis>1)
                {
                    yAxis--
                    currentFrog=currentFrog-9
                    gridBlock[currentFrog].classList.add('frog')
                    break
                }
                
            case "ArrowLeft":
                if(xAxis>1)
                {
                    xAxis--
                    currentFrog--
                    gridBlock[currentFrog].classList.add('frog')
                    break
                }       
        }
       
      gameCheck()
        
    }
    
    function gameCheck()
    {
        if(gridBlock[currentFrog].classList.contains('w1') || gridBlock[currentFrog].classList.contains('c1') || gridBlock[currentFrog].classList.contains('w2') || gridBlock[currentFrog].classList.contains('c2'))
        {
            gameChecker.innerHTML = "You lose."
            document.removeEventListener("keydown", move, false)
            clearInterval(startBackground)
            gridBlock[currentFrog].classList.remove('frog')
            currentFrog = 76
            xAxis = 5
            yAxis = 9
            
        }
        if(currentFrog<9 && gridBlock[currentFrog].classList.contains('finishBlocks'))
        {
            
            gridBlock[currentFrog].classList.remove('frog')
            currentFrog = 76
            xAxis = 5
            yAxis = 9
            level++
            
            if(level>3)
            {
                gameChecker.innerHTML = "You win! Press start to replay!"
                
                document.removeEventListener("keydown", move, false)
                clearInterval(startBackground)
                

            }
            else if (level == 2)
            {
                currentLevel.innerHTML = "Level 2"
                document.addEventListener("keydown", move, false)
                gridBlock[currentFrog].classList.add('frog')
                difAndMovCheck()
            }
            else if(level == 3)
            {
                currentLevel.innerHTML = "Level 3"
                document.addEventListener("keydown", move, false)
                gridBlock[currentFrog].classList.add('frog')
                difAndMovCheck()
            }
           
        }
    }
    
    function moveBackground()
    {
        
        car.forEach(car=>moveCar(car))
        log.forEach(log=>moveLog(log))
        logFrog()
        gameCheck()
    }
    function moveBackgroundOpposite()
    {
        car.forEach(car=>moveCarOpposite(car))
        log.forEach(log=>moveLogOpposite(log))
        logFrog()
        gameCheck()
    }

    function moveCar(car)
    {
        
            switch(true)
            { 
               

                case car.classList.contains('c2'):
                    
                    car.classList.remove('c2')
                    car.classList.add('s3')
                    
                    break
                
                case car.classList.contains('s3'):
                   
                    car.classList.remove('s3')
                    car.classList.add('s4')
                    
                    break
                
                case car.classList.contains('s4'):
                    
                    car.classList.remove('s4')
                    car.classList.add('c2')
                    
                    break
                case car.classList.contains('c1'):
                    car.classList.remove('right')
                    car.classList.remove('c1')
                    car.classList.add('s1')
                    
                    break
                
                case car.classList.contains('s1'):
                    car.classList.remove('right')
                    car.classList.remove('s1')
                    car.classList.add('s2')
                    
                    break
                
                case car.classList.contains('s2'):
                    car.classList.remove('right')
                    car.classList.remove('s2')
                    car.classList.add('c1')
                    
                    break
            }
        
        
       
            
        
    }

    function moveLog(log)
    {
    
            switch(true)
            {
                case log.classList.contains('w1'):

                
                    log.classList.remove('w1')
                    
                    log.classList.add('l1')
                    
                    
                    break
                
                case log.classList.contains('l1'):
                    
            
                    log.classList.remove('l1')
                    
                    log.classList.add('l2')
                    
                    
                    break
                
                case log.classList.contains('l2'):
                
                    log.classList.remove('l2')
                    
                    log.classList.add('l3')
                    
                    
                    break
                
                case log.classList.contains('l3'):
                
                    log.classList.remove('l3')
                    
                    log.classList.add('w1')
                    
                   
                    break

                case log.classList.contains('w2'):

                        log.classList.remove('right')
                        log.classList.remove('w2')
                        
                        log.classList.add('l4')
                        
                        
                        break
                    
                case log.classList.contains('l4'):
                        
                        log.classList.remove('right')
                        log.classList.remove('l4')
                        
                        log.classList.add('l5')
                        
                        
                        break
                    
                case log.classList.contains('l5'):
                        log.classList.remove('right')
                        log.classList.remove('l5')
                        
                        log.classList.add('l6')
                       
                       
                        break
                    
                case log.classList.contains('l6'):
                        log.classList.remove('right')
                        log.classList.remove('l6')
                        
                        log.classList.add('w2')
                        
                        
                        break
            }
        
       
    }

    function moveCarOpposite(car)
    {
        switch(true)
            { 
                case car.classList.contains('c2'):
                    
                    car.classList.remove('c2')
                    car.classList.add('s3')
                    
                    break
                
                case car.classList.contains('s3'):
                    
                    car.classList.remove('s3')
                    car.classList.add('s4')
                    
                    break
                
                case car.classList.contains('s4'):
                    
                    car.classList.remove('s4')
                    car.classList.add('c2')
                    
                    break
                case car.classList.contains('c1'):
                    car.classList.add('right')
                    car.classList.remove('c1')
                    car.classList.add('s2')
                    
                    break
                
                case car.classList.contains('s1'):
                    car.classList.add('right')
                    car.classList.remove('s1')
                    car.classList.add('c1')
                    
                    break
                
                case car.classList.contains('s2'):
                    car.classList.add('right')
                    car.classList.remove('s2')
                    car.classList.add('s1')
                    
                    break
            }
    }
    
    function moveLogOpposite(log)
    {
        switch(true)
        {
                case log.classList.contains('w1'):

                    
                    log.classList.remove('w1')
                    
                    log.classList.add('l1')
                    
                    break
                
                case log.classList.contains('l1'):
                    
                    
                    log.classList.remove('l1')
                   
                    log.classList.add('l2')
                   
                    break
                
                case log.classList.contains('l2'):
                    
                    log.classList.remove('l2')
                    
                    log.classList.add('l3')
                   
                    break
                
                case log.classList.contains('l3'):
                    
                    log.classList.remove('l3')
                    
                    log.classList.add('w1')
                    
                    break

                case log.classList.contains('w2'):
                        
                        log.classList.add('right')
                        log.classList.remove('w2')
                       
                        log.classList.add('l6')
                       
                        break
                    
                case log.classList.contains('l4'):
                        
                        log.classList.add('right')
                        log.classList.remove('l4')
                       
                        log.classList.add('w2')
                        
                       
                        break
                    
                case log.classList.contains('l5'):
                        
                        log.classList.add('right')
                        log.classList.remove('l5')
                       
                        log.classList.add('l4')
                       
                        
                        break
                    
                case log.classList.contains('l6'):
                       
                        log.classList.add('right')
                        log.classList.remove('l6')
                        
                        log.classList.add('l5')
                       
                        
                        break
        }
    }
    function logFrog()
    {
        if(gridBlock[currentFrog].classList.contains('log'))
        {
            if(gridBlock[currentFrog].classList.contains('right'))
            {
                if((currentFrog+1)%9==0 || (currentFrog)%9==0)
                {
                    gridBlock[currentFrog].classList.remove('frog')
                    gridBlock[currentFrog].classList.add('frog')
                }
                else
                {
                    gridBlock[currentFrog].classList.remove('frog')
                    currentFrog++
                    gridBlock[currentFrog].classList.add('frog')
                }
            }
            else
            {
                if((currentFrog+1)%9==0 || (currentFrog)%9==0)
                {
                    gridBlock[currentFrog].classList.remove('frog')
                    gridBlock[currentFrog].classList.add('frog')
                }
                else
                {
                    gridBlock[currentFrog].classList.remove('frog')
                    currentFrog--
                    gridBlock[currentFrog].classList.add('frog')
                }
            }
        }
    }
})

