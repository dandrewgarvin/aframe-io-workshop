# A-frame IO Workshop

## What is A-frame?

A-frame was developed by Mozilla (The creators of the Firefox web browser). It is a web framework intended to create virtual reality experiences in the browser.

A-frame utilizes a 3d space. It follows the standard `ECS` pattern (Entity-Component-System). This is similar to JavaScript, where everything inside your script is an object.

It has now become an open-source platform that has developers from all sorts of backgrounds contributing to the framework.

## What can I use A-frame for?

Although in a users average web-browsing experience we don't really encounter a whole lot of virtual reality websites, that doesn't mean they don't exist. Some believe that WebVR is going to continue to grow and develop as an industry. This repo walks you through the _basics_ of the Aframe framework. With a little creativity, and some practice piecing things together, there isn't a limit to the things you'd be able to create! 

## What do I need to know to get started?

__DISCLAIMER__ If you dive into Aframe (or any other AR, VR, or Game Development framework), you are going to hear a lot of terms such as `Scene`, `Entity`, `Particle System`, `Skybox`, `Model`, etc. Usually, they behave just like they sound. You can figure out what most of them are with a quick google (or bing) search. ;)

Secondly, one of the most helpful tools you'll find at your disposal is the `Scene Inspector` that comes with `Aframe` by default. You can access it by pressing `Alt` + `Ctrl` + `i` on your keyboard (Mac). This is the inspector you can use to navigate through your project.

While in the scene inspector, there are a few motions and keyboard shortcuts you need to be aware of in order to navigate around.

1. `Single Mouse Click` + `Move Mouse` will allow you to rotate.
2. `Right Mouse Click` + `Move Mouse` will allow you to pan.
3. `Scroll up or down` will allow you to zoom.

On the left of the inspector, you'll notice the hierarchy of your entire `ECS` system. These are all the entities currently in your scene.

If you click on an entity, you'll see all of the properties of it appear on the right. You can modify them within the inspector, but none of the changes you make will be saved. You'll have to go back to your code to actually write the changes you've made.

Jumping out of the inspector, we can navigate our scene with either `WASD` or the arrow keys. It's your preference!

## Setup and Initialization

_Okay, Let's jump into the actual setup of this project._

The `<Scene>` tag is the root of the Aframe project (Just like `<HashRouter>` is the root of our `react-router`). Inside of our `<Scene>` is going to be all of our `<Entity>` objects. You can think of them like a div, but with 3d properties.

That's the basic setup that needs to take place. From here, we just need to figure out how the different entities can interact with each other.

Let's begin by adding a `Skybox`. A Skybox is basically the 360 degree background texture that we can see in every direction. As with every entity, there is quiet a lot of customization we can add, but we'll start with just a simple color. We want this to be at the very top (but still inside) our scene.

`<Entity primitive="a-sky" color="lightblue" />`

Our `Primitive` is the type of entity we are creating. There are plenty of other primitive types as well.


## Adding other cool features

Now that we have a skybox, lets start utilizing aframe a little bit better.

Let's add another entity. `<Entity primitive="a-box" color="orange" />`. Now we have a box in our scene! We may have to move around a little bit to see it, but it's there!

Instead of a color, we could add a texture to our new entity by using the `src=""` attribute instead of `color=""`. We would simply need to reference an image, and it will be applied.

The same goes with our skybox. Is we replace the `color="lightblue"` with `src="https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/"`, we'll get a nice image with a view! That's more like it.

Lets say the weather here is for some reason not amazing today.. We can add snow! Let's do that by utilizing a particle system.

First, we need to import the particle handler with 
`import 'aframe-particle-system-component'`.

Next, let's add another entity object. `<Entity particle-system={{preset: 'snow', particleCount: 15000}}/>`

Just like that, we have snow! We could add plenty of other types of particles, but we'll stick with snow for now.

## Resources

[Creating your first WebVR App](https://www.viget.com/articles/creating-your-first-webvr-app)

[Official Guide to the Scene Inspector](https://github.com/aframevr/aframe/blob/master/docs/introduction/visual-inspector-and-dev-tools.md)

[Megan Fisher Aframe Repo](https://github.com/MeganMFisher/aframe-react-demo)

[Alan Miller Aframe Boilerplate](https://github.com/Alan-Miller/aframe)

[Particle System Docs](https://www.npmjs.com/package/aframe-particle-system-component)