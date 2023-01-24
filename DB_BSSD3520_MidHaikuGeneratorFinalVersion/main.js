/*
dboyer2@live.nmhu.edu, Haiku Generation
*/

//"use strict";

// Arrays of extended word object types
var verbs = [];
var adverbs = [];
var nouns = [];
var pronouns = [];
var adjectives = [];
var prepositions = [];
var conjunctions = [];
var determiners = [];
var types = [];
var invalidType = false;
var invalidSyl = false;
var invalidWord = false;

// Uer word position in haiku and generic word
var userWordPos = [];
var userWord = {};

// Form variable
var haikuForm;

// Haiku div and text areas
var haikuAreas;
var haikuFiveOne;
var haikuFiveTwo;
var haikuSeven;

// Array of haiku templates
var haikuTemplates = [];

// Arrays of word object type templates for five and seven syllable structures
var haikuFiveSylTemplates = [];
var haikuSevenSylTemplates = [];

// Template in use
var haikuTemplate;

// Setting arrays/matrices rows/columns
function initializeWordArrays() {
    var p = 0;
    var a = 0;
    var l = 0;
    
    for (l; l < 4; l++) {
        pronouns.push([]);
        nouns.push([]);
        prepositions.push([]);
        verbs.push([]);
    }
    for (a; a < 5; a++) {
        adjectives.push([]);
        adverbs.push([]);
    }
    conjunctions.push([]);
    determiners.push([]);
    
    types = [Noun.create("none",0), Pronoun.create("none",0),
             Verb.create("none",0), Adverb.create("none",0),
             Adjective.create("none",0), Preposition.create("none",0),
             Determiner.create("none",0),Conjunction.create("none",0)
            ]
}

/* 
Fills arrays of words and generates objects which are placed
in their object type arrays
*/
// Add more words?
function generateWordLists() {
    var i = 0;
    
    // Instantiating list of words with syllable count as string
    var pronoun = ["I,1","you,1","he,1","she,1","it,1","they,1","me,1","you,1","him,1","her,1",
                   "it,1","my,1","mine,1","your,1","yours,1","his,1","her,1","hers,1","its,1","who,1",
                   "whom,1","whose,1","what,1","which,1","another,3","each,1","everything,3","nobody,3","either,2","someone,2",
                   "who,1","whose,1","that,1","which,1","myself,2","yourself,2","himself,2","herself,2","itself,2","this,1"
                  ];
    // Iterating elements of the word array
    for (i; i < pronoun.length; i++) {
        // Splitting element on comma to get word literal and syllable count
        var tempron = pronoun[i].split(',');
        try {
            // Pushing a new word object of proper type to word of type array; passing word literal and syllable count to word create
            pronouns[parseInt(tempron[1], 10) - 1].push(Pronoun.create(tempron[0], parseInt(tempron[1], 10)));
        } catch (err) {
            console.log(err, "\n Error On Index: ", parseInt(tempron[1], 10) - 1, "\n Word: ", tempron[0], "\n WType: Pronoun");
        }
    }

    var noun = ["area,3","book,1","business,2","case,1","child,1","company,3","country,2","day,1","eye,1","fact,1",
                "family,3","heart,1","group,1","hand,1","home,1","job,1","life,1","lot,1","man,1","money,2",
                "month,1","cow,1","mother,2","night,1","number,2","part,1","people,2","place,1","point,1","problem,2",
                "program,2","question,2","right,1","room,1","school,1","state,1","story,2","student,2","study,2","system,2",
                "thing,1","time,1","water,2","wind,1","way,1","week,1","woman,2","word,1","work,1","world,1",
                "year,1","spaceship,2","dog,1","apple,2","ocean,2","breeze,1","waterfall,3","tree,1","peanut,2","fisherman,3"
               ];
    // Iterating elements of the word array
    for (i = 0; i < noun.length; i++) {
        // Splitting element on comma to get word literal and syllable count
        tempron = noun[i].split(',');
        try {
            // Pushing a new word object of proper type to word of type array; passing word literal and syllable count to word create
            nouns[parseInt(tempron[1], 10)-1].push(Noun.create(tempron[0], parseInt(tempron[1], 10)));
        } catch (err) {
            console.log(err, "\n Error On Index: ", parseInt(tempron[1], 10)-1, "\n Word: ", tempron[0], "\n WType: Noun");
        }
    
    }
    
    var verb = ["run,1","be,1","have,1","do,1","say,1","go,1","get,1","make,1","know,1","think,1",
                "take,1","see,1","feel,1","come,1","want,1","look,1","use,1","find,1","give,1","tell,1",
                "work,1","call,1","try,1","ask,1","need,1","feel,1","become,2","leave,1","put,1","mean,1",
                "keep,1","let,1","begin,2","seem,1","help,1","talk,1","turn,1","start,1","show,1","hear,1",
                "play,1","move,1","like,1","live,1","believe,2","hold,1","bring,1","happen,2","write,1","sit,1",
                "stand,1","lose,1","pay,1","meet,1","include,2","continue,3","learn,1","watch,1","speak,1","walk,1",
                "maneuver,3","exchange,3","understand,3","abolish,3","imagine,3","abdicate,3","celebrate,3","adventure,3","remember,3","consumate,3"
               ];
    // Iterating elements of the word array
    for (i = 0; i < verb.length; i++) {
        // Splitting element on comma to get word literal and syllable count
        tempron = verb[i].split(',');
        try {
            // Pushing a new word object of proper type to word of type array; passing word literal and syllable count to word create
            verbs[parseInt(tempron[1], 10)-1].push(Verb.create(tempron[0], parseInt(tempron[1], 10)));
        } catch (err) {
            console.log(err, "\n Error On Index: ", parseInt(tempron[1], 10)-1, "\n Word: ", tempron[0], "\n WType: Verb");
        }
        
    }
    
    var adverb =["quickly,2","simply,2","finally,3","actually,4","clearly,2","rather,2","suddenly,3","eventually,5","directly,3","maybe,2",
                  "always,2","really,2","still,1","very,2","sadly,2","awkwardly,3","evenly,3","dutifully,4","boldly,2","rudely,2",
                  "happily,3","fortunately,4","elegantly,4","angrily,3","lazily,3","kindly,2","hopelessly,3","seldom,2","sharply,2","smoothly,2",
                  "solemnly,3","technically,4","wearily,3","usually,3","slowly,2","wildly,2","daily,2","defiantly,4","coyly,2","boastfully,3",
                  "else,1","thus,1","too,1","not,1","fast,1","low,1","wide,1","hard,1","high,1","late,1",
                 ];
    // Iterating elements of the word array
    for (i = 0; i < adverb.length; i++) {
        // Splitting element on comma to get word literal and syllable count
        tempron = adverb[i].split(',');
        try {
            // Pushing a new word object of proper type to word of type array; passing word literal and syllable count to word create
            adverbs[parseInt(tempron[1], 10)-1].push(Adverb.create(tempron[0], parseInt(tempron[1], 10)));
        } catch (err) {
            console.log(err, "\n Error On Index: ", parseInt(tempron[1], 10)-1, "\n Word: ", tempron[0], "\n WType: Adverb");
        }
    }
    
    var adjective = ["able,2","bad,1","best,1","better,2","big,1","black,1","certain,2","clear,1","different,3","early,2",
                     "easy,2","economic,4","federal,3","free,1","full,1","good,1","great,1","hard,1","high,1","human,2",
                     "important,3","funny,2","large,1","late,1","little,2","local,2","long,1","low,1","major,2","military,4",
                     "national,3","new,1","old,1","only,2","other,2","political,4","possible,3","public,2","real,1","recent,2",
                     "right,1","small,1","social,2","special,2","strong,1","sure,1","true,1","white,1","whole,1","young,1",
                     "stinky,2","sweet,1","soft,1","bubbly,2","smart,1","sly,1","springy,2","voluptuous,4","brave,1","shmoopy,2",
                    ];
    // Iterating elements of the word array
    for (i = 0; i < adjective.length; i++) {
        // Splitting element on comma to get word literal and syllable count
        tempron = adjective[i].split(',');
        try {
            // Pushing a new word object of proper type to word of type array; passing word literal and syllable count to word create
            adjectives[parseInt(tempron[1], 10)-1].push(Adjective.create(tempron[0], parseInt(tempron[1], 10)));
        } catch (err) {
            console.log(err, "\n Error On Index: ", parseInt(tempron[1], 10)-1, "\n Word: ", tempron[0], "\n WType: Adjective");
        }
    }
    
    var preposition = ["of,1","with,1","at,1","from,1","into,2","during,2","including,3","until,2","against,2","among,2",
                        "throughout,2","despite,2","towards,2","upon,2","concerning,3","to,1","in,1","for,1","on,1","by,1",
                        "about,2","like,1","through,1","over,2","before,2","between,2","after,2","since,1","without,2","under,2",
                        "within,2","along,2","following,3","across,2","behind,2","beyond,2","plus,1","except,2","but,1","up,1",
                        "out,1","around,2","down,1","off,1","above,2","near,1","amongst,2","as,1","astride,2","vis-à-vis,3"
                      ];
    // Iterating elements of the word array
    for (i = 0; i < preposition.length; i++) {
        // Splitting element on comma to get word literal and syllable count
        tempron = preposition[i].split(',');
        try {
            // Pushing a new word object of proper type to word of type array; passing word literal and syllable count to word create
            prepositions[parseInt(tempron[1], 10)-1].push(Preposition.create(tempron[0], parseInt(tempron[1], 10)));
        } catch (err) {
            console.log(err, "\n Error On Index: ", parseInt(tempron[1], 10)-1, "\n Word: ", tempron[0], "\n WType: Preposition");
        }
    }
    
    var conjunction = ["for,1","and,1","nor,1","but,1","or,1","yet,1","so,1"];
    // Iterating elements of the word array
    for (i = 0; i < conjunction.length; i++) {
        // Splitting element on comma to get word literal and syllable count
        tempron = conjunction[i].split(',');
        try {
            // Pushing a new word object of proper type to word of type array; passing word literal and syllable count to word create
            conjunctions[parseInt(tempron[1], 10)-1].push(Conjunction.create(tempron[0], parseInt(tempron[1], 10)));
        } catch (err) {
            console.log(err, "\n Error On Index: ", parseInt(tempron[1], 10)-1, "\n Word: ", tempron[0], "\n WType: Conjunction");
        }
    }
    
    var determiner = ["the,1","a,1","an,1","this,1","that,1","these,1","those,1","some,1"];
    // Iterating elements of the word array
    for (i = 0; i < determiner.length; i++) {
        // Splitting element on comma to get word literal and syllable count
        tempron = determiner[i].split(',');
        try {
            // Pushing a new word object of proper type to word of type array; passing word literal and syllable count to word create
            determiners[parseInt(tempron[1], 10)-1].push(Determiner.create(tempron[0], parseInt(tempron[1], 10)));
        } catch (err) {
            console.log(err, "\n Error On Index: ", parseInt(tempron[1], 10)-1, "\n Word: ", tempron[0], "\n WType: Determiner");
        }
    }
    
    console.log("Word Lists Generated");
}

