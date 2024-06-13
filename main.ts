basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (input.lightLevel() >= 255 && input.soundLevel() <= 0) {
        led.setBrightness(0)
    } else if (input.lightLevel() >= 225 && input.soundLevel() <= 30) {
        led.setBrightness(30)
    } else if (input.lightLevel() >= 195 && input.soundLevel() <= 60) {
        led.setBrightness(60)
    } else if (input.lightLevel() >= 165 && input.soundLevel() <= 90) {
        led.setBrightness(90)
    } else if (input.lightLevel() >= 135 && input.soundLevel() <= 120) {
        led.setBrightness(120)
    } else if (input.lightLevel() >= 105 && input.soundLevel() <= 150) {
        led.setBrightness(150)
    } else if (input.lightLevel() >= 75 && input.soundLevel() <= 180) {
        led.setBrightness(180)
    } else if (input.lightLevel() >= 45 && input.soundLevel() <= 210) {
        led.setBrightness(210)
    } else if (input.lightLevel() >= 15 && input.soundLevel() <= 240) {
        led.setBrightness(240)
    } else {
        led.setBrightness(255)
    }
})
