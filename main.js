let tracksObj = {
    1: {
        name: "I Got You",
        coverArt: "I Got You Cover Art.png",
        soundfile: "Wex & Cred - I Got You (ft. MKHL).mp3",
    },
    2: {
        name: "Aura",
        coverArt: "AuraCoverArt.png",
        soundfile: "Wex - Aura (ft. Waywoc) 4.wav",
    },
    3: {
        name: "Strictly for the Music",
        coverArt: "evenNewStrict.png",
        soundfile: "Strictly for the Music.wav",
    },
}

let tracksObjLength = Object.keys(tracksObj).length

for (let i = 1; i <= tracksObjLength; i++) {

    tracksObj[`${i}`].isPlaying = false
}