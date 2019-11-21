class ScrollSpy {
  constructor(element, options) {
    this.element = element;
    this.options = options;
    this.offsetTopElement = options.offsetTopElement;
    this.offsetTop = options.offsetTop || 0;
    this.offsetBottomElement = options.offsetBottomElement;
    this.offsetBottom = options.offsetBottom || 0;
    this.cb = options.cb;
    this.isBelowTopOffset = false;
    this.isBelowBottomOffset = false;
  }

  handleCallbacks = (isBelowTopOffset, isBelowBottomOffset) => {
    this.cb && this.cb(isBelowTopOffset, isBelowBottomOffset);
  };

  scroll = () => {
    const windowHeight = window.innerHeight;
    const windowPositionTop = window.pageYOffset + windowHeight;

    const topElement = this.offsetTopElement;
    const lowerTopBound =
      topElement && topElement.offsetTop + topElement.clientHeight;
    const bottomElement = this.offsetBottomElement;
    const lowerBottomBound = bottomElement && bottomElement.offsetTop;

    /*
     * if "offsetElement" is set, use it to calculate if user has scrolled below it,
     * if it´s wasn´t set, use the fallback (for offsetTop = 0 & for offsetBottom = document.body.clientHeight)
     * */
    const isBelowTopOffset = topElement
      ? lowerTopBound
        ? windowPositionTop + this.offsetTop >= lowerTopBound
        : false
      : windowPositionTop >= this.offsetTop;
    const isBelowBottomOffset = bottomElement
      ? lowerBottomBound
        ? windowPositionTop + this.offsetBottom >= lowerBottomBound
        : false
      : windowPositionTop >= document.body.clientHeight;

    // only callback if state has changed
    if (
      this.isBelowTopOffset !== isBelowTopOffset ||
      this.isBelowBottomOffset !== isBelowBottomOffset
    ) {
      this.handleCallbacks(isBelowTopOffset, isBelowBottomOffset);
      this.isBelowTopOffset = isBelowTopOffset;
      this.isBelowBottomOffset = isBelowBottomOffset;
    }
  };

  init = () => {
    this.scroll();
    window.addEventListener('scroll', this.scroll);
  };
}
