// ---------- Typewriter ----------
const phrases = [
  "Hi, the name's Iman",
  "AI & Optimization Researcher",
  "Data Engineer",
  "Ph.D. Candidate",
  "I build attention-based systems",
];
const typeEl = document.getElementById("typewriter");
let pi = 0,
  ci = 0,
  deleting = false;

function typeLoop() {
  const current = phrases[pi];
  if (!deleting) {
    typeEl.textContent = current.slice(0, ++ci);
    if (ci === current.length) {
      deleting = true;
      return setTimeout(typeLoop, 1800);
    }
  } else {
    typeEl.textContent = current.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 80);
}
typeLoop();

// ---------- Skills ----------
const skills = [
  { name: "Python", icon: "devicon-python-plain colored", lvl: 95 },
  { name: "PyTorch", icon: "devicon-pytorch-original colored", lvl: 92 },
  { name: "TensorFlow", icon: "devicon-tensorflow-original colored", lvl: 82 },
  { name: "Keras", icon: "devicon-keras-plain colored", lvl: 80 },
  { name: "scikit-learn", icon: "devicon-scikitlearn-plain colored", lvl: 90 },
  { name: "Pandas", icon: "devicon-pandas-original colored", lvl: 92 },
  { name: "NumPy", icon: "devicon-numpy-original colored", lvl: 90 },
  { name: "R", icon: "devicon-r-original colored", lvl: 70 },
  { name: "MATLAB", icon: "devicon-matlab-plain colored", lvl: 75 },
  { name: "SQL", icon: "devicon-mysql-original colored", lvl: 75 },
  { name: "PySpark", icon: "devicon-apachespark-original colored", lvl: 65 },
  { name: "Git", icon: "devicon-git-plain colored", lvl: 85 },
  { name: "GCP", icon: "devicon-googlecloud-plain colored", lvl: 70 },
  { name: "Jupyter", icon: "devicon-jupyter-plain colored", lvl: 85 },
  { name: "Hugging Face", txt: "🤗", lvl: 85 },
  { name: "Gurobi", txt: "Gℝ", lvl: 88 },
];

const grid = document.getElementById("skillsGrid");
grid.innerHTML = skills
  .map((s) => {
    const inner = s.icon
      ? `<i class="${s.icon}"></i>`
      : `<span class="skill__txt">${s.txt}</span>`;
    return `<div class="skill" title="${s.name}">
      ${inner}
      <span class="skill__name">${s.name}</span>
      <div class="skill__overlay">${s.lvl}%</div>
    </div>`;
  })
  .join("");

// ---------- Contact form (mailto) ----------
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(data.get("subject") || "Portfolio contact");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
  );
  window.location.href = `mailto:iman.kazemian@wayne.edu?subject=${subject}&body=${body}`;
});

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll(".about, .xp-card, .proj-card, .skill, .contact__form");
revealEls.forEach((el) => el.classList.add("reveal"));
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, root: document.querySelector(".snap") }
);
revealEls.forEach((el) => observer.observe(el));
