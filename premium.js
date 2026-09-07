(()=>{
  const key=document.body.dataset.site;
  const signature=document.querySelector('.signature');
  const stage=signature?.querySelector('.signature-stage');
  if(!signature||!stage||!['alpha','lush','h2o'].includes(key)) return;

  const carPath='M128 292c19-58 65-101 137-117l111-23 72-82h212l101 90 85 29c47 17 77 49 89 94l-19 37H146z';
  const glassPath='M390 151l73-62h181l83 76z';

  const wheel=(x,clean=true)=>`<g class="wheel wheel-${clean?'clean':'dirty'}" transform="translate(${x} 309)">
    <circle r="67" class="tire"/>
    <circle r="43" class="rim-outer"/>
    <circle r="28" class="rim-inner"/>
    <g class="spokes">${[0,45,90,135].map(a=>`<path d="M-27 0H27" transform="rotate(${a})"/>`).join('')}</g>
    <circle r="8" class="hub"/>
  </g>`;

  function alphaSvg(clean=false){
    const s=clean?'aClean':'aHaze';
    return `<svg viewBox="0 0 1000 430" role="img" aria-label="${clean?'Corrected glossy automotive finish':'Hazy automotive paint with visible swirl marks'}">
      <defs>
        <linearGradient id="${s}Body" x1="0" y1="0" x2="1" y2="1">
          ${clean
            ?'<stop offset="0" stop-color="#05090c"/><stop offset=".18" stop-color="#151c20"/><stop offset=".38" stop-color="#52636a"/><stop offset=".46" stop-color="#eef8f8"/><stop offset=".52" stop-color="#546a72"/><stop offset=".7" stop-color="#111b20"/><stop offset="1" stop-color="#020608"/>'
            :'<stop offset="0" stop-color="#171a1b"/><stop offset=".34" stop-color="#343b3d"/><stop offset=".55" stop-color="#677073"/><stop offset=".72" stop-color="#2a3133"/><stop offset="1" stop-color="#101314"/>'}
        </linearGradient>
        <linearGradient id="${s}Glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${clean?'#cfe6ea':'#6f7d80'}" stop-opacity="${clean?'.72':'.45'}"/><stop offset="1" stop-color="#121b1f" stop-opacity=".92"/></linearGradient>
        <radialGradient id="${s}Lamp"><stop stop-color="#fff"/><stop offset=".45" stop-color="#d7f7ff"/><stop offset="1" stop-color="#7bb9c7"/></radialGradient>
      </defs>
      <ellipse cx="502" cy="363" rx="372" ry="29" class="car-shadow"/>
      <path d="${carPath}" fill="url(#${s}Body)" class="car-body"/>
      <path d="${glassPath}" fill="url(#${s}Glass)" class="car-glass"/>
      <path d="M482 93v69M648 104l-6 58" class="glass-seams"/>
      <path d="M305 215c124-43 333-45 505-4M367 252c111 17 310 18 447-6M157 284c113 5 226 2 334-9" class="body-contours"/>
      <path d="M781 200l77 25-15 35-62-8z" fill="url(#${s}Lamp)" class="headlamp"/>
      <path d="M176 273l43-5" class="rear-lamp"/>
      <path d="M470 163l-10 123M649 165l16 126" class="panel-seams"/>
      <path d="M746 168l30 9-19 22-28-2z" class="mirror"/>
      ${wheel(301,clean)}${wheel(733,clean)}
      ${clean?`<g class="clean-highlights"><path d="M208 260c116-36 220-53 338-61 116-8 221-1 302 22"/><path d="M454 102c75-12 142-7 196 7"/><path d="M337 276c154 24 320 17 443-2"/></g>`:`<g class="paint-defects">
        <path d="M221 205c28-24 64-14 72 11s-20 48-49 42-35-33-16-47 46-12 55 8"/>
        <path d="M363 186c22-19 53-9 60 13 6 22-17 40-40 32-22-8-25-31-8-42 17-11 38-7 48 6"/>
        <path d="M520 221c31-22 68-8 70 20 2 26-32 42-58 27-22-13-18-38 4-49 21-10 43-5 55 11"/>
        <path d="M281 248l72-21M615 181l88-15M659 242l95-17M440 264l57-11" class="scratches"/>
      </g>`}
    </svg>`;
  }

  function h2oSvg(clean=false){
    const s=clean?'hClean':'hDirty';
    return `<svg viewBox="0 0 1000 430" role="img" aria-label="${clean?'Clean detailed vehicle with restored reflections':'Vehicle covered with road film and grime'}">
      <defs>
        <linearGradient id="${s}Body" x1="0" y1="0" x2="1" y2="1">
          ${clean
            ?'<stop stop-color="#073958"/><stop offset=".26" stop-color="#0877a8"/><stop offset=".44" stop-color="#7cd7ef"/><stop offset=".51" stop-color="#effcff"/><stop offset=".58" stop-color="#249cc4"/><stop offset=".8" stop-color="#075477"/><stop offset="1" stop-color="#03263a"/>'
            :'<stop stop-color="#5b554a"/><stop offset=".3" stop-color="#7c7463"/><stop offset=".55" stop-color="#9c907a"/><stop offset=".78" stop-color="#686152"/><stop offset="1" stop-color="#454139"/>'}
        </linearGradient>
        <linearGradient id="${s}Glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${clean?'#d9f6ff':'#8e8c80'}" stop-opacity="${clean?'.82':'.62'}"/><stop offset="1" stop-color="${clean?'#256f8d':'#57594f'}" stop-opacity=".78"/></linearGradient>
      </defs>
      <ellipse cx="502" cy="363" rx="372" ry="29" class="car-shadow"/>
      <path d="${carPath}" fill="url(#${s}Body)" class="car-body"/>
      <path d="${glassPath}" fill="url(#${s}Glass)" class="car-glass"/>
      <path d="M482 93v69M648 104l-6 58" class="glass-seams"/>
      <path d="M305 215c124-43 333-45 505-4M367 252c111 17 310 18 447-6" class="body-contours"/>
      <path d="M781 200l77 25-15 35-62-8z" class="headlamp"/>
      <path d="M470 163l-10 123M649 165l16 126" class="panel-seams"/>
      ${wheel(301,clean)}${wheel(733,clean)}
      ${clean?`<g class="clean-highlights"><path d="M208 260c116-36 220-53 338-61 116-8 221-1 302 22"/><path d="M459 103c70-11 133-6 189 8"/><path d="M350 280c145 20 298 15 420-3"/></g>`:`<g class="grime">
        <path d="M167 276c68-18 137-20 212-5 83 17 142 34 227 24 91-11 150-36 244-15l-5 40H147z"/>
        <g class="mud-spots"><circle cx="250" cy="222" r="13"/><circle cx="333" cy="259" r="8"/><circle cx="405" cy="213" r="10"/><circle cx="574" cy="254" r="12"/><circle cx="697" cy="218" r="7"/><circle cx="803" cy="268" r="11"/><circle cx="529" cy="183" r="6"/></g>
        <path d="M188 243l85 18M424 203l94 31M621 210l113 33" class="grime-streaks"/>
      </g>`}
    </svg>`;
  }

  function lushSvg(after=false){
    const s=after?'lAfter':'lBefore';
    return `<svg viewBox="0 0 1100 600" role="img" aria-label="${after?'Healthy manicured property with rich turf and landscaping':'Dry stressed property before lawn and landscape care'}">
      <defs>
        <linearGradient id="${s}Sky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${after?'#dff4c8':'#e5dfc6'}"/><stop offset="1" stop-color="${after?'#b7dc98':'#c9bea0'}"/></linearGradient>
        <linearGradient id="${s}House" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${after?'#f7f1de':'#d8d1bd'}"/><stop offset="1" stop-color="${after?'#d9d0b8':'#bcb39e'}"/></linearGradient>
        <linearGradient id="${s}Roof" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${after?'#34443b':'#57554c'}"/><stop offset="1" stop-color="${after?'#1e2f28':'#3d3c36'}"/></linearGradient>
        <linearGradient id="${s}Lawn" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${after?'#78ba58':'#b8aa78'}"/><stop offset="1" stop-color="${after?'#327446':'#8f8159'}"/></linearGradient>
        ${after?`<pattern id="grassTexture" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M2 14l2-8M7 14l1-10M12 14l-2-7" stroke="#d3ef9d" stroke-width="1.2" stroke-linecap="round" opacity=".5"/></pattern>
        <pattern id="mowStripes" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(-11)"><rect width="60" height="120" fill="#dff3b6" opacity=".08"/></pattern>`:''}
      </defs>
      <rect width="1100" height="600" fill="url(#${s}Sky)"/>
      <circle cx="895" cy="118" r="78" class="sun-disc"/>
      <path d="M0 400L1100 338V600H0z" fill="url(#${s}Lawn)" class="lawn-base"/>
      ${after?'<path d="M0 400L1100 338V600H0z" fill="url(#grassTexture)"/><path d="M0 400L1100 338V600H0z" fill="url(#mowStripes)"/>':'<g class="dry-cracks"><path d="M78 479l32-19 25 13 38-23M306 498l28-30 37 14 23-27M763 470l29-25 24 12 35-26M923 519l34-22 21 15"/><path d="M119 466l-8-22M357 479l7-28M810 459l-3-25M958 507l13-27"/></g>'}
      <path d="M547 246h336v194H547z" fill="url(#${s}House)" class="house-face"/>
      <path d="M513 246l199-118 205 118z" fill="url(#${s}Roof)" class="roof"/>
      <path d="M541 246h350" class="roof-shadow"/>
      <rect x="598" y="310" width="86" height="130" rx="3" class="door"/>
      <rect x="742" y="302" width="86" height="72" rx="3" class="window"/>
      <path d="M785 302v72M742 338h86" class="window-grid"/>
      <rect x="855" y="301" width="29" height="139" class="house-shadow"/>
      <path d="M592 601c20-82 74-143 158-188 72-38 139-55 250-68" class="walkway-shadow"/>
      <path d="M592 601c20-78 73-135 154-178 70-37 137-54 247-66" class="walkway"/>
      <path d="M521 451c71-42 139-49 221-36 80 12 146 8 225-35l23 38c-86 49-165 58-255 43-76-12-128-6-191 31z" class="bed"/>
      <g class="shrubs">${[565,624,693,828,888,948].map((x,i)=>`<g transform="translate(${x} ${after?407:419})"><ellipse rx="${after?32:25}" ry="${after?29:20}"/><ellipse cx="-15" cy="-8" rx="${after?21:15}" ry="${after?18:13}"/><ellipse cx="17" cy="-10" rx="${after?22:16}" ry="${after?20:14}"/>${after&&i%2===0?'<circle cx="-8" cy="-13" r="3" class="flower"/><circle cx="12" cy="-4" r="3" class="flower"/>':''}</g>`).join('')}</g>
      <g class="edge-line"><path d="M44 535c173-19 336-29 496-25"/><path d="M548 511c140 4 306-18 505-62"/></g>
      ${after?'<g class="foreground-grass"><path d="M61 580l4-23m8 23l-1-29m15 29l5-25m83 20l2-26m12 24l6-31m92 22l-2-25m15 22l6-28m89 17l3-29m17 26l7-23m505-52l6-29m13 25l9-31m21 26l4-24"/></g>':''}
    </svg>`;
  }

  const alphaMarkup=`
    <div class="alpha-studio-wash"></div><div class="alpha-floor"></div>
    <div class="alpha-state"><span>PAINT CONDITION</span><b><i>HAZE</i><em>→</em><i>CORRECTED</i><em>→</em><i>COATED</i></b></div>
    <div class="alpha-car-wrap">
      <div class="alpha-before">${alphaSvg(false)}</div>
      <div class="alpha-corrected">${alphaSvg(true)}<div class="alpha-ceramic-glint"></div></div>
      <div class="alpha-correction-beam"><span></span></div>
      <div class="alpha-beads">${[[28,34],[38,26],[48,39],[57,29],[67,35],[73,23],[79,41],[85,31],[61,44],[44,48]].map(([x,y],i)=>`<i style="--x:${x}%;--y:${y}%;--d:${i*.08}s"></i>`).join('')}</div>
    </div>
    <div class="alpha-result-strip"><span><i class="haze-dot"></i> Swirl haze</span><span><i class="correct-dot"></i> Paint corrected</span><span><i class="coat-dot"></i> Hydrophobic finish</span></div>
    <div class="showcase-note">Conceptual finish demonstration · paint correction + protective coating</div>`;

  const lushMarkup=`
    <div class="lush-property-wrap">
      <div class="lush-property-before">${lushSvg(false)}</div>
      <div class="lush-property-after">${lushSvg(true)}</div>
      <div class="lush-growth-front"></div>
      <div class="lush-grass-rise">${Array.from({length:24},(_,i)=>`<i style="--x:${4+i*4.05}%;--h:${18+(i%5)*5}px;--d:${(i%8)*.06}s"></i>`).join('')}</div>
    </div>
    <div class="lush-irrigation-premium">${[17,37,62,82].map((x,i)=>`<i style="--x:${x}%;--d:${i*.2}s"><b></b><span></span></i>`).join('')}</div>
    <div class="lush-stage-copy"><span>STRESSED</span><b>RECOVERING PROPERTY</b><span>MANICURED</span></div>
    <div class="lush-result-strip"><span>Dense turf</span><span>Clean edges</span><span>Healthy beds</span><span>Efficient water</span></div>
    <div class="showcase-note">Conceptual property transformation · not a customer before/after image</div>`;

  const h2oMarkup=`
    <div class="h2o-water-light"></div><div class="h2o-ground-reflection"></div>
    <div class="h2o-state"><span>THE CLEAN SHIFT</span><b>ROAD FILM <em>→</em> PROFESSIONAL FINISH</b></div>
    <div class="h2o-car-wrap">
      <div class="h2o-dirty">${h2oSvg(false)}</div>
      <div class="h2o-clean">${h2oSvg(true)}</div>
      <div class="h2o-pressure-sweep"><span></span><i></i></div>
      <div class="h2o-foam-edge"></div>
      <div class="h2o-water-beads">${[[24,29],[33,39],[43,26],[52,36],[62,24],[70,42],[79,29],[86,37],[57,47],[74,18],[91,26]].map(([x,y],i)=>`<i style="--x:${x}%;--y:${y}%;--d:${i*.06}s"></i>`).join('')}</div>
    </div>
    <div class="h2o-result-strip"><span>Grime lifted</span><span>Glass cleared</span><span>Wheels restored</span><span>Gloss returned</span></div>
    <div class="showcase-note">Conceptual wash transformation · mobile service comes to you</div>`;

  stage.classList.add('premium-signature','signature-'+key);
  stage.innerHTML={alpha:alphaMarkup,lush:lushMarkup,h2o:h2oMarkup}[key];

  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  if(reduce.matches){stage.classList.add('motion-reduced','is-active');return;}

  const io=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-active',entry.isIntersecting)),{threshold:.16,rootMargin:'12% 0px 12% 0px'});
  io.observe(stage);

  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    stage.addEventListener('pointermove',e=>{
      const r=stage.getBoundingClientRect();
      const x=((e.clientX-r.left)/r.width-.5).toFixed(3);
      const y=((e.clientY-r.top)/r.height-.5).toFixed(3);
      stage.style.setProperty('--premium-x',x);stage.style.setProperty('--premium-y',y);
    },{passive:true});
    stage.addEventListener('pointerleave',()=>{stage.style.setProperty('--premium-x',0);stage.style.setProperty('--premium-y',0)});
  }
})();
