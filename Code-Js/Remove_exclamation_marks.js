/**
 Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

function removeExclamationMarks(s) {
    return s.replaceAll("!","");
  }
  
//Outra forma de fazer

const removeExclamationMarks = s => s.replaceAll("!","");