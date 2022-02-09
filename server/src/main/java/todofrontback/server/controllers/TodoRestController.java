package todofrontback.server.controllers;

import java.util.LinkedList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import todofrontback.server.models.Todo;

@RestController
@RequestMapping(path="/api")
public class TodoRestController {

    List<Todo> serverTodoList = new LinkedList<Todo>();
    
    @GetMapping(path="/getTodo")
    public ResponseEntity<String> getTodo() {

        Todo todo1 = new Todo();
        todo1.generateDefault("1");
        Todo todo2 = new Todo();
        todo2.generateDefault("2");
        Todo todo3 = new Todo();
        todo3.generateDefault("3");
        List<Todo> todoList = new LinkedList<Todo>();
        todoList.add(todo1);
        todoList.add(todo2);
        todoList.add(todo3);

        JsonArray jsonArray = Json.createArrayBuilder()
            .add(Json.createObjectBuilder()
                .add("title", todo1.title)
                .add("description", todo1.description)
                .add("priority", todo1.priority)
                .add("tid", todo1.tid))
            .add(Json.createObjectBuilder()
                .add("title", todo2.title)
                .add("description", todo2.description)
                .add("priority", todo2.priority)
                .add("tid", todo2.tid))
            .add(Json.createObjectBuilder()
                .add("title", todo3.title)
                .add("description", todo3.description)
                .add("priority", todo3.priority)
                .add("tid", todo3.tid))
            .build();

        return ResponseEntity.ok(jsonArray.toString());
    }

    
}
