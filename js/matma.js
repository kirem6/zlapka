document.addEventListener('DOMContentLoaded', function() {
    const mathButton = document.querySelector('.headerone p:first-child');
    const mainContent = document.querySelector('main');
    const originalMainContent = mainContent.innerHTML;
    mathButton.classList.add('math-subject-button');
    mathButton.style.cursor = 'pointer';


    function createMathButtons() {
        mainContent.innerHTML = `
        <h2>Wybierz temat</h2>
        <div class="wroc-button">
            <button class="back-button">Wróć</button>
        </div>
            <div class="math-buttons">
                <button class="math-button fun-button">Funkcja</button>
            </div>
        `;
        document.querySelector('.back-button').addEventListener('click', function() {
            mainContent.innerHTML = originalMainContent;
        });


        // FUNKCJI
        document.querySelector('.fun-button').addEventListener('click', function() {
            showNote('Funkcje', `
                <h3>Wybierz temat</h3>
                <div class="funkcji-buttons">
                    <button class="funkcji-button funkwa-button">Funkcja Kwadratowa</button>
                    <button class="funkcji-button funwyk-button">Funkcja Wykładnicza</button>
                    <button class="funkcji-button funlog-button">Funkcja Logarytmiczna</button>
                </div>
                <div class="opis">
                    <p class="opis">Funkcja matematyczna to zbiór reguł, które przypisują każdemu elementowi zbioru wejściowego dokładnie jeden element zbioru wyjściowego</p>
                </div>
            `);

            //FUNKCJA KWADRATOWA
            document.querySelector('.funkwa-button').addEventListener('click', function() {
                showNote('Funkcja Kwadratowa', `
                    <div class="quadratic-function">
                        <h3>Definicja:</h3>
                        <p>Funkcja kwadratowa to funkcja postaci: <strong>f(x) = ax² + bx + c</strong>, gdzie a ≠ 0.</p>
                        
                        <h3>Wzory:</h3>
                        <ul>
                            <li>Postać ogólna: f(x) = ax² + bx + c</li>
                            <li>Postać kanoniczna: f(x) = a(x - p)² + q</li>
                            <li>Miejsca zerowe: x₁,₂ = (-b ± √Δ)/2a, gdzie Δ = b² - 4ac</li>
                            <li>Wierzchołek paraboli: W = (p, q) = (-b/2a, -Δ/4a)</li>
                        </ul>
                        
                        <h3>Przykłady:</h3>
                        <ol>
                            <li>f(x) = x² - 5x + 6 → Δ = 1, miejsca zerowe: x₁=2, x₂=3</li>
                            <li>f(x) = -2x² + 4x - 2 → Δ = 0, miejsce zerowe: x₀=1</li>
                        </ol>
                        <h3>Zadanie maturalne na temat funkcji kwadratowej</h3>
                        <p>Zadanie 1. (1pkt) Wykresem funkcji kwadratowej f(x)=−3x<sup>2</sup>+3
 jest parabola o wierzchołku w punkcie:</p>
                        <div class="mtest">
                            <p class="wrong">A.)(3,0)</p>
                            <p class="good">B.)(0,3)</p>
                            <p class="wrong">C.)(-3,0)</p>
                            <p class="wrong">D.)(0,-3)</p>
                        </div>
                        <p>Wyjaśnienie</p>
                        <div class="wyjasnienie">

                        Krok 1. Wypisanie współczynników oraz obliczenie delty.
Współrzędne wierzchołka W=(p;q)
 wyznaczymy korzystając ze wzorów:
<center><img src="zj/2.png"></center><br>


Znamy już współczynniki: a=−3, b=0, c=3. Brakuje nam jeszcze delty, która znajduje
 się we wzorze na współrzędną q, zatem:
 <center><img src="zj/3.png"></center><br>


Krok 2. Obliczenie współrzędnej p. <center><img src="zj/3.png"></center><br>


Krok 3. Oblicznie współrzędnej q. <center><img src="zj/4.png"></center><br>


Wierzchołkiem tej paraboli jest więc punkt o współrzędnych W=(0;3)
.

                        </div>
                `);    
            });


            //FUNKCJA WYKŁADNICZA
            document.querySelector('.funwyk-button').addEventListener('click', function() {
                showNote('Funkcja Wykładnicza', `
                    <div class="quadratic-function">
                        <h3>Definicja:</h3>
                        <p>Funkcja kwadratowa to funkcja postaci: <strong>f(x) = ax² + bx + c</strong>, gdzie a ≠ 0.</p>
                        <p>Funkcja wykładnicza: funkcja postaci y = a<sup>x</sup>, gdzie a jest liczbą dodatnią różną od 1.</p>
                        <h3>Wzory:</h3>
                        <ul>
                            <li>Postać ogólna: f(x) = ax² + bx + c</li>
                            <li>Postać kanoniczna: f(x) = a(x - p)² + q</li>
                            <li>Miejsca zerowe: x₁,₂ = (-b ± √Δ)/2a, gdzie Δ = b² - 4ac</li>
                            <li>Wierzchołek paraboli: W = (p, q) = (-b/2a, -Δ/4a)</li>
                        </ul>
                        
                        <h3>Przykłady:</h3>
                        <ol>
                            <li>f(x) = x² - 5x + 6 → Δ = 1, miejsca zerowe: x₁=2, x₂=3</li>
                            <li>f(x) = -2x² + 4x - 2 → Δ = 0, miejsce zerowe: x₀=1</li>
                        </ol>
                        <h3>Zadanie Maturalne na temat funkcji wykłafniczej</h3>
                        <p><img class="one" src="zj/1.png" width="50%">Zadanie 1. (1pkt) Na rysunku przedstawiono fragment wykresu funkcji wykładniczej f
 określonej wzorem f(x)=a<sup>x</sup>
. Punkt A=(1,2)
 należy do wykresu funkcji.<p> <p> Wybierz odpowiedź:</p> </div>
                     <div class="mtest">
                         <p class="wrong">A.) -
                             <math>
                                 <mfrac>
                                     <mn>1</mn>
                                     <mn>2</mn>
                                 </mfrac>
                             </math>
                         <p class="wrong">B.) 
                             <math>
                                 <mfrac>
                                     <mn>1</mn>
                                     <mn>2</mn>
                                 </mfrac>
                             </math>
                         </p>
                         <p class="wrong">C.)-2  </p>
                         <p class="good">D.)2  </p>
                     </div>
                     <p>Wyjaśnienie:</p>
                     <div class="wyjasnienie">
                         <p>Wykres funkcji możemy zapisać jako y=a<sup>x</sup>
. Teraz znacznie lepiej widać, że możemy do wzoru tej funkcji po prostu podstawić współrzędne punktu A=(1,2)
 i tym samym wyznaczyć podstawę potęgi, zatem:
<center>y=a<sup>x</sup> <br>2=a<sup>1</sup><br></center>


No i teraz musimy sobie odpowiedzieć na pytanie - jaką liczbę trzeba podnieść do potęgi pierwszej aby otrzymać 2
? Oczywiście 2
, tak więc prawidłową odpowiedzią będzie a=2
.</p>
                    </div>
                `);    
            });


            //FUNKCJA LOGARYTMICZNA 
            document.querySelector('.funlog-button').addEventListener('click', function() {
                showNote('Funkcja Logarytmiczna', `
                    <div class="logarytmic-function">
                        <h3>Definicja</h3>
                        <p>
                        Funkcję postaci f(x)=log<sub>a</sub>x, gdzie a>0 i a≠1, określoną dla x∈(0;+∞), nazywamy funkcją logarytmiczną.
                        </p>
                        <h3>Podstawowe wzory: </h3>
                        <ul><h4>Zamiana podstawy logarytmu:</h4>
                            <li>log<sub>a</sub>
                            b= <span class="dzielenie">
                                   <span>log<sub>c</sub>b</span>
                                   <span>log<sub>c</sub>a</span>
                               <span>
                            </li> <h4>Logarytm iloczynu: </h4>
                            <li>log<sub>a</sub>(xy)=log<sub>a</sub>x + log<sub>a</sub>y
                            </li>
                            <h4>Logarytm ilorazu: </h4>
                            <li>log<sub>a</sub>
                                <span class="dzielenie nawias-span">
                                    <span>x</span>
                                    <span>y</span>
                                </span>= log<sub>a</sub>x - log<sub>a</sub>y
                            </li>
                            <h4>Logarytm potęgi:</h4>
                            <li>log<sub>a</sub>(x<sup>k</sup>) = k ⋅ log<sub>a</sub>x</li>
                            <h4>Związek z funkcją wykładniczą:</h4>
                            <li>  a<sup>log<sub>a</sub>x</sup> = x (dla x > 0)</li>
                        </ul>
                    </div>`);
            });
        });
    }
    function showNote(title, content) {
        mainContent.innerHTML = `
            <div class="note-container">
                <h2 class="note-title">${title}</h2>
                <div class="note-content">${content}</div>
                <button class="back-to-math">Wróć do Matematyki</button>
            </div>
        `;

        document.querySelector('.back-to-math').addEventListener('click', createMathButtons);
    }
    mathButton.addEventListener('click', function() {
        mathButton.textContent = 'Matematyka';
        createMathButtons();
    });
});