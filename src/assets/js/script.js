/* Datos de ejemplo: películas reales recientes (usa los ids para los posters) */
const movies = [
  { id:'smile', title:'Smile', year:2022, date:'2022-09-30', img:'img/Smile.png', actors:['Sosie Bacon','Kyle Gallner'], 
    synopsis:'La doctora Rose Cotter presencia un suceso traumático realmente perturbador: el suicidio espontáneo de un paciente frente a ella, acompañado por una risa malévola. Poco después, comienza a experimentar sucesos extraños y terroríficos — visiones inquietantes, susurros que parecieran burlarse de ella, sombras que insinúan algo sobrenatural. A medida que estos sucesos empeoran, Rose descubre que hay una entidad sobrenatural que se alimenta de su miedo, que se mina desde su pasado. Para sobrevivir, Rose debe enfrentar recuerdos oscuros y desentrañar la conexión entre su trauma personal y la entidad que la persigue, antes de quedar atrapada permanentemente en esta pesadilla viviente.', 
    review:'“Smile” combina terror psicológico con jump scares. No depende tanto de sangre como del ambiente opresivo y del suspenso. La protagonista (Sosie Bacon) da una actuación convincente; el diseño de sonidos, los momentos de silencio y los pequeños detalles visuales (una sonrisa distorsionada, reflejos, sombras) contribuyen a crear una atmósfera que “se mete bajo la piel”. Es ideal si te interesan películas que juegan con lo psicológico y lo sobrenatural.' },
  { id:'longlegs', title:'Longlegs', year:2024, date:'2024-10-01', img:'img/Longlegs.png', actors:['Maika Monroe'], 
    synopsis:'En la década de los 1990s en Oregon, la agente del FBI Lee Harker investiga una serie de horripilantes asesinatos y suicidios múltiples que ocurren mes a mes — siempre el día 14 — en que los hombres matan a sus familias. Cada escena deja una carta firmada con el nombre “Longlegs” y pistas crípticas que parecieran hechas para ser descifradas. Harker descubre que ella misma tiene una conexión involuntaria con el asesino: se empieza a ver envuelta en estos actos mientras examina su propia historia personal y respuestas que conectan a su familia con lo oculto. A medida que descifra el código que el asesino utiliza, los eventos se acercan cada vez más a ella, obligándola a confrontar qué tanto está dispuesta a arriesgar para detener esa pesadilla.', 
    review:'“Longlegs” mezcla horror sobrenatural y thriller de investigación. Tiene escenas que crean tensión prolongada; se utiliza mucho el simbolismo (cartas, fechas, rituales) y una atmósfera perturbadora. No es solo matar y correr — hay misterio, claves ocultas y una protagonista que arrastra cicatrices personales, lo que añade peso emocional al horror.' },
  { id:'first_omen', title:'The First Omen', year:2024, date:'2024-10-06', img:'img/The firts omen.png', actors:['Nell Tiger Free'], 
    synopsis:'Una joven americana, llamada Margaret, es enviada a Roma para comenzar una vida de servicio religioso en un orfanato católico. A simple vista todo parece piadoso y dedicado, pero muy pronto ella descubre señales inquietantes: rituales secretos, corrupción en lo alto de la Iglesia, y un plan oscuro que involucra la concepción de un nacimiento antinatural — el advenimiento del Anticristo. A medida que Margaret se adentra en la institución, encuentra conspiraciones, voces que le dicen mentiras disfrazadas de devoción, y una serie de sucesos sobrenaturales que la obligan a cuestionar su fe. El clímax revela conexiones perturbadoras con los mitos clásicos de “El Omen” y destapa verdades que la iglesia ha tratado de enterrar.', 
    review:'Esta película funciona como precuela del clásico “The Omen”. Tiene escenas de culto religioso, tonalidades oscuras, estética gótica y una narrativa lenta que busca generar terror desde lo simbólico, lo espiritual y lo psicológico. No abusa de sustos baratos, sino que va construyendo paranoia, fe cuestionada y consecuencias morales profundas.' },
  { id:'talktome2', title:'Talk to Me 2', year:2024, date:'2024-08-15', img:'img/Talk to me.png', actors:['Sophie Wilde'], 
    synopsis:'La historia se sitúa en el inicio del apocalipsis causado por alienígenas ciegos pero con una audición ultra sensible, los llamados “Death Angels”. Samira (“Sam”), una mujer enferma terminal de cáncer, vive en un hospice cerca de Nueva York. Reacio al dolor, se le convence de acompañar una excursión a la ciudad para asistir a un espectáculo de títeres, como una experiencia final significativa. De pronto, objetos semejantes a meteoros caen del cielo, seguido por invasión, caos, destrucción. Samira debe sobrevivir a la explosión, evitar los sonidos que atraen a los monstruos, protegerse junto a otros supervivientes como Reuben y Eric, y enfrentarse al hecho de que el mundo silencioso en que empezaba se vuelve mortal e impredecible.', 
    review:'Es un preámbulo del universo de A Quiet Place. Aquí el terror no está solo en lo que estás viendo, sino en lo que no puedes evitar hacer (hacer ruido, tocar algo, respirar demasiado fuerte). Hay un componente emocional fuerte, ya que Sam está enfrentando su propia mortalidad y usando sus últimos días para algo significativo. La atmósfera de miedo, confusión y culpa se mezcla con acción apocalíptica.' },
  { id:'aquietplace', title:'A Quiet Place: Day One', year:2024, date:'2024-06-28', img:'img/a quiet place.png', actors:['Lupita Nyong\'o'], 
    synopsis:'La historia se sitúa en el inicio del apocalipsis causado por alienígenas ciegos pero con una audición ultra sensible, los llamados “Death Angels”. Samira (“Sam”), una mujer enferma terminal de cáncer, vive en un hospice cerca de Nueva York. Reacio al dolor, se le convence de acompañar una excursión a la ciudad para asistir a un espectáculo de títeres, como una experiencia final significativa. De pronto, objetos semejantes a meteoros caen del cielo, seguido por invasión, caos, destrucción. Samira debe sobrevivir a la explosión, evitar los sonidos que atraen a los monstruos, protegerse junto a otros supervivientes como Reuben y Eric, y enfrentarse al hecho de que el mundo silencioso en que empezaba se vuelve mortal e impredecible.', 
    review:'Es un preámbulo del universo de A Quiet Place. Aquí el terror no está solo en lo que estás viendo, sino en lo que no puedes evitar hacer (hacer ruido, tocar algo, respirar demasiado fuerte). Hay un componente emocional fuerte, ya que Sam está enfrentando su propia mortalidad y usando sus últimos días para algo significativo. La atmósfera de miedo, confusión y culpa se mezcla con acción apocalíptica.' },
  { id:'thewatchers', title:'The Watchers', year:2024, date:'2024-07-12', img:'img/watchers.png', actors:['Olivia Cooke'], 
    synopsis:'Mina, una artista de 28 años, vive en Galway trabajando en una tienda de mascotas, escapando de su propia vida emocional. Una noche, su coche se descompone en medio de un bosque vasto e intacto del oeste de Irlanda. Buscando refugio, Mina entra en un refugio donde encuentra a tres personas más: forasteros tan perdidos como ella. Al caer la noche, descubren que algo los observa: criaturas sobrenaturales que los acechan, invisibles durante el día pero letales en la oscuridad. Sin escapatoria clara, Mina debe enfrentarse al temor de lo desconocido, al aislamiento, y a la sensación angustiosa de que cada sonido, cada sombra, podría ser su fin.', 
    review:'“El bosque” como elemento principal, la vulnerabilidad de los personajes, el miedo a lo que no se ve, y el aislamiento son usados para generar tensión constante. Hay también un fuerte componente psicológico — la identidad, el pasado, los traumas internos — que se manifiesta al ser confrontados por lo desconocido.' },
  { id:'hereditary', title:'Hereditary', year:2018, date:'2018-06-08', img:'img/hereditary.png', actors:['Toni Collette'], 
    synopsis:'Después de la muerte de Ellen, la abuela matriarca de la familia Graham, su hija Annie y los nietos comienzan a experimentar sucesos extraños: visiones perturbadoras, presencias invisibles, mensajes siniestros. Annie, una vidente amateur, empieza a desentrañar los secretos de la familia, incluyendo pactos oscuros y herencias demoníacas. La familia entera se ve atrapada en un destino que no solicitó, donde el trauma, el dolor y la pérdida se mezclan con lo sobrenatural. A medida que Annie investiga el legado secreto que la abuela dejó atrás, descubre horrores que van más allá de lo psicológico: sacrificios, entidades demoníacas, traiciones invisibles dentro del amor familiar. El desenlace revela que todo lo malvado ya estaba sembrado dentro del linaje, y que los personajes sólo eran peones en una herencia macabra diseñada antes de que ellos nacieran.', 
    review:'Es una película que parte del drama familiar para llevarte poco a poco hacia lo sobrenatural. No es terror basado sólo en sustos, sino en lo que no se ve, en la atmósfera, en el sentido de pérdida y lo inevitable. Toni Collette hace una actuación impresionante cargada de emociones crudas; la dirección de Ari Aster aprovecha los espacios cerrados, la iluminación sombreada y los sonidos ambientales para generar una sensación de inquietud constante.' }
];


