var money = 0
var klicks = 0

function click() {
    money++
    document.getElementById("money").innerHTML = "$ " + money
    klicks++
    document.getElementById("klicks").innerHTML = "Klicks: " + klicks
    document.querySelector(".mouse").style.height = "87%"
    document.querySelector(".mouse").style.width = "93%"
    setTimeout(function(){
        document.querySelector(".mouse").style.height = "100%"
        document.querySelector(".mouse").style.width = "100%"
    }, 45)
}

var clickableArea = document.getElementById("clickable-area")
clickableArea.addEventListener("click", click)



var configsWindow = document.querySelector(".configs-window")
configsWindow.style.visibility = "hidden"

var count = 0
function openConfigsWindow() {
    if (count % 2 == 0) {
        configsWindow.style.visibility = "visible"
        count++
    } else {
        configsWindow.style.visibility = "hidden"
        count++
    }
}

var configsImg = document.getElementById("config-img")
configsImg.addEventListener("click", openConfigsWindow)



var music = document.getElementById("music")
music.volume = 0

var bgMusicBoxChecked = document.getElementById("bg-music-box-checked")
var checkmarkImg = document.querySelector(".chmrk-img")

bgMusicBoxChecked.addEventListener("click", checkmark)

var sequence = 0
function checkmark() {
    if (sequence % 2 == 0 && sequence == 0) {
        bgMusicBoxChecked.style.opacity = "1"
        checkmarkImg.style.animation = ""
        setTimeout(function(){checkmarkImg.style.animation = "appear .3s ease-in"}, 5)
        sequence++
        music.volume = 0.1
        music.currentTime = 0
    } else if (sequence % 2 == 0 && sequence != 0) {
        music.volume = 0.1
        bgMusicBoxChecked.style.opacity = "1"
        checkmarkImg.style.animation = ""
        setTimeout(function(){checkmarkImg.style.animation = "appear .3s ease-in"}, 5)
        sequence++
    } else if (sequence % 2 != 0) {
        bgMusicBoxChecked.style.opacity = "0"
        sequence++
        music.volume = 0
    }
}


var red = document.getElementById("red"), darkGrey = document.getElementById("dark-grey")
var green = document.getElementById("green"), purple = document.getElementById("purple")
var orange = document.getElementById("orange"), lightGrey = document.getElementById("light-grey")
var page = document.getElementById("page")

red.addEventListener("click", function () { page.style.background = "rgb(189, 12, 12)" })
darkGrey.addEventListener("click", function () { page.style.background = "#11181a" })
green.addEventListener("click", function () { page.style.background = "#0cb91a" })
purple.addEventListener("click", function () { page.style.background = "#660080" })
orange.addEventListener("click", function () { page.style.background = "#ffaa00" })
lightGrey.addEventListener("click", function () { page.style.background = "rgb(190, 190, 190)" })


var time = document.getElementById("time")
time.innerText = "00:00:00"
var hh = 0, mm = 0, ss = 0

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

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    time.innerText = format
}

setInterval(cron, 1000)

// pegar o num de clicks de um ponto x do tempo
// pegar o num de clicks de um ponto x + 1 seg = y do tempo
// subtrair o num de clicks do x do y e concatenar com " klicks/sec"

// setInterval(measureKlicksPerSec, 1000)

// var klicksBefore;
// var klicksAfter;
// var klicksPerSec = 0;


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



// // var klicksBefore
// // setInterval(function(){klicksBefore = klicks;}, 1000)
// // var klicksAfter = klicksBefore + setInterval(function(){return klicks;}, 1000)
// // function measureKlicksPerSec() {
// //    var klicksASec = (klicksAfter - klicksBefore)
// //    console.log(klicksASec)
// // }

// var klicksBefore = setInterval(function(){klicks}, 2000)
// var klicksAfter = setTimeout(function(){
//     setInterval(function(){klicks}, 2000)
// }, 1000)

// setInterval(measureKlicksPerSec, 5000)
// function measureKlicksPerSec() {
//    var klicksASec = klicksAfter - klicksBefore
//    console.log("klicks por segundo: " + klicksASec)
// }

