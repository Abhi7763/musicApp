const music = new Audio('audio/1.mp3');
// music.play();

const song = [
    {
        id:'1',
        songName:`on my way <br>
        <div class="subtitle">Alan Walker`,
        poster:"img/1.jpg"
    },

    {
        id:"2",
        songName:`Alan Walker-fade <br>
        <div class="subtitle">Alan Walker`,
        poster:"img/2.jpg"
    },

    {
        id:'3',
        songName:`cartoon - on & on <br>
        <div class="subtitle">Danel level`,
        poster:"img/3.jpg"
    },

    {
        id:'4',
        songName:`warriyo Mortals<br>
        <div class="subtitle">`,
        poster:"img/4.jpg"
    },

    {
        id:'5',
        songName:`Errtugrul Gazi<br>
        <div class="subtitle">Alan Walker`,
        poster:"img/5.jpg"
    },

    {
        id:'6',
        songName:`Elictrions Music<br>
        <div class="subtitle">Elictications`,
        poster:"img/6.jpg"
    },

    {
        id:'7',
        songName:`Agar Tum Sath ho<br>
        <div class="subtitle">Tamasha`,
        poster:"img/7.jpg"
    },

    {
        id:'8',
        songName:`Suna Hai <br>
        <div class="subtitle">Neha Kakar`,
        poster:"img/8.jpg"
    },

    {
        id:"9",
        songName:`Dilbar<br>
        <div class="subtitle">Nora `,
        poster:"img/9.jpg"
    },

    {
        id:'10',
        songName:`duniya<br>
        <div class="subtitle">kartik Aryan`,
        poster:"img/10.jpg"
    },

    {
        id:'11',
        songName:`Lagdi lahore<br>
        <div class="subtitle">street dance 3d`,
        poster:"img/11.jpg"
    },

    {
        id:'12',
        songName:`Putt Jatt da <br>
        <div class="subtitle">putt jatt da`,
        poster:"img/12.jpg"
    },

    {
        id:'13',
        songName:`baarishehin<br>
        <div class="subtitle">astif alam`,
        poster:"img/13.jpg"
    },

    {
        id:'14',
        songName:`vaaste<br>
        <div class="subtitle">Dhavani Bhanushail`,
        poster:"img/14.jpg"
    },

    {
        id:'15',
        songName:`Lut Gaya<br>
        <div class="subtitle">Jubin Nautiyal`,
        poster:"img/15.jpg"
    },

    {
        id:'16',
        songName:`Tu meri jindgi hai<br>
        <div class="subtitle">jubin nautiyal`,
        poster:"img/16.jpg"
    },

    {
        id:'17',
        songName:`bata yaad hai tumko wo <br>
        <div class="subtitle">hellon Soingh`,
        poster:"img/17.jpg"
    },

    {
        id:'18',
        songName:`Mere Dhol judaiyan <br>
        <div class="subtitle">Ali Sheti`,
        poster:"img/18.jpg"
    },

    {
        id:'19',
        songName:`eh munde pagal ne sare <br>
        <div class="subtitle">Ap Dhillon`,
        poster:"img/19.jpg",
    },

    {
        id:'20',
        songName:`Dunny 82k <br>
        <div class="subtitle">Ap Dhillon, Gurinder`,
        poster:"img/20.jpg",
    },
]



Array.from(document.getElementsByClassName('songitem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
});

// search data 
    let search_results = document.getElementsByClassName('search_results')[0];

    song.forEach(element =>{
     const {id, songName, poster} = element;
     let card = document.createElement('a');
     card.classList.add('card');
     card.href = "#" + id;

      card.innerHTML = `  <img src="${poster}">

      <div class="content">
       
      ${songName}
      </div>
`;
       search_results.appendChild(card);
       
    });

    let input = document.getElementsByTagName('input')[0];

    input.addEventListener('keyup',()=>{
        let input_value = input_value.toUpperCase();
        let items = search_results.getElementsByTagName('a');

        for (let index = 0; index < items.length; index ++) {
           let as = items[index].getElementsByClassName("content")[0];
           let text_value = as.textContent || as.innerHTML;
            
            if (text_value.toUpperCase().indexOf(input_value) > -1) {
                items[index].style.display="flex";
            } else {
                items[index].style.display="none";
            }


        }
    })

