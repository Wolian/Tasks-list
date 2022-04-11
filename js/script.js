{
    const tasks = [];

    const render = () => {
        let tasksListHTMLContent = "";

        for (const task of tasks) {
            tasksListHTMLContent += `
                <li class="tasks__item js-task">
            
                    <button class="tasks__button tasks__button--toggleDone js-toggleDone">
                        ${task.done ? "✔" : ""}
                    </button>
                    <span class="tasks__content${task.done ? "tasks__content--done" : ""}">
                        ${task.content}
                    </span>
                    <button class="tasks__button tasks__button--remove js-remove">
                        🗑
                    </button>
                </li>
            `;

        }

        document.querySelector(".js-tasks").innerHTML = tasksListHTMLContent;
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
            done:true,
        });

        render();
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        
        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    }
    
    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}