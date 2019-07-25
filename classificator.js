const fs = require('fs');
const bayes = require('classificator')
const { tokenizer } = require('cozy-konnector-libs/src/libs/categorization/helpers')

const toLearn = require('./data.json')
const filename = "bank_classifier_nb_and_voc.json"


let classifier = bayes({
  tokenizer
})

for (const { label, category } of toLearn) {
  classifier.learn(label, category)
}


fs.writeFile(filename, classifier.toJson(), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file ("+ filename +") was saved!");
});
