var Body = {
  setColor:function(color) {
    $('body').css('color', color);
//    document.querySelector('body').style.color = color;
  } ,
  setBGColor:function(color) {
    $('body').css('backgroundColor', color);
//    document.querySelector('body').style.backgroundColor = color;
  }
}
function swaphide(q1, q2) {
  if(document.querySelector(q1).style.display === 'block') {
    document.querySelector(q1).style.display = 'none';
    document.querySelector(q2).style.display = 'block';
  } else {
    document.querySelector(q1).style.display = 'block';
    document.querySelector(q2).style.display = 'none';
  }
}
var Link = {
  setColor:function(color) {
    $('a').css('color', color);
//    var i = 0;
//    var alist = document.querySelectorAll('a');
//    while(i < alist.length) {
//      alist[i].style.color = color;
//      i = i + 1;
//    }
  }
}
function nightdayHandlerPlusAlpha(self) {
  var target = document.querySelector('body');
  var whaat = document.querySelector('#whaat');
  var imggg = document.querySelector('#imggg');
  document.querySelector('#dontclick').style.display = 'none';
  if(self.value === '밤') {
    Link.setColor('lightblue');
    Body.setColor('white');
    Body.setBGColor('black');
    self.value = '낮';
    imggg.src = 'black.gif';
    whaat.value = '밤입니다. 소리벗고 빤쓰지르십시오';
    swaphide('#darkdol', '#lightdol');
    alert('까꿍! 밤이 되었습니다!');
  } else {
    Link.setColor('darkblue');
    Body.setColor('black');
    Body.setBGColor('white');
    self.value = '밤';
    imggg.src = 'giphy.gif';
    swaphide('#darkdol', '#lightdol');
    whaat.value = '낮입니다. 응 일어나서 학교가야지';
    alert('까꿍! 낮이 되었습니다!');
  }
}
function nightdayHandler(self) {
  if(self.value === '밤') {
    Link.setColor('lightblue');
    Body.setColor('white');
    Body.setBGColor('black');
    self.value = '낮';
    alert('까꿍! 밤이 되었습니다!');
  } else {
    Link.setColor('darkblue');
    Body.setColor('black');
    Body.setBGColor('white');
    self.value = '밤';
    alert('까꿍! 낮이 되었습니다!');
  }
}
