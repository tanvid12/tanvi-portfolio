import { useState, useEffect } from 'react';

// ================= SOCIAL & CONTACT LINKS =================
const SOCIAL_LINKS = {
  email: 'mailto:durshetwartanvi02@gmail.com',
  emailText: 'durshetwartanvi02@gmail.com',
  github: 'https://github.com/tanvid12',
  linkedin: 'https://linkedin.com', // Add your LinkedIn URL here when ready
};

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'my-world', label: 'My World' },
  { id: 'contact', label: 'Contact' },
];

// ================= RESUME & GITHUB PROJECTS =================
const PROJECTS = [
  {
    id: 'nagara-architecture',
    title: 'AI-DRIVEN COMPUTATIONAL DESIGN FOR NAGARA TEMPLE ARCHITECTURE',
    subtitle: 'Final Year Sponsored Project',
    description:
      'An AI-assisted computational design system for generating traditional Nagara-style temple layouts using parametric modeling in Rhino and Grasshopper paired with a conversational RASA chatbot.',
    details:
      'Developing an AI-assisted workflow for Nagara-style architectural layouts. Uses Rhinoceros 3D and Grasshopper for parametric modeling and automated geometry generation, integrated with a RASA chatbot that translates user requirements directly into design parameters.',
    tech: ['Python', 'AI / ML', 'Rhino 3D', 'Grasshopper', 'RASA Chatbot'],
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    align: 'right',
    link: 'https://github.com/tanvid12/AI-Driven-Computational-Design-for-Nagara-Temple-Architecture',
  },
  {
    id: 'protest-watch',
    title: 'GLOBAL PROTEST WATCH',
    subtitle: 'Interactive Geo-Visualization Platform',
    description:
      'An interactive geo-visualization platform built using Python, FastAPI, MongoDB, TypeScript, and Leaflet.js that analyzes protest data using EDA and displays spatiotemporal trends worldwide.',
    details:
      'Conducted data preprocessing and Exploratory Data Analysis (EDA) in Python to identify spatiotemporal patterns and category distributions. Built a FastAPI backend with MongoDB storage and an interactive Leaflet.js dashboard to visualize global protest events.',
    tech: ['Python', 'FastAPI', 'TypeScript', 'Leaflet.js', 'MongoDB', 'EDA'],
    image:
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
    align: 'left',
    link: 'https://github.com/tanvid12/Global-Protest-Watch-',
  },
  {
    id: 'nextstop',
    title: 'NEXTSTEP',
    subtitle: 'Career Recommendation Platform',
    description:
      'A career recommendation platform built using Java, Spring Boot, TypeScript, and MySQL with full CRUD operations, JDBC connectivity, REST APIs, and MVC architecture.',
    details:
      'Designed an interactive career assessment quiz to collect and analyze student interests and preferences. Engineered a Spring Boot backend following MVC architecture with JDBC/MySQL connectivity and REST APIs to map assessment responses to tailored career paths.',
    tech: ['Java', 'Spring Boot', 'TypeScript', 'MySQL', 'REST APIs', 'MVC'],
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    align: 'right',
    link: 'https://github.com/tanvid12/NextStep',
  },
  {
    id: 'maharashtra-hydrology',
    title: 'MAHARASHTRA RIVER HYDROLOGY',
    subtitle: 'Satellite Remote Sensing & Water Dynamics',
    description:
      'Geospatial analysis of rainfall-driven surface water dynamics and response time lags across major Maharashtra reservoirs using Python, satellite remote sensing, and Google Earth Engine.',
    details:
      'Selected for paper presentation at HYDRO International Conference 2026 (IIT Indore). Investigates multi-year precipitation patterns, surface water extent indices, and hydrological response lags across four Maharashtra reservoirs using Python and Google Earth Engine.',
    tech: ['Python', 'Google Earth Engine', 'Remote Sensing', 'Data Analysis'],
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    align: 'left',
    link: 'https://github.com/tanvid12/maharashtra-river-hydrology',
  },
  {
    id: 'retail-dashboard',
    title: 'RETAIL SALES & CUSTOMER INTELLIGENCE DASHBOARD',
    subtitle: 'Python Data Analytics & Business Intelligence',
    description:
      'An end-to-end data analytics solution built in Python to uncover retail sales trends, customer segmentation insights, and revenue performance metrics.',
    details:
      'Performs data cleaning, exploratory data analysis (EDA), and statistical aggregation in Python to track revenue drivers, seasonal buying behavior, and customer retention cohorts through interactive visual reporting.',
    tech: ['Python', 'Pandas', 'NumPy', 'EDA', 'Data Visualization'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    align: 'right',
    link: 'https://github.com/tanvid12/Retail-Sales-Customer-Intelligence-Dashboard',
  },
];

// ================= RESUME INTERNSHIPS (Click card for details) =================
const INTERNSHIPS = [
  {
    id: 'passion-infotech',
    role: 'Software & Data Intern',
    company: 'Passion Infotech Pvt. Ltd.',
    projectTitle: 'Global Protest Watch | Full Stack Project',
    duration: 'Dec 2025 – Feb 2026',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Conducted Exploratory Data Analysis (EDA) using Python to analyze spatiotemporal trends and category distributions in protest datasets.',
      'Developed an interactive geo-visualization dashboard using Leaflet.js to map and explore geographical patterns and trends.',
      'Integrated structured data pipelines connecting Python analytics with MongoDB and frontend mapping views.',
    ],
    tech: ['Python', 'EDA', 'Leaflet.js', 'MongoDB', 'Full Stack'],
  },
  {
    id: 'skillcraft-tech',
    role: 'Web Development Intern',
    company: 'SkillCraft Technologies Pvt. Ltd.',
    projectTitle: 'ShopHub — Online Shopping Website',
    duration: 'Aug 2025 – Sept 2025',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Developed "ShopHub", a responsive online shopping web application built for smooth browsing across desktop and mobile screens.',
      'Gained practical experience in frontend development, component structuring, interactive product catalogs, and UI implementation.',
    ],
    tech: ['HTML/CSS', 'JavaScript', 'Responsive Web Design', 'Frontend'],
  },
];

