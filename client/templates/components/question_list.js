Template.question_list.helpers({
  questions: function() {
    return Questions.find({}, {sort: {voteCount: -1}});
  }
});