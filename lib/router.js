Router.configure({
  layoutTemplate: 'main_layout'
});

Router.route('/', {name: 'home'});

Router.route('/questions', function() {
  this.render('questions');
},
{
  name: 'questions'
});

Router.route('/questions/:_id', function() {
  this.render('question_full', {
    data: function() {
      return Questions.findOne({_id: this.params._id});
    }
  });
},
{
  name: 'question.show'
});