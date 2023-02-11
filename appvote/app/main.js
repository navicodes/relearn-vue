new Vue({
    el: '#app',
    data: {
        submissions : window.Seed.submissions
    },
    computed: {
        sortedSubmissions(){
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes
            });
        }
    }          
});