new Vue({
    el: '#app',
    data(){
        return {
            courses: [],
            title: '',
            time: 0.00,
            totalHours: 0,
        }
    },

    computed: {
        totalTime(){
            this.totalHours = 0;
            if(this.courses.lenght < 0){
                return 0;
            }
            for(let course of this.courses){
                this.totalHours += Number(course.time);
            }
            this.title = '';
            this.time = 0;
            return this.totalHours;
        }
    },

    methods:{
        addNewCourse(){
            this.courses.push(
                {title: this.title, time: this.time}
            );
            console.log(this.courses);
        }
    }
});