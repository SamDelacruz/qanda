Template.question_row.helpers({

});

Template.question_row.events({
  "click .vote-up": function() {
    Questions.update(this._id, {$set: {voteCount: this.voteCount + 1}});
    console.log(this._id);
    event.preventDefault();
    event.stopPropagation();
    return false;
  },
  "click .vote-down": function() {
    Questions.update(this._id, {$set: {voteCount: this.voteCount - 1}});
    console.log(this._id);
    event.preventDefault();
    event.stopPropagation();
    return false;
  },
  "click .question_row": function() {
    var url = '/questions/' + this._id;
    Router.go(url);
  }
});