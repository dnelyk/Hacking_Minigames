# Hacking Minigames Repository
#### Currently (Version: 1.0) Includes:
- [Simon Says](https://www.youtube.com/watch?v=eKGQmEtMhuU)
- [Lights Out](https://www.youtube.com/watch?v=jDQryRb34KU)
- [Hacking Device](https://www.youtube.com/watch?v=SG7AmPRSVug)**

#### How to trigger hacking events:
Every minigame has the same trigger, but you just replace one line, or you can simple copy & paste the particular minigame trigger below:

#### Hacking Device:
        
        local result = exports['hackingdevice']:StartHackingDevice(10, 'random')

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
        
        local result = exports['simonsays']:StartSimonSays(4, 5)

        if result then -- Success
                print("Wow! You did it!")
        else -- Failed
                print("You failed, unlucky.")
        end
        
#### Lights Out:
        
        local result = exports['lightsout']:StartLightsOut(4, 20)

        if result then -- Success
                print("Wow! You did it!")
        else -- Failed
                print("You failed, unlucky.")
        end        
        
***Beta, not recommended for use in a live server.*

## Issues:
[Report issues](https://github.com/dnelyk/Hacking_Minigames/issues/new) on Github, if applicable, you may [Pull Request](https://github.com/dnelyk/Hacking_Minigames/compare) solutions that are tested.
