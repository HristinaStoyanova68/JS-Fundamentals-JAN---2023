function softUniStudents(input) {

    let courses = {};

    class StudentInfo {
        constructor(studentName, studentCredit, studentEmail) {
            this.studentName = studentName;
            this.studentCredit = studentCredit;
            this.studentEmail = studentEmail;
        }
    }

    for (const line of input) {
        if (line.includes(':')) {
            let [course, capacity] = line.split(': ');
            let currCapacity = Number(capacity);

            if (!courses[course]) {
                courses[course] = { totalCapacity: 0, studentsInfo: [] };
            }

            courses[course].totalCapacity += currCapacity;

        } else if (line.includes('] with email ')) {
            let [userInfo, userData] = line.split('] with email ');
            let [userName, userCredit] = userInfo.split('[');
            userCredit = Number(userCredit);
            let [userEmail, userCourse] = userData.split(' joins ');

            if (courses[userCourse] && courses[userCourse].totalCapacity > 0) {
                courses[userCourse].totalCapacity--;

                let currStudent = new StudentInfo(userName, userCredit, userEmail);
                (courses[userCourse].studentsInfo).push(currStudent);
            }
        }
    }

    let sortedCourses = Object.entries(courses).sort((a, b) => Object.entries(b[1])[1][1].length - Object.entries(a[1])[1][1].length);

    for (const currCourse of sortedCourses) {

        let leftPlaces = currCourse[1].totalCapacity;

        console.log(`${currCourse[0]}: ${leftPlaces} places left`);

        let sortedSudents = (currCourse[1].studentsInfo).map(x => Object.entries(x)).sort((a, b) => b[1][1] - a[1][1]);

        for (const student of sortedSudents) {

            let userName = student[0][1];
            let userCredit = student[1][1];
            let userEmail = student[2][1];

            console.log(`--- ${userCredit}: ${userName}, ${userEmail}`);
        }
    }
}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);
console.log('.............');
softUniStudents([
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'
]);