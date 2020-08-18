const searchBtn = document.getElementById('search-btn');
const formControl = document.getElementById('search-lyrics');



searchBtn.addEventListener('click', function(){
    fetch(`https://api.lyrics.ovh/suggest/${formControl.value}`)
        .then(res => res.json())
        .then(data => {
            let songTitle = data.title;
            console.log(songTitle)


        })
})