/* 
Fills arrays of custom haiku syllable templates and pushes the objects to the haiku templates array
*/
function generateHaikuTemplates() {
    //pronoun, noun, verb, adverb, adjective, preposition, conjunction, determiner
    
    // Template 1
    haikuFiveSylTemplates.push([Adverb.create("none",0), // Adding first array of word types for five syllable portion
                                Preposition.create("none",0),
                                Determiner.create("none",0),
                                Noun.create("none",0)
                               ]);
    haikuSevenSylTemplates.push([Noun.create("none",0), // Adding array of word types for seven syllable portion
                                 Preposition.create("none",0),
                                 Pronoun.create("none",0),
                                 Noun.create("none",0)
                                ]);
    haikuFiveSylTemplates.push([Adjective.create("none",0), // Adding second array of word types for five syllable portion
                                Noun.create("none",0),
                                Noun.create("none",0),
                                Verb.create("none",0)
                               ]);
    // Pushing an object containing the syllable arrays as properties to haikuTemplates 
    // - first five syllable array as fiveOne, seven syllable array as seven, second five syllable array as fiveTwo
    haikuTemplates.push({ fiveOne: haikuFiveSylTemplates[0], seven: haikuSevenSylTemplates[0], fiveTwo: haikuFiveSylTemplates[1]});
    
    // Template 2
    haikuFiveSylTemplates.push([Preposition.create("none",0),
                                Adjective.create("none",0)
                               ]);
    haikuSevenSylTemplates.push([Adjective.create("none",0),
                                 Noun.create("none",0),
                                 Verb.create("none",0),
                                 Adverb.create("none",0)
                           ]);
    haikuFiveSylTemplates.push([Noun.create("none",0),
                                Preposition.create("none",0),
                                Noun.create("none",0)
                               ]);
    haikuTemplates.push({ fiveOne: haikuFiveSylTemplates[2], seven: haikuSevenSylTemplates[1], fiveTwo: haikuFiveSylTemplates[3]});
    
    // Template 3
    haikuFiveSylTemplates.push([Determiner.create("none",0),
                                Noun.create("none",0),
                                Verb.create("none",0),
                                Preposition.create("none",0)
                                ]);
    haikuSevenSylTemplates.push([Noun.create("none",0),
                                 Noun.create("none",0),
                                 Verb.create("none",0),
                                 Preposition.create("none",0)
                                ]);
    haikuFiveSylTemplates.push([Adjective.create("none",0),
                                Noun.create("none",0),
                                Verb.create("none",0)
                               ]);
    haikuTemplates.push({ fiveOne: haikuFiveSylTemplates[4], seven: haikuSevenSylTemplates[2], fiveTwo: haikuFiveSylTemplates[5]});
    
    // Template 3
    haikuFiveSylTemplates.push([Noun.create("none",0),
                                Preposition.create("none",0),
                                Noun.create("none",0)
                               ]);
    haikuSevenSylTemplates.push([Adverb.create("none",0),
                                 Conjunction.create("none",0),
                                 Adverb.create("none",0),
                                 Verb.create("none",0)
                                ]);
    haikuFiveSylTemplates.push([Verb.create("none",0),
                                Noun.create("none",0),
                                Noun.create("none",0),
                                Adverb.create("none",0),
                                Adjective.create("none",0)
                               ]);
    haikuTemplates.push({ fiveOne: haikuFiveSylTemplates[6], seven: haikuSevenSylTemplates[3], fiveTwo: haikuFiveSylTemplates[7]});
    
    // Template 4
    haikuFiveSylTemplates.push([Adjective.create("none",0),
                                Noun.create("none",0),
                               ]);
    haikuSevenSylTemplates.push([Preposition.create("none",0),
                                 Determiner.create("none",0),
                                 Adjective.create("none",0),
                                 Noun.create("none",0)
                                ]);
    haikuFiveSylTemplates.push([Pronoun.create("none",0),
                                Verb.create("none",0),
                                Preposition.create("none",0),
                                Noun.create("none",0)
                               ]);
    haikuTemplates.push({ fiveOne: haikuFiveSylTemplates[8], seven: haikuSevenSylTemplates[4], fiveTwo: haikuFiveSylTemplates[9]});
    
    // Template 5
    haikuFiveSylTemplates.push([Pronoun.create("none",0),
                                Conjunction.create("none",0),
                                Pronoun.create("none",0),
                                Adverb.create("none",0)
                               ]);
    haikuSevenSylTemplates.push([Noun.create("none",0),
                                 Preposition.create("none",0),
                                 Noun.create("none",0),
                                 Verb.create("none",0),
                                 Adverb.create("none",0)
                                ]);
    haikuFiveSylTemplates.push([Noun.create("none",0),
                                Conjunction.create("none",0),
                                Noun.create("none",0),
                                Verb.create("none",0)
                               ]);
    haikuTemplates.push({ fiveOne: haikuFiveSylTemplates[10], seven: haikuSevenSylTemplates[2], fiveTwo: haikuFiveSylTemplates[11]});
}

// NOTE: Usable simplified functions to generate haiku parts / bit less random and less parameters but they work
function generateFiveKu(firstSecond, firstWord) {
    var fiveKu = [];
    var word = Word.create("None",0,"Verb");
    var genInt = 0;
    var totSyls = 5;
    var follows = false;
    var sylCount = 0;
    var wordLits = [];
    var first = firstSecond;
    
    console.log("Attempting to Generate Haiku\n");
    
    if(!first) {
        while(!follows) {
            genInt = getRanInt(0,types.length-1);
            follows = followsWord(types[genInt].wordType, firstWord.wordType);
            console.log("Word Follows Previous: ", follows);
            console.log("Generated Type: ", types[genInt].wordType, " Follows Previous Type: ", firstWord.wordType);
        }
        word = getRandomWord(types[genInt].wordType, getRanInt(1,getMaxSyllCountForType(types[genInt].wordType)));
        fiveKu.push(word);
        wordLits.push(word.wordLiteral);
        console.log("FiveKu First word", word);
        totSyls = totSyls - word.syllableCount;
        console.log("FiveKu Syllables Remaining:", totSyls);
        console.log("FiveKu Number of Words: ", fiveKu.length);
        follows = false;
    } else {
        // First word generation
        genInt = getRanInt(0,types.length-1);
        word = getRandomWord(types[genInt].wordType, getRanInt(1,getMaxSyllCountForType(types[genInt].wordType)));
        fiveKu.push(word);
        wordLits.push(word.wordLiteral);
        console.log("FiveKu First word", word);
        totSyls = totSyls - word.syllableCount;
        console.log("FiveKu Syllables Remaining:", totSyls);
        console.log("FiveKu Number of Words: ", fiveKu.length);
    }
    
    // Filling rest of fiveKu with randomly generated words that follow grammar rules
    while (totSyls > 0) {
        while(!follows) {
            genInt = getRanInt(0,types.length-1);
            follows = followsWord(types[genInt].wordType, fiveKu[fiveKu.length-1].wordType);
            console.log("Word Follows Previous: ", follows);
            console.log("Generated Type: ", types[genInt].wordType, " Follows Previous Type: ", fiveKu[fiveKu.length-1].wordType);
        }
        follows = false;
        sylCount = getMaxSyllCountForType(types[genInt].wordType);
        if(sylCount > totSyls) {
            sylCount = totSyls;
        }
        
        // Generating word of random type and syllable amount (where syllable amount is less/equal than/to remaining of 5)
        word = getRandomWord(types[genInt].wordType, getRanInt(1,sylCount));
        while(wordLits.includes(word.wordLiteral)) {
            word = getRandomWord(types[genInt].wordType, getRanInt(1,sylCount));
        }
        
        console.log("Word Added: \n", word);
        fiveKu.push(word);
        wordLits.push(word.wordLiteral);
        totSyls = totSyls - word.syllableCount;
        console.log("Syllables Remaining: ", totSyls);
        console.log("FiveKu Number of Words: ", fiveKu.length);
    }
    
    console.log("Haiku Five Generated: ", fiveKu);
    return fiveKu;
}
function generateSevenKu(firstWord) {
    var sevenKu = [];
    var word = Word.create("None",0,"Verb");
    var genInt = 0;
    var totSyls = 7;
    var follows = false;
    var sylCount = 0;
    var wordLits = [];
    
    console.log("Attempting to Generate Haiku\n");
    
    // First word generation
    while(!follows) {
        genInt = getRanInt(0,types.length-1);
        follows = followsWord(types[genInt].wordType, firstWord.wordType);
        console.log("Word Follows Previous: ", follows);
        console.log("Generated Type: ", types[genInt].wordType, " Follows Previous Type: ", firstWord.wordType);
    }
    word = getRandomWord(types[genInt].wordType, getRanInt(1,getMaxSyllCountForType(types[genInt].wordType)));
    sevenKu.push(word);
    wordLits.push(word.wordLiteral);
    //CANT READ PREPOSITIONS?
    console.log("SevenKu First word", word);
    totSyls = totSyls - word.syllableCount;
    console.log("SevenKu Syllables Remaining:", totSyls);
    console.log("SevenKu Number of Words: ", sevenKu.length);
    follows = false;
    
    // Filling rest of fiveKu with randomly generated words that follow grammar rules
    while (totSyls > 0) {
        genInt = getRanInt(0,types.length-1);
        while(!follows) {
            genInt = getRanInt(0,types.length-1);
            
            follows = followsWord(types[genInt].wordType, sevenKu[sevenKu.length-1].wordType);
            console.log("Word Type Follows Previous: ", follows);
            console.log("Generated Type: ", types[genInt].wordType, " Follows Previous Type: ", sevenKu[sevenKu.length-1].wordType);
        }
        follows = false;
        sylCount = getMaxSyllCountForType(types[genInt].wordType);
        if(sylCount > totSyls) {
            sylCount = totSyls;
        }
        
        // Generating word of random type and syllable amount (where syllable amount is less/equal than/to remaining of 5)
        word = getRandomWord(types[genInt].wordType, getRanInt(1,sylCount));
        while(wordLits.includes(word.wordLiteral)) {
            word = getRandomWord(types[genInt].wordType, getRanInt(1,sylCount));
        }
        
        console.log("Word Added: \n", word);
        sevenKu.push(word);
        wordLits.push(word.wordLiteral);
        totSyls = totSyls - word.syllableCount;
        console.log("Syllables Remaining: ", totSyls);
        console.log("SevenKu Number of Words: ", sevenKu.length);
    }
    
    
    console.log("Haiku Seven Generated: ", sevenKu);
    return sevenKu;
}

