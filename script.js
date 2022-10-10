let synth = window.speechSynthesis;

let addKeyColor = e => {
  document.querySelectorAll('.letter').forEach(key => {
    if (e.key == key.dataset.letter) {
      key.classList.add('active')

      let utterance = new SpeechSynthesisUtterance(e.key);
      synth.speak(utterance);
    }
  });
};

let removeKeyColor = e => {
  document.querySelector('#input').value = "";
  document.querySelectorAll('.letter').forEach(key => {
    if (e.key == key.dataset.letter) {
      key.classList.remove('active')
    }
  })
};

document.querySelector('#input').addEventListener("keydown", addKeyColor);
document.querySelector('#input').addEventListener("keyup", removeKeyColor);

document.querySelectorAll('.letter').forEach(key => {
  key.addEventListener("mouseover", () => {
    key.classList.add('active')
  })
});

document.querySelectorAll('.letter').forEach(key => {
  key.addEventListener("mouseleave", () => {
    key.classList.remove('active')
  })
});

