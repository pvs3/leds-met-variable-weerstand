let x = 0
let y = 0
let pin0 = 0
function ledsOn (aantal: number) {
    for (let index = 0; index <= aantal; index++) {
        x = index / 5
        y = index % 5
        led.plot(x, y)
    }
}
basic.forever(function () {
    pin0 = pins.analogReadPin(AnalogPin.P0)
    serial.writeNumber(pin0)
    serial.writeLine("")
    pin0 = pin0 - 660
    pin0 = Math.map(pin0, 0, 363, 0, 24)
    ledsOn(pin0)
    basic.pause(1000)
    basic.clearScreen()
})
