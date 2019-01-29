/* eslint no-console: "off" */
// TODO: remove console debugging messages per eslint no-console

const replace = require("replace-in-file");
const fontelloConfig = require("../../../fontello.config");

fontelloConfig.glyphs.sort((glyph1, glyph2) => {
  if (glyph1.css > glyph2.css) {
    return 1;
  } else if (glyph1.css === glyph2.css) {
    return 0;
  } else {
    return -1;
  }
});

const jsxIcons = fontelloConfig.glyphs.reduce((acc, curr) => {
  const icon = `<span className="icon-${curr.css}"/>`;

  acc = `${acc}
    <Clipboard data-clipboard-text={\`${icon}\`}>
      <div className="icon-card uk-card uk-card-default uk-card-hover uk-card-body uk-card-small" onClick={() => {UIkit.notification({message: "${
        curr.css
      } icon copied to clipboard", status: 'success'})}}>
        <strong>${curr.css}</strong>
        ${icon}
      </div>
    </Clipboard>
`;
  return acc;
}, "");

const options = {
  files: "./Icons.js",
  from: /%inject-icons-here%/g,
  to: jsxIcons
};

try {
  const changes = replace.sync(options);
  console.log("Modified files:", changes.join(", "));
} catch (error) {
  console.error("Error occurred:", error);
}
