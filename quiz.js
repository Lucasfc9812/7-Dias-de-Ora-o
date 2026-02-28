// ============================================================
//  QUIZ — 7 Dias de Oração Pela Proteção dos Seus Filhos
//  Lógica de segmentação, pontuação e resultado
// ============================================================

// ── DADOS DAS PERGUNTAS ──────────────────────────────────────

const questions = [
    {
        id: 1,
        icon: "🙏",
        text: "Mesmo quando seus filhos estão do seu lado, em casa, em segurança — você ainda sente aquela preocupação no fundo do coração?",
        micro: "Muitas mães sentem isso e nunca falam em voz alta. Você não está sozinha.",
        toast: "Você respondeu com coragem. Continua…",
        options: [
            { emoji: "✅", text: "Sim, é quase constante", points: 3 },
            { emoji: "🔄", text: "Às vezes, quando algo me lembra os perigos lá fora", points: 2 },
            { emoji: "🌿", text: "Raramente, consigo confiar mais", points: 1 },
            { emoji: "❌", text: "Não costumo sentir isso", points: 0 },
        ]
    },
    {
        id: 2,
        icon: "🌙",
        text: "Você já ficou acordada de madrugada com pensamentos sobre o futuro dos seus filhos — sem conseguir parar de pensar?",
        micro: "A noite tem um jeito de amplificar tudo que a gente carrega em silêncio durante o dia.",
        toast: "Obrigada por compartilhar isso. Você está no lugar certo.",
        options: [
            { emoji: "✅", text: "Sim, isso acontece com frequência", points: 3 },
            { emoji: "🔄", text: "Já aconteceu algumas vezes", points: 2 },
            { emoji: "🌿", text: "Raramente", points: 1 },
            { emoji: "❌", text: "Não, consigo descansar bem", points: 0 },
        ]
    },
    {
        id: 3,
        icon: "✝️",
        text: "Você costuma orar pelos seus filhos — mas às vezes sente que sua oração poderia ser mais profunda, mais firme?",
        micro: "Não existe oração perfeita — existe oração verdadeira. E a sua já conta.",
        toast: "Sua honestidade diz muito sobre quem você é.",
        options: [
            { emoji: "✅", text: "Sim, oro muito mas sinto que falta algo", points: 2 },
            { emoji: "🔄", text: "Oro, mas poderia ser mais constante", points: 2 },
            { emoji: "🌿", text: "Oro pouco, não sei muito bem como fazê-lo", points: 3 },
            { emoji: "❌", text: "Não tenho o hábito de orar", points: 3 },
        ]
    },
    {
        id: 4,
        icon: "💔",
        text: "Existe alguma situação na vida dos seus filhos que você sente que está completamente fora do seu alcance como mãe?",
        micro: "Reconhecer os limites do nosso controle é, muitas vezes, o primeiro passo para encontrar paz.",
        toast: "Isso que você sente tem nome — e tem caminho.",
        options: [
            { emoji: "✅", text: "Sim, e isso me pesa muito", points: 3 },
            { emoji: "🔄", text: "Sim, mas tento não pensar nisso", points: 2 },
            { emoji: "🌿", text: "Às vezes sinto, mas confio que vai passar", points: 1 },
            { emoji: "❌", text: "Geralmente me sinto no controle", points: 0 },
        ]
    },
    {
        id: 5,
        icon: "💛",
        text: "Se você pudesse receber um guia simples e acolhedor — com orações específicas para proteger, guiar e abençoar sua família a cada dia — isso seria importante para você agora?",
        micro: "A oração não muda o que está fora — ela transforma o que está dentro. E isso muda tudo.",
        toast: null,
        options: [
            { emoji: "✅", text: "Sim, com certeza — precisava disso", points: 3 },
            { emoji: "🔄", text: "Sim, acho que me ajudaria muito", points: 2 },
            { emoji: "🌿", text: "Talvez, ainda tenho dúvidas", points: 1 },
            { emoji: "❌", text: "Não, não acredito que faria diferença", points: 0 },
        ]
    }
];

// ── DADOS DOS PERFIS ─────────────────────────────────────────

