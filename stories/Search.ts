import { html, LitElement, property } from 'lit-element';
import { forEach } from 'lodash';

export class UUISearch extends LitElement {


  static properties = {
     _prop: {},
     _data: {},
     _searchresults: {},
     _optionlength: {}
  };

  constructor() {
    super();
    this._data = ['apple', 'strawberry', 'pear', 'banana', 'lemon']
    this._searchresults = [];
    this._optionlength = this._data.length;
  }
  connectedCallBack() {
    super.connectedCallback();

    console.log('connectedcallback');
  }

  _renderOptions = () => {
    return html`<option>test</option>`;
  }

  render() {
    return html`
    Input: ${this._prop}
    <br>
    Search results: ${this._searchresults}
    <br>
    <input type="search" @input="${this._handleSearch}">
    <br>
    <select size="${this._optionlength}">
      ${this._renderOptions()}
    </select>
    ` 
  }

  _handleSearch = (e) => {
    this._searchresults = this._data.filter((item) => item.includes(e.target.value));
    this._optionlength = this._searchresults.length;
    //console.log('results:', this._searchresults);
    
    this._prop = e.target.value;
  }
}
customElements.define('uui-search', UUISearch);
