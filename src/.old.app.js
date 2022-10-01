'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
    	return e(
	      'button',
	      { 
	      	onClick: () => this.setState(
	      		{ 
	      			liked: false 
	      		}
	      	) 
	      },
	      'Backward'
	    );
    }

    return e(
      'button',
      { 
      	onClick: () => this.setState(
      		{ 
      			liked: true 
      		}
      	) 
      },
      'Forward'
    );
  }
}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    	""
    );
  }
}
/**
 *
 * рендер компонента на страницу 
 * 
 */
const domContainer = document.querySelector('#button');
console.log(domContainer);
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));


