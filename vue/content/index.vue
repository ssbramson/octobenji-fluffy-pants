new Vue({
  el: '#index',

  template: `
    <main class="content-container">

      <section class="index-content" aria-label="Site" role="contentinfo">
      
        <h1 class="index-header" aria-label="Spencer Bramson's DNA is 60% koala + 10% discipline + 20% nerd + 3% failing fast + 7% coloring outside the lines">🐨<sup>.60</sup> + 🥋<sup>.10</sup> + 🤓<sup>.20</sup> + 🤦‍<sup>.03</sup> + 🤪‍<sup>.07</sup></h1>
        
        <section class="index-paragraph-area" aria-label="Spencer Bramson's introduction"><p class="index-introduction_paragraph">Award-winning marketing executive specialized in consumer technology applications and packaged goods. Past clientele including, but not limited to;<ul class="index-highlighted_clients"><li class="index-highlighed_client" v-for="indexClientLink in indexClientLinks"><a class="index-hightlighted_client-link" :href="indexClientLink.linkURL">{{ indexClientLink.linkTitle }}</a></li></ul></p></section>
        
      </section>

    </main>
  `,

  data: {
    indexClientLinks: [
      { linkTitle: 'Milky Way', linkURL: '/milkyway.html' },
      { linkTitle: 'Kendrick Lamar', linkURL: '/kendrick_lamar.html' },
      { linkTitle: 'Spotify Music', linkURL: '/spotify.html' },
      { linkTitle: 'Google', linkURL: '/google.html' },
      { linkTitle: 'Blackberry', linkURL: '/blackberry.html' },
      { linkTitle: 'Procter & Gamble', linkURL: '/procter_gamble.html' },
      { linkTitle: 'Thomson Reuters', linkURL: '/thomson_reuters.html' },
      { linkTitle: 'Playtex Tampons', linkURL: '/playtex.html' },
      { linkTitle: 'Ford Motors', linkURL: '/ford.html' }
    ]
  }
})