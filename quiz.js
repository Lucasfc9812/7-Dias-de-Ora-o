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
        cta: "🙏 Quero começar meus 7 dias de oração",
    },
    vigilante: {
        range: [6, 10],
        badge: "🟡",
        headline: "Você cuida, você ora — mas às vezes o coração ainda hesita.",
        body: `Você já encontrou um equilíbrio entre a fé e o cotidiano. Você ora, cuida, observa. Mas há momentos em que aquela nuvem de preocupação aparece — e você fica se perguntando se está fazendo o suficiente.\n\nEssa hesitação é honesta. E honestidade, em uma mãe, é ouro.\n\nO que você precisa não é de mais esforço — mas de mais ancoragem. Uma prática diária, simples e profunda, que te lembre todos os dias: você não está protegendo seus filhos sozinha.\n\nEste guia foi criado para mães como você — que já caminham na fé, mas querem tornar esse caminhar mais firme e mais intencional.`,
        verse: '"Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento." — Provérbios 3:5',
        cta: "✨ Quero iniciar meus 7 dias agora",
    },
    insegura: {
        range: [0, 5],
        badge: "🟢",
        headline: "Você sente que deveria orar mais — mas não sabe por onde começar.",
        body: `Talvez a fé não seja algo que você pratica de forma regular. Ou talvez você ore, mas sem muita certeza do que dizer — e isso te deixa com uma sensação de que está "faltando algo".\n\nIsso é mais comum do que você imagina. E não tem nada de errado com você.\n\nO que você sente é um chamado. Um desejo de estar mais conectada — de sentir que suas orações chegam, que você sabe como interceder pelos seus filhos.\n\nEste guia é um ponto de partida gentil. Não exige teologia, nem vocabulário religioso. São apenas palavras de um coração de mãe, guiadas dia a dia, em direção a Deus.`,
        verse: '"Pedi e dar-se-vos-á; buscai e achareis; batei e abrir-se-vos-á." — Mateus 7:7',
        cta: "💛 Quero receber o guia de 7 dias",
    }
};

// ── ESTADO DO APP ────────────────────────────────────────────

let currentQuestion = 0;
let totalScore = 0;
let offerUrl = "https://pay.wiapy.com/nLbgH55nXj";

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
            const leadName = localStorage.getItem('quiz_lead_name');
            const subTitleEl = document.getElementById('whatsapp-sub-text');
            if (leadName && leadName.trim() !== '' && subTitleEl) {
                subTitleEl.textContent = `${leadName}, se você quiser receber orientações e acesso às 7 orações pelo WhatsApp, informe seu número abaixo.`;
            }

            showScreen('screen-whatsapp');
        }
    }, delay);
}

// ── LOADING ──────────────────────────────────────────────────

const loadingMessages = [
    "Analisando suas respostas...",
    "Identificando seu perfil emocional...",
    "Preparando orientação personalizada para você...",
    "Conectando sua experiência com o guia ideal...",
];

function showLoading() {
    showScreen('screen-loading');

    const msgEl = document.getElementById('loading-message');
    let msgIndex = 0;

    if (msgEl) {
        msgEl.textContent = loadingMessages[0];
        const interval = setInterval(() => {
            msgIndex = (msgIndex + 1) % loadingMessages.length;
            msgEl.textContent = loadingMessages[msgIndex];
        }, 700);
        setTimeout(() => {
            clearInterval(interval);
            showResult();
        }, 3000);
    } else {
        setTimeout(showResult, 3000);
    }
}

// ── DETERMINAR PERFIL ────────────────────────────────────────

function getProfile() {
    if (totalScore >= 9) return profiles.angustiada;
    if (totalScore >= 5) return profiles.vigilante;
    return profiles.insegura;
}

// ── MOSTRAR RESULTADO ────────────────────────────────────────

function showResult() {
    const p = getProfile();

    document.getElementById('result-badge').textContent = p.badge;

    const leadName = localStorage.getItem('quiz_lead_name');
    let customizedHeadline = p.headline;

    // Personalize with name if captured
    if (leadName && leadName.trim() !== '') {
        customizedHeadline = `${leadName}, pelo que você respondeu...\n\n${customizedHeadline}`;
    }

    document.getElementById('result-headline').textContent = customizedHeadline;
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

    // Ponte estratégica antes do CTA
    const bridge = document.createElement('p');
    bridge.style.marginBottom = '16px';
    bridge.textContent = 'E é exatamente por isso que criamos os 7 Dias de Oração Pela Proteção dos Seus Filhos — um guia simples, profundo e direcionado para transformar preocupação em paz diária.';
    bodyEl.appendChild(bridge);

    const p1 = document.createElement('p');
    p1.style.marginBottom = '16px';
    p1.textContent = 'Nos próximos 7 dias, você pode transformar essa preocupação em um momento diário de conexão, entrega e fortalecimento espiritual.';
    bodyEl.appendChild(p1);

    const p2 = document.createElement('p');
    p2.style.marginBottom = '16px';
    p2.textContent = 'Não é sobre eliminar os desafios do mundo. É sobre fortalecer você para enfrentá-los com mais paz.';
    bodyEl.appendChild(p2);

    const p3 = document.createElement('p');
    p3.style.marginBottom = '24px';
    p3.textContent = 'A decisão agora é simples: continuar carregando tudo sozinha… ou permitir que esses 7 dias sejam um novo começo.';
    bodyEl.appendChild(p3);

    showScreen('screen-result');
}

// ── AÇÕES PÚBLICAS ───────────────────────────────────────────

