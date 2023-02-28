local Failed = false
local Success = false

local function StartHackingDevice(timer, characters)
    if not timer then
        timer = Config.HackingDeviceTimer
    end

    if not characters then
        characters = Config.HackingDeviceCharacters
    end

    if characters == 'random' then
        local TypesTable = {'numeric', 'alphabet', 'alphanumeric', 'greek', 'braille', 'runes', 'arabic'}
        local randomint = math.random(#TypesTable)
        characters = TypesTable[randomint]
        if Config.Debug then
            print("The type randomly selected == ^5"..characters)
        end
    end
    
    SendNUIMessage({
        type = "hackingdevice", 
        timer = timer,
        characters = characters,
    })
    SetNuiFocus(true, true)

    while not Failed or not Success do
        Wait(1000)
        if Config.Debug then
            print("Player has not finished the hack...")
        end

        if Failed == true or Success == true then
            break
        end
    end

    if Failed then
        if Config.Debug then
            print("You failed!")
        end

        return false
    elseif Success then
        if Config.Debug then
            print("Success!")
        end

        return true
    end

    -- Default to returning false, although this code should not be executed.
    return false

end exports('StartHackingDevice', StartHackingDevice)

RegisterNUICallback('hackingdevicesuccess', function(data)
    Success = true
    SetNuiFocus(false, false)
    Wait(2500)
    Success = false
end)

RegisterNUICallback('hackingdevicefailed', function(data)
    Failed = true
    SetNuiFocus(false, false)
    Wait(2500)
    Failed = false
end)

if Config.Debug then
    RegisterCommand('StartHackingDevice', function ()
        if Config.Debug then print("Starting hack...") end

        local result = StartHackingDevice(10, 'greek')

        if result then -- Success
            if Config.Debug then
                print("Wow! You did it!")
            end
        else -- Failed
            if Config.Debug then
                print("You failed, unlucky.")
            end
        end
    end, false)
end