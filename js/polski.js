document.addEventListener('DOMContentLoaded', function() {
    const polsButton = document.querySelector('.headerone p:nth-child(3)');
    const mainContent = document.querySelector('main');
    const originalMainContent = mainContent.innerHTML;
    polsButton.classList.add('pols-subject-button');
    polsButton.style.cursor = 'pointer';

    function createPolsButtons() {
        mainContent.innerHTML = `
        <h2>Wybierz temat z polskiego</h2>
        <div class="wroc-button">
            <button class="back-button">Wróć</button>
        </div>
            <div class="pols-buttons">
                <button class="pols-button prz_w-button">
                    Przedwiośnie - Stefan Żeromski
                </button>
            </div>
        `;

        document.querySelector('.back-button').addEventListener('click', function () {
            mainContent.innerHTML = originalMainContent;

        });


        //PRZEDWIOŚNIE ŻEROMSKIEGO
        //PRZEDWIOŚNIE ŻEROMSKIEGO
        //PRZEDWIOŚNIE ŻEROMSKIEGO
        document.querySelector('.prz_w-button').addEventListener('click', function() {
            showNote('Predwiośnie - Stefan Żeromski', `
                <div class="pols-topic-content">
                    <button class="gpostacie">
                        Główny Bohater
                    </button>
                    <button class="innep">Inne postacie</button>
                    
                </div>
            `);
            document.querySelector('.innep').addEventListener('click', function () {
                showNote('Inne postacie', `
                    <div class="wyb"><h3>Seweryn Baryka</h3></div>
                    <ul>
                        <li>Ojciec Cezarego, mąż Jadwigi, który jest dobrze zarabiającym urzędnikiem rosyjskim.</li>
                        <li>Był jednocześnie polskim patriotą i potomkiem powstańca listopadowego.</li>
                        <li>Został wcielony do wojska rosyjskiego i bierze udział w I wojnie.</li>
                    </ul>
                `)
            })
            document.querySelector('.gpostacie').addEventListener('click', function () {
                showNote('Główny bohater', `
                    <div class="wyb"><h3>Cezary Baryka</h3></div>
                    <div class="pols-topic-content ar">
                        <ul>
                            <li>Głównym bohaterem „Przedwiośnia” Stefana Żeromskiego jest Cezary Baryka.</li>
                            <li>Ten bohater bardzo dynamiczny, który na kartach powieści przechodzi proces dojrzewania.</li>
                            <li>Poznajemy go jako młodzieńca, któremu niczego nie brakuje.</li>
                            <li>Opuszczenie przez ojca wcielonego do armii rosyjskiej otwiera jednak okres buntu i uwiedzenia ideałami rewolucyjnymi chłopaka.</li>
                            <li>Baryka w Baku wydaje się absolutnie niedojrzały, zafascynowany rewolucją, pozbawiony szerszego oglądu sytuacji.</li>
                            <li>Młodzieńczy bunt splata się u niego z rewolucją.</li>
                            <li>Kiedy jednak traci matkę, rozpoczyna się u niego prawdziwy proces dojrzewania, ma coraz więcej wątpliwości co do ideałów rewolucyjnych, a także idealistycznej wizji Polski, którą próbuje mu przekazać ojciec.</li>
                            <li>Po przyjeździe do Polski próbuje sobie ułożyć życie, zrozumieć polski patriotyzm, odważnie bierze udział w wojnie polsko-bolszewickiej.</li>
                            <li>Pobyt w Nawłoci na zaproszenie Hipolita Wielosławskiego sprawia jednak, że traci na jakiś czas z oczu problemy społeczno-narodowe. </li>
                            <li>Przeżywa pierwsze romanse, z których najpoważniejszy – z Laurą – kończy się bolesnym dla Cezarego zerwaniem.</li>
                            <li>Chłopak ponownie zwraca swoją uwagę w stronę najbiedniejszych, obserwuje tragiczną sytuację chłopów w majątku Hipolita, co sprawia, że na nowo rozbudza w sobie postawę prorewolucyjną.</li>
                            <li>Zdaje sobie jednak sprawę z brutalnych konsekwencji działań rewolucyjnych, prezentuje zdecydowanie bardziej zdystansowaną i krytyczną postawę, co świadczy o jego dojrzałości.</li>
                            <li>Dyskutuje zarówno z przedstawicielem polskiej władzy, jakim jest Szymon Gajowiec, któremu wskazuje konieczność poprawy losu najbiedniejszych, jak również z Antonim Lulkiem, zadeklarowanym socjalistą, któremu próbuje pokazać negatywne konsekwencje, jakie niesie ze sobą rewolucja.</li>
                        </ul>
                    </div>`)
            })
        })
    }

    function showNote(title, content) {
        mainContent.innerHTML =`
            <div class="note-container">
                <h2 class="note-title">${title}</h2>
                <div class="note-content">${content}</div>
                <button class="back-to-pols">Wróć do Polskiego</button>
            <div>
        `;
        document.querySelector('.back-to-pols').addEventListener('click', createPolsButtons);

    }
    polsButton.addEventListener('click', function() {
        polsButton.textContent='Polski';
        createPolsButtons();
    });
});