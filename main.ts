let pin0 = 0
let x = 0
let y = 0
basic.forever(function () {
    serial.writeString("hallo")
    serial.writeLine("")
    pin0 = pins.analogReadPin(AnalogPin.P0)
    serial.writeNumber(pin0)
    serial.writeLine("")
    while (pin0 >= 700) {
        serial.writeNumber(pins.analogReadPin(AnalogPin.P0))
        x = randint(0, 4)
        y = randint(0, 4)
        led.toggle(x, y)
        basic.pause(100)
        pin0 = pins.analogReadPin(AnalogPin.P0)
    }
    basic.pause(100)
    basic.clearScreen()
})
