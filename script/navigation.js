new Vue({
  el: '#navigation',
  
  template: `
    <section class="navigation-container">

      <header class="navigation-content">

        <div class="navigation-logo-area">

          <a href="index.html" class="navigation-logo">{{ navigationLogo }}</a>

        </div>

        <div class="navigation-icon-area" @click="show = !show">

          <svg v-bind:class="[show ? navigationIconActiveClass : '', navigationIconClass]" width="18" height="24" viewBox="0 0 86 120" xmlns="http://www.w3.org/2000/svg">
            <path class="navigation-icon-svg_path" d="M22.57 26.98a4.3 4.3 0 1 1-8.58-.01 4.3 4.3 0 0 1 8.58.01zM84.5 99.5c.93.5 1.51 1.47 1.51 2.52v15.1c0 1.6-1.3 2.88-2.89 2.88H2.9A2.88 2.88 0 0 1 0 117.12v-15.1c0-1.05.58-2.02 1.5-2.52l7.1-3.86v-7.05c0-1.59 1.3-2.88 2.89-2.88L8.6 82.84v-4c0-5.04 2-9.83 5.42-13.38L6.67 62.2A11.21 11.21 0 0 1 0 51.97V23.02c0-2.48.65-4.86 1.87-6.94A10.76 10.76 0 0 1 11.27 0h22.35A43.7 43.7 0 0 1 77.4 43.64v39.2l-2.89 2.87c1.6 0 2.89 1.3 2.89 2.88v7.05l7.1 3.86zM23.66 85.7h38.7l6.45-6.42V43.64A35.12 35.12 0 0 0 33.62 8.57H11.27a2.2 2.2 0 0 0-1.96 3.16l2.8 5.6-1.96 1.97a5.25 5.25 0 0 0-1.55 3.72v28.95c0 1.04.61 1.98 1.57 2.4l10.22 4.53c.73.33 1.58.3 2.3-.08l4.17-2.18c.7-.36 1.19-1 1.35-1.77l2.07-9.4a5.26 5.26 0 0 1 2.83-3.59l7.15-3.5v14.84a10.7 10.7 0 0 1-5.38 9.29l-12.3 7.04a10.7 10.7 0 0 0-5.38 9.3v.44l6.45 6.42zm53.75 19.7l-8.6-4.68v-6.44H17.2v6.44l-8.6 4.67v6.03h68.8v-6.03z" fill="#232223" fill-rule="nonzero"/>
          </svg>

        </div>

      </header>
      
      <transition name="navigation_overlay">
				<nav class="navigation_overlay-content" v-if="show">
					<ul class="navigation-link_items" aria-label="Links to highlighted past client work experience">
						<li class="navigation-link_item" v-for="NavigationLink in NavigationLinks">
              <a :href="NavigationLink.linkURL" class="navigation-link" >
                {{ NavigationLink.linkTitle }}
              </a>
						</li>
					</ul>
				</nav>
      </transition>

    </section>
  `,
  
  data: {
    NavigationLinks: [
      { linkTitle: 'About', linkURL: 'index.html' },
      { linkTitle: 'Capabilities', linkURL: 'capabilities.html' },
      { linkTitle: 'Experience', linkURL: 'experience.html' },
      { linkTitle: 'Connect', linkURL: 'lets-collaborate.html' }
    ],
    navigationIconClass: 'navigation-icon',
    navigationIconActiveClass: 'navigation-icon_active',
    navigationLogo: '</ssbramson>',
    show: false,
    
  },
})