// Include React
var React = require("react");
var Form = require("./children/Form.jsx");
var Results = require("./children/Results.jsx");
import helpers from './utils/helpers.js';

var Main = React.createClass({

getInitialState: function() {
   return {searchTopic: "", results: ""};
},

componentDidUpdate: function(prevProps, prevStates){
 
    alert("working!");

    helpers.runQuery(this.state.searchTopic).then(function(data){
      if (data !== this.state.results){
        console.log("this is from Main.Js" + data);
        this.setState({results: data});
      }
    }.bind(this));
  // },
},



 setTopic: function(topic) {
    this.setState({
      searchTopic: topic
    });


  },




    render: function() {




        return (
          <div className ="container">
              <div className = "col-md-6" >
                   <Form setTopic={this.setTopic}/>
              </div>

              <div className="col-md-6">
                <Results results={this.state.results} searchTopic={this.state.searchTopic}/>

              </div>
          </div>
        );
    }
});

module.exports = Main;
