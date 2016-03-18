/* {
  id: 'overview',
  className: 'step',
  attributes: {
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    'rotation-x': 0,
    'rotation-y': 0,
    'rotation-z': 0
  }
} */

export default [
  {
    id: 'start',
    className: 'step slide',
    attributes: {
      x: -1500,
      y: -3000
    },
    get content () {
      return `
        <div class='inner-slide flex-centered flex-column'>
          <h1>Is this right for you</h1>
          <div><p>presented by</p></div>
        </div>
        <img style='position: absolute; bottom: 10px; right: 10px;' src='${require('assets/images/ct_header.svg')}' />
      `
    }
  },
  {
    id: 'step-1',
    className: 'step slide',
    attributes: {
      y: -3000
    },
    get content () {
      return `
        <q>Don’t you think that presentations given <strong>in modern browsers</strong> shouldn’t <strong>copy the limits</strong> of ‘classic’ slide decks?</q>
      `
    }
  },
  {
    id: 'step-2',
    className: 'step slide',
    attributes: {
      x: 1500,
      y: -3000,
      z: -6000,
      rotate: 180
    },
    get content () {
      return `
        <q>Would you like to <strong>impress your audience</strong> with <strong>stunning visualization</strong> of your talk?</q>
      `
      }
  },
  {
    id: 'title',
    className: 'step',
    attributes: {
      scale: 4
    },
    get content () {
      return `
        <span class='try'>then you should try</span>
        <h1>impress.js<sup>*</sup></h1>
        <span class='footnote'><sup>*</sup> no rhyme intended</span>
      `
    }
  },
  {
    id: 'its',
    className: 'step',
    attributes: {
      x: 850,
      y: 3000,
      scale: 5,
      rotate: 90
    },
    get content () {
      return `
        <p>It is a <strong>presentation tool</strong> <br/> inspired by the idea behind <a href='http://prezi.com'>prezi.com</a> <br/> and based on the <strong>power of CSS3 transforms and transitions</strong> in modern browsers.</p>
      `
    }
  },
  {
    id: 'big',
    className: 'step',
    attributes: {
      x: 3500,
      y: 2100,
      scale: 6,
      rotate: 180
    },
    get content () {
      return `
        <p>visualize your <b>big</b> <span class='thoughts'>thoughts</span></p>
      `
    }
  },
  {
    id: 'tiny',
    className: 'step',
    attributes: {
      x: 2825,
      y: 2325,
      z: -3000,
      rotate: 300
    },
    get content () {
      return `
        <p>and <b>tiny</b> ideas</p>
      `
    }
  },
  {
    id: 'ing',
    className: 'step',
    attributes: {
      x: 3500,
      y: -850,
      z: 0,
      scale: 6,
      rotate: 0
    },
    get content () {
      return `
        <p>by <b class='positioning'>positioning</b>, <b class='rotating'>rotating</b> and <b class='scaling'>scaling</b> them on an infinite canvas</p>
      `
    }
  },
  {
    id: 'imagination',
    className: 'step',
    attributes: {
      x: 8000,
      y: 1500,
      scale: 8,
      rotate: -60
    },
    get content () {
      return `
        <p>the only <b>limit</b> is your <b class='imagination'>imagination</b></p>
      `
    }
  },
  {
    id: 'source',
    className: 'step',
    attributes: {
      x: 6300,
      y: 2000,
      scale: 4,
      rotate: 20
    },
    get content () {
      return `
        <p>want to know more?</p>
        <q><a href='http://github.com/bartaz/impress.js'>use the source</a>, Luke!</q>
      `
    }
  },
  {
    id: 'one-more-thing',
    className: 'step',
    attributes: {
      x: 6000,
      y: 4000,
      scale: 2
    },
    content: '<p>one more thing...</p>'
  },
  {
    id: 'its-in-3d',
    className: 'step',
    attributes: {
      x: 6200,
      y: 4300,
      z: -100,
      scale: 2,
      'rotate-x': -40,
      'rotate-y': 10
    },
    get content () {
      return `
        <p>
          <span class='have'>have</span>
          <span class='you'>you</span>
          <span class='noticed'>noticed</span>
          <span class='its'>it’s</span>
          <span class='in'>in</span>
          <b>3D<sup>*</sup></b>?
        </p>
        <span class='footnote'>* beat that, prezi ;)</span>
      `
    }
  },
  {
    id: 'credits',
    isHidden: false,
    className: 'step',
    attributes: {
      x: 6200,
      y: 4300,
      z: 5000,
      scale: 2,
      'rotate-x': -40,
      'rotate-y': 10
    },
    get content () {
      return `
        <div class='inner-slide flex-centered flex-column'>
          <h1>Built using</h1>
          <ul>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>ImpressJS</li>
          </ul>
        </div>
      `
    }
  }
]