// ================= MY WORLD SUB-VIEWS =================
const WORLD_SECTIONS = {
  reader: {
    eyebrow: "BOOKS I'VE READ",
    title: 'Reading',
    subtitle: 'A shelf of the books that have stayed with me.',
    heroImage:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    placeholderLabel: 'Book cover coming soon',
    items: [
      {
        title: 'Rework — Jason Fried & David Heinemeier Hansson',
        cover: '/book1.jpg',
        story:
          'A refreshing, no-nonsense look at building projects and working smart without getting bogged down by unnecessary planning.',
        lesson:
          'Start small, build momentum by shipping real work, and keep things simple instead of over-engineering.',
      },
      {
        title: 'The Alchemist — Paulo Coelho',
        cover: '/book2.jpg',
        story:
          'Following Santiago’s journey across the desert felt like a timeless reminder to trust curiosity and stay open to the path ahead.',
        lesson:
          'When you commit wholeheartedly to a goal, the lessons you pick up along the journey matter just as much as the destination.',
      },
      {
        title: 'Learning How to Fly — A.P.J. Abdul Kalam',
        cover: '/book3.jpg',
        story:
          'Reading Dr. Kalam’s reflections and speeches for students felt deeply encouraging and grounded in real-world perseverance.',
        lesson:
          'Curiosity, continuous learning, and resilience in the face of setbacks are what turn ambition into impact.',
      },
      {
        title: 'I Came Upon a Lighthouse — Shantanu Naidu',
        cover: '/book4.jpg',
        story:
          'A warm, heartfelt memoir capturing an unlikely friendship built on empathy, humor, and shared purpose.',
        lesson:
          'True leadership is rooted in humility, kindness, and paying genuine attention to the people around you.',
      },
      {
        title: "Can't Hurt Me — David Goggins",
        cover: '/book5.jpg',
        story:
          'An intense, unfiltered account of pushing past self-imposed limits and building mental toughness from the ground up.',
        lesson:
          'Most barriers are mental—discipline and accountability begin the moment you stop making excuses.',
      },
      {
        title: 'Tuesdays with Morrie — Mitch Albom',
        cover: '/book6.jpg',
        story:
          'A quiet, deeply moving series of conversations between a student and his former professor on what truly matters in life.',
        lesson:
          'Slow down, nurture meaningful relationships, and measure life by the empathy and warmth you share with others.',
      },
    ],
  },
  photographer: {
    eyebrow: 'THROUGH MY LENS',
    title: 'Photography',
    subtitle: 'A collection of frames, light, and everyday details I have captured.',
    heroImage: '/photo5.jpeg',
    placeholderLabel: 'Photo coming soon',
    items: [
      {
        title: 'Branches Against Overcast Skies',
        cover: '/photo1.jpeg',
        story:
          'Looking up at bare silhouettes stretching into a moody, overcast sky framed by green canopies on either side.',
        lesson:
          'Even in stark simplicity, contrast and negative space tell a strong visual story.',
      },
      {
        title: 'Sunset in the Rearview',
        cover: '/photo2.jpeg',
        story:
          'Caught the warm evening sky reflected inside a scooter mirror against a textured stone wall right after a ride.',
        lesson:
          'Perspective changes everything—sometimes the best frame is hidden in an ordinary everyday object.',
      },
      {
        title: 'Dusk Over the Still Pond',
        cover: '/photo3.jpeg',
        story:
          'Watched the sun dip low beside soft pastel clouds while tall reeds and trees mirrored cleanly on the water below.',
        lesson:
          'Quiet moments at the end of the day bring clarity when you pause long enough to notice them.',
      },
      {
        title: 'Afternoon Shadows on the Trail',
        cover: '/photo4.jpeg',
        story:
          'Walking along a tree-lined path where late afternoon sunlight cast crisp geometric fence shadows across the red earth.',
        lesson:
          'Light and shadow work together to turn an ordinary walkway into rhythm and structure.',
      },
      {
        title: 'Golden Clouds & Flight',
        cover: '/photo5.jpeg',
        story:
          'Captured towering cumulus clouds lit up in warm amber as a flock of birds drifted across the evening sky.',
        lesson:
          'Patience with timing turns fleeting natural moments into lasting frames.',
      },
      {
        title: 'Under the Green Canopy',
        cover: '/photo6.jpeg',
        story:
          'A busy city avenue shaded completely by overarching rain trees, blending daily motion with calm greenery overhead.',
        lesson:
          'Nature and urban rhythm can coexist harmoniously when given room to grow.',
      },
      {
        title: 'Festive Grace in Incense Mist',
        cover: '/photo7.jpeg',
        story:
          'Framed the intricate golden crown and peacock-arch backdrop softly veiled in swirling incense smoke during celebrations.',
        lesson:
          'Atmosphere and emotion give a photograph warmth far beyond technical sharpness alone.',
      },
      {
        title: 'Silver Lining Through the Leaves',
        cover: '/photo8.jpeg',
        story:
          'Spotted the bright sun-lit rim of a dark cloud glowing right behind silhouetted leaves at dusk.',
        lesson:
          'Looking closely at edges and highlights reveals beauty even in dim lighting.',
      },
      {
        title: 'Hidden Shrine in the Forest',
        cover: '/photo9.jpeg',
        story:
          'Peered through dense monsoon foliage to frame a quiet hilltop temple and saffron flag nestled in the green hills.',
        lesson:
          'Natural framing draws the eye inward and rewards curiosity off the main trail.',
      },
      {
        title: 'Morning Sun Through Wrought Iron',
        cover: '/photo10.jpeg',
        story:
          'Captured the warm morning sun flaring softly through the scrollwork of an iron gate overlooking a lush green field.',
        lesson:
          'Everyday patterns and backlighting can turn a simple gate into a striking frame.',
      },
    ],
  },
  traveller: {
    eyebrow: 'PLACES & STORIES',
    title: 'Traveller',
    subtitle: 'Journeys, trails, and new perspectives from places I have explored.',
    heroImage: '/travel8.jpeg',
    placeholderLabel: 'Destination photo coming soon',
    items: [
      {
        title: 'Temple Gopuram',
        cover: '/travel1.jpg',
        story:
          'Standing beneath the towering, intricately sculpted gopuram felt surreal—every tier told a story carved in stone.',
        lesson:
          'Great craftsmanship takes patience; every small detail contributes to the strength and beauty of the whole.',
      },
      {
        title: 'Shri Mahakaleshwar, Ujjain',
        cover: '/travel2.jpeg',
        story:
          'Experiencing the evening lights and devotion at Mahakaleshwar was deeply grounding amidst the energy of the crowd.',
        lesson:
          'Inner stillness is possible even in the busiest, most overwhelming environments.',
      },
      {
        title: 'Charminar, Hyderabad',
        cover: '/travel3.jpeg',
        story:
          'Looking up at the arches and minarets against the clear sky while exploring the bustling lanes around it was unforgettable.',
        lesson:
          'History lives in everyday culture—slowing down to observe your surroundings reveals stories you would otherwise walk past.',
      },
      {
        title: 'Gateway of India, Mumbai',
        cover: '/travel4.jpeg',
        story:
          'Watching the golden sunset glow behind the monument by the sea gave a peaceful pause to a fast-moving city.',
        lesson:
          'Even in fast-paced places, taking a quiet moment to step back brings clarity and perspective.',
      },
      {
        title: 'Rajwada Palace, Indore',
        cover: '/travel5.jpeg',
        story:
          'Admiring the blend of Maratha and Mughal wooden balconies and stone arches felt like stepping straight into history.',
        lesson:
          'Blending different styles and perspectives creates something far richer and more timeless than sticking to just one.',
      },
      {
        title: 'Ancient Stone Kund & Shrine',
        cover: '/travel6.jpeg',
        story:
          'Discovering this quiet stone temple reflected in the still water surrounded by trees felt like finding a hidden sanctuary.',
        lesson:
          'Some of the most meaningful experiences lie off the usual path when you stay curious enough to explore.',
      },
      {
        title: 'Prakasam Barrage, Vijayawada',
        cover: '/travel7.jpeg',
        story:
          'Watching the rushing river water flow steadily across the long bridge with hills in the distance was refreshing and calming.',
        lesson:
          'Consistency and steady flow overcome resistance far better than rushing all at once.',
      },
      {
        title: 'Omkareshwar Ghat, Narmada',
        cover: '/travel8.jpeg',
        story:
          'Looking across the vibrant boats and sacred ghats along the Narmada river was full of warmth, color, and life.',
        lesson:
          'Every journey brings people from different walks of life together—openness turns unfamiliar places into familiar memories.',
      },
    ],
  },
};

