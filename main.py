x = 0
y = 0

def on_forever():
    global x, y
    while pins.analog_read_pin(AnalogPin.P0) >= 512:
        serial.write_number(pins.analog_read_pin(AnalogPin.P0))
        x = randint(0, 4)
        y = randint(0, 4)
        led.toggle(x, y)
        basic.pause(100)
    basic.clear_screen()
basic.forever(on_forever)
