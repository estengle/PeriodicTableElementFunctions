const url = "https://raw.githubusercontent.com/estengle/periodic-table/main/Periodic%20Table%20Elements.csv";


const atomicNumbers = getColumn(url, 4);
const elementNames = getColumn(url, 2);
const roomTempPhases = getColumn(url, 9);
const atomGroups = getColumn(url, 11);
const commonPlacesFound = getColumn(url, 12);
const meltingPoints = getColumn(url, 6);

//function returns a list of all elements that are in a specific chosen elemental group, the parameter
//@param classificationGroup {string} - the name of an elemental group that you would like to get the elements of. Must be one of the following (capitalization not important): "Halogens", "Alkali metals", "Alkali earth metals", "No definitive group", "Noble gas", "Metalloids", "Non-metal", "Transition metals", "Poor metals", "Rare earth metals", "Actinide metals", "Superheavy elements"  
//@return matchingGroupElements {list} - the list containing the names of all elements that are within the specified elemental group  
function getElementsInGroup(classificationGroup) {

  if (typeof (classificationGroup) !== "string") {
    return "No matching elements found in group. Please check that the parameter is valid and spelled correctly.";
  }

  var matchingGroupElements = [];

  for (var i in atomGroups) {
    if (atomGroups[i].toUpperCase() == classificationGroup.toUpperCase()) {
      matchingGroupElements.push(elementNames[i])
    }

  }

  if (matchingGroupElements.length == 0) {

    return ("No matching elements found in group. Please check that the parameter is valid and spelled correctly.");
  }


  return matchingGroupElements;

}




//function returns the element that matches the amount of protons chosen in the parameter
//@param protonNumber {number} - the number of protons chosen to find the matching element for. Must be a number between 1 and 118, inclusive 
//@return matchingProtonElement {string} - the name of the single element that matches the number of protons chosen in the parameter
function getElementFromProtons(protonNumber) {

  if (typeof (protonNumber) !== "number" || (118 < protonNumber || protonNumber < 1)) {
    return ("No element found with that number of protons. Please check that the parameter is valid and within range.");
  }

  var matchingProtonElement = "";

  for (var i in elementNames) {
    if (atomicNumbers[i] == protonNumber) {
      matchingProtonElement = elementNames[i];
    }
  }
  return matchingProtonElement;

}





//function returns a list of all elements that have the same phase at room temperature as the chosen element name in the parameter
//@param chosenElement {string} - the name of the element chosen to find all elements that have the same phase at room temperature as it. Must be a valid name of an existing element on the periodic table and spelled correctly, without spaces
//@return matchingPhaseElements {list} - a list of all of the elements that have the same phase at room temperature as the chosen element name in the parameter
function getMatchingPhaseElements(chosenElement) {

  if (typeof (chosenElement) !== "string") {
    return ("No other elements found that have a similar phase at room temperature. All phases have multiple elements that fit them at room temperature, so please check that the parameter is valid and spelled correctly.");
  }

  var matchingPhaseElements = [];
  var phase = "";
  for (var i in elementNames) {
    if (elementNames[i].toUpperCase() == chosenElement.toUpperCase()) {
      phase = roomTempPhases[i]
    }
  }
  for (var i in roomTempPhases) {
    if (roomTempPhases[i] == phase) {
      matchingPhaseElements.push(elementNames[i]);
    }
  }

  if (matchingPhaseElements.length <= 1) {

    return ("No other elements found that have a similar phase at room temperature. All phases have multiple elements that fit them at room temperature, so please check that the parameter is valid and spelled correctly.");
  }

  return matchingPhaseElements;

}


//function returns a string saying the common places that a chosen element name, the parameter, is found in
//@param elementInQuestion {string} - the chosen element name that will have its common places found in be returned. Must be a valid name of an existing element on the periodic table and spelled correctly,without spaces
//@return uses {string} - the string saying the common places in which the chosen element is found in.   
function getCommonPlacesFound(elementInQuestion) {

  var uses = "";

  if (typeof (elementInQuestion) !== "string") {
    return ("No uses found for chosen element. Please check that the parameter is valid and spelled correctly");
  }

  for (var i in elementNames) {
    if (elementNames[i].toUpperCase() == elementInQuestion.toUpperCase()) {
      uses = commonPlacesFound[i];
    }
  }

  if (uses == "") {
    return ("No uses found for chosen element. Please check that the parameter is valid and spelled correctly.");
  }
  return uses;


}



//function returns a list of elements that melt at a temperature greater than or equal to a chosen temperature, the parameter 
//@param chosenTemperature {number} - any real number representing a temperature in fahrenheit
//@return elementsFittingTempCriteria {list} - the list of all element names that melt at a temperature greater than or equal to the chosen temperature in the parameter
function getElementsUsingMeltingPoint(chosenTemperature) {

  if (typeof (chosenTemperature) !== "number") {
    return "No elements found. Please enter a valid parameter."
  }
  var elementsFittingTempCriteria = [];

  for (var i in meltingPoints) {
    if (meltingPoints[i] >= chosenTemperature) {
      elementsFittingTempCriteria.push(elementNames[i]);
    }
  }
  if (elementsFittingTempCriteria.length == 0) {
    return "No elements found with that melting point or higher"
  }
  return elementsFittingTempCriteria;

}









//function made by Ms. McAvoy 
function getColumn(url, columnNumber) {
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col) {
  var column = [];
  for (var i = 1; i < matrix.length - 1; i++) {
    column.push(matrix[i][col]);
  }
  return column;
}