const qs = s => document.querySelector(s);
const qsa = s => Array.from(document.querySelectorAll(s));

function renderIndex(){
  const grid = qs('#moviesGrid');
  if(!grid) return;
  const urlParams = new URLSearchParams(window.location.search);
  const page = parseInt(urlParams.get('page')) || 1;
  const perPage = 6;

  const yearFilter = qs('#filterYear');
  const sortSelect = qs('#sortSelect');

  let list = [...movies];

  const years = [...new Set(movies.map(m=>m.year))].sort((a,b)=>b-a);
  years.forEach(y=>{ if(!Array.from(yearFilter.options).some(o=>o.value==y)){ const opt=document.createElement('option'); opt.value=y; opt.textContent=y; yearFilter.appendChild(opt); }});

  if(yearFilter.value && yearFilter.value!=='all') list = list.filter(m=>String(m.year)===String(yearFilter.value));

  const q = (qs('#searchInput') && qs('#searchInput').value || '').toLowerCase().trim();
  if(q) list = list.filter(m=> (m.title + ' ' + m.actors.join(' ') + ' ' + m.synopsis).toLowerCase().includes(q));

  if(sortSelect.value==='date_desc') list.sort((a,b)=> new Date(b.date)-new Date(a.date));
  else if(sortSelect.value==='date_asc') list.sort((a,b)=> new Date(a.date)-new Date(b.date));
  else if(sortSelect.value==='title_asc') list.sort((a,b)=> a.title.localeCompare(b.title));

  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total/perPage));
  const start = (page-1)*perPage;
  const pageItems = list.slice(start, start+perPage);

  grid.innerHTML='';
  pageItems.forEach(movie=>{
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4';
    col.innerHTML = `
      <article class="card-movie position-relative">
        <img src="${movie.img}" alt="Poster ${movie.title}" onerror="this.src='img/placeholder.svg'">
        <div class="p-3">
          <h3 class="h6 mb-1"><a class="text-accent" href="detalle.html?id=${movie.id}">${movie.title}</a></h3>
          <p class="small text-muted mb-1">${movie.year} — ${movie.actors.join(', ')}</p>
          <p class="mb-0">${movie.synopsis.substring(0,100)}...</p>
        </div>
      </article>
    `;
    grid.appendChild(col);
  });

  const pagination = qs('#pagination');
  pagination.innerHTML='';
  for(let i=1;i<=totalPages;i++){
    const li = document.createElement('li');
    li.className = 'page-item ' + (i===page? 'active':'');
    li.innerHTML = `<a class="page-link" href="?page=${i}">${i}</a>`;
    pagination.appendChild(li);
  }
}

