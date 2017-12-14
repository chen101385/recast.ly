class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formText: ''
    };
  }

  handleFormInput(event) {
    this.setState({
      formText: event.target.value
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.searchYouTube(this.state.formText); 
    }
  }

  render () {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" 
        onChange={this.handleFormInput.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>

        <button className="btn hidden-sm-down" onClick={() => {
          this.props.searchYouTube(this.state.formText);
        }}>

          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
} 


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
