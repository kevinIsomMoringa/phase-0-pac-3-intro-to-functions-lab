
function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string))
}

function logWhisper(string) {
    console.log(whisper(string))
}

/*
//Canvas Instruction

function sayHiToGrandma(str) {
    if (shout(str) === str) {
        return "YES INDEED"
    } else if (whisper(str) === str) {
    //  block of code to be executed if the condition1 is false and condition2 is true
        return "I can't hear you!"
    } else if ("i love you, Grandma." === whisper(str) ) {
        return 'I love you too'
    } else {
        return 'I don\'t understand what you are saying'
    }
}
*/

function sayHiToHeadphonedRoommate(str) {
    if (shout(str) === str) {
        return "YES INDEED!"
    } else if (whisper(str) === str) {
        return "I can't hear you!"
    } else if ("let's have dinner together!" === whisper(str) ) {
        return 'I would love to!'
    } else {
        return 'I don\'t understand what you are saying'
    }
}


//logShout('Hey')
//logWhisper(`Whispering and Logging`)
//sayHiToGrandma('HEY GRANDMA')
//console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))
