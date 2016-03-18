'use strict'
import 'assets/css/slideshow.css'
import 'styles.scss'

import SLIDES from 'SLIDES'
import impress from 'libs/impress/js/impress.js'

const domNode = document.createElement('div')
domNode.id = 'impress'

for (let i = 0; i < SLIDES.length; i++) {
  const slide = SLIDES[i]

  if (slide.isHidden) {
    continue
  }

  const node = document.createElement('div')
  node.id = slide.id
  node.className = slide.className
  node.innerHTML = slide.content

  for (let attribute in slide.attributes) {
    node.setAttribute(`data-${attribute}`, slide.attributes[attribute])
  }

  domNode.appendChild(node)
}

document.body.appendChild(domNode)

impress().init()
