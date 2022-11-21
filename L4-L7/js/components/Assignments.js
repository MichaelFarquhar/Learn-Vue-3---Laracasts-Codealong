import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    
    template: `
        <div>
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
            ]
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