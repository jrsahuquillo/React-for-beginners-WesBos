import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {
  	event.preventDefault();
  	console.log('Patatafrito');
  	//First grab the text from the box
  	console.log(this.storeInput.value);
  	//Second we're going to transition from / to /store/:storeiId
  }

  render() {
  	//Any where else
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store >></button>
      </form>
    )
  }
}

export default StorePicker;
