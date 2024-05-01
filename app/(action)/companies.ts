export interface Data {
  name: string;
  role: string;
  mode:string;
  skills: string[];
  CTC:string;
  eligible:number;
}



const companies = [
  {
    name: 'Apple',
    role: 'SDE-1',
    CTC: '10 LPA',
    mode: 'Office',
    skills: ['Python'],
    eligible:6,
  },
  {
    name: 'Google',
    role: 'SDE-Summer Intern',
    CTC: '60k permonth',
    mode: 'Office',
    skills: ['Java , RubyOnRails'],
    eligible:5,
  },
  {
    name: 'Microsoft',
    role: 'Developer',
    CTC: '20 LPA',
    mode: 'Office',
    skills: ['Java , Azure , MOngoDB'],
    eligible:2,
  },
  {
    name: 'TCS',
    role: 'DataScience Intern',
    CTC: '10 LPA',
    mode: 'Office',
    skills: ['Python , DataAnalysis'],
    eligible:12,
  },
  {
    name: 'Infosys',
    role: 'Devoloper',
    CTC: '7.5 LPA',
    mode: 'Office',
    skills: ['Java ,  SQL'],
    eligible:10,
  },
  {
    name: 'Accenture',
    role: 'SDE-Intern',
    CTC: '9 LPA',
    mode: 'Office',
    skills: ['Java ,  PHP'],
    eligible:9,
  },
  {
    name: 'Deloitte',
    role: 'SDE-3',
    CTC: '7 LPA',
    mode: 'Office',
    skills: ['Java'],
    eligible:4,
  },
  {
    name: 'Swiggy',
    role: 'Full Stack Engineer',
    CTC: '12 LPA',
    mode: 'Office',
    skills: ['MEAN Stack'],
    eligible:6,
  },

];

export function getAllCompanies() {
  return companies;
}

export function addNewCompany(data:Data) {
  companies.push(data);
}
