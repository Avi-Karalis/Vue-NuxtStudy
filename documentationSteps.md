# Steps Taken
- Volar extension is required in VS Code.

- scaffold a project
  - ```npx nuxi init <app>```

- ensure all dependences are installed
  - ``` npm i ```

- Can run the scaffolded app by typing
  - ```npm run dev``` <br/>
    in the console

## Various Notes
### Configuration via the ```defineNuxtConfig()``` method
- Nuxt.config.ts file MUST remain as a typescript whilst the rest of the app can be done in JS. This can configure can extend or change the NUXT default 
- This configuration for the project supports: 
  - add Metadata 
  - register modules
  - declare environment variables such as API keys.
- Auto-imports Reactivity APIs like ```ref```  or ```computed```, ```components/```, ```composables/```, ```utils/``` so you don't have to.
  - Nuxt exposes all auto imports within ```#imports``` alias if you need to explicitly import.
  - You can disable auto-importing inside ```nuxt.config.ts``` by adding ```imports: {autoImport:false}``` inside ```defineNuxtConfig()``` method.
 - Similarly you can disable auto-importing for ```~/components``` by stating ```components:{
  dirs:[] }``` inside ```defineNuxtConfig()``` method 
    - It is possible to auto import components based on their names not their paths ```components: [
    {
      path: '~/components', pathPrefix: false,
    },], ```
    - this means that such a component is accessible as ```<MyComponent>``` and not as ```<SomeMyComponent>``` in a directory such as ```~/components/Some/MyComponent.vue```
  - You can auto-import third-party packages inside ```defineNuxtConfig()```, for example, from the ```vue-i18n``` package you can import the ```useI18n``` composable like so: ```imports:{presets:[{from:'vue-i18n', imports:[useI18n]}]}```
  
  - To enable client-side only rendering (and thus disable the default server-side rendering) just add the following line in the method. <br/> ```ssr: false```
  - To enable type-checking at build time, use the ```typescript.typeCheck``` option like so: <br> ```typescript: {typeCheck: true}```
  - TypeScript can have certain checks to give you more safety and analysis of the program. Once we have converted our code to TS we can start enabling Strict Checks, for [greater safety](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#getting-stricter-checks), the syntax is ```typescript:{strict:true}```
  #### Important properties 
  ----
  - ```redirect: string``` - Define server-side redirects.
  - ```ssr: boolean``` - disables server-side rendering for section of your app and make them SPA-only with ```ssr: false```
  - ```cors: boolean``` - Automatically adds cors headers with ```cors: true``` and you can customize the output by overriding with headers.
  - ```headers: object``` - Add specific headers to sections of the site.
  - ```swr: number|boolean``` - add cache headers to the server response and cache it on the server or reverse proxy for a configurable time to live (TTL). The ```node-server``` preset of [Nitro](https://nitro.unjs.io/guide/cache) is able to cache the full response. When TTL has expired , the cached response will be sent while the page will be regenerated in the background. If true is used, a ```stale-while-revalidate``` header is added without MaxAge
  - ```isr: number|boolean``` - the behavior is the same as ```swr``` except you can add the response to the CDN cache on platforms that support it (Netlify or Vercel). If ```true``` is used, the content persists until the next deployment.
  - ```prerender: boolean``` - Prerenders routs at build time and includes them in your build as static assets.
  - ```experimentalNoScripts: boolean``` - Disables rendering of Nuxt scripts and JS resource hints for sections of the site.

### Routing
- Just create a new page in the folder and the routing happens auto-magically.
  - You just add a folder inside 'Pages' to create route paths and NUXT will accommodate automatically (you might need to relaunch the app for it to work properly though.) The names are definite. (Καρφωτά).
  - To do this, create a [].vue file here inside the brackets the variable of what's it going to be, in this project's case it's just the ID of the product.
  - ```useRoute().params``` can access the url parameter and pass it as a variable.
### Layouts
- You can create layouts for your pages in a similar fashion as with [Pages](#routing) 
- Create a .vue Component inside the Layouts folder, and in the ```<script setup></script>``` tags add the following: <br>```definePageMeta({
    layout: 'name-of-the-layout'
  });```
### Nuxt Components
  - You can use ```<NuxtLink>Text here</NuxtLink>``` tag instead of anchor links, to gain performance by making a single request to the server, by swapping necessary components.
    - If you inspect the console, you will find out, if you jump around different links via NuxtLink, the requests sent are zero.
    - NuxtLink actually attaches some under-the-hood classes (such as ```.router-link-exact-active```)`, these can be used to style selected links

----

CLIENT ONLY 
----
## Why Nuxt.JS?

### Main Features
----
- Built in routing. Instead of installing package just create a folder: Pages
  
- Supports mainly Composition API and Nuxt Composables
- Claims x75 smaller server deployments and smaller client bundles (to modern Browsers)
<br />
- Types of Rendering:
  - Universal Rendering
    - server-side + client-side
  - Client-Side Rendering,
  - Hybrid Rendering,
  - Edge-Side Rendering

### Main Benefits
----
- Server-Side Rendering (SSR): Nuxt.js supports server-side rendering, which means that your web application can render pages on the server before sending them to the client.

- Universal Application: Nuxt.js allows you to build both server-rendered and client-rendered applications from the same codebase. This makes it easy to create universal applications that work on both the server and the client, providing a smooth user experience.
  
- Routing: Nuxt.js provides a powerful and flexible routing system that is based on the file structure of your project. You can create nested routes, dynamic routes, and handle route transitions with ease.

- Automatic Code Splitting: Nuxt.js can automatically split your application code into smaller chunks, making it more efficient to load only the code that's necessary for a specific page or route.

- SEO-Friendly: With server-side rendering, Nuxt.js can generate SEO-friendly HTML content, which can help improve your website's search engine rankings.

- Plugins and Modules: Nuxt.js supports a modular architecture, allowing you to easily extend and customize your application using plugins and modules. There is a wide ecosystem of Nuxt.js modules available to add functionality to your project.

- Middleware: Nuxt.js includes middleware support, which allows you to add custom logic to your application's request/response cycle, such as authentication and logging.

- Developer Experience: Nuxt.js aims to provide a great developer experience by offering features like hot module replacement (HMR) for rapid development and debugging.

- Easy Setup and Configuration: Nuxt.js includes a simple and intuitive setup process, making it relatively easy to start a new project and configure it to your needs.