const ScribbleUnderline = () => (
  <svg
    className="w-36 h-4 mx-auto -mt-1 text-[#6B5B4E]"
    viewBox="0 0 180 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12C35 6 65 16 95 9C115 4 135 16 175 7M30 16C55 12 85 18 115 13"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [activeWorldView, setActiveWorldView] = useState(null);
  const [selectedWorldItem, setSelectedWorldItem] = useState(null);
  const [showSideNav, setShowSideNav] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setShowSideNav(window.scrollY > 350);

      // If scrolled near the very bottom of the page, activate Contact
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120;
      if (nearBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWorldView = (key) => {
    setSelectedWorldItem(null);
    setActiveWorldView(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ================= DEDICATED VIEW: READING / PHOTOGRAPHY / TRAVELLER =================
  if (activeWorldView) {
    const view = WORLD_SECTIONS[activeWorldView];
    return (
      <div className="min-h-screen bg-cream text-[#1E1E1E] selection:bg-terracotta selection:text-white">
        <header className="w-full border-b border-stone-400/60">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex flex-wrap justify-between items-center gap-4">
            <button
              onClick={() => {
                setSelectedWorldItem(null);
                setActiveWorldView(null);
              }}
              className="font-serif text-lg flex items-center gap-2 text-terracotta hover:opacity-80 transition cursor-pointer"
            >
              <span>←</span> Back to Portfolio
            </button>

            <div className="flex gap-6 font-serif text-base">
              {['reader', 'photographer', 'traveller'].map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => {
                    setSelectedWorldItem(null);
                    setActiveWorldView(tabKey);
                  }}
                  className={`cursor-pointer transition-colors ${
                    activeWorldView === tabKey
                      ? 'text-terracotta font-semibold underline underline-offset-4'
                      : 'text-stone-600 hover:text-terracotta'
                  }`}
                >
                  {WORLD_SECTIONS[tabKey].title}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500">
                {view.eyebrow}
              </p>
              <h1 className="mt-2 font-serif italic text-5xl md:text-6xl text-forest">
                {view.title}
              </h1>
              <p className="mt-4 text-base md:text-lg text-stone-600">
                {view.subtitle}
              </p>
              <p className="mt-2 text-xs font-serif italic text-terracotta">
                Click any photo to read my experience &amp; what I learnt there.
              </p>
            </div>

            <div className="md:col-span-6 flex justify-end">
              <div className="w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-md">
                <img
                  src={view.heroImage}
                  alt={view.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {view.items.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => item.cover && setSelectedWorldItem(item)}
                className={`group flex flex-col text-left ${
                  item.cover ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="w-full aspect-[3/4] rounded-2xl bg-cream-dark border border-dashed border-stone-300 overflow-hidden flex items-center justify-center relative">
                  {item.cover ? (
                    <>
                      <img
                        src={item.cover}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-end p-3">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-serif italic bg-cream/95 text-terracotta px-3 py-1 rounded-full shadow-xs">
                          Read story →
                        </span>
                      </div>
                    </>
                  ) : (
                    <span className="text-xs text-stone-400 p-4 text-center">
                      {view.placeholderLabel}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-xs font-medium text-stone-700 group-hover:text-terracotta transition-colors">
                  {item.title}
                </p>
              </button>
            ))}
          </div>
        </main>

        {/* ================= EXPERIENCE & TAKEAWAY MODAL ================= */}
        {selectedWorldItem && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedWorldItem(null)}
          >
            <div
              className="bg-cream max-w-2xl w-full rounded-3xl overflow-hidden border border-stone-300 shadow-2xl grid md:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:col-span-5 h-64 md:h-auto bg-stone-200">
                <img
                  src={selectedWorldItem.cover}
                  alt={selectedWorldItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-7 p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-500">
                    {view.title} Journal
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-terracotta font-semibold">
                    {selectedWorldItem.title}
                  </h3>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                      The Experience
                    </p>
                    <p className="mt-1.5 font-serif text-base text-stone-800 leading-relaxed">
                      {selectedWorldItem.story}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gold/60">
                    <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                      What I Learnt
                    </p>
                    <p className="mt-1.5 font-serif italic text-base text-stone-900 leading-relaxed">
                      &ldquo;{selectedWorldItem.lesson}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedWorldItem(null)}
                    className="px-5 py-1.5 rounded-full border border-stone-400 text-xs font-medium hover:border-terracotta hover:text-terracotta transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ================= MAIN PORTFOLIO PAGE =================
  return (
    <div id="home" className="min-h-screen bg-cream text-[#1E1E1E] selection:bg-terracotta selection:text-white">
      {/* ================= TOP NAVBAR WITH TD LOGO ================= */}
      <header className="w-full border-b border-stone-400/60">
        <nav className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            aria-label="Tanvi Durshetwar Home"
          >
            <span className="w-10 h-10 rounded-full border border-terracotta flex items-center justify-center font-serif text-lg font-bold tracking-tighter text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors">
              TD
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-6 md:gap-8 font-serif text-base md:text-lg">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-terracotta transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* ================= FLOATING LEFT-SIDE SCROLL PANEL ================= */}
      <aside
        aria-label="Section navigation"
        className={`hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 bg-cream/90 backdrop-blur-xs border border-stone-300/80 px-4 py-5 rounded-2xl shadow-sm transition-all duration-300 ${
          showSideNav
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-6 pointer-events-none'
        }`}
      >
        <a
          href="#home"
          className="font-serif text-sm font-bold text-terracotta border-b border-stone-300 pb-2 mb-1 text-center"
        >
          TD.
        </a>
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-2.5 font-serif text-sm transition-colors ${
                isActive
                  ? 'text-terracotta font-semibold'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              <span
                className={`h-[1.5px] transition-all duration-200 ${
                  isActive ? 'w-4 bg-terracotta' : 'w-2 bg-stone-400'
                }`}
              />
              {item.label}
            </a>
          );
        })}
      </aside>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 text-center flex flex-col items-center">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight text-black">
            Tanvi
            <br />
            Durshetwar
          </h1>

          <p className="mt-4 text-2xl md:text-3xl font-medium text-terracotta">
            Data Analyst
          </p>

          <div className="mt-4 font-serif text-lg leading-snug text-stone-800">
            <p className="italic">Savitri Bai Phule Pune University</p>
            <p>Information Technology student</p>
          </div>

          <p className="mt-8 font-serif italic text-xl md:text-2xl text-terracotta">
            Building, learning, and evolving.
          </p>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-8 font-serif italic text-lg text-stone-800">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Pune, India
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
              B.E. IT (2023–2027)
            </span>
          </div>
        </div>

        {/* Portrait Photo */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-md bg-stone-200">
            <img
              src="/photo.jpg"
              alt="Tanvi Durshetwar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ME SECTION ================= */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-terracotta">
            About me
          </h2>
          <ScribbleUnderline />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 text-center font-serif text-lg md:text-xl leading-relaxed text-stone-900 space-y-3">
            <p className="font-medium">Hi, I&apos;m Tanvi!</p>
            <p>
              I&apos;m a final-year Information Technology student with a strong foundation in
              Python, SQL, data analysis, and statistics. I enjoy turning raw data and ideas
              into practical, data-driven, and AI-assisted solutions.
            </p>
            <p>
              From computational architectural design and satellite remote-sensing research to
              interactive geo-visualization dashboards, I love building meaningful software while
              continuously learning new tools.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects">
        <div className="bg-terracotta py-14 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            <div className="h-64 overflow-hidden rounded-t-full border-2 border-cream/80 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80"
                alt="Nagara Temple Computational Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-72 overflow-hidden border-2 border-cream/80 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1591848478625-de43268e6fb8?auto=format&fit=crop&w=600&q=80"
                alt="Global Protest Watch"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-b-full border-2 border-cream/80 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80"
                alt="NextStep Career Recommendation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-terracotta">
              Projects
            </h2>
            <p className="text-xs text-stone-600 mt-2">
              Here are some of the projects I worked on
            </p>
            <ScribbleUnderline />
          </div>

          <div className="space-y-20">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="grid md:grid-cols-12 gap-10 items-center"
              >
                <div
                  className={`md:col-span-5 ${
                    project.align === 'left' ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div className="overflow-hidden border border-stone-400 bg-white shadow-sm aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`md:col-span-7 text-center px-2 ${
                    project.align === 'left' ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <h3 className="font-serif italic text-xl md:text-2xl text-stone-900">
                    {project.title}
                    {project.subtitle && (
                      <span className="font-normal"> — {project.subtitle}</span>
                    )}
                  </h3>
                  <p className="mt-3 font-serif italic text-base md:text-lg text-stone-700 leading-relaxed max-w-lg mx-auto">
                    {project.description}
                  </p>

                  <div className="mt-6 flex justify-center gap-6">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-8 py-1.5 rounded-full bg-white border border-stone-300 font-serif text-base text-stone-800 hover:border-terracotta hover:text-terracotta transition cursor-pointer"
                    >
                      details
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-7 py-1.5 rounded-full bg-white border border-stone-300 font-serif italic text-base text-stone-800 hover:border-terracotta hover:text-terracotta transition"
                    >
                      view project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCES & INTERNSHIPS SECTION ================= */}
      <section id="experiences" className="bg-forest text-cream py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center">
            Experiences
          </h2>
          <div className="w-56 h-[2px] bg-cream/80 mx-auto mt-6 rounded-full" />

          <div className="mt-16 grid md:grid-cols-12 gap-12 items-start">
            {/* Left Side: Clickable Internship Cards (Photo + Project Name upfront, Info on Click) */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                  INTERNSHIPS
                </p>
                <span className="text-xs font-serif italic text-cream/70">
                  Click an internship to view details
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {INTERNSHIPS.map((intern) => (
                  <button
                    key={intern.id}
                    type="button"
                    onClick={() => setSelectedInternship(intern)}
                    className="group text-left bg-cream/5 border border-gold/40 hover:border-gold rounded-2xl overflow-hidden transition-all hover:-translate-y-1 cursor-pointer flex flex-col"
                  >
                    {/* Internship Photo */}
                    <div className="w-full h-44 overflow-hidden bg-stone-800 relative">
                      <img
                        src={intern.image}
                        alt={intern.projectTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 right-3 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-forest/90 text-gold border border-gold/50">
                        {intern.duration}
                      </span>
                    </div>

                    {/* Company & Project Name Only (Details open on click) */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                          {intern.company}
                        </p>
                        <h3 className="mt-1 font-serif text-xl text-cream group-hover:text-gold transition-colors">
                          {intern.projectTitle}
                        </h3>
                      </div>

                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-serif italic text-cream/80 group-hover:text-gold">
                        View role &amp; work →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Research Presentation & Leadership */}
            <div className="md:col-span-5 space-y-6 md:mt-8">
              <div className="bg-cream/5 border border-gold/40 rounded-2xl p-7">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">
                  RESEARCH &amp; CONFERENCE
                </p>
                <h4 className="mt-2 font-serif text-xl text-cream leading-snug">
                  HYDRO International Conference 2026, IIT Indore
                </h4>
                <p className="mt-1 font-serif italic text-xs text-gold/90">
                  Selected for Paper Presentation
                </p>
                <div className="w-full h-[1px] bg-gold/50 my-4" />
                <p className="text-sm text-cream/85 leading-relaxed">
                  <em>
                    Comparative Analysis of Rainfall-Driven Surface Water Dynamics and Response Time
                    Lags in Maharashtra Reservoirs Using Satellite Remote Sensing and Google Earth Engine
                  </em>{' '}
                  — analyzed multi-year rainfall and reservoir water extent across four Maharashtra
                  reservoirs using Python and GEE.
                </p>
              </div>

              <div className="bg-cream/5 border border-gold/30 rounded-2xl p-6">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">
                  CAMPUS ROLES (BVCOEW)
                </p>
                <p className="mt-2 text-sm text-cream/85 leading-relaxed">
                  Member — Training &amp; Placement Cell &bull; Social Media Head — Art Circle &bull;
                  Volunteer — National Service Scheme (NSS)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MY WORLD SECTION ================= */}
      <section id="my-world" className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-terracotta">
            My World
          </h2>
          <ScribbleUnderline />
        </div>

        <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
          {[
            {
              key: 'reader',
              role: 'Reader',
              subtitle: 'Avid Reader',
              desc: 'Always finding my next read.',
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              ),
            },
            {
              key: 'photographer',
              role: 'Photographer',
              subtitle: 'Capturing Moments',
              desc: 'Finding beauty in everyday details.',
              icon: (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                  />
                </>
              ),
            },
            {
              key: 'traveller',
              role: 'Traveller',
              subtitle: 'Always Exploring',
              desc: 'Curious about new places and experiences.',
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 18l5.5-8.5 3.5 5 3-4 6 7.5H3z"
                />
              ),
            },
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => openWorldView(item.key)}
              className="group flex flex-col items-center p-4 rounded-2xl hover:bg-cream-dark/70 transition cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-terracotta text-cream flex items-center justify-center ring-2 ring-terracotta ring-offset-2 ring-offset-cream mb-4 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-serif text-lg font-medium group-hover:text-terracotta transition-colors">
                {item.role}
              </h3>
              <div className="w-full h-[1.5px] bg-gold my-3" />
              <p className="text-xs font-semibold text-stone-800">{item.subtitle}</p>
              <p className="text-xs text-stone-600 mt-0.5">{item.desc}</p>
              <span className="mt-3 text-[11px] font-serif italic text-terracotta opacity-80 group-hover:opacity-100">
                Explore →
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ================= FULL-PAGE CONTACT & FOOTER ================= */}
      <footer
        id="contact"
        className="min-h-screen border-t border-stone-300 px-6 md:px-12 py-20 flex flex-col justify-between items-center text-center bg-cream-dark/40"
      >
        <div className="w-full" />

        <div className="max-w-xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-stone-500">
            GET IN TOUCH
          </p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl text-terracotta">
            Let&apos;s Connect
          </h2>
          <ScribbleUnderline />

          <p className="mt-6 text-base md:text-lg text-stone-700 leading-relaxed">
            Open to AI/ML Engineer, Python Developer, and Software Development roles. Feel free
            to reach out for opportunities, collaborations, or a conversation about tech and books.
          </p>

          <p className="mt-5 font-serif italic text-xl text-stone-900">
            {SOCIAL_LINKS.emailText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-5 font-serif text-lg">
            <a
              href={SOCIAL_LINKS.email}
              className="px-8 py-2.5 rounded-full bg-terracotta text-cream hover:opacity-90 transition shadow-xs"
            >
              Email Me
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-2.5 rounded-full border border-stone-400 bg-cream hover:border-terracotta hover:text-terracotta transition"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-2.5 rounded-full border border-stone-400 bg-cream hover:border-terracotta hover:text-terracotta transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <p className="text-xs text-stone-500 pt-12">
          © 2026 Tanvi Durshetwar. Built with React &amp; Tailwind CSS.
        </p>
      </footer>

      {/* ================= PROJECT DETAILS MODAL ================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-cream max-w-lg w-full rounded-2xl p-8 border border-stone-300 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-2xl text-terracotta font-semibold">
              {selectedProject.title}
            </h3>
            {selectedProject.subtitle && (
              <p className="font-serif italic text-stone-600 mt-1">{selectedProject.subtitle}</p>
            )}
            <p className="mt-4 text-stone-800 leading-relaxed text-sm">
              {selectedProject.details}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-cream-dark text-stone-700 border border-stone-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-1.5 rounded-full border border-stone-400 text-sm cursor-pointer hover:bg-stone-200"
              >
                Close
              </button>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-1.5 rounded-full bg-terracotta text-cream text-sm"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= INTERNSHIP DETAILS MODAL ================= */}
      {selectedInternship && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedInternship(null)}
        >
          <div
            className="bg-cream max-w-xl w-full rounded-3xl overflow-hidden border border-stone-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-52 bg-stone-200 relative">
              <img
                src={selectedInternship.image}
                alt={selectedInternship.projectTitle}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-6 text-xs font-medium px-3 py-1 rounded-full bg-forest text-gold border border-gold/50">
                {selectedInternship.duration}
              </span>
            </div>

            <div className="p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                {selectedInternship.company}
              </p>
              <h3 className="mt-1 font-serif text-2xl text-stone-900 font-semibold">
                {selectedInternship.role}
              </h3>
              <p className="font-serif italic text-base text-stone-600 mt-0.5">
                Project: {selectedInternship.projectTitle}
              </p>

              <ul className="mt-4 space-y-2.5 text-sm text-stone-800 leading-relaxed list-disc list-inside">
                {selectedInternship.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {selectedInternship.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-cream-dark text-stone-700 border border-stone-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedInternship(null)}
                  className="px-6 py-1.5 rounded-full bg-forest text-cream text-sm cursor-pointer hover:opacity-90 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}