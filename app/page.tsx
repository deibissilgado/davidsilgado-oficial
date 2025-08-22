"use client";
import React from "react";
import { motion } from "framer-motion";
import { Music2, Youtube, Phone, Mail, MapPin, CalendarDays, ExternalLink, Instagram, Facebook, Twitter } from "lucide-react";

const releases = [
  { title: "Gracia Eterna", year: 2024, kind: "Single", links: { spotify: "https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4", apple: "https://music.apple.com/es/album/gracia-eterna-single/1737621541", youtube: "https://www.youtube.com/watch?v=EvBc8LxmpCY" } },
  { title: "Gozo Eterno", year: 2024, kind: "Single", links: { spotify: "https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4", apple: "https://music.apple.com/", youtube: "https://www.youtube.com/c/DavidSilgado" } },
  { title: "No Podría Hacerlo", year: 2024, kind: "Single", links: { spotify: "https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4", apple: "https://music.apple.com/", youtube: "https://www.youtube.com/watch?v=93952CK2QH8" } },
  { title: "Vestido en Majestad", year: 2023, kind: "Single", links: { spotify: "https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4", apple: "https://music.apple.com/", youtube: "https://www.youtube.com/c/DavidSilgado" } },
  { title: "Soberano Dios", year: 2023, kind: "Single", links: { spotify: "https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4", apple: "https://music.apple.com/", youtube: "https://www.youtube.com/watch?v=2xTRPThQYJ4" } },
  { title: "Solo Gracias", year: 2023, kind: "Single", links: { spotify: "https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4", apple: "https://music.apple.com/", youtube: "https://www.youtube.com/c/DavidSilgado" } },
  { title: "Me Diste Libertad", year: 2023, kind: "Single", links: { spotify: "https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4", apple: "https://music.apple.com/", youtube: "https://www.youtube.com/watch?v=HeTLwNcIdJk" } },
  { title: "Lluvia de Dios", year: 2023, kind: "Single", links: { spotify: "https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4", apple: "https://music.apple.com/us/album/lluvia-de-dios-single/1695440776", youtube: "https://www.youtube.com/watch?v=nusZH-5_4OU" } },
  { title: "Declaramos Que el Reino de Dios Está Aquí", year: 2021, kind: "Single", links: { spotify: "https://open.spotify.com/track/7bHIfc2BM8LFAtZ3CVl69Y", apple: "https://music.apple.com/us/album/declaramos-que-el-reino-de-dios-est%C3%A1-aqu%C3%AD-single/1591213049", youtube: "https://www.youtube.com/c/DavidSilgado" } },
  { title: "En Honor a Ti", year: 2018, kind: "Álbum", links: { spotify: "https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4", apple: "https://music.apple.com/", youtube: "https://www.youtube.com/c/DavidSilgado" } },
];

const videos = [
  { title: "Lo Que Más Quiero", youtubeId: "EvBc8LxmpCY" },
  { title: "Lluvia de Dios (Lyrics)", youtubeId: "nusZH-5_4OU" },
];

const socials = [
  { title: "YouTube", href: "https://www.youtube.com/c/DavidSilgado", Icon: Youtube },
  { title: "Instagram", href: "https://www.instagram.com/david.silgado/", Icon: Instagram },
  { title: "Facebook", href: "https://www.facebook.com/davidsilgadomusic/", Icon: Facebook },
  { title: "X / Twitter", href: "https://twitter.com/davidsilgado7", Icon: Twitter },
];

