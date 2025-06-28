const icon = document.getElementById('color-icon');
const overlay = document.getElementById('overlay');
const intro = document.getElementById('intro-panel');
const picker = document.getElementById('color-picker-panel');
const openBtn = document.getElementById('open-colors');
const bgWrap = document.getElementById('bg-colors');
const elWrap = document.getElementById('el-colors');
const prevBg = document.getElementById('preview-bg');
const prevEl = document.getElementById('preview-el');
const applyBtn = document.getElementById('apply-colors');
const resetBtn = document.getElementById('reset-colors');

const bgList = ['#fce4ec','#f3e5f5','#e8eaf6','#e0f7fa','#e8f5e9','#fff3e0'];
const elList = ['#d50000','#aa00ff','#6200ea','#2962ff','#00c853','#ff6d00'];
const targets = ['.chat-container','.message','.chat-input'];

bgList.forEach(c => {
  const box = document.createElement('div');
  box.style.background = c;
  box.onclick = () => {
    document.querySelectorAll('#bg-colors div').forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
    prevBg.style.background = c;
  };
  bgWrap.appendChild(box);
});

elList.forEach(c => {
  const box = document.createElement('div');
  box.style.background = c;
  box.onclick = () => {
    document.querySelectorAll('#el-colors div').forEach(b => b.classList.remove('selected'));
    box.classList.add('selected');
    prevEl.style.background = c;
  };
  elWrap.appendChild(box);
});

icon.onclick = () => {
  overlay.style.display = 'block';
  intro.style.display = 'block';
  picker.style.display = 'none';
};
openBtn.onclick = () => {
  intro.style.display = 'none';
  picker.style.display = 'block';
};
overlay.onclick = e => {
  if (e.target === overlay) overlay.style.display = 'none';
};

applyBtn.onclick = () => {
  if (prevBg.style.background) {
    document.documentElement.style.setProperty('--bg-main', prevBg.style.background);
  }
  if (prevEl.style.background) {
    document.documentElement.style.setProperty('--el-main', prevEl.style.background);
    targets.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.style.background = prevEl.style.background);
    });
  }
  overlay.style.display = 'none';
};

resetBtn.onclick = () => {
  document.documentElement.style.setProperty('--bg-main', '#f3f5f7');
  document.documentElement.style.setProperty('--el-main', '#ffffff');
  prevBg.style.background = '';
  prevEl.style.background = '';
  targets.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.style.background = 'var(--el-main)');
  });
};