const profiles = {
    angustiada: {
        range: [11, 15],
        badge: "🔴",
        headline: "Seu coração carrega muito — e você não precisa carregar sozinha.",
        body: `Você é uma mãe que ama com tudo. Mas amar tanto assim também dói — porque a gente sabe o quanto tem a perder.\n\nSua pontuação revela que você vive com um peso constante no peito: o medo pelo futuro dos seus filhos, as noites que não chegam ao amanhecer em paz, a sensação de que, por mais que você faça, nunca é suficiente.\n\nIsso não é fraqueza. É amor em estado bruto.\n\nMas esse peso não foi feito para ser carregado assim. A oração não vai eliminar os perigos do mundo — mas ela pode transformar a forma como você enfrenta cada dia, com mais paz, mais fé e mais certeza de que você não está sozinha nessa missão.\n\nÉ exatamente para mães como você que este guia foi criado.`,
        verse: '"Lançai sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós." — 1 Pedro 5:7',
        cta: "🙏 Quero conhecer o guia",
    },
    vigilante: {
        range: [6, 10],
        badge: "🟡",
        headline: "Você cuida, você ora — mas às vezes o coração ainda hesita.",
        body: `Você já encontrou um equilíbrio entre a fé e o cotidiano. Você ora, cuida, observa. Mas há momentos em que aquela nuvem de preocupação aparece — e você fica se perguntando se está fazendo o suficiente.\n\nEssa hesitação é honesta. E honestidade, em uma mãe, é ouro.\n\nO que você precisa não é de mais esforço — mas de mais ancoragem. Uma prática diária, simples e profunda, que te lembre todos os dias: você não está protegendo seus filhos sozinha.\n\nEste guia foi criado para mães como você — que já caminham na fé, mas querem tornar esse caminhar mais firme e mais intencional.`,
        verse: '"Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento." — Provérbios 3:5',
        cta: "✨ Quero fortalecer minha oração",
    },
    insegura: {
        range: [0, 5],
        badge: "🟢",
        headline: "Você sente que deveria orar mais — mas não sabe por onde começar.",
        body: `Talvez a fé não seja algo que você pratica de forma regular. Ou talvez você ore, mas sem muita certeza do que dizer — e isso te deixa com uma sensação de que está "faltando algo".\n\nIsso é mais comum do que você imagina. E não tem nada de errado com você.\n\nO que você sente é um chamado. Um desejo de estar mais conectada — de sentir que suas orações chegam, que você sabe como interceder pelos seus filhos.\n\nEste guia é um ponto de partida gentil. Não exige teologia, nem vocabulário religioso. São apenas palavras de um coração de mãe, guiadas dia a dia, em direção a Deus.`,
        verse: '"Pedi e dar-se-vos-á; buscai e achareis; batei e abrir-se-vos-á." — Mateus 7:7',
        cta: "💛 Quero dar esse primeiro passo",
    }
};

// ── ESTADO DO APP ────────────────────────────────────────────

let currentQuestion = 0;
let totalScore = 0;
let offerUrl = "#"; // <<< COLOQUE AQUI A URL DA PÁGINA DE VENDAS

// ── UTILITÁRIOS ──────────────────────────────────────────────

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => { t.classList.add('show'); });
    });
    setTimeout(() => {
        t.classList.remove('show');
        setTimeout(() => t.remove(), 400);
    }, 2000);
}

function updateProgress() {
    const pct = (currentQuestion / questions.length) * 100;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-label').textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;
}

// ── RENDERIZAR PERGUNTA ──────────────────────────────────────

function renderQuestion() {
    const q = questions[currentQuestion];
    const card = document.getElementById('question-card');

    // Fade out
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';

    setTimeout(() => {
        document.getElementById('question-icon').textContent = q.icon;
        document.getElementById('question-text').textContent = q.text;
        document.getElementById('question-micro').textContent = q.micro;

        const grid = document.getElementById('options-grid');
        grid.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.id = `opt-${idx}`;
            btn.innerHTML = `<span class="option-emoji">${opt.emoji}</span><span>${opt.text}</span>`;
            btn.onclick = () => selectOption(idx, opt.points, q.toast);
            grid.appendChild(btn);
        });

        updateProgress();

        // Fade in
        card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 250);
}

// ── SELECIONAR OPÇÃO ─────────────────────────────────────────

function selectOption(idx, points, toast) {
    // Highlight selecionado
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById(`opt-${idx}`).classList.add('selected');

    totalScore += points;

    // Toast de transição
    if (toast) showToast(toast);

    // Delay antes de avançar
    const delay = toast ? 1600 : 600;
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            showLoading();
        }
    }, delay);
}

// ── LOADING ──────────────────────────────────────────────────

function showLoading() {
    showScreen('screen-loading');
    setTimeout(showResult, 3000);
}

// ── DETERMINAR PERFIL ────────────────────────────────────────

function getProfile() {
    if (totalScore >= 11) return profiles.angustiada;
    if (totalScore >= 6) return profiles.vigilante;
    return profiles.insegura;
}

// ── MOSTRAR RESULTADO ────────────────────────────────────────

function showResult() {
    const p = getProfile();

    document.getElementById('result-badge').textContent = p.badge;
    document.getElementById('result-headline').textContent = p.headline;
    document.getElementById('verse-box').textContent = p.verse;
    document.getElementById('offer-cta-text').textContent = p.cta;

    // Body com quebras de linha
    const bodyEl = document.getElementById('result-body');
    bodyEl.innerHTML = '';
    p.body.split('\n\n').forEach(para => {
        const el = document.createElement('p');
        el.style.marginBottom = '16px';
        el.textContent = para;
        bodyEl.appendChild(el);
    });

    showScreen('screen-result');
}

// ── AÇÕES PÚBLICAS ───────────────────────────────────────────

function startQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    showScreen('screen-quiz');
    renderQuestion();
}

function goToOffer() {
    // Substitua pelo link real da página de vendas
    window.location.href = offerUrl;
}
