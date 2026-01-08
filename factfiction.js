// Fact or Fiction — interactive logic
(() => {
  const statements = [
    { text: "The Great Wall of China is visible from space.", isFact: false },
    { text: "Sharks are mammals.", isFact: false },
    { text: "The Eiffel Tower can grow taller in summer.", isFact: true },
    { text: "Humans share 50% of their DNA with bananas.", isFact: true },
    { text: "Lightning never strikes the same place twice.", isFact: false },
    { text: "Goldfish have a memory span of only three seconds.", isFact: false },
    { text: "Octopuses have three hearts.", isFact: true },
    { text: "Mount Everest is the tallest mountain on Earth.", isFact: true },
    { text: "Honey never spoils.", isFact: true },
    { text: "Bats are blind.", isFact: false },
    { text: "The Great Wall of China is visible from space.", isFact: false },
    { text: "Sharks are mammals.", isFact: false },
    { text: "The Eiffel Tower can grow taller in summer.", isFact: true },
    { text: "Humans share 50% of their DNA with bananas.", isFact: true },
    { text: "Lightning never strikes the same place twice.", isFact: false },
    { text: "Goldfish have a memory span of only three seconds.", isFact: false },
    { text: "Octopuses have three hearts.", isFact: true },
    { text: "Mount Everest is the tallest mountain on Earth.", isFact: true },
    { text: "Honey never spoils.", isFact: true },
    { text: "Bats are blind.", isFact: false },
    { text: "The Earth is flat.", isFact: false },
    { text: "Water boils at 100 degrees Celsius at sea level.", isFact: true },
    { text: "The moon is made of cheese.", isFact: false },
    { text: "Albert Einstein invented the telephone.", isFact: false },
    { text: "The human body has 206 bones.", isFact: true },
    { text: "Cats can see in complete darkness.", isFact: false },
    { text: "The Nile is the longest river in the world.", isFact: true },
    { text: "Penguins live in the Arctic.", isFact: false },
    { text: "The speed of light is faster than sound.", isFact: true },
    { text: "Diamonds are made from coal.", isFact: false },
    { text: "The first Olympics were held in 1896.", isFact: true },
    { text: "A tomato is a fruit.", isFact: true },
    { text: "The capital of Australia is Sydney.", isFact: false },
    { text: "The sun revolves around the Earth.", isFact: false },
    { text: "Bananas grow on trees.", isFact: true },
    { text: "The Titanic sank in 1912.", isFact: true },
    { text: "Giraffes have blue tongues.", isFact: true },
    { text: "The Sahara is the hottest desert.", isFact: true },
    { text: "Owls can rotate their heads 360 degrees.", isFact: false },
    { text: "The chemical symbol for gold is Au.", isFact: true },
    { text: "A group of flamingos is called a flamboyance.", isFact: true },
    { text: "The moon has its own light.", isFact: false },
    { text: "The first computer was ENIAC.", isFact: true },
    { text: "Strawberries are berries.", isFact: false },
    { text: "The Earth is the only planet with life.", isFact: false },
    { text: "Honeybees communicate with dances.", isFact: true },
    { text: "The Statue of Liberty is in New York.", isFact: true },
    { text: "A leap year occurs every 4 years.", isFact: true },
    { text: "Vampire bats drink blood.", isFact: true },
    { text: "The Pacific Ocean is the largest.", isFact: true },
    { text: "Cats have nine lives.", isFact: false },
    { text: "The first man on the moon was Buzz Aldrin.", isFact: false },
    { text: "The human heart beats about 100,000 times a day.", isFact: true },
    { text: "A group of owls is called a parliament.", isFact: true },
    { text: "The color of the sky is blue due to oxygen.", isFact: false },
    { text: "The longest war was the Hundred Years' War.", isFact: true },
    { text: "Crocodiles cry real tears.", isFact: false },
    { text: "The first telephone was by Bell.", isFact: true },
    { text: "A square has three sides.", isFact: false },
    { text: "The capital of Canada is Ottawa.", isFact: true },
    { text: "A group of fish is called a school.", isFact: true },
    { text: "The sun is a star.", isFact: true },
    { text: "A camel's hump stores fat.", isFact: true },
    { text: "The first president of the US was Abraham Lincoln.", isFact: false },
    { text: "A group of lions is called a pride.", isFact: true },
    { text: "The Earth is round.", isFact: true },
    { text: "The chemical symbol for water is H2O.", isFact: true },
    { text: "A group of crows is called a murder.", isFact: true },
    { text: "The moon is larger than the Earth.", isFact: false },
    { text: "The first airplane flight was by Wright brothers.", isFact: true },
    { text: "A group of bees is called a swarm.", isFact: true },
    { text: "The capital of Russia is Moscow.", isFact: true },
    { text: "The human body has five senses.", isFact: true },
    { text: "A group of elephants is called a herd.", isFact: true },
    { text: "The sun rises in the east.", isFact: true },
    { text: "A group of frogs is called an army.", isFact: true },
    { text: "The capital of Egypt is Cairo.", isFact: true },
    { text: "A group of geese is called a gaggle.", isFact: true },
    { text: "The Earth is the third planet from the Sun.", isFact: true },
    { text: "A group of hyenas is called a cackle.", isFact: true },
    { text: "The capital of India is New Delhi.", isFact: true },
    { text: "A group of jellyfish is called a smack.", isFact: true },
    { text: "The moon orbits the Earth.", isFact: true },
    { text: "A group of kangaroos is called a mob.", isFact: true },
    { text: "The capital of China is Beijing.", isFact: true },
    { text: "A group of leopards is called a leap.", isFact: true },
    { text: "The sun is yellow.", isFact: false },
    { text: "A group of monkeys is called a troop.", isFact: true },
    { text: "The capital of France is Paris.", isFact: true },
    { text: "A group of peacocks is called an ostentation.", isFact: true },
    { text: "The Earth has one moon.", isFact: true },
    { text: "A group of penguins is called a waddle.", isFact: true },
    { text: "The capital of Germany is Berlin.", isFact: true },
    { text: "A group of ravens is called an unkindness.", isFact: true },
    { text: "The sun sets in the west.", isFact: true },
    { text: "A group of sharks is called a shiver.", isFact: true },
    { text: "The capital of Italy is Rome.", isFact: true },
    { text: "A group of squirrels is called a dray.", isFact: true },
    { text: "The moon is made of rock.", isFact: true },
    { text: "A group of turtles is called a bale.", isFact: true },
    { text: "The capital of Spain is Madrid.", isFact: true },
    { text: "A group of whales is called a pod.", isFact: true },
    { text: "A group of zebras is called a dazzle.", isFact: true },
    { text: "The capital of the United Kingdom is London.", isFact: true },
    { text: "A group of ants is called a colony.", isFact: true },
    { text: "The sun is a planet.", isFact: false },
    { text: "A group of butterflies is called a kaleidoscope.", isFact: true },
    { text: "The capital of Mexico is Mexico City.", isFact: true },
    { text: "A group of dolphins is called a pod.", isFact: true },
    { text: "The moon has gravity.", isFact: true },
    { text: "A group of eagles is called a convocation.", isFact: true },
    { text: "The capital of Argentina is Buenos Aires.", isFact: true },
    { text: "A group of foxes is called a skulk.", isFact: true },
    { text: "The Earth rotates on its axis.", isFact: true },
    { text: "A group of giraffes is called a tower.", isFact: true },
    { text: "The capital of South Korea is Seoul.", isFact: true },
    { text: "A group of hawks is called a cast.", isFact: true },
    { text: "The sun provides light to Earth.", isFact: true },
    { text: "A group of iguanas is called a mess.", isFact: true },
    { text: "The capital of Thailand is Bangkok.", isFact: true },
    { text: "A group of jackals is called a pack.", isFact: true },
    { text: "The moon reflects sunlight.", isFact: true },
    { text: "A group of koalas is called a colony.", isFact: true },
    { text: "The capital of Turkey is Ankara.", isFact: true },
    { text: "A group of llamas is called a herd.", isFact: true },
    { text: "The Earth has an atmosphere.", isFact: true },
    { text: "A group of meerkats is called a mob.", isFact: true },
    { text: "The capital of Vietnam is Hanoi.", isFact: true },
    { text: "A group of otters is called a romp.", isFact: true },
    { text: "The sun is hotter than the Earth.", isFact: true },
    { text: "A group of parrots is called a pandemonium.", isFact: true },
    { text: "The capital of Indonesia is Jakarta.", isFact: true },
    { text: "A group of quails is called a covey.", isFact: true },
    { text: "The moon affects tides on Earth.", isFact: true },
    { text: "A group of rhinos is called a crash.", isFact: true },
    { text: "The capital of Saudi Arabia is Riyadh.", isFact: true },
    { text: "A group of starlings is called a murmuration.", isFact: true },
    { text: "The Earth is older than the sun.", isFact: false },
    { text: "A group of toads is called a knot.", isFact: true },
    { text: "The capital of Nigeria is Abuja.", isFact: true },
    { text: "A group of vultures is called a wake.", isFact: true },
    { text: "The sun rises every day.", isFact: true },
    { text: "A group of walruses is called a herd.", isFact: true },
    { text: "The capital of South Africa is Pretoria.", isFact: false },
    { text: "A group of yaks is called a herd.", isFact: true },
    { text: "The moon is visible at night.", isFact: true },
    { text: "A group of alligators is called a congregation.", isFact: true },
    { text: "The capital of Kenya is Nairobi.", isFact: true },
    { text: "A group of badgers is called a cete.", isFact: true },
    { text: "The Earth has continents.", isFact: true },
    { text: "A group of boars is called a sounder.", isFact: true },
    { text: "The capital of Colombia is Bogota.", isFact: true },
    { text: "A group of cobras is called a quiver.", isFact: true },
    { text: "The sun has spots.", isFact: true },
    { text: "A group of deer is called a herd.", isFact: true },
    { text: "The capital of Peru is Lima.", isFact: true },
    { text: "A group of emus is called a mob.", isFact: true },
    { text: "The moon has craters.", isFact: true },
    { text: "A group of ferrets is called a business.", isFact: true },
    { text: "The capital of Chile is Santiago.", isFact: true },
    { text: "A group of gazelles is called a herd.", isFact: true },
    { text: "The Earth orbits the sun.", isFact: true },
    { text: "A group of herons is called a siege.", isFact: true },
    { text: "The capital of Malaysia is Kuala Lumpur.", isFact: true },
    { text: "A group of ibises is called a congregation.", isFact: true },
    { text: "The sun is a gas giant.", isFact: false },
    { text: "A group of jaguars is called a shadow.", isFact: true },
    { text: "The capital of Philippines is Manila.", isFact: true },
    { text: "A group of kiwis is called a colony.", isFact: true },
    { text: "The moon is tidally locked to Earth.", isFact: true },
    { text: "A group of lobsters is called a risk.", isFact: true },
    { text: "The capital of Pakistan is Islamabad.", isFact: true },
    { text: "A group of minks is called a richness.", isFact: true },
    { text: "The Earth has a magnetic field.", isFact: true },
    { text: "A group of newts is called a knot.", isFact: true },
    { text: "The capital of Bangladesh is Dhaka.", isFact: true },
    { text: "A group of ostriches is called a flock.", isFact: true },
    { text: "The sun is composed of hydrogen and helium.", isFact: true },
    { text: "A group of pandas is called an embarrassment.", isFact: true },
    { text: "The capital of Iran is Tehran.", isFact: true },
    { text: "A group of rabbits is called a warren.", isFact: true },
    { text: "The moon's surface is covered in dust.", isFact: true },
    { text: "A group of seals is called a pod.", isFact: true },
    { text: "The capital of Iraq is Baghdad.", isFact: true },
    { text: "A group of tigers is called a streak.", isFact: true },
    { text: "The Earth has seven continents.", isFact: true },
    { text: "A group of urchins is called a prickle.", isFact: true },
    { text: "The capital of Afghanistan is Kabul.", isFact: true },
    { text: "A group of vipers is called a nest.", isFact: true },
    { text: "The sun will eventually become a black hole.", isFact: false },
    { text: "A group of wasps is called a nest.", isFact: true },
    { text: "The capital of Yemen is Sana'a.", isFact: true },
    { text: "A group of x-rays is called a battery.", isFact: false },
    { text: "The moon has no atmosphere.", isFact: true },
    { text: "A group of yew trees is called a grove.", isFact: true },
    { text: "The capital of Zimbabwe is Harare.", isFact: true },
    { text: "A group of zebu is called a herd.", isFact: true },
    { text: "The sun's core temperature is about 15 million degrees.", isFact: true },
    { text: "A group of aardvarks is called a colony.", isFact: true },
    { text: "The capital of Albania is Tirana.", isFact: true },
    { text: "A group of baboons is called a troop.", isFact: true },
    { text: "The Earth is approximately 4.5 billion years old.", isFact: true },
    { text: "A group of cheetahs is called a coalition.", isFact: true },
    { text: "The capital of Algeria is Algiers.", isFact: true },
    { text: "A group of dingoes is called a pack.", isFact: true },
    { text: "The moon's diameter is about 3,474 km.", isFact: true },
    { text: "A group of elks is called a gang.", isFact: true },
    { text: "The capital of Angola is Luanda.", isFact: true },
    { text: "A group of falcons is called a cast.", isFact: true },
    { text: "The sun's light takes 8 minutes to reach Earth.", isFact: true },
    { text: "A group of gorillas is called a troop.", isFact: true },
    { text: "The capital of Armenia is Yerevan.", isFact: true },
    { text: "A group of hippos is called a bloat.", isFact: true },
    { text: "The Earth has a molten core.", isFact: true },
    { text: "A group of impalas is called a herd.", isFact: true },
    { text: "The capital of Azerbaijan is Baku.", isFact: true },
    { text: "A group of jackrabbits is called a drove.", isFact: true },
    { text: "The moon causes eclipses.", isFact: true },
    { text: "A group of koels is called a brood.", isFact: true },
    { text: "The capital of Bahrain is Manama.", isFact: true },
    { text: "A group of lemurs is called a conspiracy.", isFact: true },
    { text: "The sun is the center of the solar system.", isFact: true },
    { text: "A group of macaques is called a troop.", isFact: true },
    { text: "The capital of Belarus is Minsk.", isFact: true },
    { text: "A group of narwhals is called a pod.", isFact: true },
    { text: "The Earth has polar ice caps.", isFact: true },
    { text: "A group of ocelots is called a clowder.", isFact: true },
    { text: "The capital of Bhutan is Thimphu.", isFact: true },
    { text: "A group of porcupines is called a prickle.", isFact: true },

    
  ];

  // State
  let index = 0;
  let score = 0;
  let streak = 0;
  let timeLeft = 30;
  let timerId = null;
  let revealed = false;

  // Elements
  const statementBox = document.getElementById('statementBox');
  const feedbackEl = document.getElementById('feedback');
  const scoreEl = document.getElementById('score');
  const streakEl = document.getElementById('streak');
  const timerEl = document.getElementById('timer');
  const factBtn = document.getElementById('factBtn');
  const fictionBtn = document.getElementById('fictionBtn');
  const nextBtn = document.getElementById('nextBtn');
  const revealBtn = document.getElementById('revealBtn');
  const resetBtn = document.getElementById('resetBtn');
  const backBtn = document.getElementById('backBtn');

  // Helpers
  function pickStatement(i = null) {
    if (typeof i === 'number') index = i % statements.length;
    statementBox.textContent = statements[index].text;
    statementBox.classList.remove('reveal');
    revealed = false;
    feedbackEl.textContent = '';
    feedbackEl.className = 'wb-feedback';
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
        handleAnswer(null, true);
      }
    }, 1000);
  }

  function updateTimer() {
    timerEl.textContent = `${timeLeft}s`;
    // subtle pulse when low
    if (timeLeft <= 5) {
      timerEl.style.color = 'var(--danger)';
      timerEl.style.transform = 'scale(1.04)';
      setTimeout(() => (timerEl.style.transform = ''), 200);
    } else {
      timerEl.style.color = '';
    }
  }

  function handleAnswer(choice, timeout = false) {
    // choice: true = Fact, false = Fiction, null = timeout
    clearInterval(timerId);
    const correct = choice === statements[index].isFact;
    if (timeout) {
      feedbackEl.textContent = "⏰ Time's up!";
      feedbackEl.classList.add('time');
      streak = 0;
    } else if (choice === null) {
      feedbackEl.textContent = "❌ Incorrect!";
      feedbackEl.classList.add('no');
      streak = 0;
    } else if (correct) {
      feedbackEl.textContent = "✅ Correct!";
      feedbackEl.classList.add('ok');
      score += 10 + Math.max(0, streak) * 2 + Math.floor(timeLeft / 5);
      streak++;
    } else {
      feedbackEl.textContent = "❌ Incorrect!";
      feedbackEl.classList.add('no');
      streak = 0;
    }
    // Update UI
    scoreEl.textContent = score;
    streakEl.textContent = streak;
    // show correct answer briefly
    statementBox.classList.add('reveal');
    revealed = true;
    // auto-advance
    setTimeout(() => {
      index = (index + 1) % statements.length;
      pickStatement(index);
      startTimer();
    }, 1400);
  }

  function revealAnswer() {
    if (revealed) return;
    // small penalty
    score = Math.max(0, score - 5);
    scoreEl.textContent = score;
    statementBox.classList.add('reveal');
    feedbackEl.textContent = `Answer: ${statements[index].isFact ? 'Fact' : 'Fiction'}`;
    feedbackEl.classList.add('no');
    revealed = true;
    clearInterval(timerId);
    setTimeout(() => {
      index = (index + 1) % statements.length;
      pickStatement(index);
      startTimer();
    }, 1400);
  }

  function nextStatement() {
    clearInterval(timerId);
    index = (index + 1) % statements.length;
    pickStatement(index);
    startTimer();
  }

  function resetGame() {
    clearInterval(timerId);
    index = 0;
    score = 0;
    streak = 0;
    scoreEl.textContent = score;
    streakEl.textContent = streak;
    pickStatement(index);
    startTimer();
  }

  // Event bindings
  factBtn.addEventListener('click', () => handleAnswer(true));
  fictionBtn.addEventListener('click', () => handleAnswer(false));
  nextBtn.addEventListener('click', nextStatement);
  revealBtn.addEventListener('click', revealAnswer);
  resetBtn.addEventListener('click', resetGame);
  backBtn.addEventListener('click', () => window.history.back());

  // Keyboard shortcuts: F = Fact, J = Fiction, N = Next, R = Reveal, Space = submit last
  document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') { factBtn.focus(); factBtn.click(); }
    if (e.key === 'j' || e.key === 'J') { fictionBtn.focus(); fictionBtn.click(); }
    if (e.key === 'n' || e.key === 'N') { nextBtn.click(); }
    if (e.key === 'r' || e.key === 'R') { revealBtn.click(); }
    if (e.key === 'Escape') { resetGame(); }
  });

  // Initialize
  window.addEventListener('DOMContentLoaded', () => {
    pickStatement(index);
    startTimer();
  });

  // Expose for debugging (optional)
  window._factfiction = {
    getState: () => ({ index, score, streak, timeLeft, revealed }),
    reset: resetGame
  };
})();