// Haiku 5 syllable part
function generateUserFiveKu(userWord, firstSecond, firstWord) {
    // variable to hold words, temp word, random integer for random type,
    // total syllable amount for this haiku part, true/false follows value to determine if the word type follows previous word type
    // word syllable count temp, list of each word generated, boolean to declare first of two 5 syllable parts
    // boolean to check if contains user word
    // length for adjustments
    var fiveKu = [];
    var word = Word.create("None",0,"Verb");
    var genInt = 0;
    var totSyls = 5;
    var follows = false;
    var sylCount = 0;
    var wordLits = [];
    var first = firstSecond;
    var hasWord = false;
    var newLen = 0;
    
    console.log("Attempting to Generate Haiku\n");
    
    // If not the first five syllable then it generates a random word 
    //which follows the previous word type passed from the other haiku functions
    if(!first) {
        while(!follows) {
            genInt = getRanInt(0,types.length-1);
            follows = followsWord(types[genInt].wordType, firstWord.wordType);
            console.log("Word Follows Previous: ", follows);
            console.log("Generated Type: ", types[genInt].wordType, " Follows Previous Type: ", firstWord.wordType);
        }
        word = getRandomWord(types[genInt].wordType, getRanInt(1,getMaxSyllCountForType(types[genInt].wordType)));
        
        fiveKu.length = fiveKu.length + 1;
        fiveKu[fiveKu.length-1] = word;
        wordLits.length = wordLits.length +1;
        wordLits[wordLits.length-1] = word.wordLiteral;
        console.log("FiveKu First word", word);
        totSyls = totSyls - word.syllableCount;
        console.log("FiveKu Syllables Remaining:", totSyls);
        console.log("FiveKu Number of Words: ", fiveKu.length);
        follows = false;
    } else { // else it generates a random word
        // First word generation
        // random integer
        genInt = getRanInt(0,types.length-1);
        // temp word object is equal to getRandomWord function call which uses random integer and type to generate word
        // - types is an array of word objects being randomly accessed for type
        // - getRanInt just returns range inclusive
        // - getMaxSyllableCountForType just returns the max syllables for a word type based upon words in the array
        // - generates random integer value for random type's syllable count that is less than or = max syllable for its type
        word = getRandomWord(types[genInt].wordType, getRanInt(1,getMaxSyllCountForType(types[genInt].wordType)));
        // was having some issues with length not reading properly even when I spliced so I started manually adjusting length
        // when I add a word
        fiveKu.length = fiveKu.length + 1;
        fiveKu[fiveKu.length-1] = word;
        wordLits.length = wordLits.length +1;
        wordLits[wordLits.length-1] = word.wordLiteral;
        
        console.log("FiveKu First word", word);
        totSyls = totSyls - word.syllableCount;
        console.log("FiveKu Syllables Remaining:", totSyls);
        console.log("FiveKu Number of Words: ", fiveKu.length);
    }
    
    // Filling rest of fiveKu with randomly generated words that follow grammar rules
    // While the totSyls (remaining number of syllables) is greater than 0
    // - generates word like previous but decrements total syllable count by word syllable count
    while (totSyls > 0) {
        var userFollows = false;
        if(fiveKu.length > 0) {
            userFollows = followsWord(userWord.wordType, fiveKu[fiveKu.length-1].wordType);
        }
        
        if(userFollows && totSyls >= userWord.syllableCount && !hasWord) {
            
            console.log("User Word Added: \n", userWord);
            fiveKu.length = fiveKu.length + 1;
            fiveKu[fiveKu.length-1] = userWord;
            wordLits.length = wordLits.length +1;
            wordLits[wordLits.length-1] = userWord.wordLiteral;
            
            totSyls = totSyls - word.syllableCount;
            hasWord = true;
            
        } else if (userFollows && !hasWord && totSyls < userWord.syllableCount) {
            totSyls = totSyls + fiveKu[fiveKu.length-1].syllableCount;
            
            newLen = fiveKu.length;
            fiveKu.splice(newLen-1,1);
            fiveKu.length = newLen -1;
            
            newLen = wordLits.length;
            wordLits.splice(newLen-1,1);
            wordLits.length = newLen -1;
            
            if(totSyls < userWord.syllableCount) {
                while(totSyls < userWord.syllableCount && fiveKu.length > 0) {
                    totSyls = totSyls + fiveKu[fiveKu.length-1].syllableCount;
                    
                    newLen = fiveKu.length;
                    fiveKu.splice(newLen-1,1);
                    fiveKu.length = newLen -1;
            
                    newLen = wordLits.length;
                    wordLits.splice(newLen-1,1);
                    wordLits.length = newLen -1;
                }
                console.log("User Word Added: \n", userWord);
                
                fiveKu.length = fiveKu.length + 1;
                fiveKu[fiveKu.length-1] = userWord;
                wordLits.length = wordLits.length +1;
                wordLits[wordLits.length-1] = userWord.wordLiteral;
                
                totSyls = totSyls - word.syllableCount;
            }
            hasWord = true;
        } else {
            console.log("FiveKu Length: ", fiveKu.length);
            genInt = getRanInt(0,types.length-1);
            if(fiveKu.length > 0) {
                while(!follows) {
                    genInt = getRanInt(0,types.length-1);
                    follows = followsWord(types[genInt].wordType, fiveKu[fiveKu.length-1].wordType);
                    console.log("Word Follows Previous: ", follows);
                    console.log("Generated Type: ", types[genInt].wordType, " Follows Previous Type: ", fiveKu[fiveKu.length-1].wordType);
                }
                follows = false;
            }
            
            sylCount = getMaxSyllCountForType(types[genInt].wordType);
            if(sylCount > totSyls) {
                sylCount = totSyls;
            }
        
            // Generating word of random type and syllable amount (where syllable amount is less/equal than/to remaining of 5)
            word = getRandomWord(types[genInt].wordType, getRanInt(1,sylCount));
            while(wordLits.includes(word.wordLiteral)) {
                word = getRandomWord(types[genInt].wordType, getRanInt(1,sylCount));
            }
        
            console.log("Word Added: \n", word);
            fiveKu.length = fiveKu.length + 1;
            fiveKu[fiveKu.length-1] = word;
            wordLits.length = wordLits.length +1;
            wordLits[wordLits.length-1] = word.wordLiteral;
            totSyls = totSyls - word.syllableCount;
            console.log("Syllables Remaining: ", totSyls);
            console.log("FiveKu Number of Words: ", fiveKu.length);
        }
    }
    // Checking end of list for excess or too small after randomly adding user word and splicing previous to fit syllable count
    //////////////////////////
    if(!wordLits.includes(userWord.wordLiteral)) {
        fiveKu[0] = userWord;
        wordLits[0] = userWord.wordLiteral;
    }
    var totalSyls = 0;
    for(var syls = 0; syls < fiveKu.length; syls++) {
        totalSyls += fiveKu[syls].syllableCount;
    }
    while(totalSyls > 5) {
        newLen = fiveKu.length;
        fiveKu.splice(newLen-1,1);
        fiveKu.length = newLen -1;
        wordLits.splice(newLen-1,1);
        newLen = wordLits.length;
        
        totalSyls = 0;
        for(var syls = 0; syls < fiveKu.length; syls++) {
            totalSyls += fiveKu[syls].syllableCount;
        }
    }
    totalSyls = 0;
    for(var syls = 0; syls < fiveKu.length; syls++) {
        totalSyls += fiveKu[syls].syllableCount;
    }
    if(totalSyls < 5) {
        var sylMax = 0;
        var remains = 5-totalSyls;
        
        while(sylMax < remains) {
            genInt = getRanInt(0,types.length-1);
            sylMax = getMaxSyllCountForType(types[genInt].wordType);
        }
        word = getRandomWord(types[genInt].wordType, remains);
        fiveKu.length = fiveKu.length + 1;
        fiveKu[fiveKu.length-1] = word;
        wordLits.length = wordLits.length +1;
        wordLits[wordLits.length-1] = word.wordLiteral;
    }
    ////////////////////////////////////
    
    console.log("Haiku Five Generated: ", fiveKu);
    return fiveKu;
}
// Same functionality as generate 5 syllable part
function generateUserSevenKu(userWord, firstWord) {
    var sevenKu = [];
    var word = Word.create("None",0,"Verb");
    var genInt = 0;
    var totSyls = 7;
    var follows = false;
    var sylCount = 0;
    var wordLits = [];
    var hasWord = false;
    var newLen = 0;
    
    console.log("Attempting to Generate Haiku\n");
    
    // First word generation
    while(!follows) {
        genInt = getRanInt(0,types.length-1);
        follows = followsWord(types[genInt].wordType, firstWord.wordType);
        console.log("Word Follows Previous: ", follows);
        console.log("Generated Type: ", types[genInt].wordType, " Follows Previous Type: ", firstWord.wordType);
    }
    word = getRandomWord(types[genInt].wordType, getRanInt(1,getMaxSyllCountForType(types[genInt].wordType)));

    sevenKu.length = sevenKu.length + 1;
    sevenKu[sevenKu.length-1] = word;
    wordLits.length = wordLits.length +1;
    wordLits[wordLits.length-1] = word.wordLiteral;
    console.log("SevenKu First word", word);
    totSyls = totSyls - word.syllableCount;
    console.log("SevenKu Syllables Remaining:", totSyls);
    console.log("SevenKu Number of Words: ", sevenKu.length);
    follows = false;
    
    // Filling rest of fiveKu with randomly generated words that follow grammar rules
    while (totSyls > 0) {
        
        var userFollows = false;
        if(sevenKu.length > 0) {
            userFollows = followsWord(userWord.wordType, sevenKu[sevenKu.length-1].wordType);
        }
        
        if(userFollows && !hasWord && totSyls >= userWord.syllableCount) {
            
            console.log("User Word Added: \n", userWord);
            
            sevenKu.length = sevenKu.length + 1;
            sevenKu[sevenKu.length-1] = userWord;
            wordLits.length = wordLits.length +1;
            wordLits[wordLits.length-1] = userWord.wordLiteral;
            
            totSyls = totSyls - word.syllableCount;
            hasWord = true;
        } else if (userFollows && !hasWord && totSyls < userWord.syllableCount) {
            totSyls = totSyls + sevenKu[sevenKu.length-1].syllableCount;
            
            newLen = sevenKu.length;
            sevenKu.splice(newLen-1,1);
            sevenKu.length = newLen -1;
            newLen = wordLits.length;
            wordLits.splice(newLen-1,1);
            wordLits.length = newLen -1;
            
            if(totSyls < userWord.syllableCount && sevenKu.length > 0) {
                while(totSyls < userWord.syllableCount) {
                    totSyls = totSyls + sevenKu[sevenKu.length-1].syllableCount;
                    
                    newLen = sevenKu.length;
                    sevenKu.splice(newLen,1);
                    sevenKu.length = newLen -1;
                    newLen = wordLits.length;
                    wordLits.splice(newLen-1,1);
                    wordLits.length = newLen -1;
                }
                console.log("User Word Added: \n", userWord);
                
                //while()
                sevenKu.length = sevenKu.length + 1;
                sevenKu[sevenKu.length-1] = userWord;
                wordLits.length = wordLits.length +1;
                wordLits[wordLits.length-1] = userWord.wordLiteral;
                
                totSyls = totSyls - word.syllableCount;
            }
            hasWord = true;
        } else {
            genInt = getRanInt(0,types.length-1);
            if(sevenKu.length > 0) {
                while(!follows) {
                    genInt = getRanInt(0,types.length-1);
                    follows = followsWord(types[genInt].wordType, sevenKu[sevenKu.length-1].wordType);
                    console.log("Word Type Follows Previous: ", follows);
                    console.log("Generated Type: ", types[genInt].wordType, " Follows Previous Type: ", sevenKu[sevenKu.length-1].wordType);
                }
                follows = false;
                
            }
            sylCount = getMaxSyllCountForType(types[genInt].wordType);
            if(sylCount > totSyls) {
                sylCount = totSyls;
            }
        
            // Generating word of random type and syllable amount (where syllable amount is less/equal than/to remaining of 5)
            word = getRandomWord(types[genInt].wordType, getRanInt(1,sylCount));
            while(wordLits.includes(word.wordLiteral)) {
                word = getRandomWord(types[genInt].wordType, getRanInt(1,sylCount));
            }
        
            console.log("Word Added: \n", word);
            sevenKu.push(word);
            wordLits.push(word.wordLiteral);
            totSyls = totSyls - word.syllableCount;
            console.log("Syllables Remaining: ", totSyls);
            console.log("SevenKu Number of Words: ", sevenKu.length);
        }
    }
    ////////////////////////////////////////////
    if(!wordLits.includes(userWord.wordLiteral)) {
        sevenKu[0] = userWord;
        wordLits[0] = userWord.wordLiteral;
    }
    
    if(!wordLits.includes(userWord.wordLiteral)) {
        sevenKu[0] = userWord;
        wordLits[0] = userWord.wordLiteral;
    }
    var totalSyls = 0;
    for(var syls = 0; syls < sevenKu.length; syls++) {
        totalSyls += sevenKu[syls].syllableCount;
    }
    while(totalSyls > 7) {
        newLen = sevenKu.length;
        sevenKu.splice(newLen-1,1);
        sevenKu.length = newLen -1;
        newLen = wordLits.length;
        wordLits.splice(newLen-1,1);
        wordLits.length = newLen -1;
        totalSyls = 0;
        for(var syls = 0; syls < sevenKu.length; syls++) {
            totalSyls += sevenKu[syls].syllableCount;
        }
    }
    totalSyls = 0;
    for(var syls = 0; syls < sevenKu.length; syls++) {
        totalSyls += sevenKu[syls].syllableCount;
    }
    if(totalSyls < 7) {
        var sylMax = 0;
        var remains = 7-totalSyls;
        
        while(sylMax < remains) {
            genInt = getRanInt(0,types.length-1);
            sylMax = getMaxSyllCountForType(types[genInt].wordType);
        }
        word = getRandomWord(types[genInt].wordType, remains);
        sevenKu.length = sevenKu.length + 1;
        sevenKu[sevenKu.length-1] = word;
        wordLits.length = wordLits.length +1;
        wordLits[wordLits.length-1] = word.wordLiteral;
    }
    ///////////////////////////////////////////
    console.log("Haiku Seven Generated: ", sevenKu);
    return sevenKu;
}

