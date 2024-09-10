
        const bubble = document.getElementById('bubble');
        const mascotImage = document.getElementById('mascotImage');
        const mascotVideo = document.getElementById('mascotVideo');
        const mascotAudio = document.getElementById('mascotAudio');

        let isPlaying = false; // Estado para controlar a reprodução

        bubble.addEventListener('click', function() {
            if (isPlaying) {
                // Pausar o vídeo e o áudio
                mascotImage.style.display = 'block';
                mascotVideo.style.display = 'none';
                mascotAudio.pause();
                mascotVideo.pause();
            } else {
                // Mostrar o vídeo e ocultar a imagem
                mascotImage.style.display = 'none';
                mascotVideo.style.display = 'block';
                mascotAudio.play();
                mascotVideo.play();
            }
            isPlaying = !isPlaying; // Alternar o estado
        });