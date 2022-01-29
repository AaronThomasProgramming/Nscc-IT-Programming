(function(){
	
	//Choose an array method to implement for each of the incomplete functions.
	//You MUST only use a combination of MAP, FILTER, and REDUCE array functions in order to accomplish your goal.
	//No use of for loops of any kind or the forEach function is permitted.

	//Remember, you can chain together array function calls to attain your goals.
	// Ex: array.filter().map()

	//Get data for the TV Show "Friends"
	fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
	    .then(function(response){
	        return response.json();
	    })
	    .then(function(json){

	        //DO NOT MODIFY THE CODE IN HERE...check the console for your functions' output
			data = json;
	        //1 - Implement the function called getGuntherCount which returns the total number of episodes 
	        // where the character Gunther is mentioned in the episode summary.
	        console.log('--------------------------------');
	        console.log(`Gunther Count: ${getGuntherCount(json)}`);

	        //2 - Implement the function called getTotalRuntimeMinutes() that totals all runtime minutes for all episodes
	        console.log('--------------------------------');
	        console.log(`Total Runtime Minutes: ${getTotalRuntimeMinutes(json)}`);

	        //3 - Implement the function called getDateRangeEpisodeCount() that returns the number of episodes that aired in the year 2000
	        console.log('--------------------------------');
	        console.log(`Total episodes airing in year 2000: ${getTotalEpisodesInYear(json, '2000')}`);

	        //4 - Implement the function called getFemaleCastMembers() that returns an array of the names of the female cast members.
	        console.log('--------------------------------');
	        console.log(`Female Cast Members:`);
	        console.log(getFemaleCastMembers(json));

	        //5 - Implement the function called getEpisodeTitles() which returns a list of episode
	        //    where the argument string is found in the episode summary.
	        console.log('--------------------------------');
	        console.log(`Episodes that mention Ursula:`);
	        console.log(getEpisodeTitles(json, 'Ursula'));

	        //6 - Implement the function called getCastMembersOver55() which returns a list of cast members
	        //    who are currently 55 years of age or older.
	        console.log('--------------------------------');
	        console.log(`Cast Members who are currently 55 or older:`);
	        console.log(getCastMembers55OrOlder(json));

	        //7 - Implement the function called getTotalRuntimeMinutesExcludingSeasonSix that gets the total 
	        //    runtime minutes for all episodes excluding episodes in season 6
	        console.log('--------------------------------');
	        console.log(`Total runtime in minutes excluding Season 6: ${getTotalRuntimeMinutesExcludingSeasonSix(json)}`);
    
	        //8 - Implement the function called getFirstFourSeasons that gets the episodes for the first four seasons 
	        //    but only return an array of JSON objects containing the season number and episode name
	        console.log('--------------------------------');
	        console.log(`Episode JSON for first four seasons:`)
	        console.log(getFirstFourSeasons(json));

	        //9 - Implement the function called getEpisodeTallyBySeason that returns an object containing the season name and the total episodes as key:value pairs for each season
	        console.log('--------------------------------');
	        console.log(`Tally of episodes by season:`);
	        console.log(getEpisodeTallyBySeason(json));

	        //10 - Implement the function called capitalizeTheFriends that transforms the episode JSON data by capitalizing the words Joey, Chandler, Monica, Rachel, Phoebe, and Ross in both 
	        //the name and summary of the episodes.
	        console.log('--------------------------------');
	        console.log(`Capitalized Friends:`);
	        console.log(capitalizeTheFriends(json));

	    })

	// COMPLETE THE FOLLOWING FUNCTIONS BY IMPLEMENTING MAP, REDUCE, OR FILTER 
	// (or a combination) ON THE PROVIDED JSON DATA

	// Complete the required ten functions below this line...
	function getGuntherCount(json) { // <- you may or may not need to define parameters for your function
		//return `Function not yet implemented`; //remove this line when implementing the function
		console.dir(json);
		return(json._embedded.episodes.filter(e=>e.summary.includes("Gunther")).length);
	}
	
	function getTotalRuntimeMinutes(json) { // <- you may or may not need to define parameters for your function
		//return `Function not yet implemented`; //remove this line when implementing the function
		let help = json._embedded.episodes.map(x=>x.runtime);

		function addEm(acc, currentValue){
			return(acc + currentValue);
		}
		return(help.reduce(addEm,0));
	}
	
	function getTotalEpisodesInYear(json, currentYear) { // <- you may or may not need to define parameters for your function
		//return `Function not yet implemented`; //remove this line when implementing the function
		return(json._embedded.episodes.filter(e=>e.airdate.includes(currentYear)).length);
	}
	
	function getFemaleCastMembers(json) { // <- you may or may not need to define parameters for your function
		//return `Function not yet implemented`; //remove this line when implementing the function
		var genderArray = json._embedded.cast.filter(g=>g.person.gender === "Female").map(d=>d.person.name);
		return(genderArray);
	}
	
	function getEpisodeTitles(json, nameSummary) { // <- you may or may not need to define parameters for your function
		//return `Function not yet implemented`; //remove this line when implementing the function
		var epArray = json._embedded.episodes.filter(e=>e.summary.includes(nameSummary)).map(x=>x.name)
		return(epArray);
	}
	
	function getCastMembers55OrOlder(json) { // <- you may or may not need to define parameters for your function
		//return `Function not yet implemented`; //remove this line when implementing the function
		var yearArray = json._embedded.cast.filter(x=>x.person.birthday.split("-").map(Number)[0] *-1 + 2020 >= 55).map(n=>n.person.name);
		return(yearArray);
	}
	
	function getTotalRuntimeMinutesExcludingSeasonSix(json) { // <- you may or may not need to define parameters for your function
		//return `Function not yet implemented`; //remove this line when implementing the function
		var noSix = json._embedded.episodes.filter(x=>x.season != 6).map(r=>r.runtime);

		function addEm(acc, currentValue){
			return(acc + currentValue);
		}
		return(noSix.reduce(addEm,0));
	}
	
	function getFirstFourSeasons(json) { // <- you may or may not need to define parameters for your function
		//return `Function not yet implemented`; //remove this line when implementing the function
		var theFour = json._embedded.episodes.filter(x=>x.season <= 4).map(r=>r);
		
		function keep(acc,cv){
			acc[cv.id] = 
				{Season:cv.season, Name:cv.name}
			
			return(acc);
		}
		return(theFour.reduce(keep,{}));
	}
	
	function getEpisodeTallyBySeason(json) { // <- you may or may not need to define parameters for your function
		//return `Function not yet implemented`; //remove this line when implementing the function
		var allEp = json._embedded.episodes.map(r=>r);

		function tallyEp(acc, cv){
			acc[cv.season] = cv.number;
			return(acc);
		}
		return(allEp.reduce(tallyEp,{}));
	}
	
	function capitalizeTheFriends(json) { // <- you may or may not need to define parameters for your function
		//return `Function not yet implemented`; //remove this line when implementing the function
		function replaceAll(str,mapObj){
			var re = new RegExp(Object.keys(mapObj).join("|"),"gi"); ///monica|russ|joey/gi
		
			return str.replace(re, function(matched){
				return mapObj[matched];
			});
		}

		var castMap ={
			Joey:"JOEY",
			Chandler:"CHANDLER",
			Monica:"MONICA",
			Rachel:"RACHEL",
			Phoebe:"PHOEBE",
			Ross:"ROSS"
		};

		var theFour = json._embedded.episodes.map(r=>r);
		function mep(acc,cv){
			acc[cv.id] = 
				{Name:replaceAll(cv.name, castMap), Summary:replaceAll(cv.summary, castMap)}
			
			return(acc);
		}
		return(theFour.reduce(mep,{}));


	}
})();