// Builds haiku in parts and returns haiku
function buildHaiku(userWord) {
    // random variable and haiku template object
    var ranKu = getRanInt(1,3);
    var haikuTemp = {fiveOne: [], seven: [], fiveTwo: []};
    
    // random switch for placement of userword
    // generating and placing into haiku template based on position (1 = 5 first, 2 = 7 syllable, 3 = 5 second)
    switch(ranKu) {
        case 1:
            haikuTemp.fiveOne = generateUserFiveKu(userWord, true, userWord);
            haikuTemp.seven = generateSevenKu(haikuTemp.fiveOne[haikuTemp.fiveOne.length-1]);
            haikuTemp.fiveTwo = generateFiveKu(false, haikuTemp.seven[haikuTemp.seven.length-1]);
            break;
        case 2:
            haikuTemp.fiveOne = generateFiveKu(true, userWord);
            haikuTemp.seven = generateUserSevenKu(userWord, haikuTemp.fiveOne[haikuTemp.fiveOne.length-1]);
            haikuTemp.fiveTwo = generateFiveKu(false, haikuTemp.seven[haikuTemp.seven.length-1]);
            break;
        case 3:
            haikuTemp.fiveOne = generateFiveKu(true, userWord);
            haikuTemp.seven = generateSevenKu(haikuTemp.fiveOne[haikuTemp.fiveOne.length-1]);
            haikuTemp.fiveTwo = generateUserFiveKu(userWord, false, haikuTemp.seven[haikuTemp.seven.length-1]);
            break;
    }
    
    return haikuTemp;
}

// Gen random non user haiku without user word
function buildNonUserHaiku() {
    var ranKu = getRanInt(1,3);
    var haikuTemp = {fiveOne: [], seven: [], fiveTwo: []};

        haikuTemp.fiveOne = generateFiveKu();
        haikuTemp.seven = generateSevenKu();
        haikuTemp.fiveTwo = generateFiveKu();

    return haikuTemp;
}

