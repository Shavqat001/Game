
let body = document.querySelector('.human-body'),
    head = document.querySelector('.human-head'),
    arm1 = document.querySelector('.arm1'),
    arm2 = document.querySelector('.arm2'),
    leg1 = document.querySelector('.leg1'),
    leg2 = document.querySelector('.leg2'),
    gun = document.querySelector('.gun');

let arm1Var = 40;
let arm2Var = -60;

let leg1Var = 40;
let leg2Var = -60;

let xMove = 110;

let x0 = 10,
    x1 = 10,
    x2 = 10,
    x3 = 10;
let count = 1;

let bool = true;
let gunBool = true;
document.body.onkeydown = () => {
    if (event.code == 'KeyD') {
        body.style.left = xMove + 'px';
        xMove += 10;
        body.style.transform = 'rotateY(0deg)';

        arm1Var += x0;
        arm2Var += x1;
        leg1Var += x2;
        leg2Var += x3;

        arm1.style.transform = 'rotate(' + arm1Var + 'deg)';
        arm2.style.transform = 'rotate(' + arm2Var + 'deg)';
        leg1.style.transform = 'rotate(' + leg1Var + 'deg)';
        leg2.style.transform = 'rotate(' + leg2Var + 'deg)';


        if (arm1Var >= 120) {
            x0 = -10;
        } else if (arm1Var <= 60) {
            x0 = 10;
        }

        if (arm2Var >= -60) {
            x1 = -10;
        } else if (arm2Var <= -120) {
            x1 = 10;
        }

        if (leg1Var >= 120) {
            x2 = -10;
        } else if (leg1Var <= 60) {
            x2 = 10;
        }
        if (leg2Var >= -60) {
            x3 = -10;
        } else if (leg2Var <= -120) {
            x3 = 10;
        }
    }
    if (event.code == 'KeyA') {
        body.style.left = xMove + 'px';
        xMove -= 10;
        body.style.transform = 'rotateY(180deg)';

        arm1Var += x0;
        arm2Var += x1;
        leg1Var += x2;
        leg2Var += x3;

        arm1.style.transform = 'rotate(' + arm1Var + 'deg)';
        arm2.style.transform = 'rotate(' + arm2Var + 'deg)';
        leg1.style.transform = 'rotate(' + leg1Var + 'deg)';
        leg2.style.transform = 'rotate(' + leg2Var + 'deg)';


        if (arm1Var >= 120) {
            x0 = -10;
        } else if (arm1Var <= 60) {
            x0 = 10;
        }

        if (arm2Var >= -60) {
            x1 = -10;
        } else if (arm2Var <= -120) {
            x1 = 10;
        }

        if (leg1Var >= 120) {
            x2 = -10;
        } else if (leg1Var <= 60) {
            x2 = 10;
        }
        if (leg2Var >= -60) {
            x3 = -10;
        } else if (leg2Var <= -120) {
            x3 = 10;
        }
    }
    if (event.code == 'Space') {
        body.style.animation = 'jump 0.3s linear';
        setTimeout(() => {
            body.style.animation = 'none';
        }, 400);

    }
    if (event.code == 'KeyQ') {
        arm1.style.transform = 'rotate(0deg)';
        gun.style.display = 'block';
    }
    if (event.code == 'KeyW') {
        if (bool == true) {
            head.style.transform = 'rotate(-45deg)';
            bool = false;
        } else {
            head.style.transform = 'rotate(0deg)';
            bool = true;
        }
    }
    if (event.code == 'KeyS') {
        if (bool == true) {
            head.style.transform = 'rotate(45deg)';
            bool = false;
        } else {
            head.style.transform = 'rotate(0deg)';
            bool = true;
        }
    }
}
document.body.onkeyup = () => {
    arm1.style.transform = 'rotate(90deg)';
    arm2.style.transform = 'rotate(-90deg)';
    leg1.style.transform = 'rotate(90deg)';
    leg2.style.transform = 'rotate(-90deg)';
    gun.style.display = 'none';
}
window.onload = () => {
    arm1.style.transform = 'rotate(90deg)';
    arm2.style.transform = 'rotate(-90deg)';
    leg1.style.transform = 'rotate(90deg)';
    leg2.style.transform = 'rotate(-90deg)';
}