// Dados do cronograma
const scheduleData = [
    {
        month: "📅 JUNHO",
        headers: ["Data", "Disciplina", "Conteúdo", "Status"],
        rows: [
            ["12/06", "Redação", "Estrutura da redação ENEM", 0],
            ["12/06", "Matemática", "Razão e proporção", 0],
            ["13/06", "Português", "Interpretação de texto", 0],
            ["13/06", "Matemática", "Porcentagem", 0],
            ["14/06", "Redação", "Introdução e tese", 0],
            ["14/06", "Geografia", "Relevo brasileiro", 0],
            ["15/06", "Matemática", "Regra de três simples", 0],
            ["15/06", "Matemática", "Exercícios", 0],
            ["16/06", "Português", "Tipologias textuais", 0],
            ["16/06", "Português", "Questões ENEM", 0],
            ["17/06", "Redação", "Desenvolvimento argumentativo", 0],
            ["17/06", "Redação", "Repertório sociocultural", 0],
            ["18/06", "Matemática", "Regra de três composta", 0],
            ["19/06", "Sociologia", "Estratificação social", 0],
            ["19/06", "Sociologia", "Mobilidade social", 0],
            ["20/06", "Redação", "Redação completa", 0],
            ["21/06", "Revisão", "Correção da redação", 0],
            ["21/06", "Revisão", "Revisão geral", 0]
        ]
    },
    {
        month: "📅 22/06 A 05/07",
        headers: ["Semana", "Disciplina", "Conteúdo", "Status"],
        rows: [
            ["22/06-05/07", "Matemática", "Juros simples", 0],
            ["22/06-05/07", "Matemática", "Juros compostos", 0],
            ["22/06-05/07", "Matemática", "Porcentagem avançada", 0],
            ["22/06-05/07", "Português", "Funções da linguagem", 0],
            ["22/06-05/07", "Português", "Figuras de linguagem", 0],
            ["22/06-05/07", "Redação", "Educação", 0],
            ["22/06-05/07", "Redação", "Inclusão digital", 0],
            ["22/06-05/07", "Sociologia", "Indicadores sociais", 0],
            ["22/06-05/07", "Sociologia", "IDH e Gini", 0],
            ["22/06-05/07", "Química", "Separação de misturas", 0],
            ["22/06-05/07", "Física", "Potência e rendimento", 0]
        ]
    },
    {
        month: "📅 JULHO",
        headers: ["Semana", "Conteúdo Principal", "Status"],
        rows: [
            ["06/07-12/07", "Estatística", 0],
            ["06/07-12/07", "Média, moda e mediana", 0],
            ["13/07-19/07", "Função do 1º grau", 0],
            ["13/07-19/07", "Concordância verbal", 0],
            ["20/07-26/07", "Concordância nominal", 0],
            ["20/07-26/07", "Redação: Meio Ambiente", 0],
            ["27/07-02/08", "Redação: Violência Urbana", 0],
            ["27/07-02/08", "Redação: Tecnologia", 0]
        ]
    },
    {
        month: "📅 AGOSTO",
        headers: ["Semana", "Conteúdo Principal", "Status"],
        rows: [
            ["03/08-09/08", "Função do 2º grau", 0],
            ["10/08-16/08", "Geometria plana", 0],
            ["17/08-23/08", "Área e perímetro", 0],
            ["24/08-30/08", "Escala", 0],
            ["Agosto", "Crase", 0],
            ["Agosto", "Regência", 0],
            ["Agosto", "Redação: Saúde Mental", 0],
            ["Agosto", "Redação: IA", 0],
            ["Agosto", "Redação: Mobilidade Urbana", 0]
        ]
    },
    {
        month: "📅 SETEMBRO",
        headers: ["Semana", "Conteúdo Principal", "Status"],
        rows: [
            ["31/08-06/09", "Geometria espacial", 0],
            ["07/09-13/09", "Probabilidade", 0],
            ["14/09-20/09", "Análise combinatória", 0],
            ["21/09-27/09", "Coesão e coerência", 0],
            ["Setembro", "2 redações por semana", 0],
            ["Setembro", "4 mini simulados", 0]
        ]
    },
    {
        month: "📅 OUTUBRO",
        headers: ["Semana", "Meta", "Status"],
        rows: [
            ["28/09-04/10", "20 questões Matemática/dia", 0],
            ["05/10-11/10", "20 questões Linguagens/dia", 0],
            ["12/10-18/10", "Redação completa", 0],
            ["19/10-25/10", "Humanas e Natureza", 0],
            ["Outubro", "4 simulados completos", 0]
        ]
    },
    {
        month: "🚀 RETA FINAL",
        headers: ["Data", "Meta", "Status"],
        rows: [
            ["26/10-01/11", "Revisão Matemática", 0],
            ["26/10-01/11", "Revisão Português", 0],
            ["26/10-01/11", "Revisão Redação", 0],
            ["02/11-08/11", "Simulado final", 0],
            ["02/11-08/11", "Revisão do caderno de erros", 0]
        ]
    }
];

