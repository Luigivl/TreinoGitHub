const Task = require("../models/Task");

class TasksControllers {
  async createtask(request, response) {
    response.render("tasks/create");
  }
  async showTask(request, response) {
    let lista = await Task.findAll({ raw: true });
    response.render("tasks/all", { lista });
  }
  async create(request, response) {
    const task = {
      title: request.body.title,
      description: request.body.description,
      done: false,
    };
    await Task.create(task);

    response.redirect("/tasks");
  }
  async remove(request, response) {
    const { id } = request.body;
    await Task.destroy({ where: { id: id } });
    response.redirect("/tasks");
  }
  async edit(request, response) {
    const id = request.params.id;
    const task = await Task.findOne({ where: { id: id }, raw: true });
    response.render("tasks/edit", { task });
  }
  async Updat(request, response) {
    const { id, title, description } = request.body;
    await Task.update(
      { title: title, description: description },
      {
        where: { id: id },
      }
    );
    response.redirect("/tasks");
  }
  async done(request, response) {
    const { id } = request.body;

    const done = request.body.done === "0" ? true : false;

    await Task.update({ done: done }, { where: { id: id } });
    response.redirect("/tasks");
  }
}
module.exports = new TasksControllers();
