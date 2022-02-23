---
title: "#1 Create app"
path: /create-app
date: 2022-02-20
summary: "Let's create and configure VUE app locally and deploy it on Firebase. After this chapter our app serves only static information about project being under construction but we want to deploy it anyway. Nevertheless it's good starting point for further development."
tags: [ 'vue', 'firebase' ]
commit: abc
---

Our objective is to create and configure application with boilerplate code. We won't customize it much yet but we want to deploy it on Firebase anyway (this is common goal for every post in general).

- [x] [Before we start](#before-we-start)
- [x] [Create Vue app](#create-vue-app)
- [x] [Adjust Vue app](#adjust-vue-app)
- [x] [Create Firebase app](#create-firebase-app)
- [x] [Deploy it](#deploy-it)
- [x] [Summary](#summary)

You can find commit related wtih this post on github: https://github.com/jablonowski/interviewfrontend.com/commit/f2c65de8f905a53481d080768c9c9a7650d35f08

### Before we start

Before we get into coding you need to make sure weather you have all the dependencies to go further.
First You need to make sure if you have Node.js installed. In order to do that type 
``
node -v
``
in your terminal. I use version v14.17.3 but you can install newer version but make sure that version you have installed is stable version (marked as LTS - long term support). Now let's check if npm (Node Package Manager) is installed and ready to use, again type 
``
npm -v
``
in your terminal. I'm using 6.14.13 version but any newer should be also fine.
And that's it, we're ready to go :)

### Create VUE app

Finally we can create our Vue app. Before we do that we need to install Vue-cli first. Please type 
``
npm install -g @vue/cli
``
in your terminal. After that you should go to the directory where you store your projects. It's important because vue-cli will create folder with our app in current directory. 

To create our Vue project please type 
``
vue create interviewfrontend.com
``
in your terminal. After that you will see the guide that help us configure our project.

![vue-cli first screen](/1/1.png "vue-cli first screen")

Please choose third option and select all available "toys" (using space) and confirm by enter button. 
Now prepare for many questions regarding configuration of your project. Guide will ask you about Vue version, please choose 3.x version and don't choose 'class-style component syntax' - this option is very interesting while using Typescript (we are going to start using JS only) but it causes problem still - i guess it requires some work still. 
Getting back to configuration: we want to use Babel, vuex, history mode for Router, Sass/Scss with dart-sass, ESLint with error prevention only and we want linting to be triggered on save. For testing we would like to use Mocha and Cypress. We want to store configurations in separate config files. 
I don't recommend to store this configuration for future projects but decision is yours :P

Once the project is ready you will be notified and you will see instruction how to start the project. To do that please type
``
cd interviewfrontend.com
npm run serve
``
in your terminal.

If everything went fine you should see the information in your teminal.

![terminal running app](/1/2.png "terminal running app")

You can see that my app is running locally at http://localhost:8081 but it might be that this address is slightly different on your machine. Default port 8080 is already taken on my computer so the app is served undder 8081 but you need to take yours and copy-paste it to your favorite browser (i'm using Chrome).

![browser running app](/1/3.png "browser running app")

Default welcome page of created Vue app is very informative. You can confirm that you have everything installed and moreover you can find essential links to documentation. We will replace this page in a minute but you can spend some time to read information stored under thouse links if you want.

### Adjust Vue app

We would like to adjust our app a bit. Don't want to go to details yet but since we want to deploy it soon we should update it with some information. It will be also an opportunity to take a look on the file structure and some basic concepts of Vue.

First, let's take a look at App.vue file. This is the main file of our app. You can see that there are 2 sections defined: template and styles. Template coresponds with HTML document in regular, static web page but it has strange tags (for sure not supported by HTML standard). That's the first superpower of modern JS frameworks like React, Angular and Vue. You can extend HTML with your own components and use it in such a convinient and nice way. 

I would like to remove navigation links (along with coresponding styles) from this file so you should have something like this.

```
<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

In general this simple file says Vue to replace ``<router-view />`` with view defined by ``router``. To understand it better let's jump into ``src/router/index.ts``. You can see 2 paths already defined in our app ``/`` (home) path and ``/about`` path. Router also defined which view should be rendered instead tag ``<router-view />`` in case of particular path. That's how it works. If you type ``http://localhost:8080/`` path (in your browser) app would display ``Home.vue`` and if ``http://localhost:8080/about`` path app would show ``About.vue``. We will jump into Home view in a minute but let's adjust router first.

```
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```

We want our app to serve just a homepage for now that's why I removed ``about`` path completaly. We can easly delete also ``src/views/About.vue`` and let's go to ``src/view/Home.vue`` and adjust it like this.

```
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>

```
As you can see i simplified it a bit. We would like to render Vue logo and ``HelloWorld`` component on homepage. As you can see I removed ``msg`` prop from component call. Prop is very convinient way to parametrize components but in this case let's keep it simple and hardcode the message inside it. To do this - go to ``src/components/HelloWorld.vue``.

```
<template>
  <div class="hello">
    <h1>Frontend Interview project is under construction.</h1>
    <p>
      To read more about the project please visit
      <a href="https://blog.interviewfrontend.com/" target="_blank" rel="noopener">our blog</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

```

We don't use props anymore so I removed it from component definition. I also removed unused styles and adjusted the message properly.

You can go to your browser to see our app in current stage - we simplified it a bit. 

![adjusted app in browser](/1/4.png "adjusted app in browser")

That's it for now. Our Vue app is ready to deploy - it does nothing yet but anyway it's a good starting point. I hope you understand some very basic concept of Vue but don't worry we will dive much deeper into Vue capabilities soon :)


### Create Firebase app

Now we're ready to create Firebase app. In order to do that go to https://firebase.google.com/ and click 'Go to console' (login using your google account). Then click 'Add project'. After filling in the data like: name, location and analitics synchronization. After app is created you can display 'Project settings' to find 'Project ID' we will need this in a minute.

Now let's get back to our Vue app. We need to install Firebase CLI to our app. In order to do that please type
``
npm install -g firebase-tools
``
in your terminal.

We need to configure our Vue app and link it with Firebase app. We can do this using configuration files. First create ``.firebaserc`` file in root directory of our app.

```
{
  "projects":{
    "default" : "[PLEASE CHANGE IT TO YOUR ID]"
  }
}
```

Before we deploy it we need to create another configuration file with rules how to do this. Please create ``firebase.json`` file in root directory of our app.

```
{
	"hosting":{
		"public":"dist",
		"ignore": [
			"firebase.json",
			"**/.*",
			"**/node_modules/**"
		],
		"rewrites":[
			{
				"source":"**",
				"destination":"/index.html"
			}
		]

	}
}
```

We're ready to deploy!

### Deploy it

If you analize ``firebase.json`` file you can observe that we says that folder to publish is our ``/dist`` folder. But there is no such a folder in our file structure isn't it? 

Let's open ``package.json`` file to understand why.

```
"serve": "vue-cli-service serve",
"build": "vue-cli-service build",
```

This file is very important in our application you can find there many dependencies we've already installed using npm and also ``scripts`` that we can run. To run our app for development we used ``npm run serve`` but when we want to build production version (the one to deploy) we need to run ``npm run build``. Let's try it out!

![dist folder](/1/5.png "dist folder")

After script is finished you can browse ``/dist`` folder in our app. This folder contains optimized files ready to deploy.

Now we have build our application and configure Vue and Firebase apps. We're ready to go.

Before we deploy let's log in to Firebase from terminal by typing ``firebase login`` once you're successfully logged in please type ``firebase deploy`` in your terminal.

After deployment process is complete you will see notification in your terminal. This message contains public address of deployed app. My app is now available publicly under https://interviewfrontendcom.web.app. I'm planning to publish short post about configuring custom domain soon but today as a last step we will configure another script to deploy even faster and easier.

Let's go to ``package.json`` file and add another script definition ``"deploy": "npm run build && firebase deploy",``. You can test it by typing ``npm run deploy`` in your terminal.

### Summary

We've created Vue app and deployed it on Firebase platform. The app displays simple information but it's up and running and moreover it's a good starting point for further development.
