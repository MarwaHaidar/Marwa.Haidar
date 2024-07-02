function openOverlay(title, description, videoSrc, details) {
    document.getElementById('project-title').textContent = title;
    document.getElementById('project-description').textContent = description;

    if (videoSrc) {
        document.getElementById('project-video').style.display = "block";
        document.getElementById('video-source').src = videoSrc;
        document.getElementById('project-video').load();
    } else {
        document.getElementById('project-video').style.display = "none";
    }

    if (details) {
        document.getElementById('project-details').style.display = "block";
        document.getElementById('project-details').textContent = details;
    } else {
        document.getElementById('project-details').style.display = "none";
    }

    document.getElementById('overlay').style.display = 'flex';
    document.body.classList.add('blur');
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('project-video').pause();
    document.body.classList.remove('blur');
}

const menuIcon=document.querySelector('#menu-icon');
const navbar=document.querySelector('.navbar');


menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}