function renderDetail(){
  const detailEl = qs('#movieDetail');
  if(!detailEl) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const movie = movies.find(m=>m.id===id);
  if(!movie){ detailEl.innerHTML = '<p>Película no encontrada.</p>'; return; }

  detailEl.innerHTML = `
    <div class="col-12 col-md-4">
      <div class="card-movie">
        <img src="${movie.img}" alt="${movie.title}" onerror="this.src='img/placeholder.svg'">
      </div>
    </div>
    <div class="col-12 col-md-8">
      <h2 class="h4">${movie.title} <small class="text-muted">(${movie.year})</small></h2>
      <p class="small text-muted">Estreno: ${movie.date}</p>
      <p><strong>Actores:</strong> ${movie.actors.join(', ')}</p>
      <section aria-labelledby="sinopsis">
        <h3 id="sinopsis" class="h6">Sinopsis</h3>
        <p>${movie.synopsis}</p>
      </section>
      <section aria-labelledby="reseña">
        <h3 id="reseña" class="h6">Reseña</h3>
        <p>${movie.review}</p>
      </section>
    </div>
  `;

  renderComments(id);
}

/* Comments localStorage */
function getCommentsKey(id){ return `comments_${id}` }
function loadComments(id){ const raw = localStorage.getItem(getCommentsKey(id)); if(!raw) return []; try{return JSON.parse(raw)}catch(e){return []} }
function saveComments(id, arr){ localStorage.setItem(getCommentsKey(id), JSON.stringify(arr)) }

