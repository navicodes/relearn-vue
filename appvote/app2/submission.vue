const submissionComponent = {
    template:
    `
        <div>
                            <div class="row pt-3 pb-3"  
                    v-for="submission in sortedSubmissions"
                    v-bind:key="submission.id"
                    >
                
                    <div class="col-md-3"></div>
                    <div class="col-md-1">
                        <div class="feed-image text-left">
                            <!-- image or icon-->
                            <i v-bind:class="submission.submissionImage"></i>
                        </div>
                    </div>
                    <div class="col-md-4">
                                
                        <div class="section">
                            <div class="content">
                                <b>
                                    <a href="" class="">
                                        {{ submission.title }}
                                    </a>
                                    <span class="tag"># {{ submission.id }} </span>
                                </b>
                                <br>
                                    {{ submission.description }}
                                <br>
                                <div class="text-small">
                                    Submitted by:
                                    <img class="avatar" v-bind:src="submission.avatar">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-1 text-center" v-bind:class="{ 'blue-border' : submission.votes >= 20 }">
                        <span class="votes-count" v-on:click="upvote(submission.id)">
                            <i class="bi bi-chevron-up small-icon"></i>
                            <b> {{ submission.votes }} </b>
                        </span>
                    </div>

                    <div class="col-md-3"></div>
                </div>
        </div>
    `
}