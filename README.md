# YO! Welcome to Tom's personal developer portfolio template

I used this in my last last job search to land interviews at companies like Microsoft, Amazon, Compass, FullStory, Eventbrite, GoDaddy, Own Up, Hotel Engine, Rover, Brigit, Mos, Hoodie Analytics, Lunar Crush, Truepill, Sprig, and a hand full of other Series A-C startups that I couldn't find in my email lol (not to mention interviews that I turned down).

Below we'll walk through exactly how you can customize this template to make it your own.

Before we go too far, note that I've provided a video walkthrough of the entire project [HERE](https://youtu.be/5l4ag_RF8hk).

You can also find a live version of this project deployed at [https://toms-personal-portfolio-demo.vercel.app/](https://toms-personal-portfolio-demo.vercel.app/).

## Let's get things running

This template is built on top of [NextJS](https://nextjs.org/), a full stack development framework built on top of React.

We won't take time here going over exactly how NextJS works on a deep level (to be fair, this project doesn't use Next at a deep level), but if you're interested in learning, their docs are [here](https://nextjs.org/docs/getting-started).

At the root of your project, you'll see a `package.json` file defining our dependencies.

Most of this is boilerplate, but I will call out the following three dependencies:

- `framer-motion` -> A react based animation library, used in a hand full of places, primarily the "Stars", "Moon" and "Waves" components to provide the parallax background
- `tailwindcss` -> All styling uses Tailwind CSS for this project

Now that's out of the way, you can get your project running by first installing dependencies.

From your terminal, run:

```
npm install
# or
yarn install
```

This will take a minute or two, but once that's done, you should be able to run the following command:

```
npm run dev
# or
yarn dev
```

This will start your project on `localhost:3000`

## The file structure

Because this is a NextJS project, we follow the standard NextJS pattern for organizing this project. If you're familiar with the latest in Next, you might know about the new `app` directory. This uses the older, more stable `pages` directory. If you WOULD like to upgrade to the app directory, you can find docs on that [here](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration), but it shouldn't make any difference for a project like this one.

Inside of the `pages/` directly you'll find 3 files:

- `_app.tsx` -> A file which wraps around every page in our app. Here we import the Gothic font and include it in our page. You can change to use whatever font you'd like here ([docs](https://nextjs.org/docs/basic-features/font-optimization)).
- `_document.tsx` -> Essentially the NextJS version of your base "HTML document". Nothing fancy here beyond a couple of tailwind classes.
- `index.tsx` -> This represents our home route. We include a few components for rending the background, as well as the `Left` and `Right` components representing our content. Click into these components to begin exploring.

To add MORE routes to your project, see [this doc](https://nextjs.org/docs/basic-features/pages).

Inside of the `/src/components/` directory you'll find all of the good stuff.

## Styling

As noted, most styling is done using [Tailwind CSS](https://tailwindcss.com/).

Open up the `tailwind.config.js` file to check out our configuration. The `brand` key represents that purple color you see throughout the website. The others represent the blacks and whites. Change these hex codes to make the vibe fit your style.

The one side note is the waves/mountains at the bottom of the page. Those come from an svg which you can find at `/public/waves.svg`. You'll need to manually update the `fill` attributes in these to get the waves to match your brand colors.

## More info

That's the basics! If you're comfortable digging in yourself, then you should be set.

Want a deeper walkthrough??

[WATCH THE TUTORIAL VIDEO](https://youtu.be/5l4ag_RF8hk)
