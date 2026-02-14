<script setup lang="ts">
useHead({
  title: 'Impressum',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>

<template>
  <div>
    <TheNavbar />
    <main class="min-h-screen pt-32 pb-20 px-8 lg:px-16 max-w-3xl mx-auto">
      <h1 class="text-4xl font-display font-bold mb-12">
        Impressum
      </h1>

      <section class="space-y-8 text-text-secondary leading-relaxed">
        <div>
          <h2 class="text-lg font-semibold text-text-primary mb-2">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            Marc Trösken<br>
            Grüne Trift 123<br>
            12557 Berlin
          </p>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-text-primary mb-2">
            Kontakt
          </h2>
          <p>
            E-Mail:
            <a href="mailto:m.troesken@mail.de" class="text-accent hover:text-accent-light transition-colors">
              m.troesken@mail.de
            </a>
          </p>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-text-primary mb-2">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p class="mt-3">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
          </p>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-text-primary mb-2">
            Haftung für Links
          </h2>
          <p>
            Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
            Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
            Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
            waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p class="mt-3">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links
            umgehend entfernen.
          </p>
        </div>

        <div>
          <h2 class="text-lg font-semibold text-text-primary mb-2">
            Urheberrecht
          </h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p class="mt-3">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden
            von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </section>
    </main>
    <TheFooter />
  </div>
</template>
