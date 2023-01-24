// dboyer2@live.nhmu.edu, Haiku Generator

// Using object protoype extension to inherit from word
Object.prototype.extend = function (extension) {
    var hasOwnProperty = Object.hasOwnProperty;
    var object = Object.create(this);
    
    for (var property in extension)
        if (hasOwnProperty.call(extension, property) || 
            typeof object[property] === "undefined")
                object[property] = extension[property];
    return object;
}

//TODO: add word tense
// Base word as object protoype function create
var Word = {
    create: function (word, syllables, type) {
        return this.extend({
            wordLiteral: word, // string form of the actual word
            syllableCount: syllables, // syllable count of word
            wordType: type // word part of speech
        });
    }
}

/*
Base Word object extentions to parts of speech 
*/
var Noun = Word.extend({ // Extending word object
    // Property function override input on create with word and syllables
    create: function (word, syllables) {
        // Returning function creation call of word object with word literal, syllable count and word type set to the object
        return Word.create.call(this, word, syllables, "Noun");
    }
});

var Pronoun = Word.extend({
    create: function (word, syllables) {
        return Word.create.call(this, word, syllables, "Pronoun");
    }
});

var Verb = Word.extend({
    create: function (word, syllables) {
        return Word.create.call(this, word, syllables, "Verb");
    }
});

var Adverb = Word.extend({
    create: function (word, syllables) {
        return Word.create.call(this, word, syllables, "Adverb");
    }
});

var Adjective = Word.extend({
    create: function (word, syllables) {
        return Word.create.call(this, word, syllables, "Adjective");
    }
});

var Preposition = Word.extend({
    create: function (word, syllables) {
        return Word.create.call(this, word, syllables, "Preposition");
    }
});

var Conjunction = Word.extend({
    create: function (word, syllables) {
        return Word.create.call(this, word, syllables, "Conjunction");
    }
});

var Determiner = Word.extend({
    create: function (word, syllables) {
        return Word.create.call(this, word, syllables, "Determiner");
    }
});