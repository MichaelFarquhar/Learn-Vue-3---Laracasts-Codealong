import AssignmentItem from "./AssignmentItem.js"

export default {
    components: { AssignmentItem },

    template: `
        <section>
            <h3 v-show="assignments.length">{{ title }}</h3>
            <ol>
                <assignment-item v-for="assignment in assignments" :assignment="assignment" :key="assignment.id"></assignment-item>
            </ol>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
}