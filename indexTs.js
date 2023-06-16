var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var tasks = [];
var createTask = function (title, desc) {
    var task = {
        id: Date.now(),
        title: title,
        desc: desc,
        isComplete: false
    };
    tasks.push(task);
    return task;
};
var getTaskById = function (id) {
    return tasks.find(function (t) { return t.id === id; });
};
var removeTask = function (id) {
    var taskIndex = tasks.findIndex(function (t) { return t.id === id; });
    var condidateTask = tasks[taskIndex];
    if (!condidateTask)
        throw new Error("Задача не найдена");
    tasks.splice(taskIndex, 1);
};
var updateTask = function (id, newFields) {
    var taskIndex = tasks.findIndex(function (t) { return t.id === id; });
    var condidateTask = tasks[taskIndex];
    if (!condidateTask)
        throw new Error("Задача не найдена");
    var editedTask = __assign(__assign(__assign({}, condidateTask), newFields), getFieldsForUpdate(condidateTask, newFields));
    tasks[taskIndex] = editedTask;
};
var toggleIsCompleteTask = function (id, isComplete) {
    updateTask(id, { isComplete: isComplete });
};
var getFieldsForUpdate = function (prev, next) {
    return Object.entries(next).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        if (next[key] !== undefined && prev) {
            acc[key] = value;
        }
        return acc;
    }, prev);
};
var res1 = createTask("Изучить Typescript", "JavaScript со строгой типизацией");
console.log("create: ", tasks);
updateTask(res1.id, {title: "Изучить Redux", desc: "Стейт менеджер"});
console.log("update: ", tasks);
toggleIsCompleteTask(res1.id, true)
console.log("completed: ", tasks)
removeTask(res1.id)
console.log("delete: ", tasks)