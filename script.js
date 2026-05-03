const repos = [
    {
        name: "nagyon-komoly-projekt",
        desc: "Ez a projekt megvaltoztatja a vilagot, vagy legalabbis az en portfoliomat.",
        lang: "JavaScript"
    },
    {
        name: "teszt-repo-42",
        desc: "Csak probalgatom a dolgokat, ne nezz ide.",
        lang: "HTML"
    },
    {
        name: "css-magic",
        desc: "Itt minden csillog villog, tiszta 2026.",
        lang: "CSS"
    }
];

const repoList = document.getElementById('repo-list');

function displayRepos() {
    repoList.innerHTML = repos.map(repo => `
        <div class="repo-item">
            <a href="#" class="repo-name">${repo.name}</a>
            <p class="repo-desc">${repo.desc}</p>
            <div style="font-size: 12px; color: #8b949e;">
                <span class="lang-dot"></span>${repo.lang}
                <span style="margin-left: 15px;">Updated 2 hours ago</span>
            </div>
        </div>
    `).join('');
}

displayRepos();

// Egy kis interakcio a keresore (csak konzolra logol)
document.querySelector('.search-bar').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert('Keresés: ' + e.target.value);
    }
});
