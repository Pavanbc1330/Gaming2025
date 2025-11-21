// Vocab Quest — app logic
// Designed to be static and run in the browser (open index.html).

/*
Game rules & configuration
*/
const CONFIG = {
  QUESTIONS_PER_LEVEL: 10,
  PASS_THRESHOLD: 7, // out of 10
  FINAL_TEST_QUESTIONS: 15,
  STORAGE_KEY: 'vocab_quest_progress'
};

/*
WORDS DATA STRUCTURE
10 levels, each level is an array of {word, correct, choices}
Choices include the correct meaning and distractors.
You can replace words or definitions as needed*/
