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

    const alltracksBossContainer = document.getElementById("alltracksBossContainer")
    var tracksContainer = document.createElement("div");
    tracksContainer.classList.add("tracksContainer");
    alltracksBossContainer.appendChild(tracksContainer);

    var coverArtContainer = document.createElement("div");
    coverArtContainer.classList.add("coverArtContainer");
    tracksContainer.appendChild(coverArtContainer);
    var coverArtPic = document.createElement("img");
    if (i===2) {
        coverArtPic.classList.add("coverArt");  
    }
    coverArtPic.classList.add("iGotYouCoverArt");
    coverArtContainer.appendChild(coverArtPic);

    var trackTitleContainer = document.createElement("div");
    trackTitleContainer.classList.add("trackTitleContainer");
    tracksContainer.appendChild(trackTitleContainer);
    var title = document.createElement("div");
    title.classList.add("title");
    trackTitleContainer.appendChild(title);

    var playPauseContainer = document.createElement("div");
    playPauseContainer.classList.add("playPauseContainer");
    tracksContainer.appendChild(playPauseContainer);
    var fontAwesomePlayTrackIcon = document.createElement("i");
    fontAwesomePlayTrackIcon.classList.add("fas", "fa-play", "fa-2x", "fontAwesomePlayTrackIcon");
    playPauseContainer.appendChild(fontAwesomePlayTrackIcon);
}

// const tracks is an array of how many different songs I will be displaying on the screen
const tracks = document.getElementsByClassName("tracksContainer")

for (let i = 0; i < tracks.length; i++) {
    window[`track${i+1}`] = tracks[i]
    window[`track${i+1}CoverArt`] = window[`track${i+1}`].querySelector(".coverArtContainer").querySelector(".iGotYouCoverArt").src = tracksObj[`${i+1}`].coverArt
    window[`track${i+1}Title`] = window[`track${i+1}`].querySelector(".trackTitleContainer").querySelector(".title").innerText = tracksObj[`${i+1}`].name
    
}