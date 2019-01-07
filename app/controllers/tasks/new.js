import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask: function() {
      const title = this.get('title');
      const description = this.get('description');
      const date = this.get('date');

      let newTask = this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date)
      });

      window.console.log('Action triggered');
      // Save to database
      newTask.save();

      // Clear form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });
    }
  }
});
