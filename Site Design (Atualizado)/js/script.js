document.getElementById('audio-button').addEventListener('click' , function() {
    var audio = document.getElementById('page-audio');
    var audioIcon = document.getElementById('audio-icon');

    if(audio.paused) {
        audio.play();
        audioIcon.src = 'img/botaoaudio.png';
    } else {
        audio.pause();
        audioIcon.src = 'img/botaoaudiomutado.png';
    }
});