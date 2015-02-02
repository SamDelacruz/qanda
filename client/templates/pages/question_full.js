Template.question_full.helpers({
  questionId: function() {
    var controller = UI.controller();
    return controller.get('questionId');
  },
  createdAtFmt: function() {
    var date = this.createdAt;
    return moment(date).format('l LT');
  },
  isAnswered: function() {
    return this.answer != null;
  }
});