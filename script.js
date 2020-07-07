//BASIC LEVEL
/*
(function(){
  function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.dispRandQuestion = function(){
    console.log(this.question);
    for(let i = 0; i<this.answers.length; i++){
      console.log(i+' : '+this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(userAns){
    if(userAns === this.correct){
      console.log('Correct Answer!');
    }else{
      console.log('Wrong answer. Try again...');
    }
  }

  let q1 = new Question('What the heck is wrong with you?', ['nothing', 'everything'], 0);
  let q2 = new Question('Who found Space X?', ['Alain', 'Joel', 'Musk'], 2);
  let q3 = new Question('Do you know JavaScript', ['Yes', 'Obviously', 'No'], 1);
  let q4 = new Question('Current virus is called?', ['Malaria', 'COVID-19', 'Flu'], 1);

  let questions = [q1, q2, q3, q4];
  let n = Math.floor(Math.random()*questions.length);
  questions[n];
  questions[n].dispRandQuestion();
  let userAnswer = parseInt(prompt('Enter the number correspending to the right answer please! '));
  questions[n].checkAnswer(userAnswer);
})();
*/
//EXPERT LEVEL
(function(){
  function Question(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  Question.prototype.dispRandQuestion = function(){
    console.log(this.question);
    for(let i=0; i<this.answers.length; i++){
      console.log(i + ' : '+this.answers[i]);
    }
  }
  Question.prototype.checkAnswer = function(userAns,callback){
    let sc;
    if(userAns === this.correct){
      console.log('Correct Answer!');
      sc = callback(true);
    }else{
      console.log('Wrong answer. Try again...');
      sc = callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score){
    console.log('Your current score is: '+score);
    console.log('#############################');
  }
  function score(){
    let sc=0;
    return function(correct){
      if(correct){
        sc++;
      }
      return sc;
    }
  }
  let keepScore = score();

  let q1 = new Question('What the heck is wrong with you?', ['nothing', 'everything'], 0);
  let q2 = new Question('Who found Space X?', ['Alain', 'Joel', 'Musk'], 2);
  let q3 = new Question('Do you know JavaScript', ['Yes', 'Obviously', 'No'], 1);
  let q4 = new Question('Current virus is called?', ['Malaria', 'COVID-19', 'Flu'], 1);

  let questions = [q1, q2, q3, q4];

  function nextQuestion(){
    let n = Math.floor(Math.random()*questions.length)
    questions[n].dispRandQuestion();
    let userAnswer = prompt('Enter the number correspending to the right answer please!');
    if(userAnswer !== 'exit'){
      questions[n].checkAnswer(parseInt(userAnswer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
