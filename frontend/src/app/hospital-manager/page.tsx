'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function HospitalManagerDashboard() {
  const [patients, setPatients] = useState([])
  const [deliveries, setDeliveries] = useState([])

  useEffect(() => {
    // Fetch patients and deliveries data
    setPatients([])
    setDeliveries([])
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Hospital Manager Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Patient Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Patients: {patients.length}</p>
            <Link href="/patients">
              <Button className="mt-4">Manage Patients</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Food Delivery Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Deliveries: {deliveries.length}</p>
            <Link href="/deliveries">
              <Button className="mt-4">View Deliveries</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