// Metas finais
const goalsData = {
    headers: ["Objetivo", "Meta", "Status"],
    rows: [
        ["Redações", "35", 0],
        ["Questões Matemática", "1.500", 0],
        ["Questões Português", "800", 0],
        ["Questões Humanas", "400", 0],
        ["Questões Natureza", "400", 0],
        ["Simulados completos", "8", 0]
    ]
};

// Ícones de status
const statusIcons = ['⬜', '🟨', '✅'];

// Chaves para localStorage
const STORAGE_KEY_SCHEDULE = 'enem_schedule_status';
const STORAGE_KEY_GOALS = 'enem_goals_status';
const STORAGE_KEY_THEME = 'enem_theme';

// Toast de salvamento
function showSaveIndicator() {
    // Remove toast anterior se existir
    const existingToast = document.querySelector('.save-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'save-toast';
    toast.textContent = '💾 Salvo!';
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--accent-color);
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 500;
        z-index: 1000;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(toast);
    
    // Animação de entrada
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });
    
    // Remove após 2 segundos
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Função para alternar status
function toggleStatus(element) {
    let currentStatus = parseInt(element.dataset.status);
    currentStatus = (currentStatus + 1) % 3;
    element.dataset.status = currentStatus;
    element.textContent = statusIcons[currentStatus];
    
    // Adiciona classe para animação
    element.style.transform = 'scale(1.3)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 200);
    
    saveAllStatus();
    showSaveIndicator();
}