// Generates completely randomized haiku templates
function genRanCustomHaikuTemplate() {
    var types = [Noun.create("none",0), Pronoun.create("none",0),
                 Noun.create("none",0), Adverb.create("none",0),
                 Adjective.create("none",0), Preposition.create("none",0),
                 Determiner.create("none",0), Conjunction.create("none",0)
                ];
    
    var ranWords = getRanInt(1,4);
    var cycle = getRanInt(1,3);
    var follows = false;
    var words = [];
    
    // cycling through each part of haiku and generating random num of words in range 1,4 and random word types from types array
    try {
        for(var i = 0; i < 3; i++) {
            cycle = getRanInt(2,4);
            for(var cyc = 0; cyc <= cycle; cyc++) {
                if(words.length > 0) {
                    while(!follows) {
                        ranWords = getRanInt(0,types.length-1);
                        follows = followsWord(types[ranWords].wordType, words[words.length-1].wordType);
                    }
                    words.push(types[ranWords].create("none",0));
                    follows = false;
                } else {
                    // TODO: add can start with function
                    ranWords = getRanInt(0,types.length-1);
                    words.push(types[ranWords].create("none",0));
                }

                // Nested loops at end of haiku part loop
                // - checks if max possible syllable count for word type array is < haiku sizes (5, 7, 5)
                // -- If array of words is too small it appends a random non-like word
                if (cyc == cycle) {
                    var tcount = 0;
                    for(var wtype = 0; wtype < words.length; wtype++) {
                        tcount += getMaxSyllCountForType(words[wtype].wordType);
                    }
                    switch(i) {
                        case 0:
                            if (tcount < 5) {
                                while(tcount < 5) {
                                    while(!follows) {
                                        ranWords = getRanInt(0,types.length-1);
                                        follows = followsWord(types[ranWords].wordType, words[words.length-1].wordType);
                                    }
                                    words.push(types[ranWords].create("none",0));
                                    tcount += getMaxSyllCountForType(words[words.length-1].wordType);
                                    follows = false;
                                }
                            }
                            break;
                        case 1:
                            if (tcount < 7) {
                                while(tcount < 7) {
                                    while(!follows) {
                                        ranWords = getRanInt(0,types.length-1);
                                        follows = followsWord(types[ranWords].wordType, words[words.length-1].wordType);
                                    }
                                    words.push(types[ranWords].create("none",0));
                                    tcount += getMaxSyllCountForType(words[words.length-1].wordType);
                                    follows = false;
                                }
                            }
                            break;
                        case 2:
                            if (tcount < 5) {
                                while(tcount < 5) {
                                    while(!follows) {
                                        ranWords = getRanInt(0,types.length-1);
                                        follows = followsWord(types[ranWords].wordType, words[words.length-1].wordType);
                                    }
                                    words.push(types[ranWords].create("none",0));
                                    tcount += getMaxSyllCountForType(words[words.length-1].wordType);
                                    follows = false;
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            // switching on i to put into appropriate array for placement in haiku
            switch(i){
                case 0:
                    haikuFiveSylTemplates.push(words);
                    break;
                case 1:
                    haikuSevenSylTemplates.push(words);
                    break;
                case 2:
                    haikuFiveSylTemplates.push(words);
                    break;
                default:
                    break;
            }
            // Emptying words for next cycle
            words = [];
        }
    } catch (err) {
        alert(err.message);
        console.log(err.message);
    }
    
    // Pushing new haiku
    haikuTemplates.push({ fiveOne: haikuFiveSylTemplates[haikuFiveSylTemplates.length-2],
                         seven: haikuSevenSylTemplates[haikuSevenSylTemplates.length-1],
                         fiveTwo: haikuFiveSylTemplates[haikuFiveSylTemplates.length-1]});
    console.log("Haiku At: ", haikuTemplates.length-1, haikuTemplates[haikuTemplates.length-1]);
}

// Generates word from given values / Not needed if using generic word create
function genWord(word, type, syllables) {
    
    // Switch on word part of speech
    // creates word of type
    var newWord = Word.create(word, syllables, type);
    switch(type) {
        case "Noun":
            newWord = Noun.create(word,syllables);
            break;
        case "Pronoun":
            newWord = Pronoun.create(word,syllables);
            break;
        case "Verb":
            newWord = Verb.create(word,syllables);
            break;
        case "Adverb":
            newWord = Adverb.create(word,syllables);
            break;
        case "Adjective":
            newWord = Adjective.create(word,syllables);
            break;
        case "Preposition":
            newWord = Preposition.create(word,syllables);
            break;
        case "Conjunction":
            newWord = Conjunction.create(word,syllables);
            break;
        case "Determiner":
            newWord = Determiner.create(word,syllables);
            break;
        default:
            break;
    }
    return newWord;
}

// NOTE: Started by generating random haikus - worked / upon tinkering to try and include user word I ran into some issues and it got too messy
// - close to working after a few backsteps
// Generates haiku from template at random
function genHaiku(userWord) {
    var fiveSyllCountsOne = [];
    var sevenSyllCounts = [];
    var fiveSyllCountsTwo = [];
    var types = [];
    var usrSylSub = 0;
    var i = 0;
    
    // Grabbing a temporary haikuTemplate
    var ranHaiku = haikuTemplate;
    
    console.log("Attempting to Generate Haiku");

    //try {
        ///////////////////////////////////////////////////////////////////////////
        // Looping words in haiku template property fiveOne array to get types 
        for(i; i < ranHaiku.fiveOne.length; i++) {
            types.push(ranHaiku.fiveOne[i].wordType);
            if(userWordPos[0] == 0 && userWordPos[1] == i) {
                //types.pop();
                types.splice(types.lastIndexOf, 1);
                ranHaiku.fiveOne.splice(ranHaiku.fiveOne.lastIndexOf, 1);
                usrSylSub = userWord.syllableCount;
            }
        }
        while(((5 - usrSylSub) - types.length) < 0) {
            //types.pop();
            types.splice(types.lastIndexOf, 1);
            ranHaiku.fiveOne.splice(ranHaiku.fiveOne.lastIndexOf, 1);
        }
        
        // Passing types to get random accumulation of ints
        fiveSyllCountsOne = getRanSyllableAccumulation(types.length, 5-usrSylSub, types);
        var haiLen = 0;
        if(usrSylSub != 0) {haiLen = types.length+1;}
        else {haiLen = ranHaiku.fiveOne.length;}
        // Looping through each word in array property and setting to randomly generated word based on random syllable count
        for(i = 0; i < haiLen; i++) {
            if(userWordPos[0] == 0 && userWordPos[1] == i) {
                ranHaiku.fiveOne[i] = userWord;
            } else {
                if(userWordPos[0] == 0 && i > userWordPos[1]) {
                    if(fiveSyllCountsOne.length == 1) {
                        if(getMaxSyllCountForType(ranHaiku.fiveOne[i].wordType) < fiveSyllCountsOne[i]) {
                            
                            ranHaiku.fiveOne[i] = getRandomWord(getWordTypeOfMax(fiveSyllCountsOne[i]), 
                                                                fiveSyllCountsOne[i]);
                        }
                    } else {
                        ranHaiku.fiveOne[i] = getRandomWord( ranHaiku.fiveOne[i].wordType, fiveSyllCountsOne[i-1]);
                    }
                } else {
                    if(fiveSyllCountsOne.length == 1) {
                        if(getMaxSyllCountForType(ranHaiku.fiveOne[i].wordType) < fiveSyllCountsOne[i]) {
                            
                            ranHaiku.fiveOne[i] = getRandomWord(getWordTypeOfMax(fiveSyllCountsOne[i]), 
                                                                fiveSyllCountsOne[i]);
                        }
                    } else {
                        ranHaiku.fiveOne[i] = getRandomWord( ranHaiku.fiveOne[i].wordType, fiveSyllCountsOne[i]);
                    }
                }
                
            }
            console.log(ranHaiku.fiveOne[i]);
        }
        // Clearing types array and user syllable
        types = [];
        usrSylSub = 0;
    
        ////////////////////////////////////////////////////////
        // Looping words in haiku template property seven array to get types 
        for(i = 0; i < ranHaiku.seven.length; i++) {
            types.push(ranHaiku.seven[i].wordType);
            if(userWordPos[0] == 1 && userWordPos[1] == i) {
                //types.pop();
                types.splice(types.lastIndexOf, 1);
                ranHaiku.seven.splice(ranHaiku.seven.lastIndexOf, 1);
                usrSylSub = userWord.syllableCount;
            }
        }
        while(((7 - usrSylSub) - types.length) < 0) {
            //types.pop();
            types.splice(types.lastIndexOf, 1);
            ranHaiku.seven.splice(ranHaiku.seven.lastIndexOf, 1);
        }
        
        // Passing types to get random accumulation of ints
        sevenSyllCounts = getRanSyllableAccumulation(types.length, 7-usrSylSub, types);
        haiLen = 0;
        if(usrSylSub != 0) {haiLen = types.length+1;}
        else {haiLen = ranHaiku.seven.length;}
        // Looping through each word in array property and setting to randomly generated word based on random syllable count
        // Chnaged for loop here
        for(i = 0; i < haiLen; i++) {
            if(userWordPos[0] == 0 && userWordPos[1] == i) {
                ranHaiku.seven[i] = userWord;
            } else {
                if(userWordPos[0] == 0 && i > userWordPos[1]) {
                    if(sevenSyllCounts.length == 1) {
                        if(getMaxSyllCountForType(ranHaiku.seven[i].wordType) < sevenSyllCounts[i]) {
                            
                            ranHaiku.seven[i] = getRandomWord(getWordTypeOfMax(sevenSyllCounts[i]), 
                                                                sevenSyllCounts[i]);
                        }
                    } else {
                        ranHaiku.seven[i] = getRandomWord(ranHaiku.seven[i].wordType, sevenSyllCounts[i-1]);
                    }
                } else {
                    if(sevenSyllCounts.length == 1) {
                        if(getMaxSyllCountForType(ranHaiku.seven[i].wordType) < sevenSyllCounts[i]) {
                            
                            ranHaiku.seven[i] = getRandomWord(getWordTypeOfMax(sevenSyllCounts[i]), 
                                                                sevenSyllCounts[i]);
                        }
                    } else {
                        ranHaiku.seven[i] = getRandomWord( ranHaiku.seven[i].wordType, sevenSyllCounts[i]);
                    }
                }
                
            }
            console.log(ranHaiku.seven[i]);
        }
        // Clearing types array
        types = [];

        ////////////////////////////////////////////////////////////////////////
        // Looping words in haiku template property fiveTwo array to get types 
        for(i = 0; i < ranHaiku.fiveTwo.length; i++) {
            types.push(ranHaiku.fiveTwo[i].wordType);
            if(userWordPos[0] == 2 && userWordPos[1] == i) {
                //types.pop();
                types.splice(types.lastIndexOf, 1);
                ranHaiku.fiveTwo.splice(ranHaiku.fiveTwo.lastIndexOf, 1);
                usrSylSub = userWord.syllableCount;
            }
        }
        while(((5 - usrSylSub) - types.length) < 0) {
            //types.pop();
            types.splice(types.lastIndexOf, 1);
            ranHaiku.fiveTwo.splice(ranHaiku.fiveTwo.lastIndexOf, 1);
        }
        
        // Passing types to get random accumulation of ints
        fiveSyllCountsTwo = getRanSyllableAccumulation(types.length, 5-usrSylSub, types);
        haiLen = 0;
        if(usrSylSub != 0) {haiLen = types.length+1;}
        else {haiLen = ranHaiku.fiveTwo.length;}
        // Looping through each word in array property and setting to randomly generated word based on random syllable count
        for(i = 0; i < haiLen; i++) {
            if(userWordPos[0] == 2 && userWordPos[1] == i) {
                ranHaiku.fiveTwo[i] = userWord;
            } else {
                if(userWordPos[0] == 2 && i > userWordPos[1]) {
                    ranHaiku.fiveTwo[i] = getRandomWord( ranHaiku.fiveTwo[i].wordType, fiveSyllCountsTwo[i-1]);
                } else {
                    ranHaiku.fiveTwo[i] = getRandomWord( ranHaiku.fiveTwo[i].wordType, fiveSyllCountsTwo[i]);
                }
                
            }
            console.log(ranHaiku.fiveTwo[i]);
        }
        for(i = 0; i < haiLen; i++) {
            if(userWordPos[0] == 0 && userWordPos[1] == i) {
                ranHaiku.fiveTwo[i] = userWord;
            } else {
                if(userWordPos[0] == 0 && i > userWordPos[1]) {
                    if(fiveSyllCountsTwo.length == 1) {
                        if(getMaxSyllCountForType(ranHaiku.fiveTwo[i].wordType) < fiveSyllCountsTwo[i]) {
                            
                            ranHaiku.fiveTwo[i] = getRandomWord(getWordTypeOfMax(fiveSyllCountsTwo[i]), 
                                                                fiveSyllCountsTwo[i]);
                        }
                    } else {
                        ranHaiku.fiveTwo[i] = getRandomWord( ranHaiku.fiveTwo[i].wordType, fiveSyllCountsTwo[i-1]);
                    }
                } else {
                    if(fiveSyllCountsTwo.length == 1) {
                        if(getMaxSyllCountForType(ranHaiku.fiveTwo[i].wordType) < fiveSyllCountsTwo[i]) {
                            
                            ranHaiku.fiveTwo[i] = getRandomWord(getWordTypeOfMax(fiveSyllCountsTwo[i]), 
                                                                fiveSyllCountsTwo[i]);
                        }
                    } else {
                        ranHaiku.fiveTwo[i] = getRandomWord( ranHaiku.fiveTwo[i].wordType, fiveSyllCountsTwo[i]);
                    }
                }
                
            }
            console.log(ranHaiku.fiveTwo[i]);
        }
        // Clearing types array
        types = [];
        
        console.log("Haiku generated: ", haikuToString(ranHaiku));
    //}
    //catch(err) {
    //    alert(err.message);
    //    console.log(err.message);
    //}
    
    return ranHaiku;
}

// NOTE: Randomly generated templates created upon user word submission just for user - quicker and easier method
function genUserHaiku(userWord) {
    // List of word types
    var types = [Noun.create("none",0), Pronoun.create("none",0),
                 Noun.create("none",0), Adverb.create("none",0),
                 Adjective.create("none",0), Preposition.create("none",0),
                 Determiner.create("none",0), Conjunction.create("none",0)
                ];
    var pos = [getRanInt(1,3), 0];
    console.log("Word pos", pos[0])
    var remains = 0;
    var numWords = 0;
    var totalSyllables = 0;
    var fiveOneStruc = [];
    var fiveTwoStruc = [];
    var sevenStruc = [];
    var contUsrWord =true;
    var userSyl = userWord.syllableCount;
    var numW = 0;
    var tempFollow = 0;
    var tempIndex = 0;
    var sylCount = 0;
    var sylMax = 0;
    var follows = false;
    var remainWords = 0;
    var tempWords = [];
    var syllableCounts = [];
    
    var allWords = {fiveOne: [], seven: [], fiveTwo: []};
    
    for (var i = 1; i < 4; i++) {
        
        if(i != pos[0]) {userSyl = 0;}
        
        switch (i) {
            case 1:
                totalSyllables = 5;
                if(pos[0] == 1) {
                    userSyl = userWord.syllableCount;
                } else {
                    userSyl = 0;
                }
                break;
            case 2:
                totalSyllables = 7;
                if(pos[0] == 2) {
                    userSyl = userWord.syllableCount;
                } else {
                    userSyl = 0;
                }
                break;
            case 3:
                totalSyllables = 5;
                if(pos[0] == 3) {
                    userSyl = userWord.syllableCount;
                } else {
                    userSyl = 0;
                }
                break;
        }
        
        remains = totalSyllables - userSyl;
        numWords = getRanInt(2,remains);
        
        var genSylCounts = true;
        
        // If haiku part contains word // FIXED with user word?
        if(contUsrWord && i == pos[0]) {
            
            numW = 0;
            console.log("Struc contains User Word");
            if(remains < numWords-1) {
                numWords = remains+1;
                pos[1] = getRanInt(1,numWords);
            }
            console.log("Number of Words in Struc: ", numWords);
            console.log("Contains Word: ", contUsrWord);
            pos[1] = getRanInt(1,numWords);
            console.log("Word position in Array:", pos[1]);
            
            // for each word
            for(numW; numW < numWords; numW++) {
                console.log("Syllables Remaining: ", remains);
                genSylCounts = true;
                // Insert user word if at user word position
                if(pos[1] == numW+1) {
                    console.log(pos[1], numW+1);
                    tempWords.push(userWord);
                    console.log("User Word Added: ", tempWords[0]);
                } else { // else start generating a word
                    // if first word
                    if(numW == 0) {
                        // gen syllable
                        while (genSylCounts) {
                            tempFollow = 0;
                            sylCount = 0;
                            // Making sure syllable count fits
                            //if((remains-(numWords-1)) == 1) {sylCount = 1;}
                            if(remains-(numWords-1) == 0) {sylCount = 1;}
                            else if (numWords == 2) { sylCount = remains;} //????????????? add words to list with greater syllable count?
                            else {sylCount = getRanInt(1,remains-(numWords-1));}
                            console.log("Word Syllables: ", sylCount);
                            if(pos[1] == numW + 2) {
                                follows = false;
                                console.log("User Word Next");
                                // while word type doesn't precede user word get new type
                                sylMax = 0;
                                while (!follows) {
                                    tempFollow = getRanInt(0,types.length-1);
                                    console.log("Words in Struc", numWords);
                                    tempFollow = getRanInt(0,types.length-1);
                                    console.log("Follow ", tempFollow);
                                    console.log("Max Syllable for follow ", getMaxSyllCountForType(types[tempFollow].wordType));
                                    while(sylMax < sylCount) {
                                        tempFollow = getRanInt(0,types.length-1);
                                        sylMax = getMaxSyllCountForType(types[tempFollow].wordType);
                                        console.log("Syllmax:", sylMax);
                                    }
                                    console.log("Can't follow?", follows);
                                    var tType = types[tempFollow].wordType;
                                    follows = followsWord(userWord.wordType, tType);
                                    
                                }
                                console.log("Array before word added: ", tempWords);
                                tempWords.push(getRandomWord(types[tempFollow].wordType,sylCount));
                                console.log("word added: ", tempWords, " Word # : ", numW+1);
                            } else {
                                // if user word isn't next word
                                tempFollow = getRanInt(0,types.length-1);
                                sylMax = 0;
                                while(sylMax < sylCount) {
                                    tempFollow = getRanInt(0,types.length-1);
                                    sylMax = getMaxSyllCountForType(types[tempFollow].wordType);
                                }
                                console.log("Array before word added: ", tempWords);
                                tempWords.push(getRandomWord(types[tempFollow].wordType,sylCount));
                                console.log("word added: ", tempWords, " Word # : ", numW+1);
                            }
                            remains = remains - sylCount; // subtract word syllable count from remains
                            genSylCounts = false;
                        }
                    } else { // if not first word // CHANGE SYLCOUNT
                        while (genSylCounts) { // gen syllable
                            tempFollow = 0;
                            sylCount = 0;
                            // make space for remainder
                            remainWords = (numWords - tempWords.length)-1;
                            // Making sure syllable count fits
                            if((remains-remainWords) == 0) {sylCount = 1;}
                            else if (numWords == 2) { sylCount = remains;}
                            else {sylCount = getRanInt(1,remains-(remainWords));}
                            
                            // if the syllable count fits and leaves space for the reamining words
                            // if user word is next word
                            if(pos[1] == numW + 2) {
                                follows = false;
                                // while word type doesn't precede user word get new type
                                sylMax = 0;
                                while (!follows) {
                                    tempFollow = getRanInt(0,types.length-1);
                                    // randomizing through types making sure the max syll count of the type can support sylCount
                                    while(sylMax < sylCount) {
                                        tempFollow = getRanInt(0,types.length-1);
                                        sylMax = getMaxSyllCountForType(types[tempFollow].wordType);
                                    }
                                    follows = followsWord(userWord.wordType, types[tempFollow].wordType);
                                }
                                console.log("Array before word added: ", tempWords);
                                tempWords.push(getRandomWord(types[tempFollow].wordType,sylCount));
                                console.log("word added: ", tempWords, " Word # : ", numW+1);
                            } else {
                                follows = false;
                                sylMax = 0;
                                while (!follows) {
                                    while(sylMax < sylCount) {
                                        tempFollow = getRanInt(0,types.length-1);
                                        sylMax = getMaxSyllCountForType(types[tempFollow].wordType);
                                    }
                                    follows = followsWord(types[tempFollow].wordType, tempWords[numW].wordType);
                                }
                                console.log("Array before word added: ", tempWords);
                                tempWords.push(getRandomWord(types[tempFollow].wordType,sylCount));
                                console.log("word added: ", tempWords, " Word # : ", numW+1);
                            }
                            remains = remains - sylCount; // subtract word syllable count from remains
                            genSylCounts = false;
                        }
                    }
                }
            }
        } else {
            numW = 0;
            if(remains < numWords) {numWords = remains;}
            
            // if no user word
            for(numW; numW < numWords; numW++) {
                genSylCounts = true;
                // If first word
                if(numW == 0) {
                    // gen syllable
                    while (genSylCounts) {
                        tempIndex = 0;
                        sylCount = 0;
                        
                        remainWords = numWords-1;
                        sylCount = getRanInt(1,remains-remainWords);
                        // if the syllable count fits
                        while(sylMax < sylCount) {
                            tempIndex = getRanInt(0,types.length-1);
                            sylMax = getMaxSyllCountForType(types[tempIndex].wordType);
                        }
                        remains = remains - sylCount; // subtract word syllable count from remains
                        console.log("Array before word added: ", tempWords);
                        tempWords.push(getRandomWord(types[tempFollow].wordType,sylCount));
                        console.log("word added: ", tempWords, " Word # : ", numW+1);
                        genSylCounts = false;
                    }
                } else { // if not first word
                    while (genSylCounts) { // gen syllable
                        tempIndex = 0;
                        sylCount = 0;
                        remainWords = (numWords-tempWords.length);
                        
                        if ((remains-remainWords) == 0) {sylCount = 1;}
                        else if (remainWords == 1 && remains > 1) {sylCount = remains;}
                        else {sylCount = getRanInt(1, remains - (remainWords-1));}
                        // Making sure syllable count fits
                        
                        follows = false;
                        sylMax = 0;
                        while (!follows) {
                            while (sylMax < sylCount) {
                                tempIndex = getRanInt(0,types.length-1);
                                sylMax = getMaxSyllCountForType(types[tempIndex].wordType);
                            }
                            follows = followsWord(types[tempIndex].wordType, tempWords[numW].wordType);
                        }
                        console.log("Array before word added: ", tempWords);
                        remains = remains - sylCount; // subtract word syllable count from remains
                        tempWords.push(getRandomWord(types[tempFollow].wordType,sylCount));
                        console.log("word added: ", tempWords, " Word # : ", numW+1);
                        genSylCounts = false;
                    }
                }
            }
        } 
        
        // clear tempWords
        switch (i) {
            case 1:
                fiveOneStruc = tempWords;
                console.log("Words at FiveOne: ",tempWords);
                break;
            case 2:
                sevenStruc = tempWords;
                console.log("Words at Seven: ",tempWords);
                break;
            case 3:
                fiveTwoStruc = tempWords;
                console.log("Words at FiveTwo: ",tempWords);
                break;
        }
        console.log(tempWords);
        tempWords = []
        totalSyllables = 0;
        numWords = 0;
        remains = 0;
        genSylCounts = true;
        contUsrWord = false;
    }
    allWords.fiveOne = fiveOneStruc;
    allWords.fiveTwo = fiveTwoStruc;
    allWords.seven = sevenStruc;
    
    return allWords;
}

// Returns random type with n max syllables
function getWordTypeOfMax(max) {
    var wordTypes = ["Noun", "Pronoun", "Verb", "Adverb", "Adjective", "Preposition", "Conjunction"];
    var wordtype = "";
    
    // Used this quick javascript shuffle from this website -
    // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    // Author - Nitin Patel 
    for(var wtype = wordTypes.length-1; wtype > 0; wtype--) {
        const j = Math.floor(Math.random() * wtype);
        const temp = wordTypes[wtype];
        wordTypes[wtype] = wordTypes[j];
        wordTypes[j] = temp;
    }
    
    for ( var wordMax = 0; wordMax < 8; wordMax++) {
        if (getMaxSyllCountForType(wordTypes[wordMax]) >= max) {
            wordtype = wordTypes[wordMax];
            break;
        }
    }
    return wordtype;
}

// Returns the maximum syllable count for a word type
function getMaxSyllCountForType(type) {
    switch(type) {
        case "Noun":
            return 3;
            break;
        case "Pronoun":
            return 3;
            break;
        case "Verb":
            return 3;
            break;
        case "Adverb":
            return 4;
            break;
        case "Adjective":
            return 4;
            break;
        case "Preposition":
            return 3;
            break;
        case "Conjunction":
            return 1;
            break;
        case "Determiner":
            return 1;
            break;
        default:
            return 0;
            break;
    }
}

// Uses getRanInt to select random from haikuTemplates
function getRandomHaikuTemplate() {
    var ranIndex = 0;
    var same = true;
    
    while(same) {
        ranIndex = getRanInt(0,haikuTemplates.length-1);
        if(haikuTemplates[ranIndex] != haikuTemplate) {
            same = false;
        }
    }
    
    console.log("Current Template Index: ", ranIndex);
    return haikuTemplates[ranIndex];
}

// Returns 2D array of haiku word types
function getHaikuTypes() {
    var hTypes = [];
    for(var h = 0; h < 3; h++) {
        hTypes.push([]);
    }
    console.log(haikuTemplate);
    haikuTemplate.fiveOne.forEach(function (blah) {
       hTypes[0].push(blah.wordType); 
    });
    haikuTemplate.seven.forEach(function (blah) {
       hTypes[1].push(blah.wordType); 
    });
    haikuTemplate.fiveTwo.forEach(function (blah) {
       hTypes[2].push(blah.wordType); 
    });
    return hTypes;
}

// Returns word of syllable and type that can follow given word
function getPrecedingWord(syllables) {
    var types = [Noun.create("none",0), Pronoun.create("none",0),
                 Noun.create("none",0), Adverb.create("none",0),
                 Adjective.create("none",0), Preposition.create("none",0),
                 Determiner.create("none",0), Conjunction.create("none",0)
                ];
    var precWord = types[0];
    var sylMax = 0;
    var follows = false;
    var tempFollow = 0;
    
    while (!follows) {
        tempFollow = getRanInt(0,types.length-1);
        while(sylMax < sylCount) {
            tempFollow = getRanInt(0,types.length-1);
            sylMax = getMaxSyllCountForType(types[tempFollow].wordType);
            console.log("Syllmax:", sylMax);
        }
        console.log("Can't follow?", follows);
        var tType = types[tempFollow].wordType;
        follows = followsWord(userWord.wordType, tType);
    }
    precWord = getRandomWord(types[tempFollow].wordType,sylCount);
    
    return precWord;
}

// Uses word part of speech and syllable count passed to return a random word from word type object arrays
function getRandomWord(type, syllables) {
    // Return value of random word object
    var ranWordInt = 0;
    var randomWord = {};
    // Switch on word part of speech
    // - generates random number in range of syllable count at syllable index / accesses word from word array at syllable index at random int index
    // - sets return value of randomWord
    switch(type) {
        case "Noun":
            ranWordInt = getRanInt(0,nouns[syllables-1].length-1);
            randomWord = nouns[syllables-1][ranWordInt];
            break;
        case "Pronoun":
            ranWordInt = getRanInt(0,pronouns[syllables-1].length-1);
            randomWord = pronouns[syllables-1][ranWordInt];
            break;
        case "Verb":
            ranWordInt = getRanInt(0,verbs[syllables-1].length-1);
            randomWord = verbs[syllables-1][ranWordInt];
            break;
        case "Adverb":
            ranWordInt = getRanInt(0,adverbs[syllables-1].length-1);
            randomWord = adverbs[syllables-1][ranWordInt];
            break;
        case "Adjective":
            ranWordInt = getRanInt(0,adjectives[syllables-1].length-1);
            randomWord = adjectives[syllables-1][ranWordInt];
            break;
        case "Preposition":
            ranWordInt = getRanInt(0,prepositions[syllables-1].length-1);
            randomWord = prepositions[syllables-1][ranWordInt];
            break;
        case "Conjunction":
            if(syllables > 1) {syllables = 1;}
            ranWordInt = getRanInt(0,conjunctions[syllables-1].length-1);
            randomWord = conjunctions[syllables-1][ranWordInt];
            break;
        case "Determiner":
            if(syllables > 1) {syllables = 1;}
            ranWordInt = getRanInt(0,determiners[syllables-1].length-1);
            randomWord = determiners[syllables-1][ranWordInt];
            break;
        default:
            break;
    }
    
    return randomWord;
}

// Generates random int and rounds to nearest whole unless 0 then returns 1
function getRanInt(min, max) {
    var ranInt = Math.round(Math.random() * max);
    if(ranInt == 0) {ranInt = 1;}
    return ranInt;
}

// NOTE: broken after tinkering with user word addition - all done in genUserHaiku
// Gets n random numbers that accumulate to given amount using types and num of types
function getRanSyllableAccumulation(numRan, accumulation, types) {
    
    console.log("Cumulative to: ", accumulation);
    // array for accumulative syllable amounts
    var ranSyllableCounts = [];
    // min max range to be set by word type
    var min = 1;
    var max = 0;
    var totalSyllables = 0;
    
    // Looping through each type passed to gen random syllable count
    // lazy while loop (could make it less cpu intensive but the distribution would be too normalized and not very random)
    // ^ the values and amount of them are also too small to apply some other methods of distribution
    while(accumulation != totalSyllables) {
        for(var i = 0; i < numRan; i++) {
            if(types.length == accumulation) {
                ranSyllableCounts.push(1);
            } else {
                // set max syll count for word type
                max = getMaxSyllCountForType(types[i]);

                if (types.length == 1 && max < accumulation) {
                    ranSyllableCounts.push(accumulation);
                } else if (types.length == 1 && max >= accumulation) {
                    ranSyllableCounts.push(accumulation);
                } else {
                    // pushing syllable count to list
                    ranSyllableCounts.push(getRanInt(min,max));
                }
            }

            // adding to tot syllable count to be compared and break loop
            totalSyllables += ranSyllableCounts[i];
        }
        // resetting variables for next loop if accumulation != to total of random syllable count
        if(totalSyllables != accumulation) {
            totalSyllables = 0; 
            ranSyllableCounts = []; 
            console.log("No Accumulation Match");
        }
        if(types.length > accumulation) {
            alert("Impossible to generate with ", types.length, " words and ", accumulation, " syllables.")
            console.log("Impossible to generate with ", types.length, " words and ", accumulation, " syllables.");
            break;
        }
    }
    console.log("Syallable Counts: ",ranSyllableCounts);
    return ranSyllableCounts;
}

// Checks if template contains user word type
function containsUsrWordType(hTypes, usrWord) {
    var p = 0;
    var j = 0;
    for (p; p < hTypes.length; p++) {
        for (j; j < hTypes[p].length; j++) {
            if(hTypes[p][j] == usrWord.wordType) {
                console.log(hTypes[p][j]);
                userWordPos = [p,j];
                console.log("Found User Word in Template");
                return true;
            }
        }
    }
    return false;
}

// Returns haiku strucutures as list formatted to strings
function haikuToString(haiku) {
    var haikuStrings = [];
    var tempString = "";
    var tempVar = "";
    var tempKu = haiku;
    var i = 0;
    //var j = 0;
    
    // Looping through words and appending to string word literal value (capitalizing first word)
    for(i; i < haiku.fiveOne.length; i++) {
        console.log("Word ", i, " in FiveOne: ", tempKu.fiveOne[i].wordLiteral);
        if(i == 0) {
            tempString = tempKu.fiveOne[i].wordLiteral.charAt(0).toUpperCase() + tempKu.fiveOne[i].wordLiteral.slice(1) + " ";
        } else if(tempKu.fiveOne[i].wordLiteral != "none") {
            tempString += tempKu.fiveOne[i].wordLiteral + " ";
            console.log("Added word to string: ", tempString);
        }
    }
    // Pushing string to array / clearing tempString
    haikuStrings.push(tempString);
    tempString = "";
    
    // Looping through words and appending to string (capitalizing first word)
    for(i = 0; i < tempKu.seven.length; i++) {
        console.log("Word ", i, " in Seven: ", tempKu.seven[i].wordLiteral);
        if(i == 0) {
            tempString = tempKu.seven[i].wordLiteral.charAt(0).toUpperCase() + tempKu.seven[i].wordLiteral.slice(1) + " ";
        } else if (tempKu.seven[i].wordLiteral != "none") {
            tempString += tempKu.seven[i].wordLiteral + " ";
        }
    }
    // Pushing string to array / clearing tempString
    haikuStrings.push(tempString);
    tempString = "";
    
    // Looping through words and appending to string (capitalizing first letter of first word)
    for(i = 0; i < tempKu.fiveTwo.length; i++) {
        console.log("Word ", i, " in FiveTwo: ", tempKu.fiveTwo[i].wordLiteral);
        if(i == 0) {
            tempString = tempKu.fiveTwo[i].wordLiteral.charAt(0).toUpperCase() + tempKu.fiveTwo[i].wordLiteral.slice(1) + " ";
        } else if (tempKu.fiveTwo[i].wordLiteral != "none") {
            tempString += tempKu.fiveTwo[i].wordLiteral + " ";
        }
    }
    // Pushing string to array / clearing tempString
    haikuStrings.push(tempString);
    tempString = "";
    
    return haikuStrings;
}

// Sets values of haiku structure to text areas
function writeHaikuToPage(haiku) {
    var haikuString = haikuToString(haiku);
    console.log("Attemping to write haiku to page: ", haikuString[0]);
    haikuFiveOne.value = haikuString[0];
    console.log("Attemping to write haiku to page: ", haikuString[1]);
    haikuSeven.value = haikuString[1];
    console.log("Attemping to write haiku to page: ", haikuString[2]);
    haikuFiveTwo.value = haikuString[2];
}

// Finds first word type in haiku and returns haiku index for word type
function findTypeInHaiku(wordType) {
    var haikuWordIndex = [];
    for (var i = 0; i < haikuTemplate.length; i++) {
        for (var j = 0; j < haikuTemplate[i].length; j++) {
            if(wordType == haikuTemplate[i][j].wordType) {
                haikuWordIndex = [i, j];
            }
        }
    }
    return haikuWordIndex;
}

// User word form submit 
function formSubmitted(e) {
    //e.preventDefault();
    
    //Getting user word data
    if(isValidWord(document.forms["haikuForm"]["usrWord"])) {
        var wordLiteral = String(document.forms["haikuForm"]["usrWord"].value);
    }
    var wordSel = document.getElementById("wType");
    if(isValidType(wordSel.options[wordSel.selectedIndex])) {
        var wordType = wordSel.options[wordSel.selectedIndex].value;
    }
    //var wordSel = document.forms["haikuForm"]["wType"].value;
    
    var sylSel = document.getElementById("sCount");
    if(isValidSyllable(sylSel.options[sylSel.selectedIndex])) {
        var syllableCount = sylSel.options[sylSel.selectedIndex].value;
    }
    
    if(!invalidSyl && !invalidType && !invalidWord) {
        console.log("word: ", wordLiteral, "type: ", wordType, "syllables: ", syllableCount);
    
        haikuForm.style.display = "none";
        haikuAreas.style.display = "block";
    
        // User word creation
        var userWord = genWord(wordLiteral, wordType, parseInt(syllableCount));
        console.log("User Word: \n", userWord);
    
        //var newHaiku = buildNonUserHaiku();
        var newHaiku = buildHaiku(userWord);
        console.log("New Haiku: ", newHaiku);
        writeHaikuToPage(newHaiku);
    }
}

// New haiku submit/return to word form
function generateNewHaiku() {
    haikuAreas.style.display = "none";
    haikuForm.style.display = "block";
}

/*
Basic binary conditional rules for parts of speech
(lacking in a lot of detail, tense/quantifying/particle/article/proper nouns/post or pre adj/possessives etc. etc.)
*/
// Can modify slightly to adjust haiku outcomes
function followsWord(type, fType) {
    // Switching on word type for conditions when following switch on fType
    switch(type) {
        case "Noun":
            switch(fType) {
                case "Noun":
                    return false;
                    break;
                case "Pronoun":
                    return false;
                    break;
                case "Verb":
                    return true;
                    break;
                case "Adverb":
                    return true;
                    break;
                case "Adjective":
                    return true;
                    break;
                case "Preposition":
                    return false;
                    break;
                case "Conjunction":
                    return true;
                    break;
                case "Determiner":
                    return true;
                    break;
                default:
                    break;
            }
        case "Pronoun":
            switch(fType) {
                case "Noun":
                    return false;
                    break;
                case "Pronoun":
                    return false;
                    break;
                case "Verb":
                    return true;
                    break;
                case "Adverb":
                    return false;
                    break;
                case "Adjective":
                    return true;
                    break;
                case "Preposition":
                    return true;
                    break;
                case "Conjunction":
                    return true;
                    break;
                case "Determiner":
                    return false;
                    break;
                default:
                    break;
            }
        case "Verb":
            switch(fType) {
                case "Noun":
                    return true;
                    break;
                case "Pronoun":
                    return true;
                    break;
                case "Verb":
                    return false;
                    break;
                case "Adverb":
                    return true;
                    break;
                case "Adjective":
                    return false;
                    break;
                case "Preposition":
                    return false;
                    break;
                case "Conjunction":
                    return false;
                    break;
                case "Determiner":
                    return false;
                    break;
                default:
                    break;
            }
        case "Adverb":
            switch(fType) {
                case "Noun":
                    return false;
                    break;
                case "Pronoun":
                    return true;
                    break;
                case "Verb":
                    return true;
                    break;
                case "Adverb":
                    return false;
                    break;
                case "Adjective":
                    return true;
                    break;
                case "Preposition":
                    return false;
                    break;
                case "Conjunction":
                    return true;
                    break;
                case "Determiner":
                    return false;
                    break;
                default:
                    break;
            }
        case "Adjective":
            switch(fType) {
                case "Noun":
                    return false;
                    break;
                case "Pronoun":
                    return false;
                    break;
                case "Verb":
                    return true;
                    break;
                case "Adverb":
                    return false;
                    break;
                case "Adjective":
                    return false;
                    break;
                case "Preposition":
                    return false;
                    break;
                case "Conjunction":
                    return true;
                    break;
                case "Determiner":
                    return true;
                    break;
                default:
                    break;
            }
        case "Preposition":
            switch(fType) {
                case "Noun":
                    return true;
                    break;
                case "Pronoun":
                    return false;
                    break;
                case "Verb":
                    return true;
                    break;
                case "Adverb":
                    return false;
                    break;
                case "Adjective":
                    return false;
                    break;
                case "Preposition":
                    return false;
                    break;
                case "Conjunction":
                    return true;
                    break;
                case "Determiner":
                    return false;
                    break;
                default:
                    break;
            }
        case "Conjunction":
            switch(fType) {
                case "Noun":
                    return true;
                    break;
                case "Pronoun":
                    return false;
                    break;
                case "Verb":
                    return true;
                    break;
                case "Adverb":
                    return true;
                    break;
                case "Adjective":
                    return true;
                    break;
                case "Preposition":
                    return true; // change
                    break;
                case "Conjunction":
                    return false;
                    break;
                case "Determiner":
                    return false; // change
                    break;
                default:
                    break;
            }
        case "Determiner":
            switch(fType) {
                case "Noun":
                    return true;
                    break;
                case "Pronoun":
                    return false;
                    break;
                case "Verb":
                    return true;
                    break;
                case "Adverb":
                    return false;
                    break;
                case "Adjective":
                    return false;
                    break;
                case "Preposition":
                    return true;
                    break;
                case "Conjunction":
                    return false;
                    break;
                case "Determiner":
                    return false;
                    break;
                default:
                    break;
            }
        default:
            break;
    }
}

// Function on page load
function init() {
    userWordPos = [30, 30];
    //Pushing 2D arrays
    initializeWordArrays();
    // Generate lists and word types from word lists
    generateWordLists();
    // Generates pre-customized templates;
    generateHaikuTemplates();
    // Loop to generate completely random templates
    for(var numT = 0; numT < 50; numT++) {
        //genRanCustomHaikuTemplate();
    }
    // Defaulting user word to none word value
    userWord = Word.create("none",0,"none");
    // Picking random template to start
    haikuTemplate = getRandomHaikuTemplate();
    haikuAreas = document.getElementById("haiku");
    haikuForm = document.getElementById("haikuForm");
    haikuFiveOne = document.getElementById("haikuFiveOne");
    haikuFiveTwo = document.getElementById("haikuFiveTwo");
    haikuSeven = document.getElementById("haikuSeven");
}

// Validation
function isValidWord(input) {
    if(input.value.match(input.pattern)) {
        invalidWord = false;
        return true;
    } else if (input.value == "") {
        console.log("Must enter a word.");
        alert("No valid type selected.");
    } else {
        console.log(input.value.match(input.pattern));
        invalidWord = true;
        return false;
    }
}
function isValidType(input) {
    if(input != null && input != undefined) {
        invalidType = false;
        return true;
    } else {
        console.log("No valid type selected.");
        alert("No valid type selected.");
        return false;
    }
}
function isValidSyllable(input) {
    if(input != null && input != undefined) {
        invalidSyl = false;
        return true;
    } else {
        console.log("No valid syllable amount selected.");
        alert("No valid type selected.");
        invalidSyl = true;
        return false;
    }
}

document.addEventListener("DOMContentLoaded", init);