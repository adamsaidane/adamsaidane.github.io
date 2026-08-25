/* ════════════════════════════════════════════════════════════════
   RENDER
   ────────────────────────────────────────────────────────────────
   Construit le HTML de chaque section à partir de SITE_DATA.
   On ne touche normalement JAMAIS ce fichier pour changer le
   contenu — seulement pour changer la STRUCTURE/mise en page.
   ════════════════════════════════════════════════════════════════ */

function chip(text) {
  return `<span class="chip">${text}</span>`;
}

function tag(text) {
  return `<span class="proj-tag">${text}</span>`;
}

function renderNav(d) {
  const links = d.nav.links.map(l => `<a href="${l.href}">${l.label}</a>`).join("\n    ");
  document.getElementById("nav").innerHTML = `
    <div class="nav-logo"> <a href="#hero">${d.nav.logo}</a></div>
    <div class="nav-links">
      ${links}
    </div>
    <a href="${d.nav.resumeFile}" download class="nav-cta">↓ Resume</a>
  `;
}

function renderHero(d) {
  const h = d.hero;
  const fields = h.terminal.fields.map(f =>
    `<div class="t-line">&nbsp;&nbsp;<span class="t-prompt">"${f.key}"</span>: <span class="t-val">"${f.value}"</span></div>`
  ).join("\n        ");
  const stats = h.stats.map(s => `
      <div class="stat-card">
        <div class="stat-num">${s.num}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join("");

  document.getElementById("hero").innerHTML = `
  <div class="hero-left reveal">
    <div class="hero-tag">${h.tag}</div>
    <h1 class="hero-name">${h.nameFirst}<br><span class="accent">${h.nameLast}</span></h1>
    <p class="hero-role">${h.role}</p>
    <p class="hero-desc">${h.desc}</p>
    <div class="hero-actions">
      <a href="${h.ctaPrimary.href}" class="btn-primary">${h.ctaPrimary.label}</a>
      <a href="${h.ctaGhost.href}" target="_blank" class="btn-ghost">${h.ctaGhost.label}</a>
    </div>
  </div>

  <div class="hero-right reveal" style="transition-delay:0.2s">
    <div class="terminal">
      <div class="terminal-bar">
        <div class="t-dot red"></div>
        <div class="t-dot yellow"></div>
        <div class="t-dot green"></div>
        <span class="terminal-title">${h.terminal.title}</span>
      </div>
      <div class="terminal-body">
        <div class="t-line"><span class="t-prompt">❯</span> <span class="t-cmd">cat</span> profile.json</div>
        <div class="t-line"><span class="t-comment">{</span></div>
        ${fields}
        <div class="t-line"><span class="t-comment">}</span></div>
        <div class="t-line"><span class="t-prompt">❯</span> <span class="t-cursor"></span></div>
      </div>
    </div>

    <div class="stat-row">${stats}
    </div>
  </div>
  `;
}

function renderAbout(d) {
  const a = d.about;
  const paragraphs = a.paragraphs.map(p => `<p>${p}</p>`).join("\n        ");
  const education = a.education.map((e, i) => `
      <div class="edu-card"${i > 0 ? ' style="margin-top:0.75rem"' : ""}>
        <div class="edu-year">${e.year}</div>
        <div class="edu-school">${e.school}</div>
        <div class="edu-degree">${e.degree}</div>
        <span class="edu-badge">${e.badge}</span>
      </div>`).join("");
  const skillGroups = a.skillGroups.map(g => `
        <div class="skill-group">
          <div class="skill-group-label">${g.label}</div>
          <div class="skill-chips">
            ${g.chips.map(chip).join("\n            ")}
          </div>
        </div>`).join("");

  document.getElementById("about").innerHTML = `
  <div class="section-inner">
    <div class="about-left reveal">
      <div class="section-label">${a.label}</div>
      <h2 class="section-title">${a.title}</h2>

      <div class="about-text">
        ${paragraphs}
      </div>

      ${education}
    </div>

    <div class="about-right reveal" style="transition-delay:0.15s">
      <div class="section-label" style="margin-top:4.75rem">Skills</div>
      <div class="skills-grid">${skillGroups}
      </div>
    </div>
  </div>
  `;
}

function renderExperience(d) {
  const e = d.experience;
  const items = e.items.map(item => `
    <div class="exp-card reveal">
      <div class="exp-header">
        <div>
          <div class="exp-company">${item.company}</div>
          <div class="exp-role">${item.role}</div>
        </div>
        <div class="exp-date">${item.date}</div>
      </div>
      <div class="exp-bullets">
        ${item.bullets.map(b => `<div class="exp-bullet">${b}</div>`).join("\n        ")}
      </div>
      <div class="exp-stack">
        ${item.stack.map(chip).join("\n        ")}
      </div>
    </div>`).join("");

  document.getElementById("experience").innerHTML = `
  <div class="section-inner">
    <div class="section-label reveal">${e.label}</div>
    <h2 class="section-title reveal">${e.title}</h2>
    ${items}
  </div>
  `;
}

function renderProjects(d) {
  const p = d.projects;
  const num = i => String(i + 1).padStart(2, "0");

  const slides = p.items.map((item, i) => `
          <article class="proj-slide">
            <div class="proj-slide-img">
                <img src="${item.image}" alt="${item.alt}" class="proj-slide-real-img">
            </div>
            <div class="proj-slide-body">
              <div class="proj-number">PROJECT_${num(i)}</div>
              <h3 class="proj-title">${item.title}</h3>
              <p class="proj-desc">${item.desc}</p>
              <div class="proj-stack">
                ${item.stack.map(tag).join("")}
              </div>
              <div class="proj-links">
                <a href="${item.github}" target="_blank" class="proj-link">
                  ${GITHUB_ICON_SVG}
                  GitHub
                </a>
              </div>
            </div>
          </article>`).join("\n");

  const dots = p.items.map((_, i) =>
    `<button class="carousel-dot${i === 0 ? " active" : ""}" data-index="${i}" aria-label="Project ${i + 1}"></button>`
  ).join("\n      ");

  document.getElementById("projects").innerHTML = `
  <div class="section-inner projects-section-inner">
    <div class="section-label reveal">${p.label}</div>
    <h2 class="section-title reveal">${p.title}</h2>

    <div class="carousel-wrapper reveal">
      <button class="carousel-btn carousel-btn--prev" id="carouselPrev" aria-label="Previous project">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <div class="carousel-track-outer" id="carouselOuter">
        <div class="carousel-track" id="carouselTrack">
${slides}
        </div>
      </div>

      <button class="carousel-btn carousel-btn--next" id="carouselNext" aria-label="Next project">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>

    <div class="carousel-dots" id="carouselDots">
      ${dots}
    </div>
  </div>
  `;
}

function renderOpenSource(d) {
  const o = d.opensource;
  const items = o.items.map(item => `
    <div class="os-card reveal">
      <div class="os-header">
        <div>
          <div class="os-project">${item.project}</div>
        </div>
        <span class="os-badge">${item.badge}</span>
      </div>
      <div class="exp-bullets">
        ${item.bullets.map(b => `<div class="exp-bullet">${b}</div>`).join("\n        ")}
      </div>
      <div class="proj-links" style="margin-top:1.25rem">
        <a href="${item.link.href}" target="_blank" class="proj-link">
          ${GITHUB_ICON_SVG}
          ${item.link.label}
        </a>
      </div>
    </div>`).join("");

  document.getElementById("opensource").innerHTML = `
  <div class="section-inner">
    <div class="section-label reveal">${o.label}</div>
    <h2 class="section-title reveal">${o.title}</h2>
    ${items}
  </div>
  `;
}

function renderCertifications(d) {
  const c = d.certifications;
  const items = c.items.map((item, i) => `
      <div class="cert-card reveal"${i > 0 ? ` style="transition-delay:${i * 0.1}s"` : ""}>
        <div class="cert-issuer-row">
          <span class="cert-issuer">${item.issuer}</span>
          <span class="cert-year">${item.year}</span>
        </div>
        <div class="cert-name">${item.name}</div>
        <p class="cert-desc">${item.desc}</p>
        <div class="cert-tags">
          ${item.tags.map(tag).join("\n          ")}
        </div>
      </div>`).join("");

  document.getElementById("certifications").innerHTML = `
  <div class="section-inner">
    <div class="section-label reveal">${c.label}</div>
    <h2 class="section-title reveal">${c.title}</h2>
    <div class="cert-grid">${items}
    </div>
  </div>
  `;
}

function renderContact(d) {
  const c = d.contact;
  document.getElementById("contact").innerHTML = `
  <div class="section-inner">
    <div class="section-label reveal" style="justify-content:center">${c.label}</div>
    <h2 class="contact-tagline reveal">${c.tagline}</h2>
    <p class="contact-sub reveal">${c.sub}</p>
    <div class="contact-links reveal">
      <a href="mailto:${c.email}" class="contact-link-card">
        <span class="contact-link-icon">✉</span>
        <div class="contact-link-text">
          <div class="contact-link-label">Email</div>
          <div class="contact-link-val">${c.email}</div>
        </div>
      </a>
      <a href="${c.phoneHref}" class="contact-link-card">
        <span class="contact-link-icon">📞</span>
        <div class="contact-link-text">
          <div class="contact-link-label">Phone</div>
          <div class="contact-link-val">${c.phone}</div>
        </div>
      </a>
      <a href="${c.linkedin.url}" class="contact-link-card" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn Logo" width="20" style="filter: invert(1);">
        <div class="contact-link-text">
          <div class="contact-link-label">LinkedIn</div>
          <div class="contact-link-val">${c.linkedin.label}</div>
        </div>
      </a>
      <a href="${c.github.url}" target="_blank" class="contact-link-card">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" width="20" style="filter: invert(1);">
        <div class="contact-link-text">
          <div class="contact-link-label">GitHub</div>
          <div class="contact-link-val">${c.github.label}</div>
        </div>
      </a>
      <a href="${c.resumeFile}" download class="contact-link-card">
        <span class="contact-link-icon">↓</span>
        <div class="contact-link-text">
          <div class="contact-link-label">Resume</div>
          <div class="contact-link-val">Download CV</div>
        </div>
      </a>
    </div>
    <a href="mailto:${c.email}" class="btn-primary reveal">${c.ctaLabel}</a>
  </div>
  `;
}

function renderFooter(d) {
  document.getElementById("footer").innerHTML = `<p>${d.footer.text}</p>`;
}

function renderSite(d) {
  renderNav(d);
  renderHero(d);
  renderAbout(d);
  renderExperience(d);
  renderProjects(d);
  renderOpenSource(d);
  renderCertifications(d);
  renderContact(d);
  renderFooter(d);
}

renderSite(SITE_DATA);
