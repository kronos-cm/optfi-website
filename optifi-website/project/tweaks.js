/* BriefPro — plain JS Tweaks panel + accent/headline switching */
(function(){
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "headline": "speed",
    "accent": "emerald",
    "primaryCta": "Live‑Demo buchen"
  }/*EDITMODE-END*/;

  let state = { ...TWEAK_DEFAULTS };
  let panelOpen = false;

  const HEADLINES = {
    de: {
      speed:    { h: 'Vom Diktat zum freigegebenen<br /><span class="display-accent">Arztbrief.</span> In Minuten.',
                  s: 'BriefPro ist der einzige Arztbrief-Assistent mit echter Rollenfreigabe. Sprechen Sie wie immer — wir liefern den 12‑Sektionen‑Entwurf, Sie behalten die medizinische Verantwortung.' },
      outcome:  { h: 'Drei Stunden Doku-Arbeit.<br /><span class="display-accent">Auf zwanzig Minuten.</span>',
                  s: 'BriefPro ist der einzige Arztbrief-Assistent mit echter Rollenfreigabe. Sprechen Sie wie immer — wir liefern den 12‑Sektionen‑Entwurf, Sie behalten die medizinische Verantwortung.' },
      empathy:  { h: 'Ihre Schicht endet um 22 Uhr.<br /><span class="display-accent">Der Arztbrief nicht.</span>',
                  s: 'Bis jetzt. BriefPro übernimmt Diktat, Strukturierung und Übergabe — Assistenzarzt zu Oberarzt, mit lückenlosem Audit-Trail. Sie unterschreiben, niemand sonst.' },
      authority:{ h: 'Der freigabe-sichere<br /><span class="display-accent">Arztbrief-Assistent</span> für deutsche Kliniken.',
                  s: 'Voice-first, 12‑Sektionen‑Standard, Rollenfreigabe nach klinischer Hierarchie. DSGVO-konform, in Berlin gebaut, export-first für reibungslose Pilote.' }
    },
    en: {
      speed:    { h: 'From dictation to signed-off<br /><span class="display-accent">discharge letter.</span> In minutes.',
                  s: 'BriefPro is the only discharge-letter assistant with real role-based sign-off. Speak as you always do — we deliver the 12-section draft, you keep medical responsibility.' },
      outcome:  { h: 'Three hours of paperwork.<br /><span class="display-accent">Done in twenty minutes.</span>',
                  s: 'BriefPro is the only discharge-letter assistant with real role-based sign-off. Speak as you always do — we deliver the 12-section draft, you keep medical responsibility.' },
      empathy:  { h: 'Your shift ends at 10 PM.<br /><span class="display-accent">The letters don\'t.</span>',
                  s: 'Until now. BriefPro handles dictation, structuring, and hand-off — resident to attending, with a complete audit trail. You sign off, nobody else.' },
      authority:{ h: 'The sign-off-safe<br /><span class="display-accent">discharge-letter assistant</span> for German hospitals.',
                  s: 'Voice-first, 12-section standard, role-based sign-off matching clinical hierarchy. GDPR-compliant, built in Berlin, export-first for friction-free pilots.' }
    }
  };

  const ACCENTS = {
    emerald: { primary: '#0F6D5A', soft: 'rgba(15,109,90,.10)', line: 'rgba(15,109,90,.28)', light: '#5DD4B8', lighter: '#A7E8D4' },
    ochre:   { primary: '#B45309', soft: 'rgba(180,83,9,.10)',  line: 'rgba(180,83,9,.28)',  light: '#F0B070', lighter: '#F8D9B5' },
    cobalt:  { primary: '#1E40AF', soft: 'rgba(30,64,175,.10)', line: 'rgba(30,64,175,.28)', light: '#7BA0E8', lighter: '#B8CCF0' }
  };

  function applyHeadline() {
    const lang = (window.__brfLang || 'de');
    const variant = HEADLINES[lang][state.headline] || HEADLINES[lang].speed;
    const h = document.getElementById('hero-headline');
    const s = document.getElementById('hero-sub');
    if (h) h.innerHTML = variant.h;
    if (s) s.textContent = variant.s;
  }
  window.__brfApplyHeadline = applyHeadline;

  function applyAccent() {
    const c = ACCENTS[state.accent] || ACCENTS.emerald;
    const r = document.documentElement;
    r.style.setProperty('--emerald', c.primary);
    r.style.setProperty('--emerald-2', c.primary);
    r.style.setProperty('--emerald-soft', c.soft);
    r.style.setProperty('--emerald-line', c.line);
    let style = document.getElementById('tweak-accent-override');
    if (!style) { style = document.createElement('style'); style.id = 'tweak-accent-override'; document.head.appendChild(style); }
    style.textContent =
      '.problem-eyebrow,.compare-check{color:'+c.light+' !important}'+
      '.compare-col-us .inline-code{color:'+c.lighter+' !important}'+
      '.problem-highlight{background:linear-gradient(180deg,transparent 60%,'+c.light+'55 60%) !important;color:'+c.lighter+' !important}'+
      '.pilot-step-cta .btn,.final-cta-actions .btn-primary{background:'+c.light+' !important}'+
      '.pilot-step-cta .btn:hover,.final-cta-actions .btn-primary:hover{background:'+c.lighter+' !important}';
  }

  function applyCta() {
    document.querySelectorAll('[data-cta="hero-primary"],[data-cta="final-primary"],[data-cta="pilot-card"]').forEach(el => {
      if (el.dataset.cta === 'hero-primary') {
        el.innerHTML = state.primaryCta + ' <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      } else {
        el.textContent = state.primaryCta;
      }
    });
  }

  function applyAll() { applyHeadline(); applyAccent(); applyCta(); }

  function setTweak(key, value) {
    state[key] = value;
    applyAll();
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: value } }, '*');
    } catch (e) {}
    renderPanel();
  }

  function renderPanel() {
    const root = document.getElementById('tweaks-root');
    if (!root) return;
    if (!panelOpen) { root.innerHTML = ''; return; }

    const opt = (val, label, current) =>
      '<option value="'+val+'"'+(val===current?' selected':'')+'>'+label+'</option>';
    const radio = (val, label, current, name) =>
      '<label class="brf-radio'+(val===current?' is-active':'')+'"><input type="radio" name="'+name+'" value="'+val+'"'+(val===current?' checked':'')+'><span>'+label+'</span></label>';

    root.innerHTML =
      '<div class="brf-panel" role="dialog" aria-label="Tweaks">'+
        '<div class="brf-panel-head">'+
          '<span class="brf-panel-title">Tweaks</span>'+
          '<button type="button" class="brf-close" aria-label="Schließen">×</button>'+
        '</div>'+
        '<div class="brf-panel-body">'+
          '<div class="brf-section">'+
            '<label class="brf-label">Hero Headline</label>'+
            '<select class="brf-select" data-key="headline">'+
              opt('speed','Speed — "Vom Diktat zum freigegebenen Arztbrief."',state.headline)+
              opt('outcome','Outcome — "Drei Stunden auf zwanzig Minuten."',state.headline)+
              opt('empathy','Empathy — "Ihre Schicht endet um 22 Uhr."',state.headline)+
              opt('authority','Authority — "Der freigabe-sichere Arztbrief-Assistent."',state.headline)+
            '</select>'+
          '</div>'+
          '<div class="brf-section">'+
            '<label class="brf-label">Accent Color</label>'+
            '<div class="brf-radio-row">'+
              radio('emerald','Emerald',state.accent,'accent')+
              radio('ochre','Ochre',state.accent,'accent')+
              radio('cobalt','Cobalt',state.accent,'accent')+
            '</div>'+
          '</div>'+
          '<div class="brf-section">'+
            '<label class="brf-label">Primary CTA Copy</label>'+
            '<select class="brf-select" data-key="primaryCta">'+
              opt('Live‑Demo buchen','Live-Demo buchen',state.primaryCta)+
              opt('30‑Min Klinik‑Demo buchen','30-Min Klinik-Demo buchen (specific)',state.primaryCta)+
              opt('Pilot starten','Pilot starten (commitment)',state.primaryCta)+
              opt('Demo ansehen — 30 Min','Demo ansehen — 30 Min',state.primaryCta)+
            '</select>'+
          '</div>'+
        '</div>'+
      '</div>';

    root.querySelector('.brf-close').addEventListener('click', () => {
      panelOpen = false;
      renderPanel();
      try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {}
    });
    root.querySelectorAll('select.brf-select').forEach(sel => {
      sel.addEventListener('change', e => setTweak(sel.dataset.key, e.target.value));
    });
    root.querySelectorAll('.brf-radio input').forEach(inp => {
      inp.addEventListener('change', e => setTweak('accent', e.target.value));
    });
  }

  // Host edit-mode protocol
  window.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d.type === '__activate_edit_mode') { panelOpen = true; renderPanel(); }
    else if (d.type === '__deactivate_edit_mode') { panelOpen = false; renderPanel(); }
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}

  // Initial apply
  document.addEventListener('DOMContentLoaded', applyAll);
  if (document.readyState !== 'loading') applyAll();
})();
