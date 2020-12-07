'use strict';

document.addEventListener('DOMContentLoaded', function () {
  Vue.component('app-status', {
    template: '<div class="level-item has-text-centered">\n      <div>\n        <p class="heading">{{ service.name }}</p>\n        <p class="title">\n          <div v-bind:class="{\'status-ok\': status === \'ok\', \'status-ko\': status === \'ko\'}"></div>\n        </p>\n      </div>\n    </div>',
    props: ['service'],
    mounted: function mounted() {
      var _this = this;

      fetch(this.$props.service.url).then(function (r) {
        return _this.$data.status = r.ok ? 'ok' : 'ko';
      }).catch(function (r) {
        return _this.$data.status = 'ko';
      });
    },
    data: function data() {
      return {
        status: ''
      };
    }
  });

  Vue.component('link-card', {
    template: '<div class="tile link-tile is-4 px-2 py-2 mt-6 mb-3">\n        <h2 class="is-size-4 has-text-centered">\n          <i :class="link.icon + \' has-text-\' + link.color"></i><br />\n          {{ link.name }}\n        </h2>\n        <hr class="my-3" />\n        <p class="has-text-centered">\n          <a v-if="link.urls.repo" :class="\'button is-rounded is-outlined is-\' + link.color" target="_blank" :href="link.urls.repo">\n            <i class="fab fa-github"></i>\n          </a>\n          <a v-if="link.urls.docs" :class="\'button is-rounded is-outlined is-\' + link.color" target="_blank" :href="link.urls.docs">\n            <i class="fas fa-book"></i>\n          </a>\n          <a v-if="link.urls.npm" :class="\'button is-rounded is-outlined is-\' + link.color" target="_blank" :href="link.urls.npm">\n            <i class="fab fa-npm"></i>\n          </a>\n          <a v-if="link.urls.docker" :class="\'button is-rounded is-outlined is-\' + link.color" target="_blank" :href="link.urls.docker">\n            <i class="fab fa-docker"></i>\n          </a>\n        </p>\n        <hr class="my-3" />\n        <h2 class="notification is-success is-light" v-if="link.isUnderConception">\n          <i class="fas fa-vial"></i> &nbsp; <strong>Under conception</strong><br />\n          This project is at an early conception stage and can change anytime.\n        </h2>\n        <h2 class="notification is-light" v-if="link.isProtected">\n          <i class="fas fa-user-secret"></i>&nbsp; <strong>Protected repository</strong><br />\n          This repository is only available for The First Spine development team.\n        </h2>\n        <h2 class="notification is-link is-light" v-if="link.isOpenedToContributions">\n          <i class="fas fa-code-branch"></i>&nbsp; <strong>Opened to contributions</strong><br>\n          This repository is maintened by the TFS team and other contributors.\n        </h2>\n        <h2 class="notification is-danger is-light" v-if="link.isDeprecated">\n          <i class="fas fa-hourglass-end"></i>&nbsp; <strong>Sunset</strong><br>\n          This repository is considered as deprecated and will be deleted soon. New projects should not use it.\n        </h2>\n        <p>\n          {{ link.description }}\n        </p>\n    </div>',
    props: ['link']
  });

  var app = new Vue({
    el: '#app',
    data: {
      services: [{
        name: "arena",
        url: "https://arena.thefirstspine.fr/status"
      }, {
        name: "auth",
        url: "https://auth.thefirstspine.fr/status"
      }, {
        name: "bots",
        url: "https://bots.thefirstspine.fr/status"
      }, {
        name: "calendar",
        url: "https://calendar.thefirstspine.fr/status"
      }, {
        name: "messaging",
        url: "https://messaging.thefirstspine.fr/status"
      }, {
        name: "rest",
        url: "https://rest.thefirstspine.fr/status"
      }, {
        name: "rooms",
        url: "https://rooms.thefirstspine.fr/status"
      }, {
        name: "shop",
        url: "https://shop.thefirstspine.fr/status"
      }, {
        name: "solid-pancake",
        url: "https://solid-pancake.thefirstspine.fr/status"
      }],
      links: [{
        part: 'infrastructure',
        color: 'link',
        icon: 'fas fa-flask',
        name: 'boiler2',
        description: 'Boiler is a Docker orchestration software built with Cobra to ship secure apps. Works along nginx, Docker & certbot.',
        urls: {
          repo: 'https://github.com/thefirstspine/boiler2',
          docs: 'docs/Boiler2_63307806.html'
        }
      }, {
        part: 'services',
        color: 'danger',
        icon: 'fas fa-hat-wizard',
        name: 'arena',
        description: 'The arena service is the service that will manage all the games & wizzards accounts in the Arena products.',
        urls: {
          repo: 'https://github.com/thefirstspine/arena',
          docs: 'docs/Arena_688144.html'
        }
      }, {
        part: 'services',
        color: 'danger',
        icon: 'fas fa-user',
        isProtected: true,
        name: 'auth',
        description: 'Main authentification service. Manages registrations & token generation.',
        urls: {
          repo: 'https://github.com/thefirstspine/auth',
          docs: 'docs/Auth_15958333.html'
        }
      }, {
        part: 'services',
        color: 'danger',
        icon: 'fas fa-robot',
        isProtected: true,
        name: 'bots',
        description: 'Bot service to act like a human in the games. The bots should not be used for ranked games & tournaments.',
        urls: {
          repo: 'https://github.com/thefirstspine/bots'
        }
      }, {
        part: 'services',
        color: 'danger',
        icon: 'fas fa-calendar-alt',
        name: 'calendar',
        description: 'Calendar API. All the temporary things belong here (events, cycles, etc.)',
        urls: {
          repo: 'https://github.com/thefirstspine/calendar'
        }
      }, {
        part: 'services',
        color: 'danger',
        icon: 'fas fa-bell',
        name: 'messaging',
        description: 'Simple realtime messaging system. Contains an API to send message through sockets, where clients can subscribe.',
        urls: {
          repo: 'https://github.com/thefirstspine/messaging',
          docs: 'docs/Messaging_40993212.html'
        }
      }, {
        part: 'services',
        color: 'danger',
        icon: 'fas fa-boxes',
        name: 'rest',
        description: 'Rest API. They are all static assets in the API, such as cards, decks, avatars, game types, etc.',
        urls: {
          repo: 'https://github.com/thefirstspine/rest'
        }
      }, {
        part: 'services',
        color: 'danger',
        icon: 'fas fa-comment-dots',
        name: 'rooms',
        description: 'The rooms service will manage discussions between players inside rooms, contained in subjects.',
        urls: {
          repo: 'https://github.com/thefirstspine/rooms'
        }
      }, {
        part: 'services',
        color: 'danger',
        icon: 'fas fa-comment-fas fa-shopping-cart',
        isProtected: true,
        name: 'shop',
        description: 'Manages all the purshases with real money. Works with the Stripe API.',
        urls: {
          repo: 'https://github.com/thefirstspine/shop'
        }
      }, {
        part: 'services',
        color: 'danger',
        icon: 'fas fa-stroopwafel',
        name: 'solid-pancake',
        description: 'Solid Pancakes is an event-based consumer that tracks usages on the TFS products.',
        urls: {
          repo: 'https://github.com/thefirstspine/solid-pancake',
          docs: 'docs/Solid-Pancake_37355521.html'
        }
      }, {
        part: 'services',
        color: 'danger',
        icon: 'fas fa-globe-europe',
        name: 'website',
        description: 'Website built with Sails.js, using all the other services to serve data to the players.',
        urls: {
          repo: 'https://github.com/thefirstspine/website'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-burn',
        name: 'flame',
        description: 'Data computing & analysis on-demand on CLIs served by Google Fire.',
        urls: {
          repo: 'https://github.com/thefirstspine/flame',
          docs: 'docs/Data-computing-with-Flame_63340602.html',
          docker: 'https://hub.docker.com/r/thefirstspine/flame'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-stamp',
        name: '@thefirstspine/certificate-authority',
        description: 'Javascript and Typescript service to validate public keys against private key stored in environment variable.',
        urls: {
          repo: 'https://github.com/thefirstspine/certificate-authority',
          npm: 'https://www.npmjs.com/package/@thefirstspine/certificate-authority',
          docs: 'docs/Endpoint-protections_15958663.html'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-stamp',
        name: '@thefirstspine/certificate-nest',
        description: 'Built on top of @thefirstspine/certificate-authority. Provides Nest services.',
        urls: {
          repo: 'https://github.com/thefirstspine/dependency-certificate-nest',
          npm: 'https://www.npmjs.com/package/@thefirstspine/certificate-nest'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-archway',
        name: '@thefirstspine/nest-filesocket',
        description: 'This NestJS module allows you to call your app context through local file socket.',
        urls: {
          repo: 'https://github.com/thefirstspine/nest-filesocket',
          npm: 'https://www.npmjs.com/package/@thefirstspine/nest-filesocket'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-hat-wizard',
        name: '@thefirstspine/types-arena',
        description: 'Types definition for Arena resources. Contains all interfaces & build scripts.',
        urls: {
          repo: 'https://github.com/thefirstspine/types-arena',
          npm: 'https://www.npmjs.com/package/@thefirstspine/types-arena'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-user',
        name: '@thefirstspine/auth',
        description: 'Javascript & Typescript dependency to help developers to use the auth net service & guard.',
        urls: {
          repo: 'https://github.com/thefirstspine/dependency-auth',
          npm: 'https://www.npmjs.com/package/@thefirstspine/auth'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-user',
        name: '@thefirstspine/auth-nest',
        description: 'Build on top of @thefirstspine/auth. Provides Nest services.',
        urls: {
          repo: 'https://github.com/thefirstspine/dependency-auth-nest',
          npm: 'https://www.npmjs.com/package/@thefirstspine/auth-nest'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-bell',
        name: '@thefirstspine/messaging',
        description: 'Javascript & Typescript dependency to help developers to use the messaging net service & guard.',
        urls: {
          repo: 'https://github.com/thefirstspine/dependency-messaging',
          npm: 'https://www.npmjs.com/package/@thefirstspine/messaging'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-bell',
        name: '@thefirstspine/messaging-nest',
        description: 'Build on top of @thefirstspine/messaging. Provides Nest services.',
        urls: {
          repo: 'https://github.com/thefirstspine/dependency-messaging-nest',
          npm: 'https://www.npmjs.com/package/@thefirstspine/messaging-nest'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-chart-bar',
        name: '@thefirstspine/logs',
        description: 'Javascript and Typescript service to deliver unified logs. Works with Winstonjs.',
        urls: {
          repo: 'https://github.com/thefirstspine/dependency-logs',
          npm: 'https://www.npmjs.com/package/@thefirstspine/logs'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-chart-bar',
        name: '@thefirstspine/logs-nest',
        description: 'Build on top of @thefirstspine/logs. Provides Nest services.',
        urls: {
          repo: 'https://github.com/thefirstspine/dependency-logs-nest',
          npm: 'https://www.npmjs.com/package/@thefirstspine/logs-nest'
        }
      }, {
        part: 'tools',
        color: 'success',
        icon: 'fas fa-boxes',
        name: '@thefirstspine/types-rest',
        description: 'Types definition for Rest resources. Contains all interfaces & build scripts.',
        urls: {
          repo: 'https://github.com/thefirstspine/types-rest',
          npm: 'https://www.npmjs.com/package/@thefirstspine/types-rest'
        }
      }, {
        part: 'contributions',
        color: 'primary',
        icon: 'fas fa-network-wired',
        name: 'terraform-provider-oneandone',
        description: 'The 1&1 provider gives the ability to deploy and configure resources using the 1&1 Cloud Server API.',
        urls: {
          repo: 'https://github.com/terraform-providers/terraform-provider-oneandone'
        }
      }, {
        part: 'contributions',
        color: 'primary',
        icon: 'fas fa-network-wired',
        name: 'oneandone-cloudserver-sdk-go',
        description: 'The 1&1 Go SDK is a Go library designed for interaction with the 1&1 cloud platform over the REST API.',
        urls: {
          repo: 'https://github.com/1and1/oneandone-cloudserver-sdk-go'
        }
      }, {
        part: 'projects',
        color: 'warning',
        icon: 'fas fa-chess',
        name: 'arena-client-bga',
        description: 'Game client for Board Game Arena using the TFS Platform APIs.',
        isOpenedToContributions: true,
        isUnderConception: true,
        urls: {
          repo: 'https://github.com/thefirstspine/arena-client-bga'
        }
      }, {
        part: 'projects',
        color: 'warning',
        icon: 'fas fa-gamepad',
        name: 'drifters-tails',
        description: 'Next game to be delivered on PC & consoles.',
        isProtected: true,
        urls: {
          repo: 'https://github.com/thefirstspine/drifters-tails'
        }
      }].sort(byName)
    }
  });
});

var byName = function byName(a, b) {
  return a.name > b.name ? 1 : -1;
};