# Hacking Minigames Repository
#### Currently (Version: 1.0) Includes:
- [Simon Says](https://www.youtube.com/watch?v=eKGQmEtMhuU)
- [Lights Out](https://www.youtube.com/watch?v=jDQryRb34KU)
- [Hacking Device](https://www.youtube.com/watch?v=SG7AmPRSVug)**
- [Numbers | Password](https://youtu.be/Q1GYSgzDwW0)

#### How to trigger hacking events:
Every minigame has the same trigger, but you just replace one line, or you can simple copy & paste the particular minigame trigger below:

#### Hacking Device:
        ---@param timer number || description: "Whole Number Between 3-6. It determines the size of the grid. Example: 4 = 4x4 grid."
        ---@param characters string || description: "String. It determines the type of characters the puzzle will include, must be one of the following strings: {'numeric', 'alphabet', 'alphanumeric', 'greek', 'braille', 'runes', 'arabic'}, otherwise,  it will be random."

        local result = exports['hackingdevice']:StartHackingDevice(timer, characters)

        if result then -- Success
            if Config.Debug then
                print("Wow! You did it!")
            end
        else -- Failed
            if Config.Debug then
                print("You failed, unlucky.")
            end
        end
        
#### Simon Says: 
        ---@param buttonGrid number || description: "Whole Number Between 3-6. It determines the size of the grid. Example: 4 = 4x4 grid."
        ---@param length number || description: "Whole Number. It determines the maximum amount of time someone has to complete the puzzle."
        local result = exports['simonsays']:StartSimonSays(buttonGrid, length)

        if result then -- Success
                print("Wow! You did it!")
        else -- Failed
                print("You failed, unlucky.")
        end
        
#### Lights Out:
        ---@param grid number || description: "Whole Number Between 3-6. It determines the size of the grid. Example: 4 = 4x4 grid."
        ---@param maxClicks number || description: "Whole Number. It determines the maximum amount of times someone can click on the grid to solve."
        local result = exports['lightsout']:StartLightsOut(grid, maxClicks)

        if result then -- Success
                print("Wow! You did it!")
        else -- Failed
                print("You failed, unlucky.")
        end        
        
#### Numbers | Password:
        ---@param numbersLength number || description: "Whole Number Between 5-24. It determines the amount of numbers shown to the user, in which they have to remember."
        ---@param timer number || description: "Whole Number. The time the user has to input the numbers they have to remember."
        ---@param showTime number || description: "Whole Number. The time the random numbers are originally shown."
        local result = exports['numbers']:StartNumbersGame(numbersLength, timer, showTime)

        if result then -- Success
            print("Wow! You did it!")
        else -- Failed
            print("You failed, unlucky.")
        end
***Beta, not recommended for use in a live server.*

## Install: 
*Installing is very simple.* Each folder is its own resource. So, just download the repository, select the minigames you wish to use and drag them into your standalone folder. Then, make sure you ensure the resources in your console, or put them in an already ensured folder.

## Issues:
[Report issues](https://github.com/dnelyk/Hacking_Minigames/issues/new) on Github, if applicable, you may [Pull Request](https://github.com/dnelyk/Hacking_Minigames/compare) solutions that are properly tested.