'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import PatientForm from '@/components/PatientForm'

export default function PatientsPage() {
  const [patients, setPatients] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // Fetch patients data
        const response = await fetch('/api/patients');
        if (!response.ok) {
          throw new Error('Failed to fetch patients');
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
        // Optionally set an error state here to display to the user
      }
    };

    fetchPatients();
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Patients</h1>
      <Button onClick={() => setShowForm(true)}>Add Patient</Button>
      {showForm && (
        <PatientForm
          onClose={() => setShowForm(false)}
        />
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Room Number</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.roomNumber}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="destructive" size="sm" className="ml-2">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

