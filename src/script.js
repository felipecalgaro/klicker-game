let money = 101001
let klicks = 0
const mouseImage = document.querySelector('.mouse')

function changeAnimation(element, animation) {
    element.style.animation = ""
    setTimeout(() => element.style.animation = animation, 5)
}

function click() {
    money++
    document.getElementById("money").innerHTML = "$ " + money
    klicks++
    document.getElementById("klicks").innerHTML = "Klicks: " + klicks
    mouseImage.style.height = "87%"
    mouseImage.style.width = "93%"
    setTimeout(function () {
        mouseImage.style.height = "100%"
        mouseImage.style.width = "100%"
    }, 45)
    powerUps.map((powerUp) => money >= powerUp.cost ? setPowerUpButtonEnabled(powerUp.buyButton) : setPowerUpButtonDisabled(powerUp.buyButton))
}

const clickableArea = document.getElementById("clickable-area")
clickableArea.addEventListener("click", click)



const configsWindow = document.querySelector(".configs-window")
configsWindow.style.visibility = "hidden"

let configWindowOpen = false
function openConfigsWindow() {
    if (!configWindowOpen) {
        configWindowOpen = true
        configsWindow.style.visibility = "visible"
    } else {
        configsWindow.style.visibility = "hidden"
        configWindowOpen = false
    }
}

const configsImg = document.getElementById("config-img")
configsImg.addEventListener("click", openConfigsWindow)



const music = document.getElementById("music")
music.volume = 0

const bgMusicBoxChecked = document.getElementById("bg-music-box-checked")
const checkmarkImage = document.querySelector(".checkmark-img")

bgMusicBoxChecked.addEventListener("click", checkmark)

let boxCheckmarked = false
let firstTimeChecking = true
function checkmark() {
    if (!boxCheckmarked && !firstTimeChecking) {
        music.volume = 0.1
        bgMusicBoxChecked.style.opacity = "1"
        changeAnimation(checkmarkImage, "appear .3s ease-in")
        boxCheckmarked = true
    } else if (boxCheckmarked) {
        bgMusicBoxChecked.style.opacity = "0"
        music.volume = 0
        boxCheckmarked = false
    } else if (firstTimeChecking) {
        bgMusicBoxChecked.style.opacity = "1"
        changeAnimation(checkmarkImage, "appear .3s ease-in")
        music.volume = 0.1
        music.currentTime = 0
        firstTimeChecking = false
        boxCheckmarked = true
    }
}

colors = [
    {
        element: document.getElementById("red"),
        color: "rgb(189, 12, 12)"
    },
    {
        element: document.getElementById("dark-grey"),
        color: "#11181a"
    },
    {
        element: document.getElementById("green"),
        color: "#0cb91a"
    },
    {
        element: document.getElementById("purple"),
        color: "#660080"
    },
    {
        element: document.getElementById("orange"),
        color: "#ffaa00"
    },
    {
        element: document.getElementById("light-grey"),
        color: "rgb(190, 190, 190)"
    }
]

const page = document.getElementById("page")
colors.map(color => color.element.addEventListener('click', () => page.style.background = color.color))


const time = document.getElementById("time")
time.innerText = "00:00:00"
let hh = 0, mm = 0, ss = 0

function cron() {
    ss++
    if (ss == 60) {
        mm++
        ss = 0
        if (mm == 60) {
            hh++
            mm = 0
        }
    }

    const format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    time.innerText = format
}

setInterval(cron, 1000)

// pegar o num de clicks de um ponto x do tempo
// pegar o num de clicks de um ponto x + 1 seg = y do tempo
// subtrair o num de clicks do x do y e concatenar com " klicks/sec"

// setInterval(measureKlicksPerSec, 1000)

// const klicksBefore;
// const klicksAfter;
// const klicksPerSec = 0;


// function measureKlicksPerSec() {
//     klicksBefore = klicks
//     function returnKlicksAfter() {
//         return klicks
//     }
//     klicksAfter = setTimeout(returnKlicksAfter, 4995)
//     klicksPerSec = ((klicksAfter - klicksBefore) / 5).toFixed(1)
//     console.log(klicksBefore, " klicksBefore")
//     console.log(klicksAfter, " klicksAfter")
//     console.log(klicksPerSec + " klicks/sec")
//     setInterval(function() {
//         klicksBefore = klicks
//         function returnKlicksAfter() {
//             return klicks
//         }
//         klicksAfter = setTimeout(returnKlicksAfter, 4995)
//         klicksPerSec = (((klicksAfter - klicksBefore) / 5) - klicksPerSec).toFixed(1)
//         console.log(klicksBefore, " klicksBefore")
//         console.log(klicksAfter, " klicksAfter")
//         console.log(klicksPerSec + " klicks/sec")
//     }, 1000)
// }


