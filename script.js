/* Stable interactions: categories dropdown, search, curiosity, quiz */

// Dropdown
const dropdown = document.querySelector('.nav-dropdown');
const toggle = dropdown?.querySelector('.nav-toggle');
const panel = document.getElementById('nav-categories');

let isOpen = false;
function openPanel() {
  panel.classList.add('open');
  toggle.setAttribute('aria-expanded', 'true');
  isOpen = true;
}
function closePanel() {
  panel.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  isOpen = false;
}

if (toggle && panel) {
  // Click toggles
  toggle.addEventListener('click', () => (isOpen ? closePanel() : openPanel()));

  // Hover open, leave close
  dropdown.addEventListener('mouseenter', openPanel);
  dropdown.addEventListener('mouseleave', closePanel);

  // Keyboard
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePanel();
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      isOpen ? closePanel() : openPanel();
    }
  });

  // Click-away
  document.addEventListener('click', (e) => {
    if (!isOpen) return;
    if (!dropdown.contains(e.target)) closePanel();
  });
}

// Search placeholder
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
function pulse(el) {
  el.style.boxShadow = '0 0 0 6px rgba(110,231,255,0.25)';
  setTimeout(() => { el.style.boxShadow = ''; }, 260);
}
// script.js

// Attach event listener when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.getElementById("searchForm"); // if you wrapped input in a <form>

  // Handle form submit (pressing Enter or clicking button)
  if (searchForm) {
    searchForm.addEventListener("submit", function(e) {
      e.preventDefault(); // prevent page reload
      handleSearch();
    });
  }

  // Optional: handle button click if you have a separate button
  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.addEventListener("click", handleSearch);
  }

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();

    // Map search terms to slugs
    const articleMap = {
      "global warming": "global-warming",
      "artificial intelligence": "artificial-intelligence",
       "elipse verse": "elipse-verse",
       "google":"google",
       "copilot":"copilot",
       "microsoft":"microsoft",
       "microsoft vs google":"microsoft-vs-google",
       "cricket":"cricket",
       "football":"football",
       "world war 1 ":"world-war-1",
       "world war 2" : "world-war-2",
      "cold war": "cold-war",
      "renaissance": "renaissance",
      "industrial revolution":"industrial-revolution",
      "french revolution":"french-revolution",
      "american revolution":"american-revolution",
      "russian revolution":"russian-revolution",
      "american civil war" : "american-civil-war",
      "stone age" :"stone-age",
      "isro":"isro",
      "nasa":"nasa",
     "spacex": "spacex",
     "chandrayaan missions":"chandrayaan-missions",
     "aditya-l1":"aditya-l1",
     "gaganyaan":"gaganyaan",
     "pslv-gslv":"pslv-gslv",
     "mangalyaan":"mangalyaan",
     "jwst":"jwst",
     "biotechnology":"biotechnology",
     "robotics":"robotics",
     "nanotechnology":"nanotechnology",
     "albert einstein":"albert-einstein",
     "isaac newton":"isaac-newton",
     "galileo galilei":"galileo-galilei",
     "nikola tesla" : "nikola-tesla",
     "marie curie":"marie-curie",
    "charles darwin":"charles-darwin",
    "stephen hawking":"stephen-hawking",
    "aristotle":"aristotle",
    "mahatma gandhi":"mahatma-gandhi",
    "apj abdul kalam":"apj-abdul-kalam",
    "jawaharlal nehru":"jawaharlal-nehru",
    "subhas chandra bose":"subhas-chandra-bose",
    "bhagat singh":"bhagat-singh",
    "rani lakshmibai":"rani-lakshmibai",
    "rabindranath tagore":"rabindranath-tagore",
    "swami vivekananda":"swami-vivekananda",
    "india":"india",
    "himalayas":"himalayas",
    "ganges river":"ganges-river",
    "prime ministers india":"prime-ministers-india",
    "television":"television",
    "radio":"radio",
    "mobile phones":"mobile-phones",
    "computers":"computers",
    "internet":"internet",
    "laptops":"laptops",
    "william shakespeare":"william-shakespeare",
    "leonardo da vinci":"leonardo-da-vinci",
    "leo tolstoy":"leo-tolstoy",
    "premchand":"premchand",
    "kalidasa":"kalidasa",
    "tulsidas":"tulsidas",
    "pablo picasso":"pablo-picasso",
    "mirza ghalib":"mirza-ghalib",
    "parveen shaki":"parveen-shakir",
    "kabir":"kabir",
    "kolkata":"kolkata",
    "delhi":"delhi",
    "bihar":"bihar",
    "mumbai":"mumbai",
    "states of india":"states-of-india",
    "world":"world",
    "islam":"islam",
    "hinduism":"hinduism",
    "christianity":"christianity",
    "buddhism":"buddhism",
    "sikhism":"sikhism",
    "jainism":"jainism",
    "judaism":"judaism",
    "philosophy overview":"philosophy-overview",
    "science overview":"science-overview",
    "arts overview":"arts-overview",
    "crypto currencies":"crypto-currencies",
    "bitcoin":"bitcoin",
    "ethereum":"ethereum",
    "indian stock market":"indian-stock-market",
    "amazon":"amazon",
    "flipkart":"flipkart",
    "physics wallah":"physics wallah",
    "unacademy":"unacademy",
    "neet":"neet",
    "jee":"jee",
    "iit":"iit",
    "aiims":"aiims",
    "nta":"nta",
    "lenovo":"lenovo",
    "hp":"hp",
    "dell":"dell",
    "intel":"intel",
    "coding":"coding",
    "html":"html",
    "css":"css",
    "python":"python",
    "java":"java",
    "javascript":"javascript",
    "c":"c",
    "c++":"c++",
    "data science":"data-science",
    "dna and genetics":"dna-and-genetics",
    "quantum physics":"quantum-physics",
    "black hole":"black-hole",
    "universe":"universe",
    "space":"space",
    "earth":"earth",
    "mars":"mars",
    "jupiter":"jupiter",
    "saturn":"saturn",
    "mercury":"mercury",
    "neptune":"neptune",
    "uranus":"uranus",
    "venus":"venus",
    "pluto":"pluto",
    "sun":"sun",
    "moon":"moon",
    "light":"light",
    "heat":"heat",
    "oxygen":"oxygen",
    "carbon dioxide":"carbon-dioxide",
    "nitrogen":"nitrogen",
    "helium":"helium",
    "hydrogen":"hydrogen",
    "indian railways":"indian-railways",
    "vande bharat":"vande-bharat",
    "evolution of trains":"evolution-of-trains",
    "narendra modi":"narendra-modi",
    "elon musk":"elon-musk",
    "donald trump":"donald-trump",
    "vladimir putin":"vladimir-putin",
    "mamata banerjee":"mamata-banerjee",
    "bill gates":"bill-gates",
    "raja ram mohan roy":"raja-ram-mohan-roy",
    "alexander the great":"alexander-the-great",
    "br-ambedkar":"br-ambedkar",
    "indian independence":"indian-independence",
    "republic day":"republic-day",
    "independence day":"independence-day",
    "holi":"holi",
    "diwali":"diwali",
    "eid":"eid",
    "bakra eid":"bakra-eid",
    "pongal":"pongal",
    "makar sankranti":"makar-sankranti",
    "ramadan":"ramadan",
    "shabe barat":"shabe-barat",
    "gudi padwa":"gudi-padwa",
    "muharram":"muharram",
    "onam":"onam",
    "hollywood":"hollywood",
    "bollywood":"bollywood",
    "doraemon":"doraemon",
    "shin chan":"shin-chan",
    "fruits":"fruits",
    "seasons":"seasons",
    "time":"time",
    "water":"water",
    "heart":"heart",
    "lungs":"lungs",
    "neuron":"neuron",
    "brain":"brain",
    "nephron":"nephron",
    "kidney":"kidney",
    "animal kingdom":"animal-kingdom",
    "plant kingdom":"plant-kingdom",
    "shahrukh khan":"shahrukh-khan",
    "salman khan":"salman-khan",
    "amir khan":"amir-khan",
    "ajay devgan":"ajay-devgan",
    "aladdin":"aladdin",
    "mouni roy":"mouni-roy",
    "avneet kaur":"avneet-kaur",
    "anushka sen":"anushka-sen",
    "indian cricket team":"indian-cricket-team",
    "australian cricket team":"australian-cricket-team",
    "england cricket team":"england-cricket-team",
    "west indies cricket team":"west-indies-cricket-team",
    "pakistan cricket team":"pakistan-cricket-team",
    "iron":"iron",
    "gold":"gold",
    "copper":"copper",
    "zinc":"zinc",
    "silver":"silver",
    "heart attack":"heart-attack",
    "covid 19":"covid-19",
    "cuisines of india":"cuisines of india",
    "languages of india":"languages-of-india",
    "traditional fashion of india":"traditional-fashion-of-india",
    "asthma":"asthma",
    "allergies":"allergies",
    "importance-of-water":"importance-of-water",
    "importance of education":"importance-of-education",
    "importance of money":"importance-of-money",
    
      // add more articles here
    };

    if (articleMap[query]) {
      // Redirect to article page with slug
      window.location.href = `article.html?slug=${articleMap[query]}`;
    } else {
      alert("Article not found. Try another search term.");
    }
  }
});
if (searchBtn && searchInput) {
  searchBtn.addEventListener('click', () => {
    const q = searchInput.value.trim();
    if (!q) { pulse(searchInput); return; }
    alert('Searching for: ' + q); // replace with routing or fetch
  });
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchBtn.click();
  });
}

