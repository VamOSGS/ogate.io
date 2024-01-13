document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  const bg = document.querySelector('#bg');
  const bg2 = document.querySelector('#bg2');
  const logo = document.querySelector('#eLlGnpbvDqh1');
  const social = document.querySelector('.social').querySelectorAll('a');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;
  let XHit = false;
  let YHit = false;
  function move() {
    if (XHit) {
      bg.style.opacity = `1`;
    } else {
      bg.style.opacity = `0`;
    }
    if (YHit) {
      bg2.style.opacity = `1`;
    } else {
      bg2.style.opacity = `0`;
    }

    if (XHit || YHit) {
      logo.style.fill = `black`;
      social.forEach((el) => {
        el.style.color = `black`;
      });
    } else {
      logo.style.fill = `white`;
      social.forEach((el) => {
        el.style.color = `white`;
      });
    }
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
    if (
      window.innerWidth - tgX < 100 ||
      window.innerWidth - tgX === window.innerWidth
    ) {
      XHit = true;
    } else {
      XHit = false;
    }

    if (window.innerHeight - tgY < 20 || tgY < 20) {
      YHit = true;
    } else {
      YHit = false;
    }
  });

  move();
});
