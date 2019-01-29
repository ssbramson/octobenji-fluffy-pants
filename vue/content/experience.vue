new Vue({
  el: '#experience',

  template: `
    <main class="experience-container">
      <section class="experience-content">
        <ul class="experience-highlighted_clients"><li class="experience-highlighted_client" v-for="experienceClientLink in experienceClientLinks"><a :href="experienceClientLink.linkURL" class="experience-highlighted_client-link" aria-label="Go to detail page" role="link">{{ experienceClientLink.linkTitle }}</a></li></ul>
      </section>
    </main>
  `,

  data: {
    experienceClientLinks: [
      { linkTitle: 'Google', linkURL: '/google.html' },
      { linkTitle: 'Blackberry', linkURL: '/blackberry.html' },
      { linkTitle: 'Procter Gamble', linkURL: '/procter_gamble.html' },
      { linkTitle: 'Thomason Reuters', linkURL: '/thomson_reuters.html' },
      { linkTitle: 'Kendrick Lamar', linkURL: '/kendrick_lamar.html' },
      { linkTitle: 'Milkyway', linkURL: '/milkyway.html' },
      { linkTitle: 'Playtex', linkURL: '/playtex.html' }
    ]
  }
})