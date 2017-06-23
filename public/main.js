/* global io, document */

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContent is loaded');
  var socket = new io();
  socket.connect('http://localhost:3000', {
    autoConnect: true
  });

  const button1 = document.getElementById('button1');
  button1.onclick = function() {
    socket.send('one');
    console.log('your clicked button one in frontend');
  };
  const button2 = document.getElementById('button2');
  button2.onclick = function() {
    socket.send('two');
    console.log('your clicked button two in frontend');

  };
  const button3 = document.getElementById('button3');
  button3.onclick = function() {
    socket.send('three');
    console.log('your clicked button three in frontend');

  };
  const button4 = document.getElementById('button4');
  button4.onclick = function() {
    socket.send('four');
    console.log('your clicked button four in frontend');

  };
});