// Curiosity rotator
const curiosities = [
  "A day on Venus is longer than its year.",
  "Bananas are berries, but strawberries aren't.",
  "Octopuses have three hearts.",
  "Honey never spoils — archaeologists found edible honey in ancient tombs.",
  "Sharks existed before trees.",
  "The Eiffel Tower can grow taller in summer.",
  "Wombat poop is cube-shaped.",
  "The moon has moonquakes.",
  "Humans share 60% of DNA with bananas.",
  "There’s a planet made of diamonds — 55 Cancri e.",
  "Sloths can hold their breath longer than dolphins.",
  "Butterflies taste with their feet.",
  "The longest wedding veil was longer than 60 football fields.",
  "Water can boil and freeze at the same time.",
  "Your stomach gets a new lining every 3–4 days.",
  "The first computer virus was created in 1986.",
  "Penguins propose with pebbles.",
  "The heart of a blue whale is the size of a car.",
  "Some turtles can breathe through their butts.",
  "The fingerprints of koalas are almost identical to humans.",
  "Cows have best friends and get stressed when separated.",
  "The shortest war in history lasted 38 minutes.",
  "A group of flamingos is called a flamboyance.",
  "The longest hiccup lasted 68 years.",
  "There are more stars in the universe than grains of sand on Earth.",
  "The inventor of the Pringles can is buried in one.",
  "The dot over the letter 'i' is called a tittle.",
  "The first oranges weren’t orange — they were green.",
  "A crocodile cannot stick its tongue out.",
  "The longest English word is 189,819 letters long.",
  "The unicorn is Scotland’s national animal.",
  "The first alarm clock could only ring at 4 a.m.",
  "A cloud can weigh more than a million pounds.",
  "The inventor of the frisbee was turned into one after death.",
  "The world’s largest desert is Antarctica.",
  "The human nose can detect over 1 trillion scents.",
  "The longest time someone has survived without sleep is 11 days.",
  "The shortest commercial flight lasts 57 seconds.",
  "The first email was sent in 1971.",
  "A shrimp’s heart is in its head.",
  "The longest recorded sneeze lasted 978 days.",
  "The first product with a barcode was Wrigley’s gum.",
  "The inventor of the match died from blood poisoning caused by matches.",
  "The longest word in Shakespeare is 27 letters.",
  "The first webcam watched a coffee pot.",
  "The longest living animal is the Greenland shark.",
  "The first YouTube video was uploaded in 2005.",
  "The longest human hair ever recorded was 18 feet long.",
  "The first toy to be advertised on TV was Mr. Potato Head.",
  "The longest-running TV show is Meet the Press.",
  "The first video game was created in 1958.",
  "The longest marathon lasted 54 years.",
  "The first text message said 'Merry Christmas'.",
  "The longest recorded flight of a chicken is 13 seconds.",
  "The first person convicted of speeding was going 8 mph.",
  "The longest pizza ever made was 1.15 miles long.",
  "The first Olympic Games were held in 776 BC.",
  "The longest cave system is Mammoth Cave in Kentucky.",
  "The first photograph ever taken was in 1826.",
  "The longest tongue belongs to a chameleon.",
  "The first car accident occurred in 1891.",
  "The longest word in the English dictionary is pneumonoultramicroscopicsilicovolcanoconiosis.",
  "The first person to reach the South Pole was Roald Amundsen.",
  "The longest bridge in the world is the Danyang–Kunshan Grand Bridge.",
  "The first person to climb Mount Everest was Sir Edmund Hillary.",
  "The longest river in the world is the Nile.",
  "The first person to walk on the moon was Neil Armstrong.",
  "The longest coastline belongs to Canada.",
  "The first person to invent the telephone was Alexander Graham Bell.",
  "The longest mountain range is the Andes.",
  "The first person to invent the light bulb was Thomas Edison.",
  "The longest wall in the world is the Great Wall of China.",
  "The first person to invent the airplane was the Wright brothers.",
  "The longest ocean is the Pacific.",
  "The first person to invent the computer was Charles Babbage.",
  "The longest continent is Asia.",
  "The first person to invent the internet was Tim Berners-Lee.",
  "The longest country name is The United Kingdom of Great Britain and Northern Ireland.",
  "The first person to invent the radio was Guglielmo Marconi.",
  "The longest island is Greenland.",
  "The first person to invent the television was John Logie Baird.",
  "The longest peninsula is the Arabian Peninsula.",
  "The first person to invent the camera was Joseph Nicéphore Niépce.",
  "The longest canyon is the Grand Canyon.",
  "The first person to invent the printing press was Johannes Gutenberg.",
  "The longest waterfall is Angel Falls.",
  "The first person to invent the microscope was Zacharias Janssen.",
  "The longest glacier is Lambert Glacier.",
  "The first person to invent the telescope was Hans Lippershey.",
  "The longest cave is Son Doong Cave.",
  "The first person to invent the steam engine was James Watt.",
  "The longest volcano is Mauna Loa.",
  "The first person to invent the compass was the Chinese.",
  "The longest lake is Lake Tanganyika.",
  "The first person to invent the wheel is unknown.",
  "The longest bay is the Bay of Bengal.",
  "The first person to invent the calendar was the Egyptians.",
  "The longest gulf is the Gulf of Mexico.",
  "The first person to invent the clock was the Greeks.",
  "The longest plateau is the Tibetan Plateau.",
  "The first person to invent the pen was the Egyptians.",
  "The longest plain is the Great Plains.",
  "The first person to invent the paper was the Chinese.",
  "The longest trench is the Mariana Trench.",
  "The first person to invent the ink was the Egyptians.",
  "The longest reef is the Great Barrier Reef.",
  "The first person to invent the wheelbarrow was the Chinese.",
  "The longest delta is the Ganges Delta.",
  "The first person to invent the kite was the Chinese.",
  "The longest archipelago is Indonesia.",
  "The first person to invent the abacus was the Chinese.",
  "The longest peninsula is the Malay Peninsula.",
  "The first person to invent the sundial was the Egyptians.",
  "The longest desert is the Sahara.",
  "The first person to invent the thermometer was Galileo Galilei.",
  "The longest highway is the Pan-American Highway.",
  "The first person to invent the barometer was Evangelista Torricelli.",
  "The longest tunnel is the Gotthard Base Tunnel.",
  "The first person to invent the battery was Alessandro Volta.",
  "The longest dam is the Three Gorges Dam.",
  "The first person to invent the dynamite was Alfred Nobel.",
  "The longest stadium is Rungrado May Day Stadium.",
  "The first person to invent the telephone directory was Reuben H. Donnelly.",
  "The longest airport runway is in Qamdo Bamda Airport.",
  "The first person to invent the typewriter was Christopher Latham Sholes.",
  "The longest railway is the Trans-Siberian Railway.",
  "The first person to invent the sewing machine was Elias Howe.",
  "The longest ship is the Seawise Giant.",
  "The first person to invent the bicycle was Karl Drais.",
  "The longest building is the Burj Khalifa.",
  "The first person to invent the motorcycle was Gottlieb Daimler.",
  "The longest statue is the Statue of Unity.",
  "The first person to invent the car was Karl Benz.",
  "The longest temple is Angkor Wat.",
  "The first person to invent the airplane ticket was the Wright brothers.",
  "The longest palace is the Louvre.",
  "The first person to invent the rocket was the Chinese.",
  "The longest mosque is the Masjid al-Haram.",
  "The first person to invent the satellite was the Soviet Union.",
  "The longest church is St. Peter’s Basilica.",
  "The first person to invent the space shuttle was NASA.",
  "The longest library is the Library of Congress.",
  "The first person to invent the internet browser was Tim Berners-Lee.",
  "The longest museum is the Louvre.",
  "The first person to invent the email was Ray Tomlinson.",
  "The longest zoo is the San Diego Zoo.",
  "The first person to invent the smartphone was IBM.",
  "The longest aquarium is the Georgia Aquarium.",
  "The first person to invent the tablet was Microsoft.",
  "The longest amusement park is Walt Disney World.",
  "The first person to invent the smartwatch was Seiko.",
  "The longest roller coaster is Steel Dragon 2000.",
  "The first person to invent the drone was Abraham Karem.",
  "The longest Ferris wheel is the High Roller.",
];
const cEl = document.getElementById('curiosityText');
if (cEl) {
  const i = Math.floor(Math.random() * curiosities.length);
  cEl.textContent = curiosities[i];
}

