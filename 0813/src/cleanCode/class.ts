/**********************
 * 凝集度、結合度に関してのサンプル
 **********************/
// class Lesson {
//     #students: Student[];
//     #teacher: Teacher;
//     constructor(students = [], teacher) {
//         this.#students = students;
//         this.#teacher = teacher;
//     }

//     start() {
//         this.#teacher.log();

//         for (const student of this.#students) {
//             console.log(student.name);
//         }
//     }
// }

// class Student {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const students = [
//     new Student("name1"),
//     new Student("name2"),
//     new Student("name3"),
// ];

// const teacher = { name: "teacher1", subject: "english" };
// const lesson = new Lesson(students, teacher);
// lesson.start();
// lesson.setTeacher("teacher2", "math");
// lesson.start();

/**********************
 * 凝集度、結合度を意識した形
 **********************/

class Lesson2 {
    #students: Student2[];
    #teacher: Teacher2;

    constructor(students = [], teacher) {
        this.#students = students;
        this.#teacher = teacher;
    }

    start() {
        for (const student of this.#students) {
            this.#teacher.log();
            student.log(this.#teacher.getName());
        }
    }
}

class Teacher2 {
    #name: string;
    #subject: string;

    constructor(name, subject) {
        this.#name = name;
        this.#subject = subject;
    }

    getName() {
        return this.#name;
    }

    log() {
        console.log(`${this.#name}, ${this.#subject}`);
    }
}

class Student2 {
    #name: string;

    constructor(name) {
        this.#name = name;
    }

    log(teacherName) {
        console.log(this.#name, teacherName);
    }
}

const students2 = [
    new Student2("name1"),
    new Student2("name2"),
    new Student2("name3"),
];

const teacher2 = new Teacher2("teacher1", "english");
const lesson2 = new Lesson2(students2, teacher2);
lesson2.start();
const nextTeacher = new Teacher2("teacher2", "math");
const nextLesson = new Lesson2(students2, nextTeacher);
nextLesson.start();
