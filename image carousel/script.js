const imgs = document.getElementById('imgs');

const img = document.querySelectorAll("#imgs img");

let idx = 1;

function run() {
    idx++;

    if(idx > img.length-1){
        idx = 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}
setInterval(run,2000);
