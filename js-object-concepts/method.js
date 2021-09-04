// here takeExam, treatDe are method. in object, functions are called method. 
const student = {
    id: 101,
    name: 'No Name',
    money: 5000,
    major: 'Computer Science',
    subjects: ['english', 'math', 'claculas', 'neumerical method', 'linear algebra'],
    bestFriend: {
        name: 'kundu',
        major: 'cse',
        constach: {
            phone: '930449',
            mobile: '302394'
        }
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDe: function (expense, tips) {
        this.money = this.money - expense-tips;
        return this.money;
    }
}
student.takeExam();
const remaining = student.treatDe(500, 50);
console.log(remaining);