// var klicksASec = klicksAfter - klicksBefore
// setInterval(function(){console.log(klicksASec)}, 3000)

// setInterval(function(){var klicksBefore}, 1000)
// setTimeout(function(){setInterval(function(){var klicksAfter = klicks}, 1500)}, 500)
// setInterval(function(klicksAfter, klicksBefore){var klicksASec = klicksAfter - klicksBefore; console.log(klicksASec)}, 2000)

// setInterval(function(){console.log(klicks)}, 1000)





var storeIcon = document.querySelector(".store-icon")
storeIcon.addEventListener("click", openStoreWindow)
const storeWindow = document.querySelector(".store-window")
storeWindow.style.visibility = "hidden"

let seq = 0
function openStoreWindow() {
    if (seq % 2 == 0) {
        storeWindow.style.visibility = "visible"
        seq++
        backPageOneFunction()
    } else {
        storeWindow.style.visibility = "hidden"
        seq++
    }
}

const pageOne = document.querySelector(".page-1")
const pageTwo = document.querySelector(".page-2")
pageTwo.style.display = "none"
const pageThree = document.querySelector(".page-3")
pageThree.style.display = "none"

const goPageTwo = document.getElementById("go-to-page-2-img")
goPageTwo.addEventListener("click", goPageTwoFunction)
const backPageOne = document.getElementById("back-to-page-1-img")
backPageOne.addEventListener("click", backPageOneFunction)
const goPageThree = document.getElementById("go-to-page-3-img")
goPageThree.addEventListener("click", goPageThreeFunction)
const backPageTwo = document.getElementById("back-to-page-2-img")
backPageTwo.addEventListener("click", backPageTwoFunction)

function goPageTwoFunction() {
    pageOne.style.display = "none"
    pageTwo.style.display = "flex"
}

function backPageOneFunction() {
    pageOne.style.display = "flex"
    pageTwo.style.display = "none"
    pageThree.style.display = "none"
}

function goPageThreeFunction() {
    pageOne.style.display = "none"
    pageTwo.style.display = "none"
    pageThree.style.display = "flex"
}

function backPageTwoFunction() {
    pageTwo.style.display = "flex"
    pageThree.style.display = "none"
}



const botaoMagico = document.getElementById("botao-magico")
var pop = document.getElementById("pop-magic-button")
pop.volume = 0

var buttonAppear = setInterval(magicButtonShowingUp, Math.floor((Math.random() * 80000) + 30000))

function magicButtonShowingUp() {
    botaoMagico.style.display = "flex"
    botaoMagico.style.animation = "movement 4s ease-in-out"
    botaoMagico.style.top = Math.floor((Math.random() * 50) + 30) + "vh"
    setTimeout(function(){botaoMagico.style.display = "none"}, 3900)
}

function clickOnMagicButton() {
    money = money + 100
    document.getElementById("money").style.animation = "";
    setTimeout(function(){document.getElementById("money").style.animation = "transform .3s ease-in-out 2"}, 5)
    botaoMagico.style.display = "none"
    pop.volume = 0.4
    setTimeout(function(){pop.volume = 0}, 320)
}

botaoMagico.addEventListener("click", clickOnMagicButton)



var buyAutoklickerBtn = document.getElementById("buy-autoklicker")
var buyLuckyafBtn = document.getElementById("buy-luckyaf")
var buyGoldrushBtn = document.getElementById("buy-goldrush")

var costAutoklicker = 100
var costLuckyaf = 110
var costGoldrush = 120

const costAutoklickerHTML = document.getElementById("cost-autoklicker")
costAutoklickerHTML.innerHTML = "$" + costAutoklicker
const costLuckyafHTML = document.getElementById("cost-luckyaf")
costLuckyafHTML.innerHTML = "$" + costLuckyaf
const costGoldrushHTML = document.getElementById("cost-goldrush")
costGoldrushHTML.innerHTML = "$" + costGoldrush

var autoklickerImgRightBar = document.getElementById("autoklicker-img-right-bar")
var luckyafImgRightBar = document.getElementById("luckyaf-img-right-bar")
var goldrushImgRightBar = document.getElementById("goldrush-img-right-bar")