// setTimeout(measureKlicksPerSec, 1000)



// // const klicksBefore
// // setInterval(function(){klicksBefore = klicks;}, 1000)
// // const klicksAfter = klicksBefore + setInterval(function(){return klicks;}, 1000)
// // function measureKlicksPerSec() {
// //    const klicksASec = (klicksAfter - klicksBefore)
// //    console.log(klicksASec)
// // }

// const klicksBefore = setInterval(function(){klicks}, 2000)
// const klicksAfter = setTimeout(function(){
//     setInterval(function(){klicks}, 2000)
// }, 1000)

// setInterval(measureKlicksPerSec, 5000)
// function measureKlicksPerSec() {
//    const klicksASec = klicksAfter - klicksBefore
//    console.log("klicks por segundo: " + klicksASec)
// }

// const klicksASec = klicksAfter - klicksBefore
// setInterval(function(){console.log(klicksASec)}, 3000)

// setInterval(function(){const klicksBefore}, 1000)
// setTimeout(function(){setInterval(function(){const klicksAfter = klicks}, 1500)}, 500)
// setInterval(function(klicksAfter, klicksBefore){const klicksASec = klicksAfter - klicksBefore; console.log(klicksASec)}, 2000)

// setInterval(function(){console.log(klicks)}, 1000)





const storeIcon = document.querySelector(".store-icon")
storeIcon.addEventListener("click", openStoreWindow)
const storeWindow = document.querySelector(".store-window")
storeWindow.style.visibility = "hidden"

let storeWindowOpen = false
function openStoreWindow() {
    if (!storeWindowOpen) {
        storeWindow.style.visibility = "visible"
        backPageOne()
        storeWindowOpen = true
    } else {
        storeWindow.style.visibility = "hidden"
        storeWindowOpen = false
    }
}

const pageOne = document.querySelector(".page-1")
const pageTwo = document.querySelector(".page-2")
pageTwo.style.display = "none"
const pageThree = document.querySelector(".page-3")
pageThree.style.display = "none"

const pageActions = [
    {
        element: document.getElementById("go-to-page-2-img"),
        action: goPageTwo
    },
    {
        element: document.getElementById("back-to-page-1-img"),
        action: backPageOne
    },
    {
        element: document.getElementById("go-to-page-3-img"),
        action: goPageThree
    },
    {
        element: document.getElementById("back-to-page-2-img"),
        action: backPageTwo
    },
]

pageActions.map(pageAction => pageAction.element.addEventListener('click', pageAction.action))

function goPageTwo() {
    pageOne.style.display = "none"
    pageTwo.style.display = "flex"
}

function backPageOne() {
    pageOne.style.display = "flex"
    pageTwo.style.display = "none"
    pageThree.style.display = "none"
}

function goPageThree() {
    pageOne.style.display = "none"
    pageTwo.style.display = "none"
    pageThree.style.display = "flex"
}

function backPageTwo() {
    pageTwo.style.display = "flex"
    pageThree.style.display = "none"
}



const magicButton = document.getElementById("botao-magico")
const pop = document.getElementById("pop-magic-button")
pop.volume = 0

let magicButtonAppear = setInterval(magicButtonShowingUp, Math.floor((Math.random() * 80000) + 30000))

function magicButtonShowingUp() {
    magicButton.style.display = "flex"
    magicButton.style.animation = "movement 4s ease-in-out"
    magicButton.style.top = Math.floor((Math.random() * 50) + 30) + "vh"
    setTimeout(() => magicButton.style.display = "none", 3900)
}

function clickOnMagicButton() {
    money = money + 100
    changeAnimation(document.getElementById("money"), "transform .3s ease-in-out 2")
    magicButton.style.display = "none"
    pop.volume = 0.4
    setTimeout(() => pop.volume = 0, 320)
}

magicButton.addEventListener("click", clickOnMagicButton)


class PowerUp {
    constructor(buyButton, cost, costHTMLElement, rightBarImage, transparentTexture, duration, cooldown) {
        this.buyButton = buyButton
        this.cost = cost
        this.costHTMLElement = costHTMLElement
        this.rightBarImage = rightBarImage
        this.transparentTexture = transparentTexture
        this.duration = duration
        this.cooldown = cooldown
        this.level = 0
        this.bought = false
        this.isActive = false
    }
    setPrice(price) {
        document.getElementById(this.costHTMLElement.id).innerHTML = typeof price === 'number' ? "$" + price : price
    }
}

