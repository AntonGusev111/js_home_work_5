function clicker(){
    let counter = 0;
    let flag = 0;
    const img = document.getElementById('cookie');
    const count = document.getElementById('clicker__counter')
    img.onclick = () => {
        let speed = clickSpeed(new Date());
        if (flag == 0) {
            img.width += 40;
            img.height +=40;
            flag = 1;
            counter ++;
        } else {
            img.width -= 40;
            img.height -=40;
            flag = 0;
            counter ++;
        }
        count.innerHTML = counter;
        
    }
}

function clickSpeed (time){
    let timeClick = time - lastKlick;
    lastKlick = time;
    let speed = document.getElementById("clicker__speed")
    speed.innerHTML = (1/(timeClick/1000)).toFixed(2)
}
let lastKlick = 0
clicker()