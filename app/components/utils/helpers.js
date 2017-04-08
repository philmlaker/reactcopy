import axios from "axios";

// const authKey = "53567ecab3d5401b9ef7333adaad3204";
// const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
//         authKey + "&q=";

// const queryURL = queryURLBase + authKey;

const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=53567ecab3d5401b9ef7333adaad3204&q=";

const helpers = {

	runQuery: function(topic){

		console.log("this is a topic from helpers:" + topic);
		return axios.get(queryURL + topic).then(function(response){
			response = response.data.response.docs[0].headline.main;
			response = JSON.stringify(response);
			console.log("this is a response from helpers:" + response);
			return response;


		});

	}

};

module.exports = helpers;