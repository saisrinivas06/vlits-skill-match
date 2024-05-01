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
import { getAllStudents, Data } from '../(action)/actions';
import { Button } from '@/components/ui/button';
import { getAllCompanies } from '../(action)/companies';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import React from "react";
import { Alert } from "reactstrap";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



export default function Page() {
  const details = getAllCompanies();
  const sdetails = getAllStudents();
  const [isClicked, setIsClicked] = useState(false);
  
  function click() {
    // console.log(Math.random())
    let n = Math.random();
    if (n <= 0.5){
      // <Alert color="success">
      //   <strong>Success!</strong> This is a success alert—check it out!
      // </Alert>
      alert('You are eligible and Considered for the role')
    }
    else{
    // <Alert color="info">
    //     <strong>Info!</strong> This is a info alert—check it out!
    //   </Alert>
    alert('Sorry!! Kindly check another company')
    }
  }

  return (
    <>
      {/* <AlertDialog open={isClicked}>
        <AlertDialogTrigger></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader> 
            <AlertDialogTitle>Are you sure to apply for this company</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.Based on the eligibility for the role you will be considered for the role .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Apply</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> */}
    <h1 className='text-2xl text-center mt-5'>Company Details</h1>
      <Table className='border-black  mt-10 ml-10 mr-10 table-auto border-separate'>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] bg-black text-white text-center">Name</TableHead>
            <TableHead className='bg-black text-white text-center'>Role</TableHead>
            <TableHead className='bg-black text-white text-center'>CTC</TableHead>
            <TableHead className=" bg-black text-white text-center" >Skills Required</TableHead>
            <TableHead className='bg-black text-white text-center'>&nbsp; &nbsp; &ensp;Check</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {details.map((d) => (
            <TableRow key={d.name}>
              <TableCell className="text-center">{d.name}</TableCell>
              <TableCell className='text-center'>{d.role}</TableCell>
              <TableCell className='text-center'>{d.CTC}</TableCell>
              <TableCell className="text-center">{d.skills}</TableCell>
              <TableHead className="text-right">
                <Button onClick={click}>Apply</Button>
              </TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