// search data 




let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click', () => {

    if(music.paused || music.currentTime <= 0){

      music.play();
      wave.classList.add('active1');
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');

    } else {

          music.pause();
          wave.classList.remove('active1');
          masterPlay.classList.add('bi-play-fill');
          masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
    
        el.classList.add('bi-play-fill');
        el.classList.remove('bi-pause-fill');

    })
}




const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let dowlord_music = document.getElementById('dowlord_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{

        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        dowlord_music.href = `audio/${index}.mp3`;

        let songTitles = song.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss=>{
            let {songName} = elss;
            title.innerHTML = songName;
            dowlord_music.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgb(105, 105, 105, .1)";
          makeAllplays();
          el.target.classList.remove('bi-play-circle-fill');
          el.target.classList.add('bi-pause-circle-fill');
          wave.classList.add('active1');

    });
})


let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10){
        sec1 = `0${sec1}`;
    }

    currentend.innerText =`${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentstart.innerText =`${min2}:${sec2}`;

    let progressbar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressbar;

    let seekbar = seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value ==0){

        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }

    if(vol.value > 0){

        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');  
    }

    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');  
    }

    let vol_a = vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;

    
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -=1;

    if(index < 1){
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;

    // masterPlay.classList.remove('bi-play-fill');
    // masterPlay.classList.add('bi-pause-fill');

    let songTitles = song.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgb(105, 105, 105, .1)";
      makeAllplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');

})

next.addEventListener('click', ()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songitem')).length){
        index = 1;
    }


    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;

    // masterPlay.classList.remove('bi-play-fill');
    // masterPlay.classList.add('bi-pause-fill');

    let songTitles = song.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgb(105, 105, 105, .1)";
      makeAllplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');

});








let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];



pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});


pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];



pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 330;
});


pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 330;
});




let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;
                                                                    
    switch (a){
        case "next":
             shuffle.classList.add('bi-arrow-repeat');
             shuffle.classList.remove('bi-music-note-beamed');
             shuffle.classList.remove('bi-shuffle');
             shuffle.innerHTML = 'repeat';
        break;

          case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
         

         case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';

         break;
    
    }
});



music.addEventListener('ended', ()=>{
     index ++;

    if (index == song.length) {

        index = 1

    } else {

        index++;

    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    dowlord_music.href = `audio/${index}.mp3`;

    let songTitles = song.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
        dowlord_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index -1].style.background = "rgb(105, 105, 105, .1)";
      makeAllplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');

})

const next_music = () =>{
   
    if (index == song.length) {

        index = 1

    } else {

        index++;

    }
    
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    dowlord_music.href = `audio/${index}.mp3`;

    let songTitles = song.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
        dowlord_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem')) 
    [index -1].style.background = "rgb(105, 105, 105, .1)";
      makeAllplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}




const repeat_music = () =>{
   
   index;
    
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    dowlord_music.href = `audio/${index}.mp3`;

    let songTitles = song.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
        dowlord_music.setAttribute('download',songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem')) 
    [index -1].style.background = "rgb(105, 105, 105, .1)";
      makeAllplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');
}

const random_music = () =>{
   
    
    if (index == song.length) {

        index = 1

    } else {

        index=Math.floor((Math.random() * song.length) + 1);

    }
     
     music.src = `audio/${index}.mp3`;
     poster_master_play.src = `img/${index}.jpg`;
 
     masterPlay.classList.remove('bi-play-fill');
     masterPlay.classList.add('bi-pause-fill');
     dowlord_music.href = `audio/${index}.mp3`;
 
     let songTitles = song.filter((els)=>{
         return els.id == index;
     });
 
     songTitles.forEach(elss=>{
         let {songName} = elss;
         title.innerHTML = songName;
         dowlord_music.setAttribute('download',songName);
     });
 
     makeAllBackground();
     Array.from(document.getElementsByClassName('songitem')) 
     [index -1].style.background = "rgb(105, 105, 105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
 }
 
 
 music.addEventListener('ended', () => {
    let b= shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;

            case 'next':
            next_music();
            break;

            case 'random':
            random_music();
            break;
    
        default:
            break;
    }

 })
 
 
 
 
 
 












