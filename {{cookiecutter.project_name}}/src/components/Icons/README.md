# How to use

Click on the icon that you want (this copies the html to your clipboard) and paste the code to your project...that's it.

If you want to manually write it, it looks like this `<span className="icon-<NAME-OF-ICON>"/>`

# How are these icons generated?

Whenever the `storybook` and `storybook:build` scripts are ran, a script is ran that collects all of the icons listed in the `fontello.config.json` file and injects them into the `Icons.js` file which is generated from the `Icons.template.js` file. This maintains currency of all icons even when more are added later on.
