let φως = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
basic.forever(function () {
    I2C_LCD1602.ShowString("light", 0, 0)
    φως = pins.analogReadPin(AnalogPin.P1)
    I2C_LCD1602.ShowNumber(φως, 8, 1)
    basic.pause(500)
    I2C_LCD1602.clear()
})
