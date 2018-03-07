"use strict";

console.log('reading');

//global variables
var i = document.getElementById('info'); //info about my item
var t = document.getElementById('title'); //title of my item
var obj = document.getElementById('obj');
var close = document.getElementById('close'); //close overlay
var overlay = document.getElementById('overlay'); //overlays
//tarot img
var tarot = document.getElementById('tarot');
var tarotoverlay = document.getElementById('tarotoverlay');
//planner img
var planner = document.getElementById('planner');
var planneroverlay = document.getElementById('planneroverlay');
//tape img
var tape = document.getElementById('tape');
var tapeoverlay = document.getElementById('tapeoverlay');


//planner events
planner.addEventListener('click', function() {
  overlay.style.display = "block";
  t.innerHTML = "2018 Planner";
  i.innerHTML = "I started using a planner this year since it's my final year of undergrad. I'm having a lot of fun filling it out, and to keep me motivated to get through each month, I put things I'm looking forward to for each month, goals for that month, objectives for each week, and things that I've accomplished for that week. It's keeping me organized and making sure I don't get senioritis!";
  obj.innerHTML = "<img src='images/planneroverlay.png'>";
});

//tarot events

tarot.addEventListener('click', function() {
  overlay.style.display = "block";
  t.innerHTML = "Tarot Card";
  i.innerHTML = "'La Papesse' or 'The Priestess.' It usually means hidden powers, intuition, or the subconscious mind. It reminds me of untapped potential whenever I'm going through hard times and that it'll pass like all things - good or bad.";
  obj.innerHTML = "<img src='images/tarotoverlay.png'>";
});

//tape events

tape.addEventListener('click', function() {
  overlay.style.display = "block";
  t.innerHTML = "Washi Tape";
  i.innerHTML = "I use this if I run out of staples or need to add a bit of 'oomf' to something. Sometimes I'll write notes and tape it down it with washi tape and the like."
  obj.innerHTML = "<img src='images/tapeoverlay.png'>";
});

close.addEventListener('click', function() {
  overlay.style.display = "none";
});
