/*
INPUT:
Each raga is an array of twelve elements.
1 if the swara is present and 0 if not.
s = 0th index
*/
var map = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
// Function to calculate length of Raga
var ragaLength = function(raga) { 
	var cnt = 0;
	raga.forEach(function(s) {
		if(s > 0) {
			cnt++;
		}
	});
	return cnt;
}

var getReadable = function(raga) {
	var arr = [];
	for(var i = 0; i < raga.length; i++) {
		if(raga[i] > 0) {
			arr.push(map[raga[i]-1]);
		} else {
			arr.push(' ');
		}
	}
	return arr;
}

var findAllSubGBs = function(raga) {
	console.log("New Raga:",getReadable(raga),"of length ",ragaLength(raga));
	var len = ragaLength(raga);
	if(len > 5) {
		for(var i = 1; i<raga.length; i++) {
			if(raga[i] > 0) {
				var newRaga = raga.slice();
				newRaga[i] = 0;
				findAllSubGBs(newRaga);
			}
		}
	}	
}

var findAllGBs = function(raga) {
	// Extended Raga for two stayis (octaves)
	var extRaga = raga.concat(raga);
	// Finding all Grigabedhams
	for(var i = 0; i < 12; i++) {
		// Given that a GB can start from ith position
		if(extRaga[i] > 0) {
			console.log("Starting at:",map[extRaga[i]-1]);
			tempRaga = extRaga.slice(i, i+12);
			findAllSubGBs(tempRaga);
		}
	}
}

//s r2 g2 m1 p d2 n2 s
var origRaga = [1,0,1,0,1,1,0,1,0,1,0,1];

// Manipulation for easy understanding
for(var i = 0; i < origRaga.length; i++) {
	if(origRaga[i]) {
		origRaga[i] = i + 1;
	} 
}
console.log("Original Ragam:",origRaga);
findAllGBs(origRaga);
