class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }

  selectVideo(video) {
    this.setState({
      selectedVideo: video
    });
  }

  searchYouTube(query, maxResults = 5) {
    var that = this;
    var message = {
      q: query,
      maxResults: maxResults,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet'
    };
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: message,
      contentType: 'application',
      success: function (data) {
        that.setState({
          selectedVideo: data.items[0],
          videos: data.items
        });
      },
      error: function (data) {
        console.log('error');
      }
    });
  }

  componentWillMount() {
    this.searchYouTube();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchYouTube={this.searchYouTube.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} selectVideo={this.selectVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
   
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// ReactDOM.render(<App />, document.getElementById("app"));
// ReactDOM.render(<VideoList />, document.getElementByClassName("col-md-5"));