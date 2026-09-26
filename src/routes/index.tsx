import { createFileRoute } from "@tanstack/react-router";
import roseliAsset from "@/assets/roseli.png";

const WHATSAPP_URL =
  "https://wa.me/5511913630500?text=" +
  encodeURIComponent(
    "Olá Roseli! Vi seu site e gostaria de agendar um horário. 😊"
  );

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Roseli Manicure e Pedicure em Caieiras/SP",
      },
      {
        name: "description",
        content:
          "Manicure e pedicure em Caieiras/SP com 15 anos de experiência. Agende seu horário pelo WhatsApp (11) 9 1363-0500.",
      },
      {
        property: "og:title",
        content: "Roseli Manicure e Pedicure em Caieiras/SP",
      },
      {
        property: "og:description",
        content:
          "Há 15 anos cuidando das suas mãos e pés em Caieiras. Agende pelo WhatsApp (11) 9 1363-0500.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Roseli Manicure e Pedicure em Caieiras/SP",
      },
      {
        name: "twitter:description",
        content:
          "Há 15 anos cuidando das suas mãos e pés em Caieiras. Agende pelo WhatsApp (11) 9 1363-0500.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white font-body text-brand-ink">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-brand-soft bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <span className="font-display text-2xl font-bold tracking-tight text-brand">
            Roseli
            <span className="font-light italic text-stone-400"> Studio</span>
          </span>
          <div className="hidden gap-8 text-sm font-medium uppercase tracking-widest md:flex">
            <a href="#servicos" className="transition-colors hover:text-brand">
              Serviços
            </a>
            <a href="#sobre" className="transition-colors hover:text-brand">
              Sobre
            </a>
            <a href="#contato" className="transition-colors hover:text-brand">
              Contato
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand/90"
          >
            Agendar Agora
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="sobre" className="relative px-6 pb-24 pt-12">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <span className="mb-6 inline-block rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
              Caieiras, SP
            </span>
            <h1 className="font-display mb-8 text-5xl leading-tight md:text-7xl">
              Beleza que <br />
              <span className="font-normal italic">vem das mãos.</span>
            </h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-stone-500">
              Há 15 anos transformando o cuidado com as unhas em um momento de
              bem-estar e sofisticação para as mulheres de Caieiras.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicos"
                className="rounded-lg bg-stone-900 px-8 py-4 text-center font-semibold text-white transition-all hover:bg-stone-800"
              >
                Ver Serviços
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-stone-200 px-8 py-4 text-center font-semibold transition-all hover:bg-stone-50"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-brand-soft"></div>
              <img
                src={roseliAsset}
                alt="Roseli, manicure e pedicure em Caieiras/SP"
                className="aspect-[4/5] w-full rounded-xl object-cover object-top shadow-2xl outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-white p-6 shadow-xl lg:block">
                <p className="font-display text-3xl font-bold text-brand">
                  15+
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
                  Anos de Experiência
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="bg-stone-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-display mb-4 text-4xl">
              Serviços Especializados
            </h2>
            <div className="mx-auto h-1 w-20 bg-brand-accent"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-stone-100 bg-white p-8 transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
                <div className="h-2 w-2 rounded-full bg-brand"></div>
              </div>
              <h3 className="mb-4 text-xl font-bold">Manicure Clássica</h3>
              <p className="mb-6 text-sm leading-relaxed text-stone-500">
                Limpeza profunda, modelagem perfeita e esmaltação com
                acabamento impecável de longa duração.
              </p>
              <p className="font-bold text-brand">A partir de R$ 35</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-stone-100 bg-white p-8 transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
                <div className="h-2 w-2 rounded-full bg-brand"></div>
              </div>
              <h3 className="mb-4 text-xl font-bold">Pedicure de Luxo</h3>
              <p className="mb-6 text-sm leading-relaxed text-stone-500">
                Cuidado completo para os pés, incluindo esfoliação, hidratação
                profunda e relaxamento total.
              </p>
              <p className="font-bold text-brand">A partir de R$ 40</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-stone-100 bg-white p-8 transition-shadow hover:shadow-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
                <div className="h-2 w-2 rounded-full bg-brand"></div>
              </div>
              <h3 className="mb-4 text-xl font-bold">SPA das Mãos &amp; Pés</h3>
              <p className="mb-6 text-sm leading-relaxed text-stone-500">
                Tratamento intensivo de renovação celular e hidratação para
                uma pele macia e rejuvenescida.
              </p>
              <p className="font-bold text-brand">Sob consulta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer CTA */}
      <section id="contato" className="px-6 py-24">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-brand p-12 text-center text-white">
          <div className="relative z-10">
            <h2 className="font-display mb-6 text-4xl">
              Pronta para renovar sua autoestima?
            </h2>
            <p className="mb-10 text-lg text-white/80">
              Atendimento exclusivo em Caieiras com toda segurança e higiene
              que você merece.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-brand transition-all hover:bg-stone-100"
            >
              Chamar no WhatsApp (11) 9 1363-0500
            </a>
          </div>
          <div className="absolute -mr-32 -mt-32 top-0 right-0 h-64 w-64 rounded-full bg-white/5"></div>
          <div className="absolute -ml-24 -mb-24 bottom-0 left-0 h-48 w-48 rounded-full bg-white/5"></div>
        </div>
      </section>

      <footer className="border-t border-stone-100 py-12 text-center">
        <p className="font-display mb-4 text-xl font-bold text-stone-300">
          Roseli Unhas
        </p>
        <p className="text-sm text-stone-400">
          © 2026 • Caieiras, São Paulo. 15 anos de tradição e carinho.
        </p>
      </footer>
    </div>
  );
}
