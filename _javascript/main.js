document.addEventListener('DOMContentLoaded', () => {
  Vue.component('app-status', {
    template: `<div class="level-item has-text-centered">
      <div>
        <p class="heading">{{ service.name }}</p>
        <p class="title">
          <div v-bind:class="{'status-ok': status === 'ok', 'status-ko': status === 'ko'}"></div>
        </p>
      </div>
    </div>`,
    props: ['service'],
    mounted: function() {
      fetch(this.$props.service.url)
        .then((r) => this.$data.status = r.ok ? 'ok' : 'ko')
        .catch((r) => this.$data.status = 'ko');
    },
    data: () => {
      return {
        status: '',
      }
    }
  });

  Vue.component('link-card', {
    template: `<div class="tile link-tile is-4 px-2 py-2 mt-6 mb-3">
        <h2 class="is-size-4 has-text-centered">
          <i :class="link.icon + ' has-text-' + link.color"></i><br />
          {{ link.name }}
          <span class="bd-snippet-tag" v-if="link.isProtected">
            Private repo
          </span>
        </h2>
        <hr class="my-3" />
        <p class="has-text-centered">
          <a v-if="link.urls.repo" :class="'button is-rounded is-outlined is-' + link.color" target="_blank" :href="link.urls.repo">
            <i class="fab fa-github"></i>
          </a>
          <a v-if="link.urls.docs" :class="'button is-rounded is-outlined is-' + link.color" target="_blank" :href="link.urls.docs">
            <i class="fas fa-book"></i>
          </a>
          <a v-if="link.urls.npm" :class="'button is-rounded is-outlined is-' + link.color" target="_blank" :href="link.urls.npm">
            <i class="fab fa-npm"></i>
          </a>
          <a v-if="link.urls.docker" :class="'button is-rounded is-outlined is-' + link.color" target="_blank" :href="link.urls.docker">
            <i class="fab fa-docker"></i>
          </a>
          <a v-if="link.urls.website" :class="'button is-rounded is-outlined is-' + link.color" target="_blank" :href="link.urls.website">
            <i class="fas fa-link"></i>
          </a>
        </p>
        <hr class="my-3" />
        <h2 class="notification is-success is-light" v-if="link.isUnderConception">
          <i class="fas fa-vial"></i> &nbsp; <strong>Under conception</strong><br />
          This project is at an early conception stage and can change anytime.
        </h2>
        <h2 class="notification is-link is-light" v-if="link.isOpenedToContributions">
          <i class="fas fa-code-branch"></i>&nbsp; <strong>Opened to contributions</strong><br>
          This repository is maintened by the TFS team and other contributors.
        </h2>
        <h2 class="notification is-danger is-light" v-if="link.isDeprecated">
          <i class="fas fa-hourglass-end"></i>&nbsp; <strong>Sunset</strong><br>
          This repository is considered as deprecated and will be deleted soon. New projects should not use it.
        </h2>
        <h2 class="notification is-warning is-light" v-if="link.isOnHold">
          <i class="fas fa-stop-circle"></i>&nbsp; <strong>On hold</strong><br>
          This development is on hold. New projects should not use it.
        </h2>
        <p>
          {{ link.description }}
        </p>
    </div>`,
    props: ['link'],
  });

  var app = new Vue({
    el: '#app',
    data: {
      services: [
        {
          name: "arena2 (WIP)",
          url: "https://arena2.thefirstspine.fr/status",
        },
        {
          name: "auth",
          url: "https://auth.thefirstspine.fr/status",
        },
        {
          name: "bots",
          url: "https://bots.thefirstspine.fr/status",
        },
        {
          name: "calendar",
          url: "https://calendar.thefirstspine.fr/status",
        },
        {
          name: "matches (WIP)",
          url: "https://matches.thefirstspine.fr/status",
        },
        {
          name: "messaging",
          url: "https://messaging.thefirstspine.fr/status",
        },
        {
          name: "rest",
          url: "https://rest.thefirstspine.fr/status",
        },
        {
          name: "rooms",
          url: "https://rooms.thefirstspine.fr/status",
        },
        {
          name: "shop",
          url: "https://shop.thefirstspine.fr/status",
        },
        {
          name: "solid-pancake",
          url: "https://solid-pancake.thefirstspine.fr/status",
        }
      ],
      links: [
        {
          part: 'infrastructure',
          color: 'info',
          icon: 'fab fa-redhat',
          name: 'ansible',
          description: 'Ansible playbooks to setup nodes & deploy apps.',
          isUnderConception: true,
          urls: {
            repo: 'https://github.com/thefirstspine/ansible',
            docs: 'docs/Ansible-playbooks_335478819.html',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-hat-wizard',
          name: 'matches',
          description: 'The matches service is the service that will manage all the games in the online products.',
          urls: {
            repo: 'https://github.com/thefirstspine/matches',
            docs: 'docs/Arena_688144.html',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-user',
          isProtected: true,
          name: 'auth',
          description: 'Main authentification service. Manages registrations & token generation.',
          urls: {
            repo: 'https://github.com/thefirstspine/auth',
            docs: 'docs/Auth_15958333.html',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-robot',
          isProtected: true,
          name: 'bots',
          description: 'Bot service to act like a human in the games. The bots should not be used for ranked games & tournaments.',
          urls: {
            repo: 'https://github.com/thefirstspine/bots',
            docs: 'docs/Bots_305725445.html',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-calendar-alt',
          name: 'calendar',
          description: 'Calendar API. All the temporary things belong here (events, cycles, etc.)',
          urls: {
            repo: 'https://github.com/thefirstspine/calendar',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-bell',
          name: 'messaging',
          description: 'Simple realtime messaging system. Contains an API to send message through sockets, where clients can subscribe.',
          urls: {
            repo: 'https://github.com/thefirstspine/messaging',
            docs: 'docs/Messaging_40993212.html',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-boxes',
          name: 'rest',
          description: 'Rest API. They are all static assets in the API, such as cards, decks, avatars, game types, etc.',
          urls: {
            repo: 'https://github.com/thefirstspine/rest',
            docs: 'docs/Rest_40993179.html',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-comment-dots',
          name: 'rooms',
          description: 'The rooms service will manage discussions between players inside rooms, contained in subjects.',
          urls: {
            repo: 'https://github.com/thefirstspine/rooms',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-comment-fas fa-shopping-cart',
          isProtected: true,
          name: 'shop',
          description: 'Manages all the purshases with real money. Works with the Stripe API.',
          urls: {
            repo: 'https://github.com/thefirstspine/shop',
            docs: 'docs/Shop_303038481.html',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-stroopwafel',
          name: 'solid-pancake',
          description: 'Solid Pancakes is an event-based consumer that tracks usages on the TFS products.',
          urls: {
            repo: 'https://github.com/thefirstspine/solid-pancake',
            docs: 'docs/Solid-Pancake_37355521.html',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-globe-europe',
          name: 'website',
          description: 'Website built with Sails.js, using all the other services to serve data to the players.',
          urls: {
            website: 'https://www.thefirstspine.fr/',
            repo: 'https://github.com/thefirstspine/website',
          },
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-stamp',
          name: '@thefirstspine/certificate-authority',
          description: 'Javascript and Typescript service to validate public keys against private key stored in environment variable.',
          urls: {
            repo: 'https://github.com/thefirstspine/certificate-authority',
            npm: 'https://www.npmjs.com/package/@thefirstspine/certificate-authority',
            docs: 'docs/Endpoint-protections_15958663.html',
          },
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-stamp',
          name: '@thefirstspine/certificate-nest',
          description: 'Built on top of @thefirstspine/certificate-authority. Provides Nest services.',
          urls: {
            repo: 'https://github.com/thefirstspine/dependency-certificate-nest',
            npm: 'https://www.npmjs.com/package/@thefirstspine/certificate-nest',
          },
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-archway',
          name: '@thefirstspine/nest-filesocket',
          description: 'This NestJS module allows you to call your app context through local file socket.',
          urls: {
            repo: 'https://github.com/thefirstspine/nest-filesocket',
            npm: 'https://www.npmjs.com/package/@thefirstspine/nest-filesocket',
          },
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-hat-wizard',
          name: '@thefirstspine/types-matches',
          description: 'Types definition for matches resources. Contains all interfaces & build scripts.',
          urls: {
            repo: 'https://github.com/thefirstspine/types-matches',
            npm: 'https://www.npmjs.com/package/@thefirstspine/types-matches',
          },
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-user',
          name: '@thefirstspine/auth',
          description: 'Javascript & Typescript dependency to help developers to use the auth net service & guard.',
          urls: {
            repo: 'https://github.com/thefirstspine/dependency-auth',
            npm: 'https://www.npmjs.com/package/@thefirstspine/auth',
          },
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-user',
          name: '@thefirstspine/auth-nest',
          description: 'Build on top of @thefirstspine/auth. Provides Nest services.',
          urls: {
            repo: 'https://github.com/thefirstspine/dependency-auth-nest',
            npm: 'https://www.npmjs.com/package/@thefirstspine/auth-nest',
          }
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-bell',
          name: '@thefirstspine/messaging',
          description: 'Javascript & Typescript dependency to help developers to use the messaging net service & guard.',
          urls: {
            repo: 'https://github.com/thefirstspine/dependency-messaging',
            npm: 'https://www.npmjs.com/package/@thefirstspine/messaging',
          },
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-bell',
          name: '@thefirstspine/messaging-nest',
          description: 'Build on top of @thefirstspine/messaging. Provides Nest services.',
          urls: {
            repo: 'https://github.com/thefirstspine/dependency-messaging-nest',
            npm: 'https://www.npmjs.com/package/@thefirstspine/messaging-nest',
          }
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-file-alt',
          name: '@thefirstspine/logs',
          description: 'Javascript and Typescript service to deliver unified logs. Works with Winstonjs.',
          urls: {
            repo: 'https://github.com/thefirstspine/dependency-logs',
            npm: 'https://www.npmjs.com/package/@thefirstspine/logs',
          },
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-file-alt',
          name: '@thefirstspine/logs-nest',
          description: 'Build on top of @thefirstspine/logs. Provides Nest services.',
          urls: {
            repo: 'https://github.com/thefirstspine/dependency-logs-nest',
            npm: 'https://www.npmjs.com/package/@thefirstspine/logs-nest',
          }
        },
        {
          part: 'tools',
          color: 'success',
          icon: 'fas fa-boxes',
          name: '@thefirstspine/types-rest',
          description: 'Types definition for Rest resources. Contains all interfaces & build scripts.',
          urls: {
            repo: 'https://github.com/thefirstspine/types-rest',
            npm: 'https://www.npmjs.com/package/@thefirstspine/types-rest',
          },
        },
        {
          part: 'projects',
          color: 'warning',
          icon: 'fas fa-gamepad',
          name: 'drifter-tales',
          description: 'The solo game made with Unity. Relaunch of the first version.',
          isProtected: true,
          isUnderConception: true,
          urls: {
            repo: 'https://github.com/thefirstspine/drifter-tales',
            website: 'https://www.thefirstspine.fr/drifters-tales',
          },
        },
        {
          part: 'services',
          color: 'danger',
          icon: 'fas fa-chess-rook',
          name: 'arena2',
          description: 'Next Arena top-level API for managing games in heavy clients.',
          isProtected: true,
          isUnderConception: true,
          urls: {
            repo: 'https://github.com/thefirstspine/arena2',
          },
        },
        {
          part: 'projects',
          color: 'warning',
          icon: 'fas fa-chess-rook',
          name: 'arena2-client',
          description: 'Heavy client for next Arena version.',
          isProtected: true,
          isUnderConception: true,
          urls: {
            repo: 'https://github.com/thefirstspine/arena2-client',
          },
        },
      ].sort(byName)
    }
  })
});

const byName = (a, b) => {
  return a.name > b.name ? 1 : -1;
}