var autoklickerBought, luckyafBought, goldrushBought

setInterval(verifyMoney, 200)

function verifyMoney() {
    if (money >= costAutoklicker) {
        buyAutoklickerBtn.style.filter = "grayscale(0%)"
        buyAutoklickerBtn.style.cursor = "pointer"
        buyAutoklickerBtn.style.boxShadow = "1.3px 1.3px 5px rgba(0, 0, 0, 0.733)"
        buyAutoklickerBtn.disabled = false
    } else {
        buyAutoklickerBtn.style.filter = "grayscale(68%)"
        buyAutoklickerBtn.style.cursor = "default"
        buyAutoklickerBtn.style.boxShadow = "0 0 0"
        buyAutoklickerBtn.disabled = true
    }

    if (money >= costLuckyaf) {
        buyLuckyafBtn.style.filter = "grayscale(0%)"
        buyLuckyafBtn.style.cursor = "pointer"
        buyLuckyafBtn.style.boxShadow = "1.3px 1.3px 5px rgba(0, 0, 0, 0.733)"
        buyLuckyafBtn.disabled = false
    } else {
        buyLuckyafBtn.style.filter = "grayscale(68%)"
        buyLuckyafBtn.style.cursor = "default"
        buyLuckyafBtn.style.boxShadow = "0 0 0"
        buyLuckyafBtn.disabled = true
    }

    if (money >= costGoldrush) {
        buyGoldrushBtn.style.filter = "grayscale(0%)"
        buyGoldrushBtn.style.cursor = "pointer"
        buyGoldrushBtn.style.boxShadow = "1.3px 1.3px 5px rgba(0, 0, 0, 0.733)"
        buyGoldrushBtn.disabled = false
    } else {
        buyGoldrushBtn.style.filter = "grayscale(68%)"
        buyGoldrushBtn.style.cursor = "default"
        buyGoldrushBtn.style.boxShadow = "0 0 0"
        buyGoldrushBtn.disabled = true
    }
    return money
}

var upgradeAutoklicker = 0
function buyAutoklicker() {
    if (money >= costAutoklicker) {
        autoklickerBought = true
        autoklickerImgRightBar.style.filter = "grayscale(0%)"
        autoklickerImgRightBar.style.cursor = "pointer"
        autoklickerImgRightBar.style.animation = ""
        setTimeout(function(){autoklickerImgRightBar.style.animation = "unlocking .35s ease-out"}, 5)
        buyAutoklickerBtn.innerHTML = "Upgrade"
        money = money - costAutoklicker
        document.getElementById("money").innerHTML = "$ " + money
        costAutoklicker = 200
        costAutoklickerHTML.innerHTML = "$" + costAutoklicker
        upgradeAutoklicker++
        if (upgradeAutoklicker == 2) {
            autoklickerDuration = 20000
            autoklickerCooldown = 20000
            autoklickInterval = 66
            costAutoklicker = 300
            costAutoklickerHTML.innerHTML = "$" + costAutoklicker
            upgradeAutoklicker++
        }
        if (upgradeAutoklicker == 4 || upgradeAutoklicker == 5) {
            autoklickerDuration = 30000
            autoklickerCooldown = 20000
            autoklickInterval = 33
            costAutoklickerHTML.innerHTML = "Fully upgraded"
            costAutoklicker = 99999999999999
            document.getElementById("cost-word-autoklicker").style.visibility = "hidden"
            buyAutoklickerBtn.innerHTML = "Max"
        }
    } 
}

