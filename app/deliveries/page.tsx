'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DeliveriesPage() {
  const [deliveries, setDeliveries] = useState([])

  useEffect(() => {
    // Fetch deliveries data
    setDeliveries([])
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ASSIGNED':
        return 'bg-yellow-500'
      case 'IN_TRANSIT':
        return 'bg-blue-500'
      case 'DELIVERED':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Deliveries</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>All Deliveries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Meal Type</TableHead>
                <TableHead>Delivery Personnel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries.map((delivery: any) => (
                <TableRow key={delivery.id}>
                  <TableCell>{delivery.patient.name}</TableCell>
                  <TableCell>{delivery.patient.roomNumber}</TableCell>
                  <TableCell>{delivery.meal.type}</TableCell>
                  <TableCell>{delivery.personnel.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getStatusColor(delivery.status)}>
                      {delivery.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

