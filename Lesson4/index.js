var student = {
    id: 1,
    full_name: 'bitch2',
    age: 99,
    job: 'bitch',
    className: 'A1',
}

var student2 = {
    id: 2,
    full_name: 'bitch2',
    age: 99,
    job: 'bitch2',
    className: 'A1',    
}

var student3 = {
    id: 3,
    full_name: 'bitch3',
    age: 99,
    job: 'bitch3',
    className: 'A2',    
}

var school = [ student, student2, student3 ]

var school_find_student = school.find((item) => item.id === 2)

var school_find_class = school.filter((item) => item.className === 'A1')

console.log(school_find_student)

console.log(school_find_class)
