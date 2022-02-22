# PeriodicTableElementFunctions
The following functions can help find useful information about elements and the periodic table.
#
##### function returns a list of all elements that are in a specific chosen elemental group, the parameter
###### @param classificationGroup {string} - the name of an elemental group that you would like to get the elements of. Must be one of the following (capitalization not important): "Halogens", "Alkali metals", "Alkali earth metals", "No definitive group", "Noble gas", "Metalloids", "Non-metal", "Transition metals", "Poor metals", "Rare earth metals", "Actinide metals", "Superheavy elements" 
###### @return matchingGroupElements {list} - the list containing the names of all elements that are within the specified elemental group
**`function getElementsInGroup(classificationGroup)`**
#

##### function returns the element that matches the amount of protons chosen in the parameter
###### @param protonNumber {number} - the number of protons chosen to find the matching element for. Must be a number between 1 and 118, inclusive 
###### @return matchingProtonElement {string} - the name of the single element that matches the number of protons chosen in the parameter
**`function getElementFromProtons(protonNumber)`**
#

##### function returns a list of all elements that have the same phase at room temperature as the chosen element name in the parameter
###### @param chosenElement {string} - the name of the element chosen to find all elements that have the same phase at room temperature as it. Must be a valid name of an existing element on the periodic table and spelled correctly, without spaces
###### @return matchingPhaseElements {list} - a list of all of the elements that have the same phase at room temperature as the chosen element name in the parameter
**`function getMatchingPhaseElements(chosenElement)`**
#

##### function returns a string saying the common places that a chosen element name, the parameter, is found in
###### @param elementInQuestion {string} - the chosen element name that will have its common places found in be returned. Must be a valid name of an existing element on the periodic table and spelled correctly,without spaces
###### @return uses {string} - the string saying the common places in which the chosen element is found in.   
**`function getCommonPlacesFound(elementInQuestion)`**
#

##### function returns a list of elements that melt at a temperature greater than or equal to a chosen temperature, the parameter 
###### @param chosenTemperature {number} - any real number representing a temperature in fahrenheit
###### @return elementsFittingTempCriteria {list} - the list of all element names that melt at a temperature greater than or equal to the chosen temperature in the parameter
**`function getElementsUsingMeltingPoint(chosenTemperature)`**
#
