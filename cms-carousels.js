/**
 * `cms-carousels`
 * choose from available client carousels and edit them
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
import {
  SpritefulElement, 
  html
}                  from '@spriteful/spriteful-element/spriteful-element.js';
import {carousels} from 'app.config.js';
import htmlString  from './cms-carousels.html';
import './carousel-editor.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-button/paper-button.js';


class SpritefulCmsCarousels extends SpritefulElement {
  static get is() { return 'cms-carousels'; }

  static get template() {
    return html([htmlString]);
  }


  static get properties() {
    return {

      _carousels: Array,

      _selected: String

    };
  }
  

  connectedCallback() {
    super.connectedCallback();

    this._carousels = carousels;
  }


  async __carouselNameClicked(event) {
    try {
      await this.clicked();
      const {name} = event.model;
      this._selected = name;
    }
    catch (error) {
      if (error === 'click debounced') { return; }
      console.error(error);
    }
  }

}

window.customElements.define(SpritefulCmsCarousels.is, SpritefulCmsCarousels);
