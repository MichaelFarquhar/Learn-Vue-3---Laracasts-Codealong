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
            assignments: [
                { id: 1, project: 'Study for quiz', completed: false },
                { id: 2, project: 'Write essay', completed: false },
                { id: 3, project: 'Create test notes', completed: false },
            ],
            input: ''
        }
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