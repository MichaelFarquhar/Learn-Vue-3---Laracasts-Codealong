import AssignmentList from "./AssignmentList.js";
import AssignmentInput from "./AssignmentInput.js";

export default {
    components: { AssignmentList, AssignmentInput },
    
    template: `
        <div>
            <assignment-input @addToList="addToList"></assignment-input>

            <assignment-list :assignments="pendingAssignments" title="In Progress"></assignment-list>
            <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
        </div>
    `,

    data() {
        return {
            assignments: [],
            input: ''
        }
    },

    created(){
        fetch('http://localhost:3001/assignments')
            .then(resp => resp.json())
            .then(data => {
                this.assignments = data;
            })
    },

    methods: {
        addToList(input) {
            this.assignments.push({
                id: this.assignments.length + 1,
                project: input,
                completed: false                
            });
        }
    },

    computed: {
        pendingAssignments() {
            return this.assignments.filter(a => !a.completed);
        },
        completedAssignments() {
            return this.assignments.filter(a => a.completed);
        }
    }
}