export default function ArtistSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-wide text-lg">DAVID SILGADO</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#bio" className="hover:opacity-80">Bio</a>
            <a href="#music" className="hover:opacity-80">Música</a>
            <a href="#videos" className="hover:opacity-80">Videos</a>
            <a href="#agenda" className="hover:opacity-80">Agenda</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </div>
          <div className="flex gap-3">
            {socials.map(({ title, href, Icon }) => (
              <a key={title} aria-label={title} href={href} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-white/10 transition">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),rgba(0,0,0,0))]" />
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              David Silgado
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Artista cristiano. Canciones que levantan fe y esperanza.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-emerald-500 hover:bg-emerald-400 transition shadow"
              >
                <Music2 className="w-5 h-5" /> Escuchar en Spotify
              </a>
              <a
                href="https://www.youtube.com/c/DavidSilgado"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-red-500 hover:bg-red-400 transition shadow"
              >
                <Youtube className="w-5 h-5" /> Ver en YouTube
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <iframe
              title="Spotify Embed"
              className="w-full h-[380px]"
              src="https://open.spotify.com/embed/artist/3mjODOmn1RbJhS27A2I9f4"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </motion.div>
        </div>
      </section>

      {/* BIO */}
      <section id="bio" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold">Biografía</h2>
            <p className="text-white/80 leading-relaxed">
              David Silgado es un cantautor cristiano cuya música proclama fe, adoración y esperanza. Con sencillos como
              <em> "Gracia Eterna", "Gozo Eterno", "No Podría Hacerlo", "Vestido en Majestad", "Soberano Dios"</em> y
              <em> "Lluvia de Dios"</em>, ha compartido mensajes de vida y devoción a través de plataformas digitales y presentaciones en vivo.
            </p>
            <p className="text-white/70 leading-relaxed">
              Su proyecto destaca por letras bíblicas y arreglos contemporáneos, con influencias de pop y adoración moderna. La visión del ministerio:
              llevar a las personas a un encuentro con Jesús a través de cada canción.
            </p>
          </div>
          <div className="md:col-span-2 bg-white/5 rounded-3xl p-6 border border-white/10">
            <h3 className="font-semibold text-lg mb-3">Contrataciones</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> mirandajarava@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +57 300 745 3452</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Colombia</li>
            </ul>
            <a
              href="#contacto"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-slate-900 hover:bg-white/90 transition"
            >
              Escríbeme <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Lanzamientos</h2>
          <a
            href="https://open.spotify.com/intl-es/artist/3mjODOmn1RbJhS27A2I9f4"
            className="text-sm opacity-80 hover:opacity-100 inline-flex items-center gap-2"
            target="_blank" rel="noreferrer"
          >
            Ver todos <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {releases.map((r) => (
            <div key={r.title} className="group border border-white/10 rounded-3xl p-5 bg-white/5 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{r.title}</h3>
                  <p className="text-white/60 text-sm">{r.kind} • {r.year}</p>
                </div>
                <Music2 className="w-6 h-6 opacity-70" />
              </div>
              <div className="mt-4 flex gap-3 flex-wrap">
                <a href={r.links.spotify} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-sm">Spotify</a>
                <a href={r.links.apple} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-xl bg-white/20 hover:bg-white/30 text-sm">Apple Music</a>
                <a href={r.links.youtube} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-sm">YouTube</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Videos</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {videos.map((v) => (
            <div key={v.youtubeId} className="rounded-3xl overflow-hidden border border-white/10 bg-black">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-white/90">{v.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Agenda</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-3xl border border-white/10 p-5 bg-white/5">
              <div className="flex items-center gap-3 text-white/80"><CalendarDays className="w-5 h-5" /> Próxima fecha #{i}</div>
              <p className="text-white/60 mt-2 text-sm">Añade aquí tus eventos confirmados: ciudad, iglesia o venue, y link de registro.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-white/10 p-6 bg-white/5 space-y-4">
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input className="w-full rounded-xl bg-black/30 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-white/30" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full rounded-xl bg-black/30 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-white/30" placeholder="tunombre@email.com" />
            </div>
            <div>
              <label className="block text-sm mb-1">Mensaje</label>
              <textarea className="w-full rounded-xl bg-black/30 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-white/30" rows={5} placeholder="Cuéntanos sobre el evento" />
            </div>
            <button className="rounded-2xl px-5 py-3 bg-white text-slate-900 hover:bg-white/90 transition w-full md:w-auto">Enviar</button>
          </form>

          <div className="rounded-3xl border border-white/10 p-6 bg-white/5 space-y-4">
            <p className="text-white/80">Para invitaciones y eventos:</p>
            <div className="flex items-center gap-2 text-white/90"><Mail className="w-4 h-4" /> mirandajarava@gmail.com</div>
            <div className="flex items-center gap-2 text-white/90"><Phone className="w-4 h-4" /> +57 300 745 3452</div>
            <p className="text-sm text-white/60">También puedes escribir por redes sociales.</p>
            <div className="flex gap-3 pt-2">
              {socials.map(({ title, href, Icon }) => (
                <a key={title} aria-label={title} href={href} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-white/10 transition">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} David Silgado. Todos los derechos reservados.</p>
          <div className="flex gap-3">
            {socials.map(({ title, href, Icon }) => (
              <a key={title} aria-label={title} href={href} target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-white/10 transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}