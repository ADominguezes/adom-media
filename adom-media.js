(function () {
  'use strict';
  Polymer({

    is: 'adom-media',

    properties: {
      /**
       * Url image
       */
      imgSrc: {
        type: String,
        observer: '_responsive'
      },
      /**
       * Url video
       */
      videoSrc: {
        type: String,
        observer: '_fixVideo'
      },
      /**
       * width of video or image
       */
      width: {
        type: Number,
        value: 480
      },
      /**
       * Height of video or image
       */
      height: {
        type: Number,
        value: 360
      },
      /**
       * if the component is responsive validate the with in 100%
       */
      responsive: {
        type: Boolean,
        reflectToAttribute: true
      },
      fadeIn: {
        value: false
      },
      circle: {
        type: Boolean,
        reflectToAttribute: true
      }
    },
    attached: function () {
      var image = Polymer.dom(this.root).querySelector('.image-overlay');
      var video = Polymer.dom(this.root).querySelector('.video');

        if (this.imgSrc) {
          video.hidden = true;
        }
        if (this.imgSrc && this.circle) {
          image.style.borderRadius = this.width/2 + 'px';
        }
        if(this.videoSrc){
          image.hidden = true;
        }
        if(this.videoSrc && this.imgSrc) {
          image.hidden = true;
          video.hidden = true;
        }
    },
    _fixVideo: function () {
      var regexp = /(http:\/\/|https:\/\/|)(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/;
      if (regexp.test(this.videoSrc)) {
        // check if video is vimeo or youtube
        if(this.videoSrc.match(regexp)[3] === "vimeo.com") {
          this.videoSrc = 'https://player.vimeo.com/video/' + this.videoSrc.match(regexp)[6];
        }
        if(this.videoSrc.match(regexp)[3] === "youtube.com") {
          this.videoSrc = 'https://youtube.com/embed/' + this.videoSrc.match(regexp)[6];
        }
      }
    },
    _responsive: function() {
      if(this.responsive) {
        var image = Polymer.dom(this.root).querySelector('.image-overlay');
        var iframe = Polymer.dom(this.root).querySelector('.iframe');
        if(this.imgSrc) {
          image.style.width = '100%';
        }
        if(this.videoSrc) {
          iframe.width = '100%';
        }
      }
    }

  });
}());
