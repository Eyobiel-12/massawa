"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedButton from "@/components/animated-button"

interface ReservationFormProps {
  onSuccess: () => void
}

export default function ReservationForm({ onSuccess }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.date) newErrors.date = "Date is required"
    if (!formData.time) newErrors.time = "Time is required"
    if (!formData.guests) newErrors.guests = "Number of guests is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // TODO: Implement actual reservation submission
      // Example implementation with EmailJS:
      // await emailjs.send(
      //   "service_id",
      //   "template_id",
      //   formData,
      //   "user_id"
      // );

      // Example implementation with fetch:
      // const response = await fetch('/api/reservations', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Failed to make reservation');

      onSuccess()
    } catch (error) {
      console.error("Error sending reservation:", error)
      setErrors({ form: "Failed to send reservation. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  // Generate time slots from 12:00 PM (midday) to 12:00 AM (midnight)
  const generateTimeSlots = () => {
    const slots = []
    // Generate slots from 12:00 PM to 11:30 PM
    for (let hour = 12; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour % 12 || 12
        const period = hour >= 12 ? "PM" : "AM"
        const formattedMinute = minute === 0 ? "00" : minute
        slots.push(`${formattedHour}:${formattedMinute} ${period}`)
      }
    }
    // Add 12:00 AM (midnight)
    slots.push("12:00 AM")

    return slots
  }

  const timeSlots = generateTimeSlots()

  const formFields = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone Number", type: "text" },
  ]

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center py-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-12 h-12 border-4 border-amber-700 border-t-transparent rounded-full mb-4"
          />
          <p className="text-stone-600">Processing your reservation...</p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {errors.form && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-600 p-3 rounded-md text-sm"
            >
              {errors.form}
            </motion.div>
          )}

          {formFields.map((field, index) => (
            <motion.div
              key={field.name}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name as keyof typeof formData] as string}
                onChange={handleChange}
                className={errors[field.name] ? "border-red-500" : ""}
              />
              {errors[field.name] && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs">
                  {errors[field.name]}
                </motion.p>
              )}
            </motion.div>
          ))}

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                max={new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]} // 180 days in the future
                className={errors.date ? "border-red-500" : ""}
              />
              {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
                <SelectTrigger className={errors.time ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time, index) => (
                    <SelectItem key={index} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.time && <p className="text-red-500 text-xs">{errors.time}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Select value={formData.guests} onValueChange={(value) => handleSelectChange("guests", value)}>
                <SelectTrigger className={errors.guests ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "person" : "people"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.guests && <p className="text-red-500 text-xs">{errors.guests}</p>}
            </div>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Dietary restrictions, special occasions, seating preferences, etc."
              className="resize-none"
              rows={4}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <AnimatedButton type="submit" className="w-full bg-amber-700 hover:bg-amber-800" disabled={isLoading}>
              Reserve Table
            </AnimatedButton>
          </motion.div>

          <motion.p
            className="text-xs text-stone-500 text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            By making a reservation, you agree to our reservation policy.
          </motion.p>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
