Template.question_form.events({
  "submit .new-question": function(event) {
    var summary = event.target.summary.value.trim();
    event.target.summary.value = "";
    if(summary.length > 0) {
      Questions.insert({summary: summary, voteCount: 0, createdAt: new Date()});
    }
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
});