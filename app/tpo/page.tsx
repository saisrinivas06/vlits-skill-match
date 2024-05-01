'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { addNewCompany, getAllCompanies } from '../(action)/companies';
import { getAllStudents } from '../(action)/actions';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TableDemo() {
  const router = useRouter();
  const companies = [...getAllCompanies()];
  const [name, setName] = useState('');
  const [role,setRole] = useState('');
  const [skills,setSkills] = useState('');
  const [ctc,setCtc] = useState('');
  const [open, setOpen] = useState(false)

   function addCompany() {
    setOpen(true);
    addNewCompany({name, role, skills: skills.split(''), CTC: ctc, mode: 'Hybrid'})
    router.refresh()
    setOpen(false)
   }
   

  return (
    <><div>
      <h1 className='text-2xl text-center mt-10'>Companies Details</h1>
      <Table className=" mt-20 ml-10 mr-20 table-auto border-separate" >
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] bg-black text-white text-center">Name</TableHead>
            <TableHead className='bg-black text-white text-center'>Role</TableHead>
            <TableHead className='bg-black text-white text-center'>CTC</TableHead>
            <TableHead className='bg-black text-white text-center'>Skills required</TableHead>
            <TableHead className='bg-black text-white text-center'>Eligible Students</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.name}>
              <TableCell className="text-center">{company.name}</TableCell>
              <TableCell className='text-center'>{company.role}</TableCell>
              <TableCell className='text-center'>{company.CTC}</TableCell>
              <TableCell className='text-center'> {company.skills}</TableCell>
              <TableCell className='text-center'>{company.eligible}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>



      <Dialog open={open}>
        <DialogTrigger asChild>
          <Button className='ml-[45%] mt-4' onClick={() => setOpen(true)}>Add a Company</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[650px]">
          <DialogHeader>
            <DialogTitle>Add Company</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Company Name
              </Label>
              {/* <Input id="name" placeholder='Company Name' className="col-span-3 " /> */}
              <Input className='col-span-3'
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Comapny name"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Role
              </Label>
              {/* <Input id="role"  placeholder='Job Role'   className="col-span-3" /> */}
               <Input className='col-span-3'
                value={role}
                onChange={(e) => setRole(e.target.value)}
                id="role"
                placeholder="Position"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Skills Required
              </Label>
              {/* <Input id="skills"  placeholder='Skills required for the job' className="col-span-3" /> */}
               <Input className='col-span-3'
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                id="skills"
                placeholder="Skills required"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                CTC
              </Label>
              {/* <Input id="ctc"  placeholder='Expected CTC' className="col-span-3" /> */}
               <Input className='col-span-3'
                value={ctc}
                onChange={(e) => setCtc(e.target.value)}
                id="ctc"
                placeholder="Expected Salary"
                required
              />
            </div>
            <DialogFooter>
            <Button type="submit" onClick={addCompany}>Add Company</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>
    </>
  );
}
