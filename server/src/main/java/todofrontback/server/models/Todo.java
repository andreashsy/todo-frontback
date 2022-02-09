package todofrontback.server.models;

public class Todo {
    public String title;
    public String description;
    public String priority;
    public String tid;

    public void generateDefault(String index) {
        this.title = "server title " + index;
        this.description = "server description " + index;
        this.priority = "medium";
        this.tid = index.repeat(8);
    }
}
