input.onButtonPressed(Button.A, function () {
    // Kunne testet på enten nr-variabel eller string-variabel, men hvorfor ikke teste begge metodene. Når det er er to if / els if tester og en else (unødvendig else)
    if (tilstandsymboltekst == "kryss") {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        tilstandsymboltekst = "hjerte"
        tilstandsymbolnr = 1
    } else if (tilstandsymbolnr == 1) {
        basic.showIcon(IconNames.Heart)
        tilstandsymbolnr = 0
        tilstandsymboltekst = "kryss"
    } else {
        // Dersom en ikke tester først på X med initiell variabel ender en kanskje opp i else-blokken så sjekk on-startblokken er riktig.
        basic.showString(tilstandsymboltekst)
        // Feilsøking. Denne skal ikke inntreffe, men gret med en test på else.
        // Spesielt lurt om en har gjort en logisk feil eller testet med feil variabel.
        // I else blokken kan en da vise ulike typer debug-info.
        basic.showNumber(tilstandsymbolnr)
    }
})
let tilstandsymboltekst = ""
let tilstandsymbolnr = 0
tilstandsymbolnr = 0
// Ikke nødvendig, men det er greit å se "gyldige streng-verdier"
tilstandsymboltekst = "hjerte"
tilstandsymboltekst = "kryss"
basic.forever(function () {
	
})
loops.everyInterval(5000, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
})
