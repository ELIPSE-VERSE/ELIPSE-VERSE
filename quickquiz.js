(() => {
  // Sample questions — extend or replace as needed
  const questions = [
    { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
    { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
    { q: "Who wrote '1984'?", options: ["George Orwell", "Jane Austen", "Mark Twain", "J.K. Rowling"], answer: 0 },
    { q: "The chemical formula for water is:", options: ["O2", "H2O", "CO2", "HO"], answer: 1 },
     { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
  { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
  { q: "Who wrote '1984'?", options: ["George Orwell", "Jane Austen", "Mark Twain", "J.K. Rowling"], answer: 0 },
  { q: "The chemical formula for water is:", options: ["O2", "H2O", "CO2", "HO"], answer: 1 },
  { q: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
  { q: "What is the largest mammal on Earth?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: 1 },
  { q: "Which continent is the Sahara Desert located in?", options: ["Asia", "Africa", "Australia", "South America"], answer: 1 },
  { q: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], answer: 1 },
  { q: "Which organ pumps blood through the human body?", options: ["Lungs", "Brain", "Heart", "Kidneys"], answer: 2 },
  { q: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: 2 },
  { q: "Which planet is known as the Morning Star?", options: ["Mars", "Venus", "Mercury", "Saturn"], answer: 1 },
  { q: "Which element has the chemical symbol 'Au'?", options: ["Silver", "Gold", "Copper", "Aluminium"], answer: 1 },
  { q: "In which year did World War II end?", options: ["1940", "1945", "1950", "1939"], answer: 1 },
  { q: "Which is the fastest land animal?", options: ["Cheetah", "Horse", "Lion", "Tiger"], answer: 0 },
  { q: "Which country invented pizza?", options: ["France", "Italy", "USA", "Greece"], answer: 1 },
  { q: "Which blood type is known as the universal donor?", options: ["A", "B", "O Negative", "AB"], answer: 2 },
  { q: "Which instrument measures atmospheric pressure?", options: ["Thermometer", "Barometer", "Hygrometer", "Altimeter"], answer: 1 },
  { q: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
  { q: "Which scientist proposed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: 1 },
  { q: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
  { q: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "South Korea"], answer: 1 },
  { q: "What is the hardest natural substance?", options: ["Gold", "Diamond", "Iron", "Quartz"], answer: 1 },
  { q: "Which vitamin is produced when the skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 3 },
  { q: "Which is the tallest mountain in the world?", options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"], answer: 1 },
  { q: "Which country gifted the Statue of Liberty to the USA?", options: ["France", "UK", "Germany", "Spain"], answer: 0 },
  { q: "Which is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], answer: 2 },
  { q: "Which is the national flower of India?", options: ["Rose", "Lotus", "Sunflower", "Lily"], answer: 1 },
  { q: "Which is the currency of Japan?", options: ["Yuan", "Yen", "Won", "Dollar"], answer: 1 },
  { q: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctic", "Kalahari"], answer: 2 },
  { q: "Which is the smallest country in the world?", options: ["Monaco", "Vatican City", "Malta", "San Marino"], answer: 1 },
 { q: "Which is the national animal of Australia?", options: ["Kangaroo", "Koala", "Emu", "Platypus"], answer: 0 },
  { q: "Which is the chemical symbol for Iron?", options: ["Ir", "Fe", "In", "Io"], answer: 1 },
  { q: "Which is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: 1 },
  { q: "Which is the largest island in the world?", options: ["Greenland", "Madagascar", "Borneo", "New Guinea"], answer: 0 },
  { q: "Which is the national sport of Japan?", options: ["Sumo Wrestling", "Karate", "Judo", "Baseball"], answer: 0 },
  { q: "Which is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
  { q: "Which is the largest bone in the human body?", options: ["Femur", "Tibia", "Humerus", "Skull"], answer: 0 },
  { q: "Which is the capital of Germany?", options: ["Berlin", "Munich", "Hamburg", "Frankfurt"], answer: 0 },
  { q: "Which is the national bird of the USA?", options: ["Bald Eagle", "Sparrow", "Crow", "Falcon"], answer: 0 },
  { q: "Which is the capital of Italy?", options: ["Rome", "Venice", "Florence", "Milan"], answer: 0 },
  { q: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
  { q: "Which is the capital of Russia?", options: ["Moscow", "St. Petersburg", "Kazan", "Novosibirsk"], answer: 0 },
  { q: "Which is the capital of China?", options: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"], answer: 1 },
  { q: "Which is the capital of Spain?", options: ["Madrid", "Barcelona", "Seville", "Valencia"], answer: 0 },
  { q: "Which is the capital of Portugal?", options: ["Lisbon", "Porto", "Braga", "Coimbra"], answer: 0 },
  { q: "Which is the capital of South Korea?", options: ["Seoul", "Busan", "Incheon", "Daegu"], answer: 0 },
  { q: "Which is the capital of Thailand?", options: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"], answer: 0 },
  { q: "Which is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: 0 },
  { q: "Which is the capital of Turkey?", options: ["Ankara", "Istanbul", "Izmir", "Bursa"], answer: 0 },
  { q: "Which is the capital of Greece?", options: ["Athens", "Thessaloniki", "Patras", "Heraklion"], answer: 0 },
  { q: "Which is the capital of Mexico?", options: ["Mexico City", "Guadalajara", "Monterrey", "Cancun"], answer: 0 },
  { q: "Which is the capital of Brazil?", options: ["Brasilia", "Rio de Janeiro", "São Paulo", "Salvador"], answer: 0 },
  { q: "Which is the capital of Argentina?", options: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"], answer: 0 },
  { q: "Which is the capital of Chile?", options: ["Santiago", "Valparaiso", "Concepcion", "Antofagasta"], answer: 0 },
  { q: "Which is the capital of South Africa?", options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"], answer: 0 },
  { q: "Which is the largest continent?", options: ["Africa", "Asia", "Europe", "North America"], answer: 1 },
  { q: "Which is the national currency of the UK?", options: ["Euro", "Dollar", "Pound Sterling", "Franc"], answer: 2 },
  { q: "Which is the capital of Nepal?", options: ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"], answer: 0 },
  { q: "Which is the capital of Sri Lanka?", options: ["Colombo", "Kandy", "Galle", "Jaffna"], answer: 0 },
  { q: "Which is the capital of Pakistan?", options: ["Karachi", "Islamabad", "Lahore", "Peshawar"], answer: 1 },
  { q: "Which is the capital of Bangladesh?", options: ["Dhaka", "Chittagong", "Khulna", "Sylhet"], answer: 0 },
  { q: "Which is the capital of Bhutan?", options: ["Thimphu", "Paro", "Punakha", "Trongsa"], answer: 0 },
  { q: "Which is the capital of Myanmar?", options: ["Naypyidaw", "Yangon", "Mandalay", "Bago"], answer: 0 },
  { q: "Which is the capital of Afghanistan?", options: ["Kabul", "Herat", "Kandahar", "Mazar-i-Sharif"], answer: 0 },
  { q: "Which is the capital of Iran?", options: ["Tehran", "Shiraz", "Isfahan", "Mashhad"], answer: 0 },
  { q: "Which is the capital of Iraq?", options: ["Baghdad", "Basra", "Mosul", "Najaf"], answer: 0 },
  { q: "Which is the capital of Saudi Arabia?", options: ["Riyadh", "Jeddah", "Mecca", "Medina"], answer: 0 },
  { q: "Which is the capital of UAE?", options: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman"], answer: 0 },
  { q: "Which is the capital of Qatar?", options: ["Doha", "Al Rayyan", "Umm Salal", "Al Wakrah"], answer: 0 },
  { q: "Which is the capital of Oman?", options: ["Muscat", "Salalah", "Nizwa", "Sohar"], answer: 0 },
  { q: "Which is the capital of Kuwait?", options: ["Kuwait City", "Al Jahra", "Hawalli", "Salmiya"], answer: 0 },
  { q: "Which is the capital of Bahrain?", options: ["Manama", "Muharraq", "Riffa", "Isa Town"], answer: 0 },
  { q: "Which is the capital of Yemen?", options: ["Sana'a", "Aden", "Taiz", "Ibb"], answer: 0 },
  { q: "Which is the capital of Turkey?", options: ["Ankara", "Istanbul", "Izmir", "Bursa"], answer: 0 },
  { q: "Which is the capital of Greece?", options: ["Athens", "Thessaloniki", "Patras", "Heraklion"], answer: 0 },
  { q: "Which is the capital of Cyprus?", options: ["Nicosia", "Limassol", "Larnaca", "Paphos"], answer: 0 },
  { q: "Which is the capital of Israel?", options: ["Jerusalem", "Tel Aviv", "Haifa", "Nazareth"], answer: 0 },
  { q: "Which is the capital of Jordan?", options: ["Amman", "Zarqa", "Irbid", "Madaba"], answer: 0 },
  { q: "Which is the capital of Lebanon?", options: ["Beirut", "Tripoli", "Sidon", "Tyre"], answer: 0 },
  { q: "Which is the capital of Syria?", options: ["Damascus", "Aleppo", "Homs", "Latakia"], answer: 0 },
  { q: "Which is the capital of Russia?", options: ["Moscow", "St. Petersburg", "Novosibirsk", "Kazan"], answer: 0 },
  { q: "Which is the capital of Ukraine?", options: ["Kyiv", "Kharkiv", "Odessa", "Dnipro"], answer: 0 },
  { q: "Which is the capital of Poland?", options: ["Warsaw", "Krakow", "Gdansk", "Wroclaw"], answer: 0 },
  { q: "Which is the capital of Czech Republic?", options: ["Prague", "Brno", "Ostrava", "Plzen"], answer: 0 },
  { q: "Which is the capital of Slovakia?", options: ["Bratislava", "Kosice", "Presov", "Nitra"], answer: 0 },
  { q: "Which is the capital of Hungary?", options: ["Budapest", "Debrecen", "Szeged", "Miskolc"], answer: 0 },
  { q: "Which is the capital of Austria?", options: ["Vienna", "Salzburg", "Innsbruck", "Graz"], answer: 0 },
  { q: "Which is the capital of Switzerland?", options: ["Bern", "Zurich", "Geneva", "Basel"], answer: 0 },
  { q: "Which is the capital of Belgium?", options: ["Brussels", "Antwerp", "Ghent", "Bruges"], answer: 0 },
  { q: "Which is the capital of Netherlands?", options: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"], answer: 0 },
  { q: "Which is the capital of Luxembourg?", options: ["Luxembourg City", "Esch-sur-Alzette", "Differdange", "Dudelange"], answer: 0 },
  { q: "Which is the capital of Germany?", options: ["Berlin", "Munich", "Hamburg", "Frankfurt"], answer: 0 },
  { q: "Which is the capital of Italy?", options: ["Rome", "Venice", "Florence", "Milan"], answer: 0 },
  { q: "Which is the capital of Spain?", options: ["Madrid", "Barcelona", "Seville", "Valencia"], answer: 0 },
  { q: "Which is the capital of Portugal?", options: ["Lisbon", "Porto", "Braga", "Coimbra"], answer: 0 },
  { q: "Which is the capital of France?", options: ["Paris", "Lyon", "Marseille", "Nice"], answer: 0 },
  { q: "Which is the capital of UK?", options: ["London", "Manchester", "Liverpool", "Birmingham"], answer: 0 },
  { q: "Which is the capital of Ireland?", options: ["Dublin", "Cork", "Galway", "Limerick"], answer: 0 },
  { q: "Which is the capital of Iceland?", options: ["Reykjavik", "Akureyri", "Kopavogur", "Hafnarfjordur"], answer: 0 },
  { q: "Which is the capital of Norway?", options: ["Oslo", "Bergen", "Trondheim", "Stavanger"], answer: 0 },
  { q: "Which is the capital of Sweden?", options: ["Stockholm", "Gothenburg", "Malmo", "Uppsala"], answer: 0 },
  { q: "Which is the capital of Finland?", options: ["Helsinki", "Turku", "Tampere", "Oulu"], answer: 0 },
  { q: "Which is the capital of Denmark?", options: ["Copenhagen", "Aarhus", "Odense", "Aalborg"], answer: 0 },
  { q: "Which is the capital of Estonia?", options: ["Tallinn", "Tartu", "Narva", "Parnu"], answer: 0 },
  { q: "Which is the capital of Latvia?", options: ["Riga", "Daugavpils", "Liepaja", "Jelgava"], answer: 0 },
  { q: "Which is the capital of Lithuania?", options: ["Vilnius", "Kaunas", "Klaipeda", "Siauliai"], answer: 0 },
  { q: "Which is the capital of Belarus?", options: ["Minsk", "Gomel", "Brest", "Vitebsk"], answer: 0 },

  { q: "Which is the capital of Kenya?", options: ["Nairobi", "Mombasa", "Kisumu", "Eldoret"], answer: 0 },
  { q: "Which is the capital of Tanzania?", options: ["Dodoma", "Dar es Salaam", "Arusha", "Mwanza"], answer: 0 },
  { q: "Which is the capital of Uganda?", options: ["Kampala", "Entebbe", "Jinja", "Gulu"], answer: 0 },
  { q: "Which is the capital of Ethiopia?", options: ["Addis Ababa", "Dire Dawa", "Mekelle", "Gondar"], answer: 0 },
  { q: "Which is the capital of Sudan?", options: ["Khartoum", "Omdurman", "Port Sudan", "Nyala"], answer: 0 },
  { q: "Which is the capital of South Sudan?", options: ["Juba", "Malakal", "Wau", "Bor"], answer: 0 },
  { q: "Which is the capital of Nigeria?", options: ["Abuja", "Lagos", "Kano", "Ibadan"], answer: 0 },
  { q: "Which is the capital of Ghana?", options: ["Accra", "Kumasi", "Tamale", "Takoradi"], answer: 0 },
  { q: "Which is the capital of Ivory Coast?", options: ["Yamoussoukro", "Abidjan", "Bouaké", "San Pedro"], answer: 0 },
  { q: "Which is the capital of Senegal?", options: ["Dakar", "Saint-Louis", "Kaolack", "Ziguinchor"], answer: 0 },
  { q: "Which is the capital of Morocco?", options: ["Rabat", "Casablanca", "Marrakech", "Fes"], answer: 0 },
  { q: "Which is the capital of Algeria?", options: ["Algiers", "Oran", "Constantine", "Annaba"], answer: 0 },
  { q: "Which is the capital of Tunisia?", options: ["Tunis", "Sfax", "Sousse", "Gabès"], answer: 0 },
  { q: "Which is the capital of Libya?", options: ["Tripoli", "Benghazi", "Misrata", "Sabha"], answer: 0 },
  { q: "Which is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: 0 },
  { q: "Which is the capital of Zimbabwe?", options: ["Harare", "Bulawayo", "Mutare", "Gweru"], answer: 0 },
  { q: "Which is the capital of Zambia?", options: ["Lusaka", "Ndola", "Kitwe", "Livingstone"], answer: 0 },
  { q: "Which is the capital of Malawi?", options: ["Lilongwe", "Blantyre", "Mzuzu", "Zomba"], answer: 0 },
  { q: "Which is the capital of Mozambique?", options: ["Maputo", "Beira", "Nampula", "Quelimane"], answer: 0 },
  { q: "Which is the capital of Madagascar?", options: ["Antananarivo", "Toamasina", "Fianarantsoa", "Mahajanga"], answer: 0 },
  { q: "Which is the capital of Botswana?", options: ["Gaborone", "Francistown", "Maun", "Serowe"], answer: 0 },
  { q: "Which is the capital of Namibia?", options: ["Windhoek", "Walvis Bay", "Swakopmund", "Rundu"], answer: 0 },
  { q: "Which is the capital of Angola?", options: ["Luanda", "Huambo", "Lubango", "Benguela"], answer: 0 },
  { q: "Which is the capital of DR Congo?", options: ["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Kisangani"], answer: 0 },
  { q: "Which is the capital of Cameroon?", options: ["Yaoundé", "Douala", "Garoua", "Bamenda"], answer: 0 },
  { q: "Which is the capital of Mali?", options: ["Bamako", "Sikasso", "Mopti", "Kayes"], answer: 0 },
  { q: "Which is the capital of Niger?", options: ["Niamey", "Zinder", "Maradi", "Agadez"], answer: 0 },
  { q: "Which is the capital of Chad?", options: ["N'Djamena", "Moundou", "Sarh", "Abeche"], answer: 0 },
  { q: "Which is the capital of Rwanda?", options: ["Kigali", "Butare", "Gisenyi", "Musanze"], answer: 0 },
  { q: "Which is the capital of Burundi?", options: ["Gitega", "Bujumbura", "Ngozi", "Rumonge"], answer: 0 },
  { q: "Which is the capital of Seychelles?", options: ["Victoria", "Anse Boileau", "Beau Vallon", "Takamaka"], answer: 0 },
  { q: "Which is the capital of Mauritius?", options: ["Port Louis", "Curepipe", "Quatre Bornes", "Vacoas"], answer: 0 },
  { q: "Which is the capital of Comoros?", options: ["Moroni", "Mutsamudu", "Fomboni", "Domoni"], answer: 0 },
  { q: "Which is the capital of Somalia?", options: ["Mogadishu", "Hargeisa", "Kismayo", "Baidoa"], answer: 0 },
  { q: "Which is the capital of Eritrea?", options: ["Asmara", "Massawa", "Keren", "Barentu"], answer: 0 },
  { q: "Which is the capital of Gabon?", options: ["Libreville", "Port-Gentil", "Franceville", "Oyem"], answer: 0 },
  { q: "Which is the capital of Equatorial Guinea?", options: ["Malabo", "Bata", "Ebebiyin", "Mongomo"], answer: 0 },
  { q: "Which is the capital of Sierra Leone?", options: ["Freetown", "Bo", "Kenema", "Makeni"], answer: 0 },
  { q: "Which is the capital of Liberia?", options: ["Monrovia", "Gbarnga", "Kakata", "Harper"], answer: 0 },
  { q: "Which is the capital of Togo?", options: ["Lomé", "Sokodé", "Kara", "Atakpamé"], answer: 0 },
  { q: "Which is the capital of Benin?", options: ["Porto-Novo", "Cotonou", "Parakou", "Abomey"], answer: 0 },
  { q: "Which is the capital of Guinea?", options: ["Conakry", "Kankan", "Labé", "Nzérékoré"], answer: 0 },
  { q: "Which is the capital of Guinea-Bissau?", options: ["Bissau", "Bafatá", "Gabú", "Cacheu"], answer: 0 },
  { q: "Which is the capital of Central African Republic?", options: ["Bangui", "Bimbo", "Berbérati", "Bossangoa"], answer: 0 },
  { q: "Which is the capital of Mauritania?", options: ["Nouakchott", "Nouadhibou", "Rosso", "Kaédi"], answer: 0 },
  { q: "Which is the capital of Lesotho?", options: ["Maseru", "Teyateyaneng", "Maputsoe", "Hlotse"], answer: 0 },
  { q: "Which is the capital of Eswatini?", options: ["Mbabane", "Manzini", "Lobamba", "Siteki"], answer: 0 },
  { q: "Which is the capital of Malawi?", options: ["Lilongwe", "Blantyre", "Mzuzu", "Zomba"], answer: 0 },
  { q: "Which is the capital of Seychelles?", options: ["Victoria", "Anse Royale", "Cascade", "Bel Ombre"], answer: 0 },
 ];


  // State
  let index = 0;
  let score = 0;
  let streak = 0;
  let timeLeft = 30;
  let timerId = null;
  let selectedOption = null;
  let locked = false; // prevent double submit

  // Elements
  const questionBox = document.getElementById("questionBox");
  const optionsForm = document.getElementById("optionsForm");
  const feedbackEl = document.getElementById("feedback");
  const scoreEl = document.getElementById("score");
  const streakEl = document.getElementById("streak");
  const timerEl = document.getElementById("timer");
  const submitBtn = document.getElementById("submitBtn");
  const nextBtn = document.getElementById("nextBtn");
  const resetBtn = document.getElementById("resetBtn");
  const backBtn = document.getElementById("backBtn");

  // Load current question into UI
  function loadQuestion() {
    const q = questions[index];
    questionBox.textContent = q.q;
    feedbackEl.textContent = "";
    feedbackEl.className = "wb-feedback";
    selectedOption = null;
    locked = false;

    // Build options
    optionsForm.innerHTML = "";
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "wb-btn wb-btn-ghost";
      btn.textContent = opt;
      btn.dataset.optIndex = i;
      btn.onclick = () => selectOption(i);
      optionsForm.appendChild(btn);
    });

    // Enable controls
    setDisabled(false);

    // Start timer
    startTimer();
  }

  function selectOption(i) {
    if (locked) return;
    selectedOption = i;
    // Visual selection
    [...optionsForm.children].forEach(b => {
      b.style.background = "";
      b.style.boxShadow = "";
      b.style.borderColor = "var(--glass)";
    });
    const btn = optionsForm.querySelector(`[data-opt-index="${i}"]`);
    if (btn) {
      btn.style.background = "rgba(110,231,255,0.12)";
      btn.style.boxShadow = "0 6px 18px rgba(110,231,255,0.14)";
      btn.style.borderColor = "rgba(110,231,255,0.22)";
    }
  }

  function startTimer() {
    clearInterval(timerId);
    timeLeft = 30;
    updateTimer();
    timerId = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft <= 0) {
        clearInterval(timerId);
        handleTimeout();
      }
    }, 1000);
  }

  function updateTimer() {
    timerEl.textContent = `${timeLeft}s`;
    if (timeLeft <= 5) {
      timerEl.style.color = "var(--danger)";
      timerEl.style.transform = "scale(1.05)";
      setTimeout(() => (timerEl.style.transform = ""), 150);
    } else {
      timerEl.style.color = "";
    }
  }

  function submitAnswer() {
    if (locked) return;
    if (selectedOption === null) {
      feedbackEl.textContent = "Please select an option!";
      feedbackEl.className = "wb-feedback no";
      return;
    }
    clearInterval(timerId);
    const correctIndex = questions[index].answer;
    const isCorrect = selectedOption === correctIndex;
    locked = true;

    // Visual feedback on options
    glowOptions(correctIndex, selectedOption);

    if (isCorrect) {
      feedbackEl.textContent = "✅ Correct!";
      feedbackEl.className = "wb-feedback ok";
      score += 10 + streak * 2 + Math.floor(timeLeft / 5);
      streak++;
    } else {
      feedbackEl.textContent = "❌ Incorrect! −5";
      feedbackEl.className = "wb-feedback no";
      score = Math.max(0, score - 5);
      streak = 0;
    }
    updateStats();

    // Auto-advance after short delay
    setDisabled(true);
    setTimeout(nextQuestion, 900);
  }

  function handleTimeout() {
    if (locked) return;
    locked = true;
    feedbackEl.textContent = "⏰ Time's up!";
    feedbackEl.className = "wb-feedback time";
    streak = 0;

    // Reveal correct answer
    const correctIndex = questions[index].answer;
    glowOptions(correctIndex, null);

    updateStats();
    setDisabled(true);
    setTimeout(nextQuestion, 900);
  }

  function glowOptions(correctIndex, chosenIndex) {
    [...optionsForm.children].forEach((b, i) => {
      b.style.transition = "transform .18s ease, box-shadow .18s ease, background .18s ease";
      if (i === correctIndex) {
        b.style.background = "rgba(126,240,182,0.16)";
        b.style.boxShadow = "0 10px 30px rgba(126,240,182,0.22)";
        b.style.transform = "scale(1.03)";
      } else if (chosenIndex !== null && i === chosenIndex) {
        b.style.background = "rgba(255,107,107,0.14)";
        b.style.boxShadow = "0 10px 26px rgba(255,107,107,0.22)";
        b.style.transform = "scale(0.98)";
      } else {
        b.style.opacity = "0.7";
      }
    });
  }

  function nextQuestion() {
    index = (index + 1) % questions.length;
    loadQuestion();
  }

  function resetGame() {
    clearInterval(timerId);
    index = 0;
    score = 0;
    streak = 0;
    timeLeft = 30;
    updateStats();
    loadQuestion();
  }

  function updateStats() {
    scoreEl.textContent = score;
    streakEl.textContent = streak;
  }

  function setDisabled(disabled) {
    submitBtn.disabled = disabled;
    nextBtn.disabled = disabled;
    resetBtn.disabled = false;
    [...optionsForm.children].forEach(b => (b.disabled = disabled));
  }

  // Events
  submitBtn.addEventListener("click", submitAnswer);
  nextBtn.addEventListener("click", () => {
    clearInterval(timerId);
    nextQuestion();
  });
  resetBtn.addEventListener("click", resetGame);
  backBtn.addEventListener("click", () => window.history.back());

  // Keyboard shortcuts: 1–4 select; Enter submit; N next; R reset
  document.addEventListener("keydown", (e) => {
    if (locked && e.key.toLowerCase() === "n") { nextQuestion(); return; }
    const map = { "1":0, "2":1, "3":2, "4":3 };
    if (map[e.key] !== undefined) {
      selectOption(map[e.key]);
    } else if (e.key === "Enter") {
      submitAnswer();
    } else if (e.key.toLowerCase() === "n") {
      clearInterval(timerId);
      nextQuestion();
    } else if (e.key.toLowerCase() === "r") {
      resetGame();
    }
  });

  // Init
  window.addEventListener("DOMContentLoaded", loadQuestion);
})();