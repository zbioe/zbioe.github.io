/* Export resume / CV as PDF, Markdown, or Org-mode */
(function () {
  'use strict';

  const NAME = 'Iury Jemes Fukuda Martins';
  const TITLE = 'Platform Engineer & Developer';
  const LOCATION = 'Santa Catarina – SC, Brazil';
  const EMAIL = 'i@zbioe.com';
  const GITHUB = 'github.com/zbioe';
  const LINKEDIN = 'linkedin.com/in/iuryfukuda';

  const DESCRIPTION =
    'DevOps Engineer and Developer with a strong passion for automation, system reproducibility, and software monitoring. Dedicated to understanding the operational environment to build resilient infrastructure.';

  const SKILLS = [
    ['Cloud & Infrastructure', ['AWS', 'Azure', 'GCP', 'OCI', 'Terraform', 'Ansible', 'Consul', 'Vault', 'Colmena', 'Nomad', 'IaC', 'CI/CD']],
    ['Containers & Orchestration', ['Docker', 'Kubernetes', 'docker-compose', 'k3s', 'distrobox', 'libvirt', 'KVM']],
    ['OS & Administration', ['Linux', 'NixOS', 'Alpine', 'Debian']],
    ['Programming', ['Bash', 'Nix', 'Python', 'Go', 'Elixir', 'Lisp']],
    ['Monitoring & Logging', ['Grafana', 'Prometheus', 'Loki', 'Elastic Stack']],
    ['AI & Automation', ['AI Evaluation', 'LLM Agent Benchmarking', 'Harbor Framework', 'Horizon Framework', 'APEX Framework', 'RLHF']],
  ];

  const COMPETENCIES = ['Critical Thinking', 'Problem Decomposition', 'Debugging', 'Test Design'];

  // Full work history
  const WORK = [
    {
      company: 'BellSpoke', role: 'AI Evaluation Engineer (Platform SME)',
      period: '03/2026 — current', loc: 'Remote',
      bullets: [
        'Responsible for creating and curating benchmarks for training and evaluating Large Language Models (LLMs) in Platform Engineering, SRE, DevOps and Cloud Ops tasks.',
        'Technical RLHF (Reinforcement Learning from Human Feedback) & Grading: evaluating and correcting AI model outputs for infrastructure tasks, ensuring generated solutions adhere to best practices for security, performance, and resilience.',
        'Edge case research: identifying gaps in technical knowledge of language models in specific domains.',
      ],
    },
    {
      company: 'Bornlogic', role: 'DevOps',
      period: '03/2020 — 02/2026', loc: 'Remote',
      bullets: [
        'Monitor production software using Grafana, Prometheus, and Loki for real-time observability.',
        'Implement and maintain infrastructure automation using NixOS, Shell, Terraform, and Ansible.',
        'Manage and sustain application availability within Kubernetes clusters.',
        'Ensure data integrity by managing backups for all databases (Postgres, Neo4j, Elasticsearch, MongoDB) and S3 buckets, including automated recovery protocols.',
        'Collaborate with developers on the design and implementation of new projects, provisioning necessary resources.',
        'Integrate development processes with CI/CD pipelines using GitHub Actions.',
      ],
    },
    {
      company: 'Stratum.hk', role: 'API Developer',
      period: '08/2019 — 09/2019', loc: 'Santa Catarina – SC',
      bullets: [
        'Maintained a Go-based API for interacting with the stratumBlue cryptocurrency investment fund.',
        'Implemented Dockerfiles and unit tests for legacy services to improve containerization and reliability.',
      ],
    },
    {
      company: 'Everis', role: 'IT automation',
      period: '04/2019 — 05/2019', loc: 'Remote',
      bullets: [
        'Developed custom automation scripts to address internal banking (Santander) infrastructure needs.',
        'Used Rundeck, Shell, and Chef to orchestrate operational tasks.',
      ],
    },
    {
      company: 'Neoway', role: 'Software Developer',
      period: '06/2017 — 02/2019', loc: 'Santa Catarina – SC',
      bullets: [
        'Created, integrated, and maintained data extractors.',
        'Maintained Go APIs for auxiliary services, including Captcha solving and Proxy management.',
        'Standardized documentation and testing environments using containers to ensure development consistency across machines.',
        'Used docker-compose for local testing and RabbitMQ for asynchronous data transfer between teams.',
      ],
    },
    {
      company: 'Hostgator', role: 'Linux Support',
      period: '01/2017 — 05/2019', loc: 'Santa Catarina – SC',
      bullets: [
        'Resolved security vulnerabilities, handled Terms of Service (TOS) reports, and performed site migrations and database recovery.',
        'Assisted clients with installation and configuration of services such as cPanel, e-mail servers, and proxies.',
      ],
    },
    {
      company: 'Hydra Systems', role: 'Sysadmin',
      period: '06/2015 — 01/2017', loc: 'Santa Catarina – SC',
      bullets: [
        'Managed production servers for gambling systems, ensuring high availability and physical security.',
        'Developed encrypted ISO installation methods to prevent unauthorized software copying.',
        'Maintained an internal test lab to accurately simulate production environments.',
        'Monitored the local OpenStack infrastructure and automated builds and deployments using TeamCity.',
      ],
    },
    {
      company: 'OSI Web Services', role: 'Developer · Freelancer',
      period: '04/2016 — 06/2017', loc: 'Santa Catarina – SC',
      bullets: [
        'Developed a Python/WX-based management program for Raspberry Pi-controlled LED panels, featuring remote reboot and URL management capabilities.',
      ],
    },
    {
      company: 'College Monitor', role: 'Helper · Temporary',
      period: '03/2015 — 11/2015', loc: 'Santa Catarina – SC',
      bullets: ['Assisted students with logic and programming-related questions and assignments.'],
    },
    {
      company: 'Kloud TI', role: 'IT Support · Internship',
      period: '10/2014 — 03/2015', loc: 'Santa Catarina – SC',
      bullets: [
        'Provided general IT support for hardware and remote “Full Auto” systems at gas stations.',
        'Developed a local script manager using Java and JavaFX to streamline server maintenance.',
      ],
    },
    {
      company: 'Policlínica São Lucas', role: 'HelpDesk · Internship',
      period: '03/2014 — 08/2014', loc: 'Santa Catarina – SC',
      bullets: [
        'Provided general IT support for a medical clinic.',
        'Maintained the local Linux servers.',
      ],
    },
  ];

  const PROJECTS = [
    { name: 'MongoDB cluster deploy', url: 'https://github.com/zbioe/mongodb',
      desc: 'Example of MongoDB cluster deploy to Azure or local libvirt with XFS data in LVM.',
      bullets: [
        'Configured Data and Logs partitions separated. Uses XFS on data to validate production notes and supports backup via snapshot of the data partition.',
        'Implements a CLI infra interface to manage the functions.',
      ],
    },
    { name: 'Infra Consul', url: 'https://github.com/zbioe/infra-consul',
      desc: 'Provisioned Consul with NixOS environments inside VMs across GCP, Azure, and Libvirtd.',
      bullets: [
        'Terraform integrated with NixOS.',
        'HashiCorp Consul integrated with Vault for TLS security.',
        'Multi-Cloud Federation and Service Mesh via Consul.',
        'Kubernetes in development environments using k3s.',
      ],
    },
    { name: 'Observability Playground', url: 'https://github.com/zbioe/observability',
      desc: 'Playground to run the Grafana stack of observability in docker-compose locally.',
      bullets: [
        'Grafana, Prometheus, Loki, Node Exporter, Alloy and Flog.',
        'Flog instances are configurable by env.',
        'Automated dashboards and datasource creation.',
        'Automated custom logo replacement.',
      ],
    },
    { name: 'Dotnix', url: 'https://github.com/zbioe/dotnix',
      desc: 'NixOS configuration for workstation replication.',
      bullets: ['Features Flakes support, modular config files, and custom ISO generation for rapid deployment.'],
    },
    { name: 'Nixpkgs Contribution', url: 'https://github.com/NixOS/nixpkgs/pull/145166',
      desc: 'Successfully merged Pull Request adding the Kuma package to the official Nixpkgs repository.',
      bullets: [],
    },
    { name: 'Terraform Nginx with logs on GCS', url: 'https://github.com/zbioe/tf-ws',
      desc: 'Example of Terraform project providing an Nginx VM with logs on GCS.',
      bullets: [
        'Configured Nginx with self-signed HTTPS and automated log storage in Google Cloud Storage.',
        'Implemented automated health checks (check.tf).',
      ],
    },
    { name: 'IMDB scraping', url: 'https://github.com/zbioe/imdb',
      desc: 'Example of IMDB HTML scraping using Go.',
      bullets: ['Parses Name, Episode, Year, Genres and Rating.', 'Implemented tests and benchmarks.'],
    },
    { name: 'Grapnel', url: 'https://github.com/zbioe/grapnel',
      desc: 'Simple tool to convert HTML into plain text or unique words. Useful to index words on pages with web crawling to understand the context.',
      bullets: ['Written in Go.', 'Can be used via CLI.'],
    },
    { name: 'KTFY', url: 'https://github.com/zbioe/kyfy',
      desc: 'Kubernetes backup / restore.',
      bullets: ['Generates a tar.gz with all chosen YAML configs to backup and restore.'],
    },
    { name: 'Tomato', url: 'https://github.com/zbioe/tomato',
      desc: 'Simple pomodoro CLI to integrate with your OS.',
      bullets: ['Notifies with notify-send and makes a noise with speaker-test.', 'Custom parameters to configure.'],
    },
    { name: 'Auction', url: 'https://github.com/zbioe/auction',
      desc: 'Go API with the standard library for managing auction offer prices.',
      bullets: ['Pure Go, without external libs.', 'Custom in-memory database.'],
    },
    { name: 'Sniff k8s pods concurrently', url: 'https://github.com/zbioe/sniffAllPods',
      desc: 'Simple way to run tcpdump concurrently in all k8s pods, storing the pid and generating the logs.',
      bullets: [],
    },
  ];

  // ---------- Markdown ----------
  function buildMarkdown(full) {
    const out = [];
    out.push(`# ${NAME}`);
    out.push(`**${TITLE}**`);
    out.push('');
    out.push(`📍 ${LOCATION}  `);
    out.push(`✉️ ${EMAIL}  `);
    out.push(`🐙 ${GITHUB}  `);
    out.push(`💼 ${LINKEDIN}`);
    out.push('');
    out.push('## Summary');
    out.push(DESCRIPTION);
    out.push('');
    out.push('## Core Competencies');
    out.push(COMPETENCIES.map(c => `- ${c}`).join('\n'));
    out.push('');
    out.push('## Technical Skills');
    for (const [g, items] of SKILLS) {
      out.push(`- **${g}:** ${items.join(', ')}`);
    }
    out.push('');
    out.push('## Work Experience');
    const work = full ? WORK : WORK.slice(0, 4);
    for (const w of work) {
      out.push(`### ${w.company} — ${w.role}`);
      out.push(`*${w.period} · ${w.loc}*`);
      out.push('');
      for (const b of w.bullets) out.push(`- ${b}`);
      out.push('');
    }
    if (full) {
      out.push('## Public Projects');
      for (const p of PROJECTS) {
        out.push(`### [${p.name}](${p.url})`);
        out.push(p.desc);
        if (p.bullets.length) {
          out.push('');
          for (const b of p.bullets) out.push(`- ${b}`);
        }
        out.push('');
      }
    } else {
      out.push('## Selected Projects');
      const sel = PROJECTS.slice(0, 5);
      for (const p of sel) {
        out.push(`- **[${p.name}](${p.url})** — ${p.desc}`);
      }
      out.push('');
    }
    return out.join('\n');
  }

  // ---------- Org-mode ----------
  function buildOrg(full) {
    const out = [];
    out.push(`#+TITLE: ${NAME}`);
    out.push(`#+SUBTITLE: ${TITLE}`);
    out.push(`#+AUTHOR: ${NAME}`);
    out.push(`#+EMAIL: ${EMAIL}`);
    out.push('');
    out.push(`- Location :: ${LOCATION}`);
    out.push(`- Email    :: ${EMAIL}`);
    out.push(`- GitHub   :: [[https://${GITHUB}][${GITHUB}]]`);
    out.push(`- LinkedIn :: [[https://${LINKEDIN}][${LINKEDIN}]]`);
    out.push('');
    out.push('* Summary');
    out.push(DESCRIPTION);
    out.push('');
    out.push('* Core Competencies');
    for (const c of COMPETENCIES) out.push(`- ${c}`);
    out.push('');
    out.push('* Technical Skills');
    for (const [g, items] of SKILLS) {
      out.push(`** ${g}`);
      out.push(items.map(i => `- ${i}`).join('\n'));
    }
    out.push('');
    out.push('* Work Experience');
    const work = full ? WORK : WORK.slice(0, 4);
    for (const w of work) {
      out.push(`** ${w.company} — ${w.role}`);
      out.push(`   :PROPERTIES:`);
      out.push(`   :PERIOD: ${w.period}`);
      out.push(`   :LOCATION: ${w.loc}`);
      out.push(`   :END:`);
      for (const b of w.bullets) out.push(`   - ${b}`);
    }
    out.push('');
    if (full) {
      out.push('* Public Projects');
      for (const p of PROJECTS) {
        out.push(`** [[${p.url}][${p.name}]]`);
        out.push(`   ${p.desc}`);
        for (const b of p.bullets) out.push(`   - ${b}`);
      }
    } else {
      out.push('* Selected Projects');
      for (const p of PROJECTS.slice(0, 5)) {
        out.push(`- [[${p.url}][${p.name}]] :: ${p.desc}`);
      }
    }
    return out.join('\n');
  }

  // ---------- HTML for PDF ----------
  function buildPdfHTML(full) {
    const work = full ? WORK : WORK.slice(0, 4);
    const projects = full ? PROJECTS : PROJECTS.slice(0, 5);

    const skillRows = SKILLS.map(([g, items]) =>
      `<tr><th>${g}</th><td>${items.join(' · ')}</td></tr>`).join('');

    const workHtml = work.map(w => `
      <article class="job">
        <header>
          <h3>${w.company} <span class="role">— ${w.role}</span></h3>
          <span class="meta">${w.period} · ${w.loc}</span>
        </header>
        <ul>${w.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </article>`).join('');

    const projectsHtml = full
      ? projects.map(p => `
          <article class="project">
            <h3><a href="${p.url}">${p.name}</a></h3>
            <p>${p.desc}</p>
            ${p.bullets.length ? `<ul>${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
          </article>`).join('')
      : `<ul class="proj-compact">${projects.map(p =>
          `<li><a href="${p.url}"><strong>${p.name}</strong></a> — ${p.desc}</li>`).join('')}</ul>`;

    return `<!doctype html>
<html><head><meta charset="utf-8"/>
<title>${full ? 'CV' : 'Resume'} — ${NAME}</title>
<style>
  @page { size: A4; margin: 14mm 14mm 14mm 14mm; }
  * { box-sizing: border-box; }
  html, body { margin:0; padding:0; }
  body {
    font-family: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
    color:#1d2021; background:#fff; font-size:10.5pt; line-height:1.5;
  }
  .wrap { padding: 0; }
  header.top {
    border-bottom: 2px solid #d79921; padding-bottom: 10px; margin-bottom: 18px;
  }
  header.top h1 { margin:0 0 2px; font-size: 22pt; letter-spacing:-.01em; color:#1d2021; }
  header.top .title { color:#af3a03; font-weight:600; font-size:11pt; margin-bottom:6px; }
  header.top .contact { font-size:9.5pt; color:#3c3836; }
  header.top .contact span { margin-right: 14px; }
  header.top .contact a { color:#076678; text-decoration:none; }
  h2 {
    font-size: 11pt; text-transform: uppercase; letter-spacing: .08em;
    color:#af3a03; border-bottom:1px solid #d5c4a1; padding-bottom:3px;
    margin: 18px 0 8px;
  }
  h3 { font-size: 10.5pt; margin: 0 0 2px; color:#1d2021; }
  h3 .role { color:#3c3836; font-weight:500; }
  .job { margin-bottom: 10px; page-break-inside: avoid; }
  .job header { display:flex; justify-content:space-between; align-items:baseline; gap:12px; }
  .job .meta { font-size:9pt; color:#7c6f64; white-space:nowrap; }
  ul { margin: 4px 0 0 18px; padding: 0; }
  li { margin: 1px 0; }
  table.skills { width:100%; border-collapse: collapse; }
  table.skills th { text-align:left; width: 30%; color:#af3a03; padding:3px 8px 3px 0; vertical-align:top; font-weight:600; font-size:10pt; }
  table.skills td { padding:3px 0; vertical-align:top; }
  .summary { color:#3c3836; }
  .comp { display:flex; flex-wrap:wrap; gap:6px 14px; font-size:10pt; }
  .comp span::before { content:"▸ "; color:#d79921; }
  .project { margin-bottom: 8px; page-break-inside: avoid; }
  .project a { color:#076678; text-decoration:none; }
  .proj-compact { margin: 0 0 0 18px; }
  .proj-compact li { margin: 2px 0; }
  .proj-compact a { color:#076678; text-decoration:none; }
  @media print { a { color: #076678 !important; } }
</style>
</head>
<body><div class="wrap">

  <header class="top">
    <h1>${NAME}</h1>
    <div class="title">${TITLE}</div>
    <div class="contact">
      <span>${LOCATION}</span>
      <span><a href="mailto:${EMAIL}">${EMAIL}</a></span>
      <span><a href="https://${GITHUB}">${GITHUB}</a></span>
      <span><a href="https://${LINKEDIN}">${LINKEDIN}</a></span>
    </div>
  </header>

  <section><h2>Summary</h2><p class="summary">${DESCRIPTION}</p></section>

  <section><h2>Core Competencies</h2>
    <div class="comp">${COMPETENCIES.map(c => `<span>${c}</span>`).join('')}</div>
  </section>

  <section><h2>Technical Skills</h2>
    <table class="skills"><tbody>${skillRows}</tbody></table>
  </section>

  <section><h2>Work Experience</h2>${workHtml}</section>

  <section><h2>${full ? 'Public Projects' : 'Selected Projects'}</h2>${projectsHtml}</section>

</div>
<script>window.onload=()=>setTimeout(()=>window.print(),250);</script>
</body></html>`;
  }

  // ---------- Helpers ----------
  function download(filename, content, mime) {
    const blob = new Blob([content], { type: mime + ';charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 100);
  }

  function openPrint(html) {
    const w = window.open('', '_blank');
    if (!w) { alert('Pop-ups are blocked. Allow pop-ups to export the PDF.'); return; }
    w.document.open(); w.document.write(html); w.document.close();
  }

  function handle(kind, format) {
    const full = kind === 'cv';
    const baseName = full ? 'Iury-Fukuda-CV' : 'Iury-Fukuda-Resume';
    if (format === 'md') {
      download(`${baseName}.md`, buildMarkdown(full), 'text/markdown');
    } else if (format === 'org') {
      download(`${baseName}.org`, buildOrg(full), 'text/plain');
    } else if (format === 'pdf') {
      openPrint(buildPdfHTML(full));
    }
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-export]');
    if (!btn) return;
    e.preventDefault();
    const [kind, format] = btn.dataset.export.split(':');
    handle(kind, format);
  });
})();
