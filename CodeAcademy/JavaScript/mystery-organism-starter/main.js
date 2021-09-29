/* Constants **********************************************************************************/
const DNA_SEQUNCE_SIZE = 15;
/* Objects Definitions ************************************************************************/
const pQeqourFactory = (id, dnaBaseArr) =>
{
  return {
    specimenNum : id,
    dna : dnaBaseArr,
    mutate ()
    {
      let ran = Math.floor(Math.random() * DNA_SEQUNCE_SIZE);
      let dnaBases = ['A', 'T', 'C', 'G'];
      
      // take out the current base from possiblity of choosing that base
      dnaBases = dnaBases.filter(base => base != this.dna[ran])

      // generate new base for that index
      this.dna[ran] = dnaBases[Math.floor(Math.random() * 3)];
    },

    compareDNA(pAeqourDnaSeq)
    {
      let identCount = 0;

      for (i = 0; i < this.dna.length; i++)
      {
        if (this.dna[i] === pAeqourDnaSeq[i])
        {
          identCount++;
        }
      }

      //console.log(pAeqourDnaSeq);
      let identicalPercentage = Math.round((identCount / DNA_SEQUNCE_SIZE) * 100);
      console.log(`Sepecimen #1 and Specimen #2 have a ${identicalPercentage}% DNA in common`);
    },

    // 
    /**
     * @description P. aeqour will have a likelier chance of survival if the DNA is made 
     *              up of atleast 60% 'C' or 'G' bases. Return True if the dna array
     *              contains at least 60% 'C' or 'G' bases, otherwise return False
     * @returns boolean
     */
    willLikelySurvive()
    {
      let countGAndCBases = 0;
      for (i = 0; i < this.dna.length; i++)
      {
        if ((this.dna[i] === 'G') || (this.dna[i] === 'C'))
        {
          countGAndCBases++;
        }
      }
      const percentage = Math.round((countGAndCBases / DNA_SEQUNCE_SIZE) * 100);

      //console.log(percentage);
      return (percentage >= 60);
    }
  }
};
/* Function Definitions ***********************************************************************/
/**
 * @name returnRandBase
 * @description DNA is comprised of 4 bases (Adenine, Thymine, Cytosine, and Guanine).
 *              This function will return one of the 4
 * @returns A value
 */
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};


/**
 * @name mockUpStrand
 * @description This will generate an array containing 15 bases that represent a single DNA
 * @returns 
 */
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < DNA_SEQUNCE_SIZE; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


/* Testing ************************************************************************************/

//test 1
//const p = pQeqourFactory(0, mockUpStrand());

//test 2
//console.log(p.specimenNum);
//test 3
//console.log(p.dna);
//test 4
//p.mutate();

//test 5
//p.compareDNA(mockUpStrand());

//test 6
//console.log(p.willLikelySurvive());

// test 7
// @todo add if already in array check
//
const create30PAeqour = () =>
{
  const maxInstances = 30;
  let instanceIdx = 0;
  let tempP;
  let seqArr = [];

  while (instanceIdx < maxInstances) 
  {
    tempP = pQeqourFactory(instanceIdx, mockUpStrand());

    //store sequence if it will likely survive
    if (tempP.willLikelySurvive())
    {
      console.log(`InstanceIdx ${instanceIdx} pushing sequence ${tempP.dna}`);
      seqArr.push(tempP);
      instanceIdx++;
    }
    //dont store and regenerate a new sequence
    else
    {
      //console.log(`InstanceIdx ${instanceIdx} redo sequence generation`);
      continue;
    }
  }
}

create30PAeqour();