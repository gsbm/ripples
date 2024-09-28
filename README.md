Ripples
=====================

💧 Add a water ripple effect to your background using WebGL.

> This library is a pure Javascript portage of [Jquery Ripples](https://github.com/sirxemic/jquery.ripples).

Usage
-----

> [!WARNING]
> This plugin requires the WebGL extension `OES_texture_float` (and `OES_texture_float_linear` for a better effect) and works only with same-origin images (see [this link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) for more information on using cross-origin requested images).

Include the script at the end of your page or, when you are using bundling tools such as Webpack or Browserify, simply import it into your bundle.

The quickest way to use this plugin on an element is to ensure that the element has a `background-image` set (currently only URLs are supported), then initialize the plugin as follows:

```js
ripples(document.querySelector(selector));
```

Optionally you can tweak the behavior and appearance by initializing it with options (See the [options secton](#options) for the full list of options):

```js
ripples(document.querySelector(selector), {
  dropRadius: ...,
  perturbance: ...,
  ...
});
```

The plugin also has several methods to programmatically add drops, show, hide or remove the effects among other things. See the [methods section](#methods) for more details.

Options
-------
| Name | Type | Default | Description |
|------|------|---------|-------------|
| imageUrl | string | null | The URL of the image to use as the background. If absent the plugin will attempt to use the value of the computed `background-image` CSS property instead. Data-URIs are accepted as well. |
| dropRadius | float | 20 | The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas. |
| perturbance | float | 0.03 | Basically the amount of refraction caused by a ripple. 0 means there is no refraction. |
| resolution | integer | 256 | The width and height of the WebGL texture to render to. The larger this value, the smoother the rendering and the slower the ripples will propagate. |
| interactive | bool | true | Whether mouse clicks and mouse movement triggers the effect. |
| crossOrigin | string | "" | The crossOrigin attribute to use for the affected image. For more information see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes).


Methods
-------
### drop
Call `ripples(element, 'drop', x, y, radius, strength)` to manually add a drop at the element's relative coordinates (x, y). `radius` controls the drop's size and `strength` the amplitude of the resulting ripple.

### destroy
Call `ripples(element, 'destroy')` to remove the effect from the element.

### hide / show
Call `ripples(element, 'hide')` and `ripples(element, 'show')` to toggle the effect's visibility. Hiding it will also effectively pause the simulation.

### pause / play
Call `ripples(element, 'pause')` and `ripples(element, 'play')` to toggle the simulation's state.

### set
Call `ripples(element, 'set', name, value)` to update properties of the effect. The properties that can be updated are:
- `dropRadius`
- `perturbance`
- `interactive`
- `imageUrl` (setting the image URL will update the background image used for the effect, but the `background-image` CSS property will be untouched)
- `crossOrigin` (setting this won't have any effect until `imageUrl` is changed)

### updateSize
The effect resizes automatically when the width or height of the window changes. When the dimensions of the element changes, you need to call `ripples(element, 'updateSize')` to update the size of the effect accordingly.

## License

This project is licensed under [MIT](https://github.com/greenmagenta/ripples/LICENSE/) License.
