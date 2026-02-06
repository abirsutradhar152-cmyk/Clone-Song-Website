let songIndex = 0;
let audioElement = new Audio('ArijitSongs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'))

let songs = [
    { songName: "Agar Tum Saath Ho", filePath: "ArijitSongs/1.mp3", coverPath: "covers/11.jpg" },
    { songName: "Channa Mereya", filePath: "ArijitSongs/2.mp3", coverPath: "covers/12.jpg" },
    { songName: "Ghar Kab Aaoge", filePath: "ArijitSongs/3.mp3", coverPath: "covers/13.jpg" },
    { songName: "Illahi", filePath: "ArijitSongs/4.mp3", coverPath: "covers/14.jpg" },
    { songName: "Mast Magan", filePath: "ArijitSongs/5.mp3", coverPath: "covers/15.jpg" },
    { songName: "Qayde se", filePath: "ArijitSongs/6.mp3", coverPath: "covers/16.jpg" },
    { songName: "Raabta", filePath: "ArijitSongs/7.mp3", coverPath: "covers/17.jpg" },
    { songName: "Roke Na Ruke Naina", filePath: "ArijitSongs/8.mp3", coverPath: "covers/18.jpg" },
    { songName: "Shayad", filePath: "ArijitSongs/9.mp3", coverPath: "covers/19.jpg" },
     { songName: "Soulmate", filePath: "ArijitSongs/10.mp3", coverPath: "covers/20.jpg" }
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})

// audioElement.play();

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    //update seekbar
    progess = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progess;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
    
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src=`ArijitSongs/${songIndex+1}.mp3`;
         masterSongName.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity=1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');

        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`ArijitSongs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`ArijitSongs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})