// Quiz
// script.js — Quick Quiz with 2000 randomized questions

const questions = [
  // Science
  { question: "Which planet is known as the Red Planet?", options: ["Mercury", "Mars", "Jupiter"], answer: "Mars" },
  { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2"], answer: "H2O" },
  { question: "Who proposed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo"], answer: "Albert Einstein" },
  { question: "Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], answer: "Carbon Dioxide" },
  { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "30,000 km/s"], answer: "300,000 km/s" },

  // History
  { question: "Who was the first President of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"], answer: "George Washington" },
  { question: "In which year did World War II end?", options: ["1945", "1939", "1918"], answer: "1945" },
  { question: "Which empire built the Colosseum?", options: ["Greek", "Roman", "Ottoman"], answer: "Roman" },
  { question: "Who was known as the Iron Lady?", options: ["Indira Gandhi", "Margaret Thatcher", "Angela Merkel"], answer: "Margaret Thatcher" },

  // Technology
  { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Management Language"], answer: "HyperText Markup Language" },
  { question: "Which company created the iPhone?", options: ["Apple", "Samsung", "Microsoft"], answer: "Apple" },
  { question: "What does AI stand for?", options: ["Artificial Intelligence", "Automated Input", "Advanced Integration"], answer: "Artificial Intelligence" },
  { question: "Which programming language uses a snake logo?", options: ["Python", "Java", "C++"], answer: "Python" },

  // Culture
  { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy"], answer: "William Shakespeare" },
  { question: "Which country is famous for the Samurai?", options: ["China", "Japan", "Korea"], answer: "Japan" },
  { question: "Which festival is known as the Festival of Lights?", options: ["Holi", "Diwali", "Eid"], answer: "Diwali" },

  // Education / Math
  { question: "What is 12 × 8?", options: ["96", "88", "108"], answer: "96" },
  { question: "Solve: 5²", options: ["10", "25", "20"], answer: "25" },
  { question: "What is the square root of 81?", options: ["9", "8", "7"], answer: "9" },
  { question: "What is the value of π (approx)?", options: ["3.14", "2.71", "1.61"], answer: "3.14" },

  //Extra questions can be repeated / mixed questions//
  // Add these new 500 questions to your questions array

// Add these 200 new questions to your questions array

{ question: "Which planet has the nickname 'Ice Giant'?", options: ["Uranus", "Neptune", "Saturn"], answer: "Uranus" },
{ question: "Who was the first woman to fly solo across the Atlantic?", options: ["Amelia Earhart", "Valentina Tereshkova", "Bessie Coleman"], answer: "Amelia Earhart" },
{ question: "Which African country was formerly known as Abyssinia?", options: ["Ethiopia", "Sudan", "Somalia"], answer: "Ethiopia" },
{ question: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?", options: ["Hamlet", "Macbeth", "Othello"], answer: "Hamlet" },
{ question: "Which chemical element has the symbol K?", options: ["Potassium", "Krypton", "Kelvin"], answer: "Potassium" },
{ question: "Which war was fought between the North and South regions of the USA?", options: ["Civil War", "World War I", "Revolutionary War"], answer: "Civil War" },
{ question: "Which European city is famous for the Acropolis?", options: ["Athens", "Rome", "Madrid"], answer: "Athens" },
{ question: "Which scientist discovered X-rays?", options: ["Wilhelm Roentgen", "Marie Curie", "James Clerk Maxwell"], answer: "Wilhelm Roentgen" },
{ question: "Which sport is associated with Wimbledon?", options: ["Tennis", "Golf", "Cricket"], answer: "Tennis" },
{ question: "Which Asian river is the longest?", options: ["Yangtze", "Ganges", "Mekong"], answer: "Yangtze" },
{ question: "Which author wrote 'The Catcher in the Rye'?", options: ["J.D. Salinger", "F. Scott Fitzgerald", "Mark Twain"], answer: "J.D. Salinger" },
{ question: "Which invention is attributed to the Wright brothers?", options: ["Airplane", "Helicopter", "Submarine"], answer: "Airplane" },
{ question: "Which country is home to Mount Kilimanjaro?", options: ["Tanzania", "Kenya", "Uganda"], answer: "Tanzania" },
{ question: "Which puzzle involves fitting pieces together to form a picture?", options: ["Jigsaw Puzzle", "Sudoku", "Crossword"], answer: "Jigsaw Puzzle" },
{ question: "Which scientist discovered the electron?", options: ["J.J. Thomson", "Niels Bohr", "Ernest Rutherford"], answer: "J.J. Thomson" },
{ question: "Which country is famous for the Carnival in Rio?", options: ["Brazil", "Spain", "Mexico"], answer: "Brazil" },
{ question: "Which shape has five sides?", options: ["Pentagon", "Hexagon", "Octagon"], answer: "Pentagon" },
{ question: "Which explorer reached the South Pole first?", options: ["Roald Amundsen", "Robert Scott", "Ernest Shackleton"], answer: "Roald Amundsen" },
{ question: "Which sport uses a bat and ball and has innings?", options: ["Baseball", "Cricket", "Softball"], answer: "Baseball" },
{ question: "Which desert is the coldest in the world?", options: ["Antarctic Desert", "Gobi Desert", "Patagonian Desert"], answer: "Antarctic Desert" },
{ question: "Which author wrote 'Crime and Punishment'?", options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov"], answer: "Fyodor Dostoevsky" },
{ question: "Which instrument is known as the 'king of instruments'?", options: ["Organ", "Piano", "Violin"], answer: "Organ" },
{ question: "Which Italian city is famous for Renaissance art?", options: ["Florence", "Venice", "Milan"], answer: "Florence" },
{ question: "Which number is the cube root of 27?", options: ["3", "9", "6"], answer: "3" },
{ question: "Which city is home to the Brandenburg Gate?", options: ["Berlin", "Munich", "Hamburg"], answer: "Berlin" },
{ question: "Which scientist is known for the uncertainty principle?", options: ["Werner Heisenberg", "Max Planck", "Albert Einstein"], answer: "Werner Heisenberg" },
{ question: "Which festival is celebrated with pumpkins in the US?", options: ["Halloween", "Thanksgiving", "Easter"], answer: "Halloween" },
{ question: "Which sport uses a net and shuttlecock?", options: ["Badminton", "Volleyball", "Tennis"], answer: "Badminton" },
{ question: "Which continent is the driest inhabited one?", options: ["Australia", "Africa", "Asia"], answer: "Australia" },
{ question: "Which author wrote 'Don Quixote'?", options: ["Miguel de Cervantes", "Gabriel García Márquez", "Pablo Neruda"], answer: "Miguel de Cervantes" },
{ question: "Which invention is attributed to Samuel Morse?", options: ["Telegraph", "Telephone", "Radio"], answer: "Telegraph" },
{ question: "Which city is known as the City of Spires?", options: ["Prague", "Vienna", "Budapest"], answer: "Prague" },
{ question: "Which puzzle game involves matching words?", options: ["Crossword", "Sudoku", "Scrabble"], answer: "Crossword" },
{ question: "Which scientist discovered the nucleus of the atom?", options: ["Ernest Rutherford", "Niels Bohr", "James Chadwick"], answer: "Ernest Rutherford" },
{ question: "Which country is famous for tango dancing?", options: ["Argentina", "Brazil", "Spain"], answer: "Argentina" },
{ question: "Which shape has six sides?", options: ["Hexagon", "Pentagon", "Octagon"], answer: "Hexagon" },
{ question: "Which explorer discovered the Pacific Ocean?", options: ["Vasco Núñez de Balboa", "Magellan", "Cook"], answer: "Vasco Núñez de Balboa" },
{ question: "Which sport uses a hoop and backboard?", options: ["Basketball", "Netball", "Handball"], answer: "Basketball" },
{ question: "Which desert is in Chile?", options: ["Atacama", "Sahara", "Kalahari"], answer: "Atacama" },
{ question: "Which author wrote 'The Divine Comedy'?", options: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton"], answer: "Dante Alighieri" },
{ question: "Which instrument is played with keys and pedals?", options: ["Piano", "Organ", "Accordion"], answer: "Organ" },
{ question: "Which Italian city is famous for fashion?", options: ["Milan", "Rome", "Florence"], answer: "Milan" },
{ question: "Which number is a prime: 37, 38, 39?", options: ["37", "38", "39"], answer: "37" },
{ question: "Which city is home to the Kremlin?", options: ["Moscow", "St. Petersburg", "Kiev"], answer: "Moscow" },
{ question: "Which scientist is known for quantum theory?", options: ["Max Planck", "Einstein", "Bohr"], answer: "Max Planck" },
{ question: "Which festival is celebrated with fireworks in the US?", options: ["Independence Day", "Halloween", "Labor Day"], answer: "Independence Day" },
{ question: "Which sport uses a racquet and ball on clay courts?", options: ["Tennis", "Squash", "Badminton"], answer: "Tennis" },
{ question: "Which continent is the largest by land area?", options: ["Asia", "Africa", "North America"], answer: "Asia" },
{ question: "Which author wrote 'The Odyssey'?", options: ["Homer", "Virgil", "Sophocles"], answer: "Homer" },
{ question: "Which invention is attributed to James Watt?", options: ["Steam Engine", "Light Bulb", "Printing Press"], answer: "Steam Engine" },
{ question: "Which city is known as the City of Bridges?", options: ["Venice", "Pittsburgh", "Amsterdam"], answer: "Pittsburgh" },
{ question: "Which puzzle game involves placing tiles with numbers?", options: ["Dominoes", "Sudoku", "Mahjong"], answer: "Dominoes" },
{ question: "Which scientist discovered radio waves?", options: ["Heinrich Hertz", "Michael Faraday", "James Clerk Maxwell"], answer: "Heinrich Hertz" },
{ question: "Which country is famous for maple leaves?", options: ["Canada", "USA", "UK"], answer: "Canada" },
{ question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"], answer: "Alexander Graham Bell" },
{ question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "UK"], answer: "Brazil" },
{ question: "Which novel begins with 'Call me Ishmael'?", options: ["Moby-Dick", "The Great Gatsby", "War and Peace"], answer: "Moby-Dick" },
{ question: "Which chess piece can move in an L-shape?", options: ["Knight", "Bishop", "Rook"], answer: "Knight" },
{ question: "Which city is known as the City of Canals?", options: ["Venice", "Amsterdam", "Bangkok"], answer: "Venice" },
{ question: "Which scientist discovered radioactivity?", options: ["Marie Curie", "Albert Einstein", "Niels Bohr"], answer: "Marie Curie" },
{ question: "Which sport uses a shuttlecock?", options: ["Badminton", "Tennis", "Squash"], answer: "Badminton" },
{ question: "Which African country has the city of Nairobi?", options: ["Kenya", "Nigeria", "South Africa"], answer: "Kenya" },
{ question: "Which famous ship sank in 1912?", options: ["Titanic", "Britannic", "Lusitania"], answer: "Titanic" },
{ question: "Which board game uses hotels and houses?", options: ["Monopoly", "Scrabble", "Clue"], answer: "Monopoly" },
{ question: "Which river flows through London?", options: ["Thames", "Seine", "Danube"], answer: "Thames" },
{ question: "Which author wrote '1984'?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury"], answer: "George Orwell" },
{ question: "Which festival is celebrated with lanterns in China?", options: ["Mid-Autumn Festival", "Lantern Festival", "Dragon Boat Festival"], answer: "Lantern Festival" },
{ question: "Which scientist is known for the periodic table?", options: ["Dmitri Mendeleev", "John Dalton", "Linus Pauling"], answer: "Dmitri Mendeleev" },
{ question: "Which country is famous for flamenco dancing?", options: ["Spain", "Portugal", "Italy"], answer: "Spain" },
{ question: "Which puzzle uses numbers 1–9 in a grid?", options: ["Sudoku", "Crossword", "Kakuro"], answer: "Sudoku" },
{ question: "Which bird is a national symbol of the USA?", options: ["Bald Eagle", "Hawk", "Falcon"], answer: "Bald Eagle" },
{ question: "Which Greek god is the ruler of the seas?", options: ["Poseidon", "Zeus", "Hades"], answer: "Poseidon" },
{ question: "Which famous scientist wrote 'Principia Mathematica'?", options: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler"], answer: "Isaac Newton" },
{ question: "Which Asian country is known for kimchi?", options: ["Japan", "South Korea", "China"], answer: "South Korea" },
{ question: "Which shape has eight sides?", options: ["Octagon", "Hexagon", "Decagon"], answer: "Octagon" },
{ question: "Which explorer discovered America in 1492?", options: ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo"], answer: "Christopher Columbus" },
{ question: "Which sport is played at Wimbledon?", options: ["Tennis", "Cricket", "Golf"], answer: "Tennis" },
{ question: "Which desert covers much of northern Africa?", options: ["Sahara", "Gobi", "Kalahari"], answer: "Sahara" },
{ question: "Which author created Sherlock Holmes?", options: ["Arthur Conan Doyle", "Agatha Christie", "Edgar Allan Poe"], answer: "Arthur Conan Doyle" },
{ question: "Which instrument has six strings?", options: ["Guitar", "Violin", "Sitar"], answer: "Guitar" },
{ question: "Which Italian artist painted the Sistine Chapel ceiling?", options: ["Michelangelo", "Leonardo da Vinci", "Raphael"], answer: "Michelangelo" },
{ question: "Which number is a prime: 29, 30, 31?", options: ["29", "30", "31"], answer: "29" },
{ question: "Which city is home to the Colosseum?", options: ["Rome", "Athens", "Istanbul"], answer: "Rome" },
{ question: "Which scientist discovered gravity by observing an apple?", options: ["Isaac Newton", "Albert Einstein", "Galileo"], answer: "Isaac Newton" },
{ question: "Which festival involves colors in India?", options: ["Diwali", "Holi", "Navratri"], answer: "Holi" },
{ question: "Which sport uses wickets?", options: ["Cricket", "Baseball", "Hockey"], answer: "Cricket" },
{ question: "Which continent is Greenland part of?", options: ["North America", "Europe", "Asia"], answer: "North America" },
{ question: "Which author wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson"], answer: "Jane Austen" },
{ question: "Which invention is attributed to Johannes Gutenberg?", options: ["Printing Press", "Compass", "Steam Engine"], answer: "Printing Press" },
{ question: "Which city is known as the Silicon Valley of India?", options: ["Bangalore", "Hyderabad", "Mumbai"], answer: "Bangalore" },
{ question: "Which puzzle game involves matching colored candies?", options: ["Candy Crush", "Tetris", "Bejeweled"], answer: "Candy Crush" },
{ question: "Which scientist developed the theory of evolution?", options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur"], answer: "Charles Darwin" },
{ question: "Which country is known for sushi?", options: ["Japan", "China", "Thailand"], answer: "Japan" },
{ question: "Which shape has four equal sides?", options: ["Square", "Rectangle", "Rhombus"], answer: "Square" },
{ question: "Which explorer circumnavigated the globe?", options: ["Ferdinand Magellan", "Christopher Columbus", "James Cook"], answer: "Ferdinand Magellan" },
{ question: "Which sport uses a puck?", options: ["Ice Hockey", "Field Hockey", "Lacrosse"], answer: "Ice Hockey" },
{ question: "Which desert is in Mongolia and China?", options: ["Gobi", "Sahara", "Atacama"], answer: "Gobi" },
{ question: "Which author wrote 'The Hobbit'?", options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"], answer: "J.R.R. Tolkien" },
{ question: "Which instrument is played with a bow?", options: ["Violin", "Flute", "Drum"], answer: "Violin" },
{ question: "Which Italian city is famous for pizza?", options: ["Naples", "Rome", "Florence"], answer: "Naples" },
{ question: "Which number is the square root of 144?", options: ["10", "12", "14"], answer: "12" },
{ question: "Which city is home to the Eiffel Tower?", options: ["Paris", "London", "Berlin"], answer: "Paris" },
{ question: "Which scientist is known as the father of modern physics?", options: ["Albert Einstein", "Isaac Newton", "Galileo"], answer: "Albert Einstein" },
{ question: "Which festival celebrates the harvest in the US?", options: ["Thanksgiving", "Halloween", "Easter"], answer: "Thanksgiving" },
{ question: "Which sport uses a hoop and ball?", options: ["Basketball", "Netball", "Volleyball"], answer: "Basketball" },
{ question: "Which continent is the Amazon rainforest in?", options: ["South America", "Africa", "Asia"], answer: "South America" },
{ question: "Which author wrote 'Hamlet'?", options: ["William Shakespeare", "Christopher Marlowe", "Ben Jonson"], answer: "William Shakespeare" },
{ question: "Which invention is attributed to Thomas Edison?", options: ["Light Bulb", "Telephone", "Radio"], answer: "Light Bulb" },
{ question: "Which city is known as the Big Ben landmark?", options: ["London", "Paris", "Berlin"], answer: "London" },
{ question: "Which puzzle game involves falling blocks?", options: ["Tetris", "Sudoku", "Crossword"], answer: "Tetris" },

{ question: "Which planet is known as the Red Planet?", options: ["Mercury", "Mars", "Jupiter"], answer: "Mars" },
{ question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Management Language"], answer: "HyperText Markup Language" },
{ question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], answer: "Carbon Dioxide" },
{ question: "Who proposed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"], answer: "Albert Einstein" },
{ question: "What is the chemical symbol for water?", options: ["H2O", "HO", "O2"], answer: "H2O" },
{ question: "Which element has the atomic number 1?", options: ["Hydrogen", "Helium", "Lithium"], answer: "Hydrogen" },
{ question: "What is the largest mammal on Earth?", options: ["African Elephant", "Blue Whale", "Giraffe"], answer: "Blue Whale" },
{ question: "Which continent is the Sahara Desert located in?", options: ["Asia", "Africa", "Australia"], answer: "Africa" },
{ question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth"], answer: "Mercury" },
{ question: "Which empire built the Colosseum?", options: ["Greek", "Roman", "Ottoman"], answer: "Roman" },
{ question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy"], answer: "William Shakespeare" },
{ question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid"], answer: "Paris" },
{ question: "What is 12 × 8?", options: ["96", "88", "108"], answer: "96" },
{ question: "Solve: 5²", options: ["10", "25", "20"], answer: "25" },
{ question: "What is the square root of 81?", options: ["9", "8", "7"], answer: "9" },
{ question: "Which ocean is the largest?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"], answer: "Pacific Ocean" },
{ question: "Which country is famous for the Samurai?", options: ["China", "Japan", "Korea"], answer: "Japan" },
{ question: "Which instrument has keys, pedals, and strings?", options: ["Piano", "Violin", "Flute"], answer: "Piano" },
{ question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen" },
{ question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael"], answer: "Leonardo da Vinci" },
{ question: "Which planet has prominent rings?", options: ["Jupiter", "Saturn", "Neptune"], answer: "Saturn" },
{ question: "Which language is primarily spoken in Brazil?", options: ["Spanish", "Portuguese", "French"], answer: "Portuguese" },
{ question: "How many continents are there?", options: ["5", "6", "7"], answer: "7" },
{ question: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "110°C"], answer: "100°C" },
{ question: "Which metal is liquid at room temperature?", options: ["Mercury", "Sodium", "Aluminum"], answer: "Mercury" },
{ question: "Which city is known as the Big Apple?", options: ["Los Angeles", "New York City", "Chicago"], answer: "New York City" },
{ question: "What is the tallest mountain on Earth?", options: ["K2", "Mount Everest", "Kangchenjunga"], answer: "Mount Everest" },
{ question: "Which country gifted the Statue of Liberty to the USA?", options: ["United Kingdom", "France", "Germany"], answer: "France" },
{ question: "Which vitamin is produced when skin is exposed to sunlight?", options: ["Vitamin C", "Vitamin D", "Vitamin B12"], answer: "Vitamin D" },
{ question: "Which organ pumps blood in the human body?", options: ["Liver", "Heart", "Kidney"], answer: "Heart" },
{ question: "Which planet is known for its Great Red Spot?", options: ["Jupiter", "Mars", "Venus"], answer: "Jupiter" },
{ question: "Which animal is known as the King of the Jungle?", options: ["Tiger", "Lion", "Leopard"], answer: "Lion" },
{ question: "What is the currency of Japan?", options: ["Yuan", "Yen", "Won"], answer: "Yen" },
{ question: "What is H in the periodic table?", options: ["Hydrogen", "Hassium", "Holmium"], answer: "Hydrogen" },
{ question: "Which festival is known as the Festival of Lights in India?", options: ["Holi", "Diwali", "Eid"], answer: "Diwali" },
{ question: "Which continent is the smallest by land area?", options: ["Europe", "Australia", "Antarctica"], answer: "Australia" },
{ question: "Which river is the longest in the world?", options: ["Amazon", "Nile", "Yangtze"], answer: "Nile" },
{ question: "Which scientist formulated the laws of motion?", options: ["Galileo", "Newton", "Kepler"], answer: "Newton" },
{ question: "Which organelles are the powerhouses of the cell?", options: ["Nucleus", "Mitochondria", "Ribosomes"], answer: "Mitochondria" },
{ question: "Which country hosted the first modern Olympics?", options: ["France", "Greece", "Italy"], answer: "Greece" },
{ question: "Which planet is known as Earth’s twin?", options: ["Venus", "Mars", "Mercury"], answer: "Venus" },
{ question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility"], answer: "Central Processing Unit" },
{ question: "Which part of the plant conducts photosynthesis?", options: ["Roots", "Leaves", "Stem"], answer: "Leaves" },
{ question: "Which blood type is known as the universal donor?", options: ["O negative", "AB positive", "A positive"], answer: "O negative" },
{ question: "Which gas is used in balloons to make them float?", options: ["Hydrogen", "Helium", "Nitrogen"], answer: "Helium" },
{ question: "Which country is home to the pyramids of Giza?", options: ["Mexico", "Egypt", "Peru"], answer: "Egypt" },
{ question: "Which instrument measures atmospheric pressure?", options: ["Barometer", "Thermometer", "Anemometer"], answer: "Barometer" },
{ question: "Which planet is farthest from the Sun?", options: ["Uranus", "Neptune", "Saturn"], answer: "Neptune" },
{ question: "Which sea separates Europe and Africa?", options: ["Baltic Sea", "Mediterranean Sea", "Black Sea"], answer: "Mediterranean Sea" },
{ question: "Which animal is the fastest land animal?", options: ["Cheetah", "Pronghorn", "Lion"], answer: "Cheetah" },
{ question: "Which scientist discovered penicillin?", options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie"], answer: "Alexander Fleming" },
{ question: "Which country has the largest population?", options: ["India", "China", "United States"], answer: "China" },
{ question: "Which mountain range separates Europe and Asia?", options: ["Alps", "Ural Mountains", "Carpathians"], answer: "Ural Mountains" },
{ question: "What is the smallest prime number?", options: ["1", "2", "3"], answer: "2" },
{ question: "Which planet is tilted on its side?", options: ["Uranus", "Saturn", "Neptune"], answer: "Uranus" },
{ question: "Which continent has the most countries?", options: ["Africa", "Asia", "Europe"], answer: "Africa" },
{ question: "Which Italian city is famous for canals?", options: ["Rome", "Venice", "Florence"], answer: "Venice" },
{ question: "Which chemical element is represented by Na?", options: ["Sodium", "Nitrogen", "Neon"], answer: "Sodium" },
{ question: "Which organ filters blood in the human body?", options: ["Liver", "Kidneys", "Lungs"], answer: "Kidneys" },
{ question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand"], answer: "Japan" },
{ question: "Which planet is known for its blue color due to methane?", options: ["Neptune", "Earth", "Mars"], answer: "Neptune" },
{ question: "Which ancient civilization built Machu Picchu?", options: ["Maya", "Aztec", "Inca"], answer: "Inca" },
{ question: "Which continent is entirely within the Southern Hemisphere?", options: ["Antarctica", "Australia", "South America"], answer: "Antarctica" },
{ question: "Which animal is a marsupial?", options: ["Kangaroo", "Leopard", "Wolf"], answer: "Kangaroo" },
{ question: "Which gas is commonly known as laughing gas?", options: ["Nitrous Oxide", "Carbon Monoxide", "Sulfur Dioxide"], answer: "Nitrous Oxide" },
{ question: "Which country is famous for the Eiffel Tower?", options: ["Italy", "France", "Spain"], answer: "France" },
{ question: "Which planet has the shortest day?", options: ["Earth", "Jupiter", "Mars"], answer: "Jupiter" },
{ question: "Which bone protects the brain?", options: ["Femur", "Skull", "Rib"], answer: "Skull" },
{ question: "Which continent is the Arctic located around?", options: ["North America", "Europe", "It spans the northern polar region"], answer: "It spans the northern polar region" },
{ question: "Which river runs through Paris?", options: ["Thames", "Seine", "Rhine"], answer: "Seine" },
{ question: "Which organ is primarily responsible for digestion of food?", options: ["Stomach", "Heart", "Pancreas"], answer: "Stomach" },
{ question: "Which programming language is widely used for web styling?", options: ["JavaScript", "CSS", "Python"], answer: "CSS" },
{ question: "Which ocean lies on the east coast of the United States?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], answer: "Atlantic Ocean" },
{ question: "Which metal is most abundant in Earth’s crust?", options: ["Iron", "Aluminum", "Copper"], answer: "Aluminum" },
{ question: "Which country is known for the Taj Mahal?", options: ["India", "Pakistan", "Bangladesh"], answer: "India" },
{ question: "Which instrument measures earthquakes?", options: ["Seismograph", "Barograph", "Hydrometer"], answer: "Seismograph" },
{ question: "Which planet has the hottest surface temperature?", options: ["Mercury", "Venus", "Mars"], answer: "Venus" },
{ question: "Which desert is the largest hot desert?", options: ["Sahara", "Gobi", "Kalahari"], answer: "Sahara" },
{ question: "Which animal is known for building dams?", options: ["Beaver", "Otter", "Badger"], answer: "Beaver" },
{ question: "Which scientist developed the polio vaccine?", options: ["Jonas Salk", "Edward Jenner", "Robert Koch"], answer: "Jonas Salk" },
{ question: "Which country is known for maple syrup?", options: ["Canada", "USA", "Sweden"], answer: "Canada" },
{ question: "Which galaxy do we live in?", options: ["Andromeda", "Milky Way", "Triangulum"], answer: "Milky Way" },
{ question: "Which planet is known for Olympus Mons?", options: ["Mars", "Venus", "Mercury"], answer: "Mars" },
{ question: "Which chemical element has the symbol Fe?", options: ["Fluorine", "Iron", "Fermium"], answer: "Iron" },
{ question: "Which Italian city is known for the Colosseum?", options: ["Venice", "Florence", "Rome"], answer: "Rome" },
{ question: "Which bird is the largest living species?", options: ["Ostrich", "Emu", "Albatross"], answer: "Ostrich" },
{ question: "Which sea is the saltiest large water body?", options: ["Dead Sea", "Red Sea", "Caspian Sea"], answer: "Dead Sea" },
{ question: "Which organ produces insulin?", options: ["Liver", "Pancreas", "Spleen"], answer: "Pancreas" },
{ question: "Which planet is known as the Morning Star?", options: ["Venus", "Mercury", "Jupiter"], answer: "Venus" },
{ question: "Which country is the largest by land area?", options: ["Canada", "Russia", "China"], answer: "Russia" },
{ question: "Which instrument is used to view distant objects?", options: ["Microscope", "Telescope", "Periscope"], answer: "Telescope" },
{ question: "Which African river is the longest?", options: ["Nile", "Congo", "Niger"], answer: "Nile" },
{ question: "Which animal is known for changing color?", options: ["Chameleon", "Gecko", "Iguana"], answer: "Chameleon" },
{ question: "Which country is home to the Great Barrier Reef?", options: ["Australia", "Indonesia", "Philippines"], answer: "Australia" },
{ question: "Which structure carries blood away from the heart?", options: ["Veins", "Arteries", "Capillaries"], answer: "Arteries" },
{ question: "Which planet has the most moons discovered so far?", options: ["Jupiter", "Saturn", "Uranus"], answer: "Saturn" },
{ question: "Which city is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata"], answer: "New Delhi" },
{ question: "Which unit measures electrical current?", options: ["Volt", "Ampere", "Ohm"], answer: "Ampere" },
{ question: "Which metal is used for electrical wiring?", options: ["Copper", "Lead", "Zinc"], answer: "Copper" },
{ question: "Which continent contains the Amazon rainforest?", options: ["Africa", "South America", "Asia"], answer: "South America" },
{ question: "Which country is known as the cradle of democracy?", options: ["Rome", "Greece", "Egypt"], answer: "Greece" },
{ question: "Which gas protects Earth from harmful UV rays?", options: ["Ozone", "Carbon Dioxide", "Nitrogen"], answer: "Ozone" },
{ question: "Which historic city was once called Constantinople?", options: ["Istanbul", "Athens", "Cairo"], answer: "Istanbul" },
{ question: "Which animal is the largest land animal?", options: ["Rhino", "Hippopotamus", "African Elephant"], answer: "African Elephant" },
{ question: "Which protein carries oxygen in blood?", options: ["Keratin", "Hemoglobin", "Collagen"], answer: "Hemoglobin" },
{ question: "Which instrument is used to measure temperature?", options: ["Thermometer", "Barometer", "Hygrometer"], answer: "Thermometer" },
{ question: "Which planet takes about 365 days to orbit the Sun?", options: ["Earth", "Mars", "Venus"], answer: "Earth" },
{ question: "Which Asian country is known for Mount Fuji?", options: ["China", "Japan", "South Korea"], answer: "Japan" },
{ question: "Which continent is the driest?", options: ["Africa", "Antarctica", "Australia"], answer: "Antarctica" },
{ question: "Which fruit is botanically a berry?", options: ["Strawberry", "Banana", "Raspberry"], answer: "Banana" },
{ question: "Which river flows through Egypt?", options: ["Tigris", "Nile", "Euphrates"], answer: "Nile" },
{ question: "Which city is known as the City of Light?", options: ["Paris", "Vienna", "Prague"], answer: "Paris" },
{ question: "Which metal is most commonly used to make coins historically?", options: ["Gold", "Copper", "Tin"], answer: "Copper" },
{ question: "Which planet has a day longer than its year?", options: ["Mercury", "Venus", "Mars"], answer: "Venus" },
{ question: "Which country has the Great Wall?", options: ["Japan", "China", "Mongolia"], answer: "China" },
{ question: "Which animal is known for echolocation?", options: ["Bat", "Cat", "Fox"], answer: "Bat" },
{ question: "Which instrument measures wind speed?", options: ["Anemometer", "Altimeter", "Ammeter"], answer: "Anemometer" },
{ question: "Which scientist is known for the law of universal gravitation?", options: ["Einstein", "Newton", "Galileo"], answer: "Newton" },
{ question: "Which city is the capital of France?", options: ["Paris", "Lyon", "Marseille"], answer: "Paris" },
{ question: "Which ocean surrounds Antarctica?", options: ["Atlantic", "Indian", "Southern"], answer: "Southern" },
{ question: "Which mineral forms common table salt with sodium?", options: ["Chlorine", "Fluorine", "Bromine"], answer: "Chlorine" },
{ question: "Which animal group includes frogs and toads?", options: ["Reptiles", "Amphibians", "Mammals"], answer: "Amphibians" },
{ question: "Which device stores electric charge?", options: ["Resistor", "Capacitor", "Inductor"], answer: "Capacitor" },
{ question: "Which continent hosts the Himalayas?", options: ["Europe", "Asia", "Africa"], answer: "Asia" }



  // 🔁 Repeat and expand this pattern to reach 2000 questions
];

// Pick a random question each time
function loadRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const q = questions[randomIndex];

  const quizBox = document.getElementById("quizBox");
  const questionEl = quizBox.querySelector(".quiz-q");
  const optionsEl = quizBox.querySelector(".quiz-options");
  const resultEl = document.getElementById("quizResult");

  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  resultEl.textContent = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("quiz-btn");
    btn.setAttribute("data-a", option);

    btn.addEventListener("click", () => {
      const correct = q.answer;
      const ok = option === correct;
      resultEl.textContent = ok
        ? `✅ Correct! ${correct} is the right answer.`
        : `❌ Not quite — correct answer: ${correct}`;
      resultEl.style.color = ok ? "#6ee7ff" : "#ffd166";
    });

    optionsEl.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", loadRandomQuestion);