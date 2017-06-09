# \<adom-media\>

This component shows an image or video with dimensions. so it´s possible add content inside of image using slot

## Using an image

use the attribute `img-src` for add an url image

__example__

```html
<adom-media img-src="http://lorempixel.com/600/400/" width="600" height="400" fade-in></adom-media>
```

With the attributes `width` and `height` it's possible get dimensions to image.

Use the attribute `fade-in` for add an opacity transition.

## Using a video

it's possible add a video using the attribute `video-src`. You can add a video from youtube, or from vimeo.

__example__

```html
<adom-media video-src="https://vimeo.com/206588966" width="640" height="360"></adom-media>
```

For add an image or video responsive, add the attribute `responsive`, for this, it´s no neccessary add the attribute `width`

__example__

```html
<adom-media video-src="https://vimeo.com/206588966" responsive></adom-media>
```

## Using slot

Add your own content inside an image using the slot image-content

__example__

```html
<adom-media img-src="http://lorempixel.com/600/400/" fade-in>
  <div slot="image-content">
    <h1>My own content</h1>
  </div>
</adom-media>
```

## Styling

The following custom properties and mixins are available for styling:

Custom property   | Description                        | Default   |
------------------|------------------------------------|-----------|
--adom-media      | empty mixin for :host adom-media   | {}        |

## Serving your Application

You can serve your application with:

    $ gulp serve

## Building Your Application

The application goes building while you build your application, you can check your application in `dist` folder.
