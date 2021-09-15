// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4] //invalid
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9] //valid
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3] //invalid
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3] //invalid
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3] //valid

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
// Helper functions
const copyArray = (arr) =>
{
    let temp = [];
    for (i = 0; i < (arr.length); i++)
    {
        temp[i] = arr[i];
    }
    return temp;
}

/**********************************************************************************************/
/**** Functions ****/
/**
 * 
 * @param {*} cardNumArr 
 * @returns 
 */
const validateCred = (cardNumArr) =>
{
    //copy number to temp
    let temp = copyArray(cardNumArr);
    // save the check digit
    let checkDigit = temp.pop();   
    //reverse the array
    let tempRev = temp.reverse();
    let sum = checkDigit;
    //console.log(temp)
    for (i = 0; i < tempRev.length; i++)
    {
        //console.log(`i ${i} temp[i] ${temp[i]}`);
        if ((i % 2) === 0)
        {
            tempRev[i] = tempRev[i] * 2;
        }
        //console.log(`i ${i} temp[i] ${temp[i]}`);
        if (tempRev[i] > 9)
        {
            tempRev[i] = tempRev[i] - 9;
        }
        sum += tempRev[i];
    }
    //console.log(valid1);

    return (sum % 10) === 0;
}

/**
 * 
 * @param {*} creditCardsArr 
 * @returns 
 */
function findInvalidCards(creditCardsArr) 
{
    let counter = 0;
    
    const invalidCards = creditCardsArr.filter(creditCard => 
            !validateCred(creditCard)
        );
    //invalidCards.forEach(card =>
    //    console.log(card));
    return invalidCards;
}

/**
 * 
 * @param {*} invalidCreditCardsArr 
 * @returns 
 */
function idInvalidCardCompanies(invalidCreditCardsArr)
{
    let invalidComp = [];
    invalidCreditCardsArr.forEach(card => 
        {
            switch (card[0]) {
                case 3: //Amex
                    if (!invalidComp.includes('Amex'))
                    {
                        invalidComp.push('Amex');
                    }
                    break;
                case 4: // Visa
                    if (!invalidComp.includes('Visa'))
                    {
                        invalidComp.push('Visa');
                    }
                    break;
                case 5: // Mastercard
                    if (!invalidComp.includes('Mastercard'))
                    {
                        invalidComp.push('Mastercard');
                    }
                    break;
                case 6: // Discover
                    if (!invalidComp.includes('Discover'))
                    {
                        invalidComp.push('Discover');
                    }
                    break;
                default: // company not found
                    console.log(`Card ${card} is not from a valid company`);
                    break;
            }
        });

    return invalidComp;
}

/**********************************************************************************************/
/**** Test Functions ****/
/**
 * 
 */


/**
 * 
 */
function testCase1_validateCred()
{
    let counter = 0;
    batch.forEach(card => {
        if (validateCred(card))
        {
            console.log(`Idx: ${counter} Valid card number: ${card}`);
        }
        else
        {
            console.log(`Idx: ${counter} Invalid card number: ${card}`)
        }
       counter++;
   });
}

function testCase2_findInvalidCards() 
{
    let invalidCards = findInvalidCards(batch);

    //console.log(invalidCards);
    
    return invalidCards;
}

function testCase3_idInvalidCardCompanies(invalidCards) 
{
    let invalidCompanies = idInvalidCardCompanies(invalidCards);

    console.log(invalidCompanies);
}

/**********************************************************************************************/
//Running TestCases
//testCase1_validateCred();
let invalidCards = testCase2_findInvalidCards();
console.log(invalidCards);
testCase3_idInvalidCardCompanies(invalidCards);



