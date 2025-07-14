var body = document.getElementsByTagName("body");
var head = document.getElementsByTagName("head");
const topBar = document.getElementById('topBar');
const avatar = document.getElementById('avatar');
var subtitle = document.getElementById('subtitle');
function randomRgbaColor(a) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b},${a})`;
}
topBar.addEventListener('mouseenter', function () {
    const tip = document.createElement('div');
    tip.textContent = 'Ciallo～(∠・ω< )⌒★';
    tip.style.position = 'fixed';
    tip.style.top = '90px';
    tip.style.left = '50%';
    tip.style.transform = 'translateX(-50%)';
    tip.style.background = 'rbga(0,0,0,0)';
    tip.style.color = 'white';
    tip.style.padding = '12px 25px';
    tip.style.borderRadius = '30px';
    tip.style.fontSize = '14px';
    tip.style.boxShadow = '0 5px 15px rgba(0, 255, 242, 0.4)';
    tip.style.zIndex = '1001';
    tip.style.animation = 'fadeInOut 3s forwards';
    const style = document.createElement('style');
    style.textContent = `
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translate(-50%, -10px); }
                    20% { opacity: 1; transform: translate(-50%, 0); }
                    80% { opacity: 1; transform: translate(-50%, 0); }
                    100% { opacity: 0; transform: translate(-50%, 10px); }
                }
            `;
    document.head.appendChild(style);
    document.body.appendChild(tip);

    setTimeout(() => {
        document.body.removeChild(tip);
        document.head.removeChild(style);
    }, 3000);
});

avatar.addEventListener('click', function () {
    this.style.transform = 'scale(0.9)';
    this.style.boxShadow = '0 0 0 5px rgba(255 , 183 , 197, 0.5)';
    this.style.boxShadow = '0 0 0 5px ' + randomRgbaColor(0.5);
    const effect = document.createElement('div');
    effect.style.position = 'absolute';
    effect.style.width = '60px';
    effect.style.height = '60px';
    effect.style.borderRadius = '50%';
    effect.style.border = '2px solid rgba(255 , 183 , 197, 0.7)';
    effect.style.border = '2px solid' + randomRgbaColor(0.7);
    effect.style.top = '50%';
    effect.style.left = '50%';
    effect.style.transform = 'translate(-50%, -50%)';
    effect.style.animation = 'ripple 0.6s linear';
    this.appendChild(effect);
    const style = document.createElement('style');
    style.textContent = `
                @keyframes ripple {
                    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
                }
            `;
    document.head.appendChild(style);
    setTimeout(() => {
        this.removeChild(effect);
        document.head.removeChild(style);
    }, 600);
    setTimeout(() => {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 0 15px rgba(255 , 183 , 197, 0.3)';
        this.style.boxShadow = '0 0 15px ' +  randomRgbaColor(0.3);
    }, 300);
});
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        topBar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        topBar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});
var GoldSentence = ["与你的日常，便是奇迹。","有阳光的地方，人自然会聚集。","给岁月以文明，而不是给文明以岁月","描线一笔接一笔，白色的素描本上渐渐萌生黑意。即便如此，还无法照准记忆中的风景。","梦里相逢人不见，若知是梦何须醒。纵然梦里常幽会，怎比真如见一回。","以彗星为龙，以彗星为绳结。描绘出割裂的彗星舞动的形态。又是一轮岁月。","重要的不是经历，是选择。","机器可以替代，但人是不可替代的。"]
var randomNum = Math.floor(Math.random() * GoldSentence.length);
subtitle.textContent = GoldSentence[randomNum];