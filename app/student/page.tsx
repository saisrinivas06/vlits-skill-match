'use client';

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { addStudent, getAllStudents } from '../(action)/actions';
import { useRouter } from 'next/navigation';

export default function Component() {
  const [regdNo, setRegdNo] = useState('');
  const [name, setName] = useState('');
  const [backlogs, setBacklogs] = useState('');
  const [skills, setSkills] = useState('');
  const [tenth, setTenth] = useState('');
  const [inter, setInter] = useState('');
  const [cgpa, setCgpa] = useState('');
  const router = useRouter();

  const data = {
    regdNo: regdNo,
    tenth:10,
    inter:974,
    cgpa:9.0,
    name: 'Srinivas',
    backlogs: 0,
    skills: ['Python'],
  };

  function onSave() {
    addStudent(data);
    console.log(getAllStudents());
    router.push('/companies');
  }

  return (
    <Card className="min-h-screen m-auto max-w-3xl my-8">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Student Profile Information</CardTitle>
        <CardDescription>
          Please fill in the following information to update your profile.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="regdno">Registration Number</Label>
          <Input
            value={regdNo}
            onChange={(e) => setRegdNo(e.target.value)}
            id="regdno"
            placeholder="21FEA0532"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Name"
            required
          />
        </div>


        <div className="space-y-2">
          <Label htmlFor="tenth">Enter your SSC marks</Label>
          <Input
            value={tenth}
            onChange={(e) => setTenth(e.target.value)}
            id="tenth"
            placeholder="Enter percentage"
            required
          />
        </div>
         <div className="space-y-2">
          <Label htmlFor="inter">Enter Intermediate Marks</Label>
          <Input
            value={inter}
            onChange={(e) => setInter(e.target.value)}
            id="inter"
            placeholder="Enter CGPA"
            required
          />
        </div>
         <div className="space-y-2">
          <Label htmlFor="cgpa">CGPA</Label>
          <Input
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            id="cgpa"
            placeholder="Enter CGPA"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="attendance">Attendance</Label>
          <Input id="attendance" placeholder="75%" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="backlogs">Backlogs</Label>
          <Input
            value={backlogs}
            onChange={(e) => setBacklogs(e.target.value)}
            id="backlogs"
            placeholder="Enter No.of Backlogs"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skills">Skills</Label>
          <Input
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            id="skills"
            placeholder="Java, C++, Python, ReactJS,NextJS"
            required
          />
        </div>
      </CardContent>  
      <CardFooter>
        <Button className="ml-auto" onClick={onSave}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
