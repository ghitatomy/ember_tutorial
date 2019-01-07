import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editTask: function(id) {
      const self = this;
      const title = this.get('model.title');
      const description = this.get('model.description');
      const date = this.get('model.date');

      this.store.findRecord('task', id).then(function(task) {
        task.set('title', title);
        task.set('description', description);
        task.set('date', date);
        task.save();
        self.transitionToRoute('tasks');
      });
    }
  }
});