function showNameScreen() {
    showScreen('screen-name');
}

function submitName() {
    const nameInput = document.getElementById('lead-name');
    const rawValue = nameInput.value;
    // Pega só palavras (letras), extrai o primeiro nome, min. 2 carateres
    const cleanName = rawValue.replace(/[0-9]/g, '').trim().split(' ')[0];

    if (cleanName.length < 2) {
        showToast("Por favor, insira um nome válido.");
        return;
    }

    // Salvar nome no localStorage
    localStorage.setItem('quiz_lead_name', cleanName);

    startQuiz();
}

function startQuiz() {
    trackViewContent();
    currentQuestion = 0;
    totalScore = 0;
    showScreen('screen-quiz');
    renderQuestion();
}

function goToOffer() {
    trackInitiateCheckout();
    localStorage.setItem("checkout_clicked", "true");
    // Substitua pelo link real da página de vendas
    window.location.href = offerUrl;
}

// ── PIXEL EVENTS & LEADS ────────────────────────────────────

function trackViewContent() {
    console.log("Pixel Event: ViewContent");
}

function trackCompleteRegistration() {
    console.log("Pixel Event: CompleteRegistration");
}

function trackInitiateCheckout() {
    console.log("Pixel Event: InitiateCheckout");
}

function submitWhatsapp() {
    const phoneInput = document.getElementById('lead-whatsapp');
    const rawValue = phoneInput.value;
    const numericValue = rawValue.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (numericValue.length < 10) {
        showToast("Por favor, insira um número de WhatsApp válido com DDD.");
        return;
    }

    // Atualiza o input para visualização do usuário com os números limpos
    phoneInput.value = numericValue;

    // Salvar no localStorage
    localStorage.setItem('quiz_lead_whatsapp', numericValue);

    // Configurar objeto consolidado
    const leadName = localStorage.getItem('quiz_lead_name') || "";
    const p = getProfile();

    const consolidatedLead = {
        name: leadName,
        whatsapp: numericValue,
        profile: p.headline, // Salvamos o título do perfil
        checkoutClicked: false
    };

    localStorage.setItem("quiz_lead_data", JSON.stringify(consolidatedLead));

    // Disparar evento CompleteRegistration
    trackCompleteRegistration();

    // Enviar dados para o MailerLite em background (não bloqueia o fluxo)
    sendLeadToMailerLite(leadName, numericValue, p.headline);

    // Ir para tela de loading
    showLoading();
}

// ── MAILERLITE API INTEGRATION ──────────────────────────────

function sendLeadToMailerLite(name, whatsapp, profileHeadline) {
    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYWJjYjVkNTg2NDVhM2M5OGY2MzhlMTIxZGNkMTFlM2MyZWYzMDYyM2JjZDAzNTcwNjYzMGQ2ZjY1NzZkOThmNTc1OTkzZDUwZTMzZmIxODUiLCJpYXQiOjE3NzIyOTk4MjkuMDUzMjIyLCJuYmYiOjE3NzIyOTk4MjkuMDUzMjI0LCJleHAiOjQ5Mjc5NzM0MjkuMDQ4ODEzLCJzdWIiOiIyMTY5NTg1Iiwic2NvcGVzIjpbXX0.GHAeRffBZhEJxwcO8JZFahSN4nvol7ozDe9u91ezdvWRePgJpjn_1Kuq0o1518Nm-sBFFyfaVcdVtryX1-4i5OzYMgxm3p9_8XNzk1s5NKGKttx9tq7Nl0-ML37nW692xjCSczPvfGHs00LZ15CIxu2J3v01houjZTdOz-RXXrfxIdgJOI3HgGkOxEAWDkwjjG2r60FDTjtG-DbeAwLBZT_0NyVjsVxPizSOKhaIJeknmsQmtgCxQaGyWYBk9WWLFr6DOlni6Yz5mYNz6gRncKsxRSWJex4JHstIUFQJKFeptAYswvQt5TNnzyeJHXNF9KTMzvLYZjXwUkiT2V8c9SSt-RstqxHT2CLxc3S_FeRX0fzwDNpRbFM9i4834ULKbhHD63IF-p5tnnQ-_uuNwfZjCvhSbBeb2yicW5F5ZXd7sjRzMW3t5IWSs-Q9BwSX5uOJwbG8oQTDxJvo4PUW6JAU630YsIbd-WqvYqWvyI8Ay2dRaiKhSgfYzULiJqpHiVWEEtfWpC7x2Ra4llUc-PUQ96m-pk7gNArPxgJyhgRGWCWoIt2gzSjiQncj4IGvoo-usPnAh3Ae0vHzmdTg0ty6TAeK8fbwdrdSPuiMk42KZpmn7omqm_Jn9edmkg8sWm6kgoYJmsuoAWkVt_0yWkHtE45n5X6Up0zYJ4YcP4M'; // Token fornecido
    const fakeEmail = `${whatsapp}@quiz.com`; // E-mail fictício obrigatório gerado via WhatsApp

    const payload = {
        email: fakeEmail,
        fields: {
            name: name || "Não Informado",
            whatsapp: whatsapp,
            profile: profileHeadline
        },
        groups: [] // Caso haja um ID do grupo, insira-o aqui: ["SEU_ID"]
    };

    fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            if (!response.ok) {
                console.error('Falha ao enviar lead para o MailerLite.', response.status);
            } else {
                console.log('Lead integrado com MailerLite com sucesso!');
            }
        })
        .catch(error => {
            console.error('Erro na requisição ao MailerLite:', error);
        });
}