const powerUps = [
    new PowerUp(
        document.getElementById("buy-autoklicker"),
        100,
        document.getElementById("cost-autoklicker"),
        document.getElementById("autoklicker-img-right-bar"),
        document.getElementById("transparent-autoklicker"),
        10000,
        30000
    ),
    new PowerUp(
        document.getElementById("buy-luckyaf"),
        110,
        document.getElementById("cost-luckyaf"),
        document.getElementById("luckyaf-img-right-bar"),
        document.getElementById("transparent-luckyaf"),
        30000,
        90000
    ),
    new PowerUp(
        document.getElementById("buy-goldrush"),
        120,
        document.getElementById("cost-goldrush"),
        document.getElementById("goldrush-img-right-bar"),
        document.getElementById("transparent-goldrush"),
        15000,
        60000
    )
]

powerUps.map(powerUp => powerUp.setPrice(powerUp.cost))

function setPowerUpButtonEnabled(powerUpButton) {
    powerUpButton.style.filter = 'grayscale(0%)'
    powerUpButton.style.cursor = 'pointer'
    powerUpButton.style.boxShadow = '1.3px 1.3px 5px rgba(0, 0, 0, 0.733)'
    powerUpButton.disabled = false
}

function setPowerUpButtonDisabled(powerUpButton) {
    powerUpButton.style.filter = 'grayscale(70%)'
    powerUpButton.style.cursor = 'default'
    powerUpButton.style.boxShadow = '0 0 0'
    powerUpButton.disabled = true
}

powerUps[0].interval = 100
let autoklickerActive;

powerUps[1].magicButtonCooldown = 7500
function clickGoldrush() {
    money += 2
    document.getElementById("money").innerHTML = "$ " + money
    klicks++
    document.getElementById("klicks").innerHTML = "Klicks: " + klicks
    mouseImage.style.height = "87%"
    mouseImage.style.width = "93%"
    setTimeout(function () {
        mouseImage.style.height = "100%"
        mouseImage.style.width = "100%"
    }, 45)
}

function buyPowerUp(powerUp) {
    if (money >= powerUp.cost) {
        const powerUpIndex = powerUps.findIndex(el => el == powerUp)
        powerUp.bought = true
        powerUp.rightBarImage.style.filter = 'grayscale(0%)'
        powerUp.rightBarImage.style.cursor = 'pointer'
        changeAnimation(powerUp.rightBarImage, "unlocking .35s ease-out")
        powerUp.buyButton.innerHTML = 'Upgrade'
        money -= powerUp.cost
        document.getElementById("money").innerHTML = "$ " + money
        powerUp.cost = Math.round(powerUp.cost * 1.8)
        powerUp.setPrice(powerUp.cost)
        powerUp.level++
        powerUp.rightBarImage.addEventListener('click', activatePowerUp(powerUp))
        if (powerUp.level >= 2 && powerUp.level < 4) {
            powerUp.duration *= 1.5
            powerUp.cooldown *= 0.75
            powerUps[0].interval = 66
            powerUp.setPrice(powerUp.cost)
            powerUp.level++
        }
        if (powerUp.level == 4) {
            powerUps[0] = 33
            powerUp.setPrice('Fully Upgraded')
            powerUp.cost = 999999999999
            document.querySelectorAll('.cost-word')[powerUpIndex].style.display = 'none'
            powerUp.buyButton.innerHTML = "Max"
            powerUp.level++
            setPowerUpButtonDisabled(powerUp.buyButton)
        }
    }
}

const powerUpActivations = [
    activateAutoklicker = () => {
        powerUps[0].isActive = true
        const autoklicker = powerUps[0]
        console.log(autoklicker);
        autoklickerActive = setInterval(click, autoklicker.interval)
        autoklicker.rightBarImage.style.border = "3px solid rgb(204, 14, 14)"
        setTimeout(() => autoklicker.rightBarImage.removeEventListener("click", activateAutoklicker), 4)
        setTimeout(() => {
            autoklicker.rightBarImage.style.cursor = "default"
            autoklicker.rightBarImage.style.border = "3px solid #000"
            clearInterval(autoklickerActive)
            autoklicker.transparentTexture.style.cursor = "default"
            autoklicker.transparentTexture.style.animation = `loading-blur ${autoklicker.cooldown / 1000}s linear`
            autoklicker.transparentTexture.style.visibility = "visible"
            powerUps[0].isActive = false
            setTimeout(() => {
                autoklicker.transparentTexture.style.visibility = "hidden"
                autoklicker.transparentTexture.style.cursor = "pointer"
                autoklicker.rightBarImage.style.cursor = "pointer"
                autoklicker.rightBarImage.style.animation = "border 4.3s"
            }, autoklicker.cooldown)
        }, autoklicker.duration)
        setTimeout(() => autoklicker.rightBarImage.addEventListener("click", activateAutoklicker), autoklicker.cooldown + autoklicker.duration) // tempo = cooldown + duracao = 30s
    },
    activateLuckyaf = () => {
        powerUps[1].isActive = true
        const luckyaf = powerUps[1]
        clearInterval(magicButtonAppear)
        const firstButton = setTimeout(magicButtonShowingUp, 100)
        const luckyafActive = setInterval(magicButtonShowingUp, luckyaf.magicButtonCooldown)
        luckyaf.rightBarImage.style.border = "3px solid rgb(204, 14, 14)"
        setTimeout(() => luckyaf.rightBarImage.removeEventListener("click", activateLuckyaf), 4)
        setTimeout(() => {
            clearTimeout(firstButton)
            luckyaf.rightBarImage.style.cursor = "default"
            luckyaf.rightBarImage.style.border = "3px solid #000"
            clearInterval(luckyafActive)
            magicButtonAppear = setInterval(magicButtonShowingUp, Math.floor((Math.random() * 80000) + 30000))
            luckyaf.transparentTexture.style.cursor = "default"
            luckyaf.transparentTexture.style.animation = `loading-blur ${luckyaf.cooldown / 1000}s linear`
            luckyaf.transparentTexture.style.visibility = "visible"
            powerUps[1].isActive = false
            setTimeout(() => {
                luckyaf.transparentTexture.style.visibility = "hidden"
                luckyaf.transparentTexture.style.cursor = "pointer"
                luckyaf.rightBarImage.style.cursor = "pointer"
                luckyaf.rightBarImage.style.animation = "border 4.3s"
            }, luckyaf.cooldown)
        }, luckyaf.duration)
        setTimeout(() => luckyaf.rightBarImage.addEventListener("click", activateLuckyaf), luckyaf.cooldown + luckyaf.duration) // tempo = cooldown + duracao = 30s
    },
    activateGoldrush = () => {
        powerUps[2].isActive = true
        const goldrush = powerUps[2]
        clickableArea.removeEventListener("click", click)
        clickableArea.addEventListener("click", clickGoldrush)
        goldrush.rightBarImage.style.border = "3px solid rgb(204, 14, 14)"
        setTimeout(() => goldrush.rightBarImage.removeEventListener("click", activateGoldrush), 4)
        setTimeout(() => {
            goldrush.rightBarImage.style.cursor = "default"
            goldrush.rightBarImage.style.border = "3px solid #000"
            clickableArea.removeEventListener("click", clickGoldrush)
            clickableArea.addEventListener("click", click)
            goldrush.transparentTexture.style.cursor = "default"
            goldrush.transparentTexture.style.animation = `loading-blur ${goldrush.cooldown / 1000}s linear`
            goldrush.transparentTexture.style.visibility = "visible"
            powerUps[2].isActive = false
            setTimeout(() => {
                goldrush.transparentTexture.style.visibility = "hidden"
                goldrush.transparentTexture.style.cursor = "pointer"
                goldrush.rightBarImage.style.cursor = "pointer"
                goldrush.rightBarImage.style.animation = "border 4.3s"
            }, goldrush.cooldown)
        }, goldrush.duration)
        setTimeout(() => goldrush.rightBarImage.addEventListener("click", activateGoldrush), goldrush.cooldown + goldrush.duration) // tempo = cooldown + duracao = 30s
    }
]

function activatePowerUp(powerUp) {
    const powerUpIndex = powerUps.findIndex(el => el == powerUp)
    while (!powerUp.bought && isAnyPowerUpActive.length !== 0) {
        powerUp.transparentTexture.style.animation = ""
        powerUp.rightBarImage.style.animation = ""
        powerUp.rightBarImage.style.cursor = "default"
        console.log(powerUp.isActive);
        const isAnyPowerUpActive = powerUps.filter(el => el.isActive)
        if (powerUp.bought && isAnyPowerUpActive.length === 0) {
            break
        }
    }
    powerUpActivations[powerUpIndex]()
}



// fazer funcionar o klicks/sec
// // colocar som de dinheiro
// // colocar uma imagem como cursr
// // botar um video/gif na clickable-area
// // ajustar o tempo do botao magico
// // deixar a tela menos enjoativa
// // ver se tudo pode começar so depois de a pagina ser carregado
// // porque algumas vezes o alt aparece?
// // // queria q nao desse pra arrastar a imagem do mouse (acontece as vezes)
// // // melhorar efeitos do mouse quando clica
// // // estilizar o botao magico
// // // configurar os upgrades
// // // clicar de tempo em tempo num botao espeecial q vai te dar mais dinheiro (diferenciar n de klicks do dinheiro)
// // // fazer as configs funcionarem e estiliza-las
// // // adicionar loja com auto clickers, etc.
// // // botar os poderes comprados na right-bar, com cooldown (grayscale) e eles tendo efeito
// // // // count, sequence, seq