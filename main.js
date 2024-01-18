const end = new Date('01/20/2024 9:30 AM');
const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;
const countdown = document.getElementById('countdown');
const container = document.getElementsByClassName('container')[0];
const sddText = document.getElementById('saudade');
let containerIsHidden = false

function showRemaining() {
  if (!containerIsHidden) {
    container.classList.remove('hidden');
  }
  const now = new Date();
  const distance = end - now;
  if (distance < 0) {
      clearInterval(timer);
      countdown.innerHTML = 'CHEGOU O GRANDE DIAAAAA!';
      return;
  }
  const days = Math.floor(distance / _day);
  const hours = Math.floor((distance % _day) / _hour);
  const minutes = Math.floor((distance % _hour) / _minute);
  const seconds = Math.floor((distance % _minute) / _second);

  countdown.innerHTML = days + ' dias <br>';
  countdown.innerHTML += hours + ' horas <br>';
  countdown.innerHTML += minutes + ' minutos <br>';
  countdown.innerHTML += seconds + ' segundos';
}

const timer = setInterval(showRemaining, 1000);


const btn = document.getElementById('sdd');
const saudade1 = document.getElementById('saudade-1');
const saudade2 = document.getElementById('saudade-2');

const not = document.getElementById('not');
not.addEventListener("click", () => {
  not.classList.add('op0')
})

btn.addEventListener("click", () => {
  btn.setAttribute('disable', true);
  containerIsHidden = true
  container.classList.add('hidden');
  sddText.classList.add('animation')
  saudade1.classList.remove('hidden');
  saudade2.classList.remove('hidden');
  // alert('EU TAMBEM TO COM SAUDADEEEEEEE');
  
  setTimeout(() => {
    btn.setAttribute('disable', false);
    sddText.classList.remove('animation')
    container.classList.remove('hidden');
    saudade1.classList.add('hidden');
    saudade2.classList.add('hidden');
    containerIsHidden = false
  }, 3500);
});