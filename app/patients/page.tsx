'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import PatientForm from '@/components/PatientForm'

export default function PatientsPage() {
  const [patients, setPatients] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    // Load patients from localStorage on component mount
    const storedPatients = localStorage.getItem('patients')
    if (storedPatients) {
      setPatients(JSON.parse(storedPatients))
    }
  }, [])

  const handleAddPatient = (newPatient: any) => {
    const updatedPatients = [...patients, newPatient]
    setPatients(updatedPatients)
    // Save to localStorage
    localStorage.setItem('patients', JSON.stringify(updatedPatients))
  }

  const handleDeletePatient = (id: number) => {
    const updatedPatients = patients.filter(patient => patient.id !== id)
    setPatients(updatedPatients)
    // Save to localStorage
    localStorage.setItem('patients', JSON.stringify(updatedPatients))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Patients</h1>
        <Button onClick={() => setShowForm(true)}>Add Patient</Button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <PatientForm 
              onClose={() => setShowForm(false)} 
              onSubmit={handleAddPatient}
            />
          </div>
        </div>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Room Number</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Contact Info</TableHead>
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
              <TableCell>{patient.contactInfo}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleDeletePatient(patient.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

