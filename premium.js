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

  const alphaCarPath='M112 302C119 272 137 246 169 231C207 214 260 207 325 198C356 161 395 130 443 113C492 96 548 96 600 111C642 123 678 145 711 177C773 184 826 198 867 219C902 237 923 260 931 286L913 312H126C119 309 115 306 112 302Z';
  const alphaGlassPath='M350 194C382 157 416 132 456 118C500 103 548 104 592 116C630 127 663 146 694 178L653 184L363 184Z';
  const alphaWheel=(x,clean=true)=>`<g class="wheel wheel-${clean?'clean':'dirty'}" transform="translate(${x} 316)">
    <circle r="61" class="tire"/>
    <circle r="46" class="rim-outer"/>
    <circle r="32" class="rim-inner"/>
    <circle r="23" fill="none" stroke="rgba(185,198,203,.34)" stroke-width="2"/>
    <g class="spokes">${[0,36,72,108,144].map(a=>`<path d="M-30 0H30" transform="rotate(${a})"/>`).join('')}</g>
    <circle r="8" class="hub"/>
  </g>`;

  function alphaSvg(clean=false){
    const s=clean?'aClean':'aHaze';
    return `<svg viewBox="0 0 1000 430" role="img" aria-label="${clean?'Corrected glossy automotive finish':'Hazy automotive paint with visible swirl marks'}">
      <defs>
        <linearGradient id="${s}Body" x1=".08" y1="0" x2=".92" y2="1">
          ${clean
            ?'<stop offset="0" stop-color="#030608"/><stop offset=".16" stop-color="#10181c"/><stop offset=".34" stop-color="#39484e"/><stop offset=".445" stop-color="#b9c8cc"/><stop offset=".485" stop-color="#f5fbfc"/><stop offset=".535" stop-color="#65767c"/><stop offset=".69" stop-color="#172126"/><stop offset=".86" stop-color="#080d10"/><stop offset="1" stop-color="#020405"/>'
            :'<stop offset="0" stop-color="#121617"/><stop offset=".22" stop-color="#252c2e"/><stop offset=".42" stop-color="#4c5659"/><stop offset=".51" stop-color="#747d80"/><stop offset=".62" stop-color="#3a4244"/><stop offset=".82" stop-color="#202628"/><stop offset="1" stop-color="#0d1112"/>'}
        </linearGradient>
        <linearGradient id="${s}Glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${clean?'#d8edf0':'#7a878a'}" stop-opacity="${clean?'.78':'.48'}"/><stop offset=".42" stop-color="${clean?'#566e75':'#455154'}" stop-opacity=".7"/><stop offset="1" stop-color="#0b1216" stop-opacity=".96"/></linearGradient>
        <linearGradient id="${s}Blade" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#ffffff" stop-opacity="0"/><stop offset=".45" stop-color="#f7ffff" stop-opacity="${clean?'.72':'.24'}"/><stop offset=".62" stop-color="#ccebf0" stop-opacity="${clean?'.35':'.12'}"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
        <radialGradient id="${s}Lamp"><stop stop-color="#fff"/><stop offset=".42" stop-color="#e8fbff"/><stop offset="1" stop-color="#82b8c4"/></radialGradient>
      </defs>
      <ellipse cx="507" cy="367" rx="382" ry="24" class="car-shadow"/>
      <path d="${alphaCarPath}" fill="url(#${s}Body)" class="car-body"/>
      <path d="M135 295C276 279 422 274 561 278C703 282 821 280 910 293L899 310H137Z" fill="rgba(0,0,0,.26)"/>
      <path d="${alphaGlassPath}" fill="url(#${s}Glass)" class="car-glass"/>
      <path d="M456 118L442 184M592 116L611 183M522 106L524 184" class="glass-seams"/>
      <path d="M164 238C286 213 437 196 578 195C710 194 818 207 884 232M178 257C323 245 490 244 654 249C752 252 826 251 889 244M153 286C303 281 454 282 607 287C734 291 824 291 901 285" class="body-contours"/>
      <path d="M802 214C837 218 866 228 888 243L873 258L810 252Z" fill="url(#${s}Lamp)" class="headlamp"/>
      <path d="M146 257L198 249" class="rear-lamp"/>
      <path d="M443 184L430 292M612 183L626 294M706 180C724 211 733 248 735 292M796 207C824 205 849 209 872 221" class="panel-seams"/>
      <path d="M690 176L726 183L706 202L675 198Z" class="mirror"/>
      <path d="M224 223C345 203 492 191 628 196C729 200 810 209 866 226" fill="none" stroke="url(#${s}Blade)" stroke-width="7" stroke-linecap="round" opacity="${clean?'.88':'.36'}"/>
      <path d="M355 189C386 151 421 128 458 116C503 101 550 102 591 114" fill="none" stroke="rgba(247,255,255,${clean?'.68':'.21'})" stroke-width="3" stroke-linecap="round"/>
      ${alphaWheel(291,clean)}${alphaWheel(748,clean)}
      ${clean?`<g class="clean-highlights"><path d="M183 250C309 225 459 213 603 216C717 218 810 229 876 246"/><path d="M376 176C422 123 487 104 549 108C604 111 651 133 689 174"/><path d="M211 281C358 268 513 270 661 279C751 284 825 282 882 276"/></g>`:`<g class="paint-defects">
        <path d="M224 222c28-24 64-14 72 11s-20 48-49 42-35-33-16-47 46-12 55 8"/>
        <path d="M379 205c22-19 53-9 60 13 6 22-17 40-40 32-22-8-25-31-8-42 17-11 38-7 48 6"/>
        <path d="M557 226c31-22 68-8 70 20 2 26-32 42-58 27-22-13-18-38 4-49 21-10 43-5 55 11"/>
        <path d="M260 259l75-19M625 205l90-10M675 258l98-11M453 278l62-8" class="scratches"/>
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
