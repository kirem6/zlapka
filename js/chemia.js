document.addEventListener('DOMContentLoaded', function() {
    const chemButton = document.querySelector('.headerone p:nth-child(2)');
    const mainContent = document.querySelector('main');
    const originalMainContent = mainContent.innerHTML;
    chemButton.classList.add('chem-subject-button');
    chemButton.style.cursor = 'pointer';

    function createChemButtons() {
        mainContent.innerHTML = `
        <h2>Wybierz temat z chemii</h2>
        <div class="wroc-button">
            <button class="back-button">Wróć</button>
        </div>
            <div class="chem-buttons">
                <button class="chem-button wegl-button">Węglowodory</button>
            </div>
        `;

        document.querySelector('.back-button').addEventListener('click', function() {
            mainContent.innerHTML = originalMainContent;
        });


        //WĘGLOWODORY
        document.querySelector('.wegl-button').addEventListener('click', function() {
            showNote('Węglowodory', `
                <h3>Wybierz temat</h3>
                <div>
                    <button class="nas-button">Węglowodory nasycone</button>
                </div>
                <div class="opis">
                    <p class="opis"><img class="one" src="wegl.png" width=19%>
                    <ul>
                        <li>Węglowodory – organiczne związki chemiczne zawierające w swojej strukturze wyłącznie atomy węgla i wodoru.</li>
                        <li>Wszystkie one składają się z podstawowego szkieletu węglowego (powiązanych z sobą atomów węgla) i przyłączonych do tego szkieletu atomów wodoru.</li>
                        <li>Sam pierwiastek węgiel nie jest jednak węglowodorem.</li>
                        <li>Węglowodory są podstawowym składnikiem ropy naftowej, która stanowi ich podstawowe źródło w przemyśle.</li>
                        <li>Innym źródłem węglowodorów są procesy tzw. suchej 
destylacji drewna i zgazowywania węgla.</li>
                        <li>Oprócz tego węglowodory o złożonej budowie pełnią rozmaite role w organizmach żywych (np. karotenoidy).</li>
                    
                    </ul>
                </div>
            `);
            
            document.querySelector('.nas-button').addEventListener('click', function() {
                showNote('Rodzaje węglowodorów', `
                    <p>Węglowodory ze względu na występowanie wiązań wielokrotnych węgiel-węgiel dzieli się na:</p>
                    <div class="ar">
                        <ul>
                            <li>nasycone, zwane inaczej alkanami, w których występują jedynie wiązania pojedyncze</li><br><br>
                            <li>węglowodory nienasycone, zawierająca wiązania wielokrotne węgiel-węgiel, w tym:
                                <ul>
                                    <li>alkeny (olefiny) – zawierające jedno wiązanie podwójne (np. etylen)</li>
                                    <li>alkiny – w których występują wiązania potrójne węgiel-węgiel (np. acetylen)</li>
                                </ul>   
                            </li>
                        </ul>
                    </div>
                `);
            });
        });
    }
    
    function showNote(title, content) {
        mainContent.innerHTML = `
            <div class="note-container">
                <h2 class="note-title">${title}</h2>
                <div class="note-content">${content}</div>
                <button class="back-to-chem">Wróć do Chemii</button>
            </div>
        `;

        document.querySelector('.back-to-chem').addEventListener('click', createChemButtons);
    }

    chemButton.addEventListener('click', function() {
        chemButton.textContent = 'Chemia';
        createChemButtons(); 
    });
});