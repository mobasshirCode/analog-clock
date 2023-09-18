setInterval(() => {
  d = new Date();

  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  hrotation = htime * 30 + mtime / 2;
  mrotation = mtime * 6 + stime / 10;
  srotation = stime * 6;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);
