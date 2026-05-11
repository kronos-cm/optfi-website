/* BriefPro — DE/EN language toggle (no build step, GitHub Pages friendly) */
(function(){
  // Map of German source text → English translation. Match by exact textContent.
  const DICT = {
    // Nav
    'Produkt': 'Product',
    'Warum BriefPro': 'Why BriefPro',
    'Sicherheit': 'Security',
    'Pilot': 'Pilot',
    'Demo buchen': 'Book demo',

    // Hero
    'Für Assistenz- und Oberärzte in deutschen Kliniken': 'For residents and attendings in German hospitals',
    'Workflow ansehen': 'See the workflow',
    'DSGVO & EU‑Hosting': 'GDPR & EU hosting',
    'Audit‑Trail pro Sektion': 'Per-section audit trail',
    'Review‑Pflicht, kein Autopilot': 'Mandatory review, no autopilot',

    // Device tabs / nav
    'Aufnahme': 'Record',
    'Entwurf': 'Draft',
    'Freigabe': 'Sign-off',
    'Aufnehmen': 'Record',
    'Entwerfen': 'Draft',
    'Freigeben': 'Sign off',

    // Device stage 1
    'Patient': 'Patient',
    'Encounter': 'Encounter',
    'Vorläufige Entlassung · Kardiologie': 'Provisional discharge · Cardiology',
    '„… retrosternale Schmerzen seit zwei Stunden, Ausstrahlung in den linken Arm…"':
      '"... retrosternal pain for two hours, radiating into the left arm..."',
    '3 von 12 Sektionen erfasst': '3 of 12 sections captured',

    // Device stage 2
    'Anamnese': 'History',
    'KI‑Vorschlag': 'AI suggestion',
    'Verlauf': 'Course',
    'Vorschlag in Arbeit': 'Suggestion in progress',
    'Akzeptieren': 'Accept',
    'Ablehnen': 'Reject',
    '– Schmerzen seit 2h, keine Ausstrahlung': '– Pain for 2h, no radiation',
    '+ Schmerzen seit 2h, Ausstrahlung in den linken Arm': '+ Pain for 2h, radiating into left arm',

    // Device stage 3
    'Assistenzarzt': 'Resident',
    'Oberarzt': 'Attending',
    'Final': 'Final',
    'Medizinische Validierung bestanden': 'Medical validation passed',
    'Keine kritischen Wechselwirkungen, Allergien dokumentiert.': 'No critical interactions; allergies documented.',
    'Dr. A. Schmidt': 'Dr. A. Schmidt',
    'Anamnese geändert': 'History edited',
    'zur Freigabe gestellt': 'submitted for sign-off',
    'Prof. Dr. K. Weber': 'Prof. Dr. K. Weber',
    'Oberarzt-Freigabe ausstehend': 'Attending sign-off pending',
    'PDF exportieren': 'Export PDF',
    'Kopieren': 'Copy',
    'HL7 Senden': 'Send HL7',

    // Problem section
    'Das Problem': 'The problem',
    '3 bis 5 Stunden Arztbriefe': '3 to 5 hours of discharge letters',
    'tägliche Doku-Last nach der Schicht': 'daily documentation load after the shift',
    'der Ärzte berichten Burnout-Symptome': 'of physicians report burnout symptoms',
    'generischer Ambient-Scribes mit echtem DE-Brief-Workflow': 'generic ambient scribes with real German letter workflow',

    // Walkthrough
    'So funktioniert es': 'How it works',
    'Drei Schritte. Eine Verantwortungskette.': 'Three steps. One chain of responsibility.',
    'Kein Autopilot. Kein Black‑Box‑Output. Jeder Übergang ist sichtbar, jede Änderung nachvollziehbar.':
      'No autopilot. No black-box output. Every hand-off is visible, every change traceable.',
    'Sprechen Sie wie im Stationsalltag. BriefPro transkribiert auf Deutsch, optional mit Speaker‑Trennung. Audio wird nach der Transkription verworfen.':
      'Speak as you would on the ward. BriefPro transcribes in German, optionally with speaker separation. Audio is discarded after transcription.',
    'Voice‑first, ohne Vorlagen lernen': 'Voice-first, no templates to learn',
    'Patient + Encounter‑Kontext': 'Patient + encounter context',
    'Audio nicht persistent': 'Audio not persisted',
    '12‑Sektionen‑Standard mit dynamischen Templates. KI schlägt vor, markiert fehlende Daten als': 
      '12-section standard with dynamic templates. AI suggests, flags missing data as',
    'statt zu erfinden.': 'instead of inventing it.',
    'Pädiatrie / Erwachsenen automatisch': 'Pediatric / adult auto-detected',
    'Diff‑basiertes Review pro Abschnitt': 'Diff-based review per section',
    'Akzeptieren · Ablehnen · Bearbeiten': 'Accept · Reject · Edit',
    'Statusfluss Assistenzarzt → Oberarzt → Final. Nur freigegebene Inhalte verlassen den Workflow. Vollständiger Audit‑Trail.':
      'Status flow Resident → Attending → Final. Only signed-off content leaves the workflow. Full audit trail.',
    'Rollenbasierte Approval‑Gates': 'Role-based approval gates',
    'Wer · was · wann pro Sektion': 'Who · what · when per section',
    'Export PDF / HL7 / Copy': 'Export PDF / HL7 / copy',

    // Editorial
    'die Verantwortungskette unserer Klinik abbildet': 'mirrors our hospital\'s chain of responsibility',
    'Klinische Leitidee · Dr. A. Castro Martinez, Gründer': 'Clinical principle · Dr. A. Castro Martinez, founder',

    // Diff section
    'Generischer AI‑Scribe': 'Generic AI scribe',
    'BriefPro': 'BriefPro',
    'Gesprächsnotiz statt strukturiertem Brief': 'Conversation note instead of structured letter',
    'Eine Person, ein Output — keine Rollentrennung': 'One person, one output — no role separation',
    'Audit nur auf Session‑Ebene': 'Audit only at session level',
    'US‑Fokus, deutsche Brief‑Struktur ist Beiwerk': 'US-focused; German letter structure is an afterthought',
    'Erfindet fehlende Details (Halluzination)': 'Invents missing details (hallucination)',
    'Tiefe EHR‑Integration als Eintrittsbarriere': 'Deep EHR integration as entry barrier',
    '12‑Sektionen Standard mit pädiatrischen Templates': '12-section standard with pediatric templates',
    'Assistenzarzt → Oberarzt → Final als Pflichtfluss': 'Resident → Attending → Final as mandatory flow',
    'Sektionsbezogener Audit‑Trail (wer, was, wann)': 'Per-section audit trail (who, what, when)',
    'In Berlin gebaut, für deutsche Klinikrealität': 'Built in Berlin, for German hospital reality',
    'Export‑first: Pilot ohne EHR‑Eingriff startbar': 'Export-first: pilot launches without EHR intervention',

    // Product / lanes
    'Im Brief': 'Inside the letter',
    'Was die Rollenfreigabe wirklich bedeutet.': 'What role-based sign-off really means.',
    'Drei Lanes, ein klarer Statusfluss, keine Umgehung. So sieht klinische Verantwortung in Software aus.':
      'Three lanes, one clear status flow, no shortcuts. This is what clinical responsibility looks like in software.',
    'Erstellt den Erstentwurf, ergänzt klinische Details aus der Visite, übergibt zur Fachfreigabe.':
      'Creates the first draft, adds clinical detail from rounds, hands off to specialist review.',
    'Entwurf · 8 von 12 Sektionen': 'Draft · 8 of 12 sections',
    'Facharzt': 'Specialist',
    'Prüft Vollständigkeit, Konsistenz und medizinische Sicherheit. Akzeptiert oder fordert Korrektur.':
      'Reviews completeness, consistency, and medical safety. Accepts or requests correction.',
    'In Review · 2 Hinweise': 'In review · 2 notes',
    'Oberarzt & Final': 'Attending & Final',
    'Finale Signatur. Nur freigegebene Inhalte verlassen den Workflow — Export mit dokumentierter Historie.':
      'Final signature. Only signed-off content leaves the workflow — export with documented history.',
    'Bereit zum Export': 'Ready to export',

    // Trust
    'Sicherheit & Compliance': 'Security & compliance',
    'Für deutsches Procurement, IT und Datenschutz gebaut.': 'Built for German procurement, IT, and data protection.',
    'Datensparsamkeit, AVV/DPIA‑Unterlagen, Hosting in Deutschland. Audio nicht persistent.':
      'Data minimization, DPA/DPIA documents, hosting in Germany. Audio not persisted.',
    'Jede Änderung mit Akteur, Zeit und Diff. Approval‑Gates lassen sich nicht umgehen.':
      'Every change with actor, time, and diff. Approval gates cannot be bypassed.',
    'Rollenbasierte Freigabe': 'Role-based sign-off',
    'Assistenzarzt → Oberarzt → Final. Keine stille KI‑Änderung, keine Schatten‑Freigabe.':
      'Resident → Attending → Final. No silent AI change, no shadow sign-off.',
    'Export‑first Integration': 'Export-first integration',
    'Pilot ohne KIS‑Eingriff. Spätere HL7 v2 / FHIR / ORBIS / SAP IS‑H als Stufenplan.':
      'Pilot without HIS changes. Later HL7 v2 / FHIR / ORBIS / SAP IS-H as a staged plan.',
    'Zertifizierungs‑Roadmap': 'Certification roadmap',
    'In Arbeit': 'In progress',
    'Roadmap': 'Roadmap',
    'DSGVO‑Konformität': 'GDPR compliance',
    'Wir machen keine Zertifizierungs‑Versprechen — nur überprüfbare Schritte. Detaillierte Compliance‑Unterlagen im Procurement‑Gespräch.':
      'We make no certification promises — only verifiable steps. Detailed compliance documents in the procurement call.',

    // Founder
    'Gründer': 'Founder',
    'Founder & Product Engineer · Berlin': 'Founder & Product Engineer · Berlin',
    'PhD in Neurosensory Science (Universität Oldenburg). Über zehn Jahre in skalierbaren Sprach‑ und KI‑Systemen — vorher Deutsche Telekom IT, Amazon. BriefPro entstand aus der Beobachtung, dass Ärzte in seinem Umfeld nach 24‑Stunden‑Schichten noch stundenlang dokumentierten.':
      'PhD in Neurosensory Science (University of Oldenburg). Over ten years in scalable speech and AI systems — previously Deutsche Telekom IT, Amazon. BriefPro grew out of seeing physicians around him still documenting for hours after 24-hour shifts.',
    'Wenn wir die Doku‑Zeit halbieren, entsteht wieder Raum für echte Patientenversorgung. Aber nicht durch mehr KI — durch bessere Verantwortungsübergaben.':
      'If we halve documentation time, real patient care has room to breathe again. Not through more AI — through better hand-offs of responsibility.',
    'LinkedIn ansehen': 'View LinkedIn',

    // Pilot section
    'Ein Pilot. Klare Schritte. Keine Lizenz‑Akrobatik.': 'One pilot. Clear steps. No licensing acrobatics.',
    'Pilotpreise werden nach Setup und Anforderung individuell finalisiert. Hier ist, wie wir typischerweise starten.':
      'Pilot pricing is finalized individually based on setup and requirements. Here is how we typically start.',
    'Discovery · 30 Min': 'Discovery · 30 min',
    'Workflow, Volumen, Datenschutz‑Anforderungen. Wir bringen den Pilot‑Pack für IT & Einkauf mit.':
      'Workflow, volume, data-protection requirements. We bring the pilot pack for IT & procurement.',
    'Setup · 2–5 Tage': 'Setup · 2–5 days',
    'Klinik‑Account, Rollenmodell (Assistenz‑/Oberarzt), Testpatienten. Kein KIS‑Eingriff nötig.':
      'Hospital account, role model (resident/attending), test patients. No HIS intervention needed.',
    'Pilot · 4–8 Wochen': 'Pilot · 4–8 weeks',
    'Eine Abteilung, klare Erfolgskriterien (Doku‑Zeit, Freigabe‑Latenz). Audit‑Daten gehören Ihnen.':
      'One department, clear success criteria (documentation time, sign-off latency). Audit data belongs to you.',
    'Bereit?': 'Ready?',
    'Wir blocken eine Stunde, Sie bringen einen typischen Brief. Wir zeigen den vollen Workflow live — kein generisches Demo‑Deck.':
      'We block an hour, you bring a typical letter. We show the full workflow live — no generic demo deck.',
    'Klinik‑Demo buchen': 'Book hospital demo',

    // FAQ
    'FAQ': 'FAQ',
    'Was Procurement, IT und Fachärzte fragen.': 'What procurement, IT, and specialists ask.',
    'Ersetzt BriefPro ärztliche Entscheidungen?': 'Does BriefPro replace medical decisions?',
    'Nein. BriefPro ist Dokumentationsunterstützung. Es trifft keine autonomen Diagnose‑ oder Therapieentscheidungen. Medizinische Verantwortung und finale Freigabe bleiben immer beim klinischen Team.':
      'No. BriefPro is documentation support. It makes no autonomous diagnostic or therapeutic decisions. Medical responsibility and final sign-off always rest with the clinical team.',
    'Schreibt BriefPro automatisch in andere Systeme zurück?': 'Does BriefPro write back to other systems automatically?',
    'Nein, nicht autonom. Exporte werden explizit ausgelöst. Pilote starten typischerweise export‑first; HL7 / FHIR / KIS‑Connectoren folgen stufenweise.':
      'No, not autonomously. Exports are triggered explicitly. Pilots typically start export-first; HL7 / FHIR / HIS connectors follow in stages.',
    'Wie schnell ist ein Pilot startbar?': 'How fast can a pilot start?',
    'Typisch innerhalb weniger Tage, ohne tiefe KIS‑Integration. Eine Abteilung, klare Erfolgskriterien, 4–8 Wochen Laufzeit.':
      'Typically within a few days, without deep HIS integration. One department, clear success criteria, 4–8 weeks duration.',
    'Welche Daten verlassen das System?': 'What data leaves the system?',
    'Audio wird nach Transkription verworfen (Standard). Transkripte und Briefe verschlüsselt in der EU. Keine Weitergabe an Dritte ohne explizite Zustimmung.':
      'Audio is discarded after transcription (default). Transcripts and letters encrypted in the EU. No sharing with third parties without explicit consent.',
    'Pädiatrie‑Unterstützung?': 'Pediatric support?',
    'Ja. Pädiatrischer Intake mit Pflichtfeldern (Perzentile, Impfstatus), altersgerechte Templates, Guardrails gegen unvollständige Briefe.':
      'Yes. Pediatric intake with mandatory fields (percentiles, vaccination status), age-appropriate templates, guardrails against incomplete letters.',
    'Was kostet der Pilot?': 'What does the pilot cost?',
    'Pilotpreise werden individuell nach Klinikgröße, Abteilungsumfang und Integrationsbedarf finalisiert. Erwartet keine Versteckspielchen — wir sind transparent im Discovery‑Gespräch.':
      'Pilot pricing is finalized individually based on hospital size, department scope, and integration needs. Expect no hidden games — we are transparent in the discovery call.',

    // Final CTA
    'Geben Sie Ihren Ärzten den Abend zurück.': 'Give your physicians their evenings back.',
    '30 Minuten. Ein typischer Brief. Wir zeigen Ihnen den vollen Workflow live — vom Diktat bis zur Oberarzt‑Freigabe.':
      '30 minutes. A typical letter. We show you the full workflow live — from dictation to attending sign-off.',

    // Footer
    'Vom Diktat zum freigegebenen Arztbrief.': 'From dictation to signed-off discharge letter.',
    'Berlin, Deutschland.': 'Berlin, Germany.',
    'Workflow': 'Workflow',
    'Compliance': 'Compliance',
    'Audit-Trail': 'Audit trail',
    'Kontakt': 'Contact',
    'App Login': 'App login',
    'LinkedIn': 'LinkedIn',
    'Rechtliches': 'Legal',
    'Impressum': 'Imprint',
    'Datenschutz': 'Privacy',

    // Section meta
    'Generischer AI‑Scribe': 'Generic AI scribe',

    // Fragments split by <br>, <span>, <code> — match individual text nodes
    'Generische Ambient‑Scribes hören zu.': 'Generic ambient scribes listen.',
    'BriefPro übergibt Verantwortung.': 'BriefPro hands off responsibility.',
    '12‑Sektionen‑Standard mit dynamischen Templates. KI schlägt vor, markiert fehlende Daten als': '12-section standard with dynamic templates. AI suggests, flags missing data as',
    'statt zu erfinden.': 'instead of inventing it.',
    'Fehlende Daten transparent als': 'Missing data transparently as',
    'Vom Diktat zum freigegebenen': 'From dictation to signed-off',
    'Arztbrief.': 'discharge letter.',
    'In Minuten.': 'In minutes.',
    'BriefPro ist der einzige Arztbrief‑Assistent mit echter Rollenfreigabe.': 'BriefPro is the only discharge-letter assistant with real role-based sign-off.',
    'Sprechen Sie wie immer — wir liefern den 12‑Sektionen‑Entwurf, Sie behalten die medizinische Verantwortung.': 'Speak as you always do — we deliver the 12-section draft, you keep medical responsibility.',
    'Berlin, Deutschland.': 'Berlin, Germany.',
    'Vom Diktat zum freigegebenen Arztbrief.': 'From dictation to signed-off discharge letter.'
  };

  // Lane numbers stay consistent (Lane 1, Lane 2, Lane 3)
  // Some compound strings — we patch via DOM walk for text-only nodes.

  // Snapshot original DE textContent so we can flip back.
  let snapshot = null;
  function snapshotDe() {
    if (snapshot) return;
    snapshot = new Map();
    walk(document.body, node => {
      if (node.nodeType === 3) snapshot.set(node, node.nodeValue);
    });
  }

  function walk(root, fn) {
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => {
        // Skip tweaks panel + script / style content
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        let p = n.parentElement;
        while (p) {
          if (p.tagName === 'SCRIPT' || p.tagName === 'STYLE') return NodeFilter.FILTER_REJECT;
          if (p.id === 'tweaks-root') return NodeFilter.FILTER_REJECT;
          p = p.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let n;
    while ((n = tw.nextNode())) fn(n);
  }

  function setLang(lang) {
    snapshotDe();
    window.__brfLang = lang;
    document.documentElement.lang = lang;

    if (lang === 'de') {
      // Restore original DE text
      snapshot.forEach((val, node) => { node.nodeValue = val; });
    } else {
      // Replace nodes whose trimmed text is in DICT
      snapshot.forEach((origVal, node) => {
        const t = origVal.trim();
        if (DICT[t]) {
          // Preserve leading/trailing whitespace
          const lead = origVal.match(/^\s*/)[0];
          const trail = origVal.match(/\s*$/)[0];
          node.nodeValue = lead + DICT[t] + trail;
        }
      });
    }

    // Re-apply hero headline (it's set via innerHTML, not via DOM text)
    if (typeof window.__brfApplyHeadline === 'function') window.__brfApplyHeadline();

    // Page title + meta
    if (lang === 'en') {
      document.title = 'BriefPro — From dictation to signed-off discharge letter.';
    } else {
      document.title = 'BriefPro — Vom Diktat zum freigegebenen Arztbrief.';
    }

    // Update lang switch state
    document.querySelectorAll('.lang-switch button').forEach(b => {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    snapshotDe();
    document.querySelectorAll('.lang-switch button').forEach(b => {
      b.addEventListener('click', () => setLang(b.dataset.lang));
    });
  });
})();
