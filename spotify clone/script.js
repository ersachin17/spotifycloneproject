console.log("Welcme to spotify");

//initiliazing the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"ishq-sachha-wahi", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"lagdi-lahore-di-a", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"eve-russeya-na-kar", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"m-jitna-tumhe", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"tum-hi-ho-ashique", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"toota-jo-kbhi-tara", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"tu-hi-ashique", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"tu-hukam-ta-krtave", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"amkho-m-surat", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"hamtere-bin", filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
    {songName:"khariyat-puchho", filePath:"songs/11.mp3",coverPath:"covers/11.jpg"},
]

songItems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
  //Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })      
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
     makeAllPlays();
     songIndex = parseInt(e.target.id);
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = 1;
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})
