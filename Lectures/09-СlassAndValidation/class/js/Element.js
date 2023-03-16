class BaseElement {
  constructor(tag, className) {
    this.tag        = tag;
    this.className  = className;

    this.element = null;

    this.createElement();
  }

  createElement() {
    this.element = document.createElement(this.tag);
    this.element.classList.add(...this.className);
  }
}

class Paragraph extends BaseElement {
  constructor(className, text) {
    super('p', className)
    this.text = text;

    this.init();
  }
  init() {
    this.element.innerText = this.text;
  }
}

class ImageElement extends BaseElement {
  constructor(className, src, alt, width, height) {
    super('img', className);

    this.src      = src;
    this.alt      = alt;
    this.width    = width;
    this.height   = height;

    this.init();
  }
  init() {
    this.element.src      = this.src;
    this.element.alt      = this.alt;
    this.element.width    = this.width;
    this.element.height   = this.height;
  }
}

class Button extends BaseElement {
  constructor(className, type, children) {
    super('button', [...className, 'button']);

    this.type       = type;
    this.children   = children;

    this.init();
  }
  init() {
    this.element.type = this.type;
    this.element.innerHTML = this.children;
  }


}

class SubmitBtn extends Button {
  constructor(children){
    super(['primary', 'submit'], 'submit', children)
  }
}


const paragraph = new Paragraph(
  ['paragraph', 'paragraph-center'], 'Jevgenijs Voronovs'
);

const image = new ImageElement(
  ['imgClass'], 
  './FlexBox.png', 
  'random img', 
  100,
  100
);

const button    = new Button([], 'submit', '<span>click me</span>')
const submitBtn = new SubmitBtn('<span>CLICK ME I AM IMPORTANT</span>',)

document.getElementById('output').append(image.element)
document.getElementById('output').append(paragraph.element);
document.getElementById('output').append(button.element);
document.getElementById('output').append(submitBtn.element);
