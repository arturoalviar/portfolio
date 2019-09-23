---
title: 'Method'
heading: 'reading a lot of api docs'
slug: 'vhue'
image: ../images/mockup.png
stack: ['vue', 'vuex', 'electron', 'stylus', 'axios', 'webpack', 'sketch']
---

### Committing every day

I used the [electron-vue boilerplate](https://github.com/SimulatedGREG/electron-vue) since it did a lot of the heavy lifting such as providing hot reloading, a file that generates my Vuex store on the fly.

##### API calls made simple with axios

Initially, I planned to use the node-hue-api package, but it lacked some essential API calls so I decided to create my own methods using axios. Honestly, the axios approach ended up being the right _call_ (get it?) since I designed my API calls in a specific way and had complete exposure to the response data.

##### Vue + Vuex

Coming from React and understanding the notion of reactivity made writing Vue fairly simple. While easy to learn, I did hit some bumps in the road when writing Vue components but most of those issues were resolved when I read the Vue API docs. One particular issue I had was in the light component, a card that gives a simple overview of a particular Hue light. I initially had a watcher updating the light but after reading the docs, I realized the watcher method was redundant and there was a bug in my file that made an API call after setting up the Hue bridge.

Vuex made it easy to store essential data like the user’s Hue API token and with the use of electron vuex, which is just an electron store wrapper, the Vuex store persisted even after quitting the app. In addition, I stored all the response data from the Hue API calls in order for the Vue components to update via store getters.

##### Electron

I used the Electron API to create a method to reset the Vuex store and add a global shortcut. With the global shortcut, a user can toggle a group of lights, even when the app is not focused; this global shortcut was the key to making my big switch act as a dimmer switch for my lights.
