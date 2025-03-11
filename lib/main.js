'use strict';

var _Vue = Vue,
    createApp = _Vue.createApp,
    ref = _Vue.ref;


Vue.createApp({
  setup: function setup() {
    var links = [{
      part: 'infrastructure',
      color: 'info',
      name: 'ansible',
      description: 'Ansible playbooks to setup nodes & deploy apps.',
      repo: 'thefirstspine/ansible',
      urls: {}
    }, {
      part: 'infrastructure',
      color: 'info',
      name: 'configurator',
      description: 'Works along the Ansible playbooks to create clean & reliable dotenv configs to use in local / test envs.',
      repo: 'thefirstspine/configurator',
      urls: {}
    }, {
      part: 'services',
      color: 'danger',
      name: 'matches',
      description: 'The matches service is the service that will manage all the games in the online products.',
      repo: 'thefirstspine/matches',
      isOnMaintenance: true,
      urls: {}
    }, {
      part: 'services',
      color: 'danger',
      isProtected: true,
      isDeprecated: true,
      name: 'auth',
      description: 'Main authentification service. Manages registrations & token generation.',
      repo: 'thefirstspine/auth',
      urls: {}
    }, {
      part: 'services',
      color: 'danger',
      isProtected: true,
      name: 'robots',
      description: 'Bot service to act like a human in the games. The bots should not be used for ranked games & tournaments.',
      repo: 'thefirstspine/robots',
      isOnMaintenance: true,
      urls: {}
    }, {
      part: 'services',
      color: 'danger',
      name: 'calendar',
      description: 'Calendar API. All the temporary things belong here (events, cycles, etc.)',
      repo: 'thefirstspine/calendar',
      isOnMaintenance: true,
      urls: {}
    }, {
      part: 'services',
      color: 'danger',
      name: 'messaging',
      description: 'Simple realtime messaging system. Contains an API to send message through sockets, where clients can subscribe.',
      repo: 'thefirstspine/messaging',
      isOnMaintenance: true,
      urls: {}
    }, {
      part: 'services',
      color: 'danger',
      name: 'game-assets',
      description: 'Rest API. They are all static assets in the API, such as cards, decks, avatars, game types, etc.',
      repo: 'thefirstspine/game-assets',
      urls: {}
    }, {
      part: 'services',
      color: 'danger',
      name: 'rooms',
      description: 'The rooms service will manage discussions between players inside rooms, contained in subjects.',
      repo: 'thefirstspine/rooms',
      isOnMaintenance: true,
      urls: {}
    }, {
      part: 'services',
      color: 'danger',
      isProtected: true,
      name: 'shop',
      description: 'Manages all the purshases with real money. Works with the Stripe API.',
      repo: 'thefirstspine/shop',
      isOnMaintenance: true,
      urls: {}
    }, {
      part: 'services',
      color: 'danger',
      name: 'solid-pancake',
      description: 'Solid Pancakes is an event-based consumer that tracks usages on the TFS products.',
      repo: 'thefirstspine/solid-pancake',
      isOpenedToContributions: true,
      urls: {}
    }, {
      part: 'services',
      color: 'danger',
      name: 'website',
      description: 'Website built with Sails.js, using all the other services to serve data to the players.',
      repo: 'thefirstspine/website',
      isOnMaintenance: true,
      urls: {
        website: 'https://www.thefirstspine.fr/'
      }
    }, {
      part: 'tools',
      color: 'success',
      name: '@thefirstspine/certificate-authority',
      description: 'Javascript and Typescript service to validate public keys against private key stored in environment variable.',
      repo: 'thefirstspine/certificate-authority',
      isOpenedToContributions: true,
      isDeprecated: true,
      urls: {
        npm: 'https://www.npmjs.com/package/@thefirstspine/certificate-authority'
      }
    }, {
      part: 'tools',
      color: 'success',
      name: '@thefirstspine/certificate-nest',
      description: 'Built on top of @thefirstspine/certificate-authority. Provides Nest services.',
      repo: 'thefirstspine/dependency-certificate-nest',
      isDeprecated: true,
      urls: {
        npm: 'https://www.npmjs.com/package/@thefirstspine/certificate-nest'
      }
    }, {
      part: 'tools',
      color: 'success',
      name: '@thefirstspine/types-matches',
      description: 'Types definition for matches resources.',
      repo: 'thefirstspine/types-matches',
      urls: {
        npm: 'https://www.npmjs.com/package/@thefirstspine/types-matches'
      }
    }, {
      part: 'tools',
      color: 'success',
      name: '@thefirstspine/auth',
      description: 'Javascript & Typescript dependency to help developers to use the auth net service & guard.',
      repo: 'thefirstspine/dependency-auth',
      urls: {
        npm: 'https://www.npmjs.com/package/@thefirstspine/auth'
      }
    }, {
      part: 'tools',
      color: 'success',
      name: '@thefirstspine/auth-nest',
      description: 'Build on top of @thefirstspine/auth. Provides Nest services.',
      repo: 'thefirstspine/dependency-auth-nest',
      urls: {
        npm: 'https://www.npmjs.com/package/@thefirstspine/auth-nest'
      }
    }, {
      part: 'tools',
      color: 'success',
      name: '@thefirstspine/messaging',
      description: 'Javascript & Typescript dependency to help developers to use the messaging net service & guard.',
      repo: 'thefirstspine/dependency-messaging',
      urls: {
        npm: 'https://www.npmjs.com/package/@thefirstspine/messaging'
      }
    }, {
      part: 'tools',
      color: 'success',
      name: '@thefirstspine/messaging-nest',
      description: 'Build on top of @thefirstspine/messaging. Provides Nest services.',
      repo: 'thefirstspine/dependency-messaging-nest',
      urls: {
        npm: 'https://www.npmjs.com/package/@thefirstspine/messaging-nest'
      }
    }, {
      part: 'tools',
      color: 'success',
      name: '@thefirstspine/logs',
      description: 'Javascript and Typescript service to deliver unified logs. Works with Winstonjs.',
      repo: 'thefirstspine/dependency-logs',
      isOpenedToContributions: true,
      urls: {
        npm: 'https://www.npmjs.com/package/@thefirstspine/logs'
      }
    }, {
      part: 'tools',
      color: 'success',
      name: '@thefirstspine/logs-nest',
      description: 'Build on top of @thefirstspine/logs. Provides Nest services.',
      repo: 'thefirstspine/dependency-logs-nest',
      urls: {
        npm: 'https://www.npmjs.com/package/@thefirstspine/logs-nest'
      }
    }, {
      part: 'tools',
      color: 'success',
      name: '@thefirstspine/types-game',
      description: 'Types definition for game resources (such as cards, decks, etc.)',
      repo: 'thefirstspine/types-game',
      urls: {
        npm: 'https://www.npmjs.com/package/@thefirstspine/types-game'
      }
    }, {
      part: 'projects',
      color: 'warning',
      name: 'drifters-tales',
      description: 'The solo game made with Unity. Relaunch of the first version.',
      isProtected: true,
      repo: 'thefirstspine/drifters-tales',
      urls: {
        website: 'https://www.thefirstspine.fr/drifters-tales'
      }
    }, {
      part: 'services',
      color: 'danger',
      name: 'arena',
      description: 'Next Arena top-level API for managing games in heavy clients.',
      isProtected: true,
      isUnderConception: true,
      repo: 'thefirstspine/arena',
      isOnMaintenance: true,
      urls: {
        website: 'https://www.thefirstspine.fr/arena'
      }
    }, {
      part: 'projects',
      color: 'warning',
      name: 'arena-client',
      description: 'Heavy client for next Arena version.',
      isProtected: true,
      isUnderConception: true,
      repo: 'thefirstspine/arena-client',
      urls: {}
    }, {
      part: 'projects',
      color: 'warning',
      name: 'ravens-reach',
      description: 'New mobile game project.',
      isProtected: true,
      isUnderConception: true,
      repo: 'thefirstspine/ravens-reach',
      urls: {}
    }, {
      part: 'contributing',
      color: 'primary',
      name: 'bulma',
      description: 'Bulma is a modern CSS framework based on Flexbox.',
      repo: 'jgthms/bulma',
      urls: {}
    }, {
      part: 'contributing',
      color: 'primary',
      name: 'nest',
      description: 'A progressive Node.js framework for building efficient and scalable server-side applications.',
      repo: 'nestjs/nest',
      urls: {}
    }, {
      part: 'contributing',
      color: 'primary',
      name: 'sails-hook-grunt',
      description: 'Implements support for the built-in asset pipeline and task runner in Sails.',
      repo: 'sailshq/sails-hook-grunt',
      urls: {}
    }];
    links.sort(function (a, b) {
      return a.name >= b.name ? 1 : -1;
    });
    var services = [{
      name: "Authentication",
      url: "https://auth.thefirstspine.fr/status",
      validate: function validate(r) {
        return r.status === "ok";
      }
    }, {
      name: "Arena",
      url: "https://arena.thefirstspine.fr/status",
      validate: function validate(r) {
        return r.status === "ok";
      }
    }, {
      name: "Robots",
      url: "https://robots.thefirstspine.fr/status",
      validate: function validate(r) {
        return r.status === "ok";
      }
    }, {
      name: "Events & cycles",
      url: "https://calendar.thefirstspine.fr/status",
      validate: function validate(r) {
        return r.status === "ok";
      }
    }, {
      name: "Matches",
      url: "https://matches.thefirstspine.fr/status",
      validate: function validate(r) {
        return r.status === "ok";
      }
    }, {
      name: "Realtime messaging",
      url: "https://messaging.thefirstspine.fr/status",
      validate: function validate(r) {
        return r.status === "ok";
      }
    }, {
      name: "Game assets",
      url: "https://game-assets.thefirstspine.fr/status",
      validate: function validate(r) {
        return r.status === "ok";
      }
    }, {
      name: "Payments & shop",
      url: "https://shop.thefirstspine.fr/status",
      validate: function validate(r) {
        return r.status === "ok";
      }
    }, {
      name: "Products usage",
      url: "https://solid-pancake.thefirstspine.fr/status",
      validate: function validate(r) {
        return r.status === "ok";
      }
    }, {
      name: "Discussions",
      url: "https://rooms.thefirstspine.fr/status",
      validate: function validate(r) {
        return r.status === "ok";
      }
    }];
    services.sort(function (a, b) {
      return a.name >= b.name ? 1 : -1;
    });
    return {
      links: links,
      services: services
    };
  }
}).component('link-card', {
  template: '<div class="cell link-tile is-4 px-2 py-2 mt-6 mb-3">\n      <h2 class="is-size-4 has-text-centered">\n        <p>\n          <span :class="\'square-app has-box-shadow-\' + link.color + \' is-\' + link.color">{{ link.name.replace(\'@thefirstspine/\', \'\').substring(0,2).toUpperCase() }}</span>\n        </p>\n        <span class="bd-snippet-tag" v-if="link.isProtected === true">\n          <i class="fa fa-solid fa-lock"></i>\n        </span>\n        {{ link.name }}\n      </h2>\n      <hr class="my-3" />\n      <p class="has-text-centered">\n        <a :class="\'button m-1 is-rounded is-outlined is-\' + link.color" target="_blank" :href="\'https://github.com/\' + link.repo">\n          <i class="fab fa-github"></i>\n        </a>\n        <a v-if="link.urls.docs" :class="\'button m-1 is-rounded is-outlined is-\' + link.color" target="_blank" :href="link.urls.docs">\n          <i class="fas fa-book"></i>\n        </a>\n        <a v-if="link.urls.npm" :class="\'button m-1 is-rounded is-outlined is-\' + link.color" target="_blank" :href="link.urls.npm">\n          <i class="fab fa-npm"></i>\n        </a>\n        <a v-if="link.urls.docker" :class="\'button m-1 is-rounded is-outlined is-\' + link.color" target="_blank" :href="link.urls.docker">\n          <i class="fab fa-docker"></i>\n        </a>\n        <a v-if="link.urls.website" :class="\'button m-1 is-rounded is-outlined is-\' + link.color" target="_blank" :href="link.urls.website">\n          <i class="fas fa-link"></i>\n        </a>\n      </p>\n      <hr class="my-3" />\n      <h2 class="notification is-success mb-2" v-if="link.isUnderConception">\n        <i class="fas fa-vial"></i> &nbsp; <strong>Under conception</strong><br />\n        This project is at an early conception stage and can change anytime.\n      </h2>\n      <h2 class="notification is-primary mb-2" v-if="link.isOpenedToContributions">\n        <i class="fas fa-code-branch"></i>&nbsp; <strong>Opened to contributions</strong><br>\n        This repository is maintened by the TFS team and other contributors.\n      </h2>\n      <h2 class="notification is-danger mb-2" v-if="link.isDeprecated">\n        <i class="fas fa-hourglass-end"></i>&nbsp; <strong>Sunset</strong><br>\n        This repository is considered as deprecated and will be deleted soon. New projects should not use it.\n      </h2>\n      <h2 class="notification is-warning mb-2" v-if="link.isOnHold">\n        <i class="fas fa-stop-circle"></i>&nbsp; <strong>On hold</strong><br>\n        This development is on hold. New projects should not use it.\n      </h2>\n      <h2 class="notification is-link mb-2" v-if="link.isOnMaintenance">\n        <i class="fa fa-solid fa-mug-hot"></i>&nbsp; <strong>Maintenance</strong><br>\n        This repository is in maintenance and is subject to change.\n      </h2>\n      <p>\n        {{ link.description }}\n      </p>\n    </div>',
  props: ['link']
}).component('status-tile', {
  template: '<div class="cell link-tile is-2 px-2 py-2 mt-1 mb-1 has-text-centered">\n      <i v-if="status === true" class="fas fa-check-circle has-text-success is-size-4 mb-4"></i>\n      <i v-if="status === false" class="fas fa-exclamation-circle has-text-danger is-size-4 mb-4"></i>\n      <i v-if="status === null" class="fas fa-question-circle has-text-warning is-size-4 mb-4"></i>\n      <br>\n      {{ service.name }}\n    </div>',
  setup: async function setup(proxy) {
    var data = {
      status: null
    };
    try {
      var response = await fetch(proxy.service.url);
      var responseJson = await response.json();
      data.status = proxy.service.validate(responseJson);
    } catch (e) {
      data.status = false;
    }
    return data;
  },
  props: ['service']
}).mount('#app');