function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el => {
    el.preventDefault(); // The Event interface's preventDefault() method tells 
                         // the user agent that if the event does not get explicitly handled, 
                         // its default action should not be taken as it normally would be.
    doSubmit();
})

// // then
// function doSubmit(){
//     const lyrics_el = document.querySelector("#lyrics");
//     const artist = document.querySelector("#artist");
//     const song = document.querySelector("#song");

//     lyrics_el.innerHTML = '<div role="status"><span>Carregando...</span></div>';

//     findLyrics(artist.value, song.value)
//         .then(response => response.json())
//         .then(data => {
//             if (data.lyrics) {
//                 lyrics_el.innerHTML = data.lyrics;
//             } else {
//                 lyrics_el.innerHTML = data.error;
//             }
//         })
//         .catch(err => {
//             lyrics_el.innerHTML = `Oops! ${err}`;
//         })
// }

// // async await
async function doSubmit(){
    const lyrics_el = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");

    lyrics_el.innerHTML = '<div role="status"><span>Carregando...</span></div>';

    // // async await
    // const lyricsResponse = await findLyrics(artist.value, song.value);
    // const data = await lyricsResponse.json();
    // lyrics_el.innerHTML = data.lyrics;

    // // async await + try catch
    try {
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        lyrics_el.innerHTML = data.lyrics;
        if (data.lyrics)
            lyrics_el.innerHTML = data.lyrics;
        else
            lyrics_el.innerHTML = data.error;
    } catch(error) {
        console.log(error);
    }
}