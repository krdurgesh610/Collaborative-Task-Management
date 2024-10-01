const AddTask = () => {
  return (
    <div>
      <div className="addtask">
        <form>
          <input type="text" name="task" placeholder="add your task" />
          <button className="button">Add Task</button>
        </form>
      </div>
    </div>
  );
};
export default AddTask;
