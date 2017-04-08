var React = require('react');

var Results = React.createClass({

render: function(){
	return(
		<div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          <h4> Search Topic: </h4>
        	<p>{this.props.searchTopic}</p>
          <h4> Results: </h4>
            <p>{this.props.results}</p>
        </div>
      </div>


      );



}

});

module.exports = Results;