function otocDoprava (čas: number) {
    wuKong.mecanumRun(wuKong.RunList.right, 250)
    basic.pause(čas)
    wuKong.mecanumStop()
}
function jedRovne (čas: number) {
    wuKong.mecanumRun(wuKong.RunList.Front, 250)
    basic.pause(1000)
    wuKong.mecanumStop()
}
function otocDoleva (čas: number) {
    wuKong.mecanumRun(wuKong.RunList.left, 250)
    basic.pause(čas)
    wuKong.mecanumStop()
}
function Nastavení () {
    wuKong.mecanumWheel(
    wuKong.ServoList.S5,
    wuKong.ServoList.S1,
    wuKong.ServoList.S7,
    wuKong.ServoList.S3
    )
    rychlost = 250
}
let rychlost = 0
Nastavení()
jedRovne(200)
otocDoprava(100)
jedRovne(150)
otocDoleva(100)
jedRovne(100)
otocDoleva(100)
jedRovne(150)
otocDoprava(100)
jedRovne(200)