// Função para criar uma tabela
function createTable(headers, rows, tableClass = '', idPrefix = '') {
    const table = document.createElement('table');
    table.className = tableClass;
    
    // Cabeçalho
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Corpo
    const tbody = document.createElement('tbody');
    rows.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        row.forEach((cell, colIndex) => {
            const td = document.createElement('td');
            if (colIndex === row.length - 1) {
                // Coluna de status
                td.className = 'status-cell';
                td.dataset.status = cell;
                td.dataset.id = idPrefix ? `${idPrefix}_${rowIndex}` : `cell_${rowIndex}`;
                td.textContent = statusIcons[cell];
                td.title = 'Clique para alternar o status';
                td.addEventListener('click', () => toggleStatus(td));
            } else {
                td.textContent = cell;
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    
    return table;
}

// Função para salvar todos os status
function saveAllStatus() {
    // Salvar status do cronograma
    const allScheduleCells = document.querySelectorAll('#schedule .status-cell');
    const scheduleStatus = {};
    
    allScheduleCells.forEach((cell) => {
        if (cell.dataset.id) {
            scheduleStatus[cell.dataset.id] = parseInt(cell.dataset.status);
        }
    });
    
    localStorage.setItem(STORAGE_KEY_SCHEDULE, JSON.stringify(scheduleStatus));
    
    // Salvar status das metas
    const allGoalsCells = document.querySelectorAll('.goals-table .status-cell');
    const goalsStatus = {};
    
    allGoalsCells.forEach((cell) => {
        if (cell.dataset.id) {
            goalsStatus[cell.dataset.id] = parseInt(cell.dataset.status);
        }
    });
    
    localStorage.setItem(STORAGE_KEY_GOALS, JSON.stringify(goalsStatus));
}

// Função para carregar status salvos
function loadAllStatus() {
    // Carregar status do cronograma
    const savedSchedule = localStorage.getItem(STORAGE_KEY_SCHEDULE);
    if (savedSchedule) {
        try {
            const scheduleStatus = JSON.parse(savedSchedule);
            const allScheduleCells = document.querySelectorAll('#schedule .status-cell');
            
            allScheduleCells.forEach((cell) => {
                if (cell.dataset.id && scheduleStatus[cell.dataset.id] !== undefined) {
                    cell.dataset.status = scheduleStatus[cell.dataset.id];
                    cell.textContent = statusIcons[scheduleStatus[cell.dataset.id]];
                }
            });
        } catch (e) {
            console.warn('Erro ao carregar status do cronograma:', e);
        }
    }
    
    // Carregar status das metas
    const savedGoals = localStorage.getItem(STORAGE_KEY_GOALS);
    if (savedGoals) {
        try {
            const goalsStatus = JSON.parse(savedGoals);
            const allGoalsCells = document.querySelectorAll('.goals-table .status-cell');
            
            allGoalsCells.forEach((cell) => {
                if (cell.dataset.id && goalsStatus[cell.dataset.id] !== undefined) {
                    cell.dataset.status = goalsStatus[cell.dataset.id];
                    cell.textContent = statusIcons[goalsStatus[cell.dataset.id]];
                }
            });
        } catch (e) {
            console.warn('Erro ao carregar status das metas:', e);
        }
    }
}

// Função para criar todo o cronograma
function createSchedule() {
    const scheduleContainer = document.getElementById('schedule');
    
    scheduleData.forEach((monthData, monthIndex) => {
        const section = document.createElement('section');
        section.className = 'month-section';
        
        const header = document.createElement('div');
        header.className = 'month-header';
        header.innerHTML = `<h2>${monthData.month}</h2>`;
        
        const content = document.createElement('div');
        content.className = 'month-content';
        
        const table = createTable(monthData.headers, monthData.rows, '', `schedule_${monthIndex}`);
        content.appendChild(table);
        
        section.appendChild(header);
        section.appendChild(content);
        scheduleContainer.appendChild(section);
    });
}

// Função para criar as metas finais
function createGoals() {
    const goalsContainer = document.getElementById('finalGoals');
    const goalsContent = document.createElement('div');
    goalsContent.className = 'goals-content';
    
    const table = createTable(goalsData.headers, goalsData.rows, 'goals-table', 'goal');
    goalsContent.appendChild(table);
    goalsContainer.appendChild(goalsContent);
}

// Função para alternar tema
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeToggle');
    const themeIcon = themeBtn.querySelector('.theme-icon');
    const themeText = themeBtn.querySelector('.theme-text');
    
    if (body.dataset.theme === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Modo Escuro';
        localStorage.setItem(STORAGE_KEY_THEME, 'light');
    } else {
        body.dataset.theme = 'dark';
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Modo Claro';
        localStorage.setItem(STORAGE_KEY_THEME, 'dark');
    }
}

// Função para carregar tema salvo
function loadTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
    const themeBtn = document.getElementById('themeToggle');
    const themeIcon = themeBtn.querySelector('.theme-icon');
    const themeText = themeBtn.querySelector('.theme-text');
    
    if (savedTheme === 'dark') {
        document.body.dataset.theme = 'dark';
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Modo Claro';
    }
}

// Função para resetar todo o progresso
function addResetButton() {
    const header = document.querySelector('header .container');
    
    const resetBtn = document.createElement('button');
    resetBtn.className = 'reset-btn';
    resetBtn.textContent = '🔄 Resetar Progresso';
    resetBtn.title = 'Limpar todo o progresso salvo';
    resetBtn.style.cssText = `
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: var(--header-text);
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        margin-left: 10px;
    `;
    
    resetBtn.addEventListener('mouseenter', () => {
        resetBtn.style.backgroundColor = 'rgba(239, 68, 68, 0.3)';
    });
    
    resetBtn.addEventListener('mouseleave', () => {
        resetBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    
    resetBtn.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja resetar TODO o progresso? Esta ação não pode ser desfeita.')) {
            localStorage.removeItem(STORAGE_KEY_SCHEDULE);
            localStorage.removeItem(STORAGE_KEY_GOALS);
            
            // Resetar visualmente
            const allCells = document.querySelectorAll('.status-cell');
            allCells.forEach(cell => {
                cell.dataset.status = '0';
                cell.textContent = '⬜';
            });
            
            showSaveIndicator();
        }
    });
    
    header.appendChild(resetBtn);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    createSchedule();
    createGoals();
    loadTheme();
    loadAllStatus();
    addResetButton();
    
    // Adicionar evento ao botão de tema
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Log de confirmação
    console.log('✅ Plano de Estudos ENEM carregado com sucesso!');
    console.log('📊 Dados salvos em:', STORAGE_KEY_SCHEDULE);
    console.log('🎯 Metas salvas em:', STORAGE_KEY_GOALS);
    console.log('🎨 Tema salvo em:', STORAGE_KEY_THEME);
});