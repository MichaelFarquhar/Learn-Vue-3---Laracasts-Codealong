export default {
    template: `
        <li 
            :class="assignment.completed ? 'complete' : ''"
        >
            <label>
                {{ assignment.project }}
                <input type="checkbox" v-model="assignment.completed">
            </label>
        </li>
    `,

    props: {
        assignment: Object
    }
}