var upgradeLuckyaf = 0
function buyLuckyaf() {
    if (money >= costLuckyaf) {
        luckyafBought = true
        luckyafImgRightBar.style.filter = "grayscale(0%)"
        luckyafImgRightBar.style.cursor = "pointer"
        luckyafImgRightBar.style.animation = ""
        setTimeout(function(){luckyafImgRightBar.style.animation = "unlocking .35s ease-out"}, 5)
        buyLuckyafBtn.innerHTML = "Upgrade"
        money = money - costLuckyaf
        document.getElementById("money").innerHTML = "$ " + money
        costLuckyaf = 250
        costLuckyafHTML.innerHTML = "$" + costLuckyaf
        upgradeLuckyaf++
        if (upgradeLuckyaf == 2) {
            luckyafDuration = 30000
            luckyafCooldown = 75000
            magicButtonCooldown = 5000
            costLuckyaf = 500
            costLuckyafHTML.innerHTML = "$" + costLuckyaf
            upgradeLuckyaf++
        }
        if (upgradeLuckyaf == 4 || upgradeLuckyaf == 5) {
            luckyafDuration = 30000
            luckyafCooldown = 60000
            magicButtonCooldown = 4100
            costLuckyafHTML.innerHTML = "Fully upgraded"
            costLuckyaf = 99999999999999
            document.getElementById("cost-word-luckyaf").style.visibility = "hidden"
            buyLuckyafBtn.innerHTML = "Max"
        }
    }
}

var upgradeGoldrush = 0
function buyGoldrush() {
    if (money >= costGoldrush) {
        goldrushBought = true
        goldrushImgRightBar.style.filter = "grayscale(0%)"
        goldrushImgRightBar.style.cursor = "pointer"
        goldrushImgRightBar.style.animation = ""
        setTimeout(function(){goldrushImgRightBar.style.animation = "unlocking .35s ease-out"}, 5)
        buyGoldrushBtn.innerHTML = "Upgrade"
        money = money - costGoldrush
        document.getElementById("money").innerHTML = "$ " + money
        costGoldrush = 240
        costGoldrushHTML.innerHTML = "$" + costGoldrush
        upgradeGoldrush++
        if (upgradeGoldrush == 2) {
            goldrushDuration = 25000
            goldrushCooldown = 60000
            costGoldrush = 400
            costGoldrushHTML.innerHTML = "$" + costGoldrush
            upgradeGoldrush++
        }
        if (upgradeGoldrush == 4 || upgradeGoldrush == 5) {
            goldrushDuration = 35000
            goldrushCooldown = 45000
            costGoldrushHTML.innerHTML = "Fully upgraded"
            costGoldrush = 99999999999999
            document.getElementById("cost-word-goldrush").style.visibility = "hidden"
            buyGoldrushBtn.innerHTML = "Max"
        }
    }
}

var autoklickerDuration = 10000
var autoklickerCooldown = 30000
var autoklickInterval = 100

var autoklickerActive;
function activateAutoklicker() {
    document.getElementById("transparent-autoklicker").style.animation = ""
    autoklickerImgRightBar.style.animation = ""
    autoklickerImgRightBar.style.cursor = "default"
    if (autoklickerBought == true) {
        autoklickerActive = setInterval(click, autoklickInterval)
        autoklickerImgRightBar.style.border = "3px solid rgb(204, 14, 14)"
        setTimeout(function(){autoklickerImgRightBar.removeEventListener("click", activateAutoklicker)}, 4)
        setTimeout(function(){
            autoklickerImgRightBar.style.cursor = "default"
            autoklickerImgRightBar.style.border = "3px solid #000"
            clearInterval(autoklickerActive)
            document.getElementById("transparent-autoklicker").style.cursor = "default"
            document.getElementById("transparent-autoklicker").style.animation = "loading-blur " + autoklickerCooldown / 1000 + "s linear"
            document.getElementById("transparent-autoklicker").style.visibility = "visible"
            setTimeout(function(){
                document.getElementById("transparent-autoklicker").style.visibility = "hidden"
                document.getElementById("transparent-autoklicker").style.cursor = "pointer"
                autoklickerImgRightBar.style.cursor = "pointer"
                autoklickerImgRightBar.style.animation = "border 4.3s"
            }, autoklickerCooldown)
        }, autoklickerDuration) 
        setTimeout(function(){autoklickerImgRightBar.addEventListener("click", activateAutoklicker)}, autoklickerCooldown + autoklickerDuration) // tempo = cooldown + duracao = 30s
    }
}

autoklickerImgRightBar.addEventListener("click", activateAutoklicker)


var luckyafDuration = 30000
var luckyafCooldown = 90000
var magicButtonCooldown = 7500

function activateLuckyaf() {
    document.getElementById("transparent-luckyaf").style.animation = ""
    luckyafImgRightBar.style.animation = ""
    luckyafImgRightBar.style.cursor = "default"
    if (luckyafBought == true) {
        clearInterval(buttonAppear)
        var firstButton = setTimeout(magicButtonShowingUp, 100)
        var luckyafActive = setInterval(magicButtonShowingUp, magicButtonCooldown)
        luckyafImgRightBar.style.border = "3px solid rgb(204, 14, 14)"
        setTimeout(function(){luckyafImgRightBar.removeEventListener("click", activateLuckyaf)}, 4)
        setTimeout(function(){
            clearTimeout(firstButton)
            luckyafImgRightBar.style.cursor = "default"
            luckyafImgRightBar.style.border = "3px solid #000"
            clearInterval(luckyafActive)
            buttonAppear = setInterval(magicButtonShowingUp, Math.floor((Math.random() * 80000) + 30000))
            document.getElementById("transparent-luckyaf").style.cursor = "default"
            document.getElementById("transparent-luckyaf").style.animation = "loading-blur " + luckyafCooldown / 1000 + "s linear"
            document.getElementById("transparent-luckyaf").style.visibility = "visible"
            setTimeout(function(){
                document.getElementById("transparent-luckyaf").style.visibility = "hidden"
                document.getElementById("transparent-luckyaf").style.cursor = "pointer"
                luckyafImgRightBar.style.cursor = "pointer"
                luckyafImgRightBar.style.animation = "border 4.3s"
            }, luckyafCooldown)
        }, luckyafDuration) 
        setTimeout(function(){luckyafImgRightBar.addEventListener("click", activateLuckyaf)}, luckyafCooldown + luckyafDuration) // tempo = cooldown + duracao = 30s
    }
}

luckyafImgRightBar.addEventListener("click", activateLuckyaf)


var goldrushDuration = 15000
var goldrushCooldown = 60000

function clickGoldrush() {
    money = money + 2
    document.getElementById("money").innerHTML = "$ " + money
    klicks++
    document.getElementById("klicks").innerHTML = "Klicks: " + klicks
    document.querySelector(".mouse").style.height = "87%"
    document.querySelector(".mouse").style.width = "93%"
    setTimeout(function(){
        document.querySelector(".mouse").style.height = "100%"
        document.querySelector(".mouse").style.width = "100%"
    }, 45)
}

function activateGoldrush() {
    document.getElementById("transparent-goldrush").style.animation = ""
    goldrushImgRightBar.style.animation = ""
    goldrushImgRightBar.style.cursor = "default"
    if (goldrushBought == true) {
        clickableArea.removeEventListener("click", click)
        clickableArea.addEventListener("click", clickGoldrush)
        goldrushImgRightBar.style.border = "3px solid rgb(204, 14, 14)"
        setTimeout(function(){goldrushImgRightBar.removeEventListener("click", activateGoldrush)}, 4)
        setTimeout(function(){
            goldrushImgRightBar.style.cursor = "default"
            goldrushImgRightBar.style.border = "3px solid #000"
            clickableArea.removeEventListener("click", clickGoldrush)
            clickableArea.addEventListener("click", click)
            document.getElementById("transparent-goldrush").style.cursor = "default"
            document.getElementById("transparent-goldrush").style.animation = "loading-blur " + goldrushCooldown / 1000 + "s linear"
            document.getElementById("transparent-goldrush").style.visibility = "visible"
            setTimeout(function(){
                document.getElementById("transparent-goldrush").style.visibility = "hidden"
                document.getElementById("transparent-goldrush").style.cursor = "pointer"
                goldrushImgRightBar.style.cursor = "pointer"
                goldrushImgRightBar.style.animation = "border 4.3s"
            }, goldrushCooldown)
        }, goldrushDuration) 
        setTimeout(function(){goldrushImgRightBar.addEventListener("click", activateGoldrush)}, goldrushCooldown + goldrushDuration) // tempo = cooldown + duracao = 30s
    }
}

goldrushImgRightBar.addEventListener("click", activateGoldrush)

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