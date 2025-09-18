import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex-col items-center p-7 rounded-2xl">
          <br></br>
          <h1 className="text-2xl font-bold">Doctors</h1>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="/doctor/create"
          >
            Create new doctor
          </Link>
          <br></br>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="/doctor/list"
          >
            List all doctors
          </Link>
          <br></br>
          <br></br>
          <h1 className="text-2xl font-bold">Patients</h1>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="/pacient/create"
          >
            Create new patient
          </Link>
          <br></br>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="/pacient/list"
          >
            List all patients
          </Link>
          <br></br>
          <br></br>
          <h1 className="text-2xl font-bold">Appointments</h1>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="/appointment/create"
          >
            Create new appointment
          </Link>
          <br></br>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="/appointment/list"
          >
            List all appointments
          </Link>
          <br></br>
          <br></br>
          <h1 className="text-2xl font-bold">Prescription</h1>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="/prescription/id/create"
          >
            Create prescription
          </Link>
          <br></br>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="/prescription/upload"
          >
            Upload prescription
          </Link>
          <br></br>
          <br></br>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href="/fake"
          >
            Access FakeApi
          </Link>
        </div>
      </div>
    </>
  );
}
