const students: Data[] = [];

export interface Data {
  regdNo: string;
  tenth:number;
  inter:number;
  cgpa:number;
  name: string;
  backlogs: number;
  skills: string[];
}

export function addStudent(data: Data) {
  students.push(data);
}

export function getAllStudents() {
  return students;
}