function renderComments(id){
  const list = qs('#commentsList');
  if(!list) return;
  const comments = loadComments(id);
  list.innerHTML='';
  if(comments.length===0) list.innerHTML='<div class="text-muted small">Sin comentarios aún.</div>';
  comments.forEach(c=>{
    const div = document.createElement('div');
    div.className='list-group-item';
    div.innerHTML = `<strong>${escapeHtml(c.author)}</strong> <span class="small text-muted">· ${new Date(c.date).toLocaleString()}</span><p class="mb-0">${escapeHtml(c.text)}</p>`;
    list.appendChild(div);
  });
}

function escapeHtml(str){ return String(str).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;') }

function setupIndexEvents(){
  const form = qs('#searchForm');
  const filterYear = qs('#filterYear');
  const sortSelect = qs('#sortSelect');
  const resetBtn = qs('#resetBtn');

  if(form){ form.addEventListener('submit', e=>{ e.preventDefault(); renderIndex(); }); }
  if(filterYear) filterYear.addEventListener('change', ()=>renderIndex());
  if(sortSelect) sortSelect.addEventListener('change', ()=>renderIndex());
  if(resetBtn) resetBtn.addEventListener('click', ()=>{ if(qs('#searchInput')) qs('#searchInput').value=''; if(qs('#filterYear')) qs('#filterYear').value='all'; if(qs('#sortSelect')) qs('#sortSelect').value='date_desc'; renderIndex(); });
}

function setupDetailEvents(){
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const commentForm = qs('#commentForm');
  if(commentForm){
    commentForm.addEventListener('submit', e=>{
      e.preventDefault();
      const author = qs('#author').value.trim();
      const text = qs('#comment').value.trim();
      if(!author||!text) return;
      const comments = loadComments(id);
      comments.unshift({author,text,date:new Date().toISOString()});
      saveComments(id, comments);
      qs('#author').value=''; qs('#comment').value='';
      renderComments(id);
    });
  }
}

function init(){ if(qs('#moviesGrid')){ setupIndexEvents(); renderIndex(); } if(qs('#movieDetail')){ setupDetailEvents(); renderDetail(); } }
document.addEventListener('DOMContentLoaded', init);
