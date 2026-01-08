/* wordbuilder.js
   Stylish, complete, and error-free game logic with animations and hints.
*/
(() => {
  // Word bank (expandable)
  const WORDS = [
    "client","domain","server","object","module","script","syntax","method","token","logic",
    "vector","matrix","signal","router","kernel","thread","buffer","packet","browser","cache",
    "planet","galaxy","fusion","molecule","protein","enzyme","culture","history","theory","system"
    ,"neuron","oxygen","python","gravity","matrix","atom","energy","planet","culture","history","science","knowledge","logic","theory","data","signal","orbit","fusion",
     "galaxy","neuron","oxygen","python","matrix","atom","energy","planet","culture",
   "history","science","knowledge","logic","theory","signal","orbit","fusion",
   "quantum","gravity","network","algorithm","data","syntax","module","variable",
  "protein","enzyme","battery","circuit","nanotech","ecosystem","archive","pixel",
  "browser","server","client","compass","magnet","delta","vector","radius","pathology","psychology","educational","clinical","social","sports","business","forensic","military","respective","comparative",
  "international","binocular", "specimen","biotechnology","photosynthesis","observe","stethoscope","telescope","telephone","television","word","builder","xylem","phloem","circulation",
   "atom","bio","chrono","crypto","data","eco","geo","hydro","iso","meta",
    "nano","neuro","opt","photo","quant","rad","therm","astro","logic","graph",
    "code","script","matrix","vector","pixel","signal","circuit","sensor","probe","orbit",
    "planet","galaxy","fusion","fission","molecule","protein","enzyme","cell","genome","virus",
    "culture","history","theory","model","system","network","server","client","browser","cache",
    "array","matrix","tensor","scalar","vector","function","method","module","package","library",
    "algorithm","protocol","cipher","hash","token","session","stream","queue","stack","buffer",
    "kernel","process","thread","daemon","agent","node","cluster","grid","cloud","edge",
    "battery","capacitor","resistor","inductor","transistor","diode","sensor","actuator","motor","servo",
    "engine","turbine","propeller","drone","robot","autonomy","control","feedback","signal","noise",
    "spectrum","wavelength","frequency","amplitude","phase","modem","router","gateway","bridge","switch",
    "lens","mirror","prism","filter","sensor","camera","microphone","speaker","display","panel",
    "tablet","phone","laptop","desktop","console","controller","joystick","keyboard","mouse","trackpad",
    "battery","charger","adapter","port","connector","cable","wire","fiber","optic","antenna",
    "map","chart","graph","table","index","catalog","archive","record","log","trace",
    "query","search","index","sort","filter","group","aggregate","join","merge","split",
    "train","test","validate","deploy","build","compile","link","run","execute","debug",
    "trace","profile","optimize","benchmark","scale","shard","replicate","backup","restore","migrate",
    "encrypt","decrypt","sign","verify","authorize","authenticate","tokenize","sanitize","validate","escape",
    "compose","publish","subscribe","broadcast","multicast","unicast","stream","buffer","chunk","packet",
    "frame","header","payload","checksum","crc","parity","latency","throughput","bandwidth","jitter",
    "cache","ttl","expire","refresh","invalidate","prefetch","lazy","eager","sync","async",
    "promise","callback","handler","listener","observer","subscriber","publisher","dispatcher","router","controller",
    "model","view","controller","component","widget","element","node","tree","dom","vdom",
    "state","prop","context","hook","effect","reducer","store","action","dispatch","middleware",
    "route","path","url","query","param","hash","anchor","fragment","redirect","rewrite",
    "session","cookie","local","storage","indexdb","sqlite","postgres","mysql","mongo","redis",
    "queue","topic","channel","exchange","broker","consumer","producer","worker","job","task",
    "cron","schedule","timer","alarm","event","signal","interrupt","handler","callback","listener",
    "agent","bot","assistant","companion","assistant","copilot","guide","tutor","mentor","coach","lesson","quiz","puzzle","challenge","game","match","round","level","stage","checkpoint",
    "score","rank","leader","board","badge","reward","achievement","unlock","progress","streak",
    "hint","skip","reset","retry","continue","pause","resume","start","stop","end",
    "input","output","stdin","stdout","stderr","log","trace","debug","info","warn",
    "error","fatal","exception","throw","catch","try","finally","assert","test","spec",
    "case","suite","fixture","mock","stub","spy","fake","real","integration","unit",
    "e2e","acceptance","regression","smoke","sanity","performance","load","stress","soak","spike",
    "ux","ui","design","prototype","wireframe","mockup","style","theme","palette","typography",
    "font","icon","illustration","image","asset","sprite","sprite","svg","png","jpeg",
    "gif","webp","avif","video","audio","stream","codec","container","format","bitrate",
    "resolution","aspect","ratio","frame","rate","fps","keyframe","interpolate","render","compose",
    "shader","pipeline","gpu","cpu","thread","core","cache","register","instruction","opcode",
    "compiler","interpreter","vm","runtime","garbage","collector","allocator","heap","stack","pointer",
    "reference","value","immutable","mutable","const","let","var","type","interface","class",
    "object","instance","prototype","inherit","extend","mix","mixin","trait","module","package",
    "namespace","scope","closure","lambda","arrow","function","method","property","field","attribute",
    "annotation","decorator","meta","reflect","introspect","serialize","deserialize","marshal","unmarshal","encode",
    "decode","compress","decompress","zip","gzip","brotli","lz4","snappy","delta","diff",
    "patch","merge","rebase","commit","branch","tag","release","changelog","issue","ticket",
    "bug","feature","task","epic","sprint","kanban","scrum","retro","planning","standup",
    "meeting","agenda","notes","minutes","action","owner","assignee","review","approve","merge",
    "deploy","release","rollback","hotfix","patch","maintenance","upgrade","downtime","uptime","sla",
    "monitor","alert","notify","incident","postmortem","root","cause","analysis","mitigate","remediate",
    "policy","governance","compliance","audit","report","metric","kpi","okrs","goal","objective",
    "strategy","tactic","roadmap","vision","mission","value","principle","ethic","culture","team",
    "org","company","startup","scaleup","enterprise","product","market","customer","user","stakeholder",
    "persona","journey","funnel","acquisition","activation","retention","referral","revenue","monetize","pricing",
    "subscription","plan","tier","trial","freemium","premium","enterprise","license","agreement","contract",
    "invoice","billing","payment","gateway","checkout","cart","catalog","inventory","sku","barcode",
"warehouse","logistics","supply","chain","vendor","supplier","partner","reseller","distributor","retailer",
    "wholesale","retail","omnichannel","pos","checkout","fulfillment","shipping","tracking","carrier","label",
    "manifest","customs","duties","tax","vat","gst","compliance","regulation","standard","certification"
  ];

  const TIME_PER_WORD = 30; // seconds

  // DOM refs
  const elScrambled = document.getElementById("wbScrambled");
  const elInput = document.getElementById("wbInput");
  const elForm = document.getElementById("wbForm");
  const elNext = document.getElementById("wbNext");
  const elHint = document.getElementById("wbHint");
  const elReset = document.getElementById("wbReset");
  const elFeedback = document.getElementById("wbFeedback");
  const elScore = document.getElementById("wbScore");
  const elStreak = document.getElementById("wbStreak");
  const elTime = document.getElementById("wbTime");
  const elBack = document.getElementById("wbBack");

  // State
  let current = "";
  let scrambled = "";
  let score = 0;
  let streak = 0;
  let timeLeft = TIME_PER_WORD;
  let timerId = null;
  let revealedIndexes = new Set();

  // Helpers
  function randIndex(max) { return Math.floor(Math.random() * max); }

  function shuffleWord(word) {
    const arr = word.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const result = arr.join("");
    return result === word ? shuffleWord(word) : result;
  }

  function spaced(str) { return str.split("").join(" "); }

  function setFeedback(msg = "", cls = "") {
    elFeedback.className = "wb-feedback";
    if (cls) elFeedback.classList.add(cls);
    elFeedback.textContent = msg;
  }

  function updateHUD() {
    elScore.textContent = String(score);
    elStreak.textContent = String(streak);
    elTime.textContent = `${timeLeft}s`;
  }

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  function startTimer() {
    stopTimer();
    timeLeft = TIME_PER_WORD;
    updateHUD();
    timerId = setInterval(() => {
      timeLeft--;
      updateHUD();
      if (timeLeft <= 0) {
        stopTimer();
        handleTimeout();
      }
    }, 1000);
  }

  function pickWord() {
    revealedIndexes.clear();
    current = WORDS[randIndex(WORDS.length)];
    scrambled = shuffleWord(current);
    elScrambled.textContent = spaced(scrambled);
    elScrambled.classList.remove("reveal");
    elInput.value = "";
    setFeedback("");
    startTimer();
    elInput.focus();
  }

  function revealLetter() {
    if (!current) return;
    const unrevealed = [];
    for (let i = 0; i < current.length; i++) {
      if (!revealedIndexes.has(i)) unrevealed.push(i);
    }
    if (unrevealed.length === 0) return;

    const idx = unrevealed[randIndex(unrevealed.length)];
    revealedIndexes.add(idx);

    const sArr = scrambled.split("");
    const target = current[idx];
    const from = sArr.indexOf(target);
    if (from !== -1 && from !== idx) {
      [sArr[from], sArr[idx]] = [sArr[idx], sArr[from]];
    } else {
      sArr[idx] = target;
    }
    scrambled = sArr.join("");
    elScrambled.textContent = spaced(scrambled);
    elScrambled.classList.add("reveal");

    score = Math.max(0, score - 8);
    setFeedback(`Hint used — letter revealed. (-8)`, "no");
    updateHUD();
  }

  function handleSubmit(guess) {
    if (!current) return;
    const answer = (guess || "").trim().toLowerCase();
    if (!answer) {
      setFeedback("Please type an answer.", "no");
      return;
    }

    stopTimer();

    if (answer === current.toLowerCase()) {
      const base = 100;
      const timeBonus = Math.max(0, timeLeft) * 2;
      const streakMult = 1 + Math.min(streak, 5) * 0.15;
      const hintPenalty = revealedIndexes.size > 0 ? 6 : 0;
      const gained = Math.round((base + timeBonus) * streakMult) - hintPenalty;

      score += Math.max(0, gained);
      streak += 1;
      setFeedback(`Correct! +${Math.max(0, gained)} points.`, "ok");
      updateHUD();

      elScrambled.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.06)" }, { transform: "scale(1)" }],
        { duration: 420, easing: "ease-out" }
      );
      setTimeout(pickWord, 900);
    } else {
      score = Math.max(0, score - 20);
      streak = 0;
      setFeedback(`Incorrect. The word was "${current}".`, "no");
      updateHUD();

      elScrambled.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }],
        { duration: 420, easing: "ease-in-out" }
      );
      setTimeout(pickWord, 900);
    }
  }

  function handleTimeout() {
    score = Math.max(0, score - 10);
    streak = 0;
    setFeedback(`Time's up! The word was "${current}".`, "time");
    updateHUD();
    setTimeout(pickWord, 900);
  }

  // Event bindings
  elForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmit(elInput.value);
  });

  elNext.addEventListener("click", () => {
    if (!current) return;
    stopTimer();
    score = Math.max(0, score - 5);
    streak = 0;
    setFeedback(`Skipped. The word was "${current}". (-5)`, "no");
    updateHUD();
    setTimeout(pickWord, 600);
  });

  elHint.addEventListener("click", () => {
    revealLetter();
    elInput.focus();
  });

  elReset.addEventListener("click", () => {
    stopTimer();
    score = 0;
    streak = 0;
    setFeedback("Game reset.");
    updateHUD();
    setTimeout(pickWord, 300);
  });

  if (elBack) {
    elBack.addEventListener("click", () => {
      window.location.href = "games.html";
    });
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    updateHUD();
    pickWord();
  });
})();