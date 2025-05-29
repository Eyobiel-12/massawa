"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedButton from "@/components/animated-button"
import emailjs from '@emailjs/browser';

interface ReservationFormProps {
  onSuccess: (data: any) => void
}

export default function ReservationForm({ onSuccess }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date().toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).split('.').join('-'),
    time: "",
    guests: "",
    specialRequests: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [step, setStep] = useState(0)
  const steps = ["Contact", "Details", "Requests", "Review"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => { const newErrors = { ...prev }; delete newErrors[name]; return newErrors })
    }
  }
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => { const newErrors = { ...prev }; delete newErrors[name]; return newErrors })
    }
  }
  const validateStep = () => {
    const newErrors: Record<string, string> = {}
    if (step === 0) {
      if (!formData.name.trim()) newErrors.name = "Name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
      if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    }
    if (step === 1) {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (!formData.date) newErrors.date = "Date is required"
      else if (selectedDate < today) newErrors.date = "Cannot book for past dates"
      else if (selectedDate > new Date(Date.now() + 180 * 24 * 60 * 60 * 1000)) {
        newErrors.date = "Cannot book more than 180 days in advance"
      }
      
      if (!formData.time) newErrors.time = "Time is required"
      else {
        const [hours, minutes] = formData.time.split(':').map(Number)
        const selectedDateTime = new Date(selectedDate)
        selectedDateTime.setHours(hours, minutes, 0, 0)
        
        if (selectedDate.getTime() === today.getTime() && selectedDateTime < new Date()) {
          newErrors.time = "Cannot book for past times"
        }
      }
      
      if (!formData.guests) newErrors.guests = "Number of guests is required"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleNext = () => {
    if (validateStep()) setStep((s) => s + 1)
  }
  const handleBack = () => setStep((s) => s - 1)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const emailData = {
        ...formData,
        current_time: new Date().toLocaleTimeString('nl-NL', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Europe/Amsterdam'
        }),
        formatted_date: new Date(formData.date).toLocaleDateString('nl-NL', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }
      await emailjs.send(
        'service_lyr95x9',
        'template_jf8324n',
        emailData,
        'JvsV9KdcZ674AOmp2'
      )
      onSuccess(formData)
    } catch (error) {
      setErrors({ form: "Failed to send reservation. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }
  const timeSlots = Array.from({length: 24}, (_, h) => [0,30].map(m => 
    `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
  )).flat()
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center mb-4">
        {steps.map((s, i) => (
          <div key={s} className={`flex-1 flex flex-col items-center ${i<=step?'text-amber-700':'text-stone-400'}`}> 
            <div className={`rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 ${i<=step?'border-amber-700':'border-stone-300'}`}>{i+1}</div>
            <span className="text-xs mt-1">{s}</span>
            {i<steps.length-1 && <div className={`h-1 w-8 ${i<step?'bg-amber-700':'bg-stone-200'}`}/>} 
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loading" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex flex-col items-center justify-center py-8">
            <motion.div animate={{rotate:360}} transition={{duration:1,repeat:Infinity,ease:"linear"}} className="w-12 h-12 border-4 border-amber-700 border-t-transparent rounded-full mb-4"/>
            <p className="text-stone-600">Processing your reservation...</p>
          </motion.div>
        ) : step===0 ? (
          <motion.div key="contact" initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-100,opacity:0}} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className={errors.name?"border-red-500":""}/>
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={errors.email?"border-red-500":""}/>
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="text" value={formData.phone} onChange={handleChange} className={errors.phone?"border-red-500":""}/>
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <AnimatedButton type="button" onClick={handleNext} className="bg-amber-700 text-white">Next</AnimatedButton>
            </div>
          </motion.div>
        ) : step===1 ? (
          <motion.div key="details" initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-100,opacity:0}} className="space-y-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input 
                id="date" 
                name="date" 
                type="date" 
                value={formData.date} 
                onChange={handleChange} 
                min={new Date().toLocaleDateString('nl-NL', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                }).split('.').join('-')}
                max={new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toLocaleDateString('nl-NL', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                }).split('.').join('-')}
                className={errors.date ? "border-red-500" : ""}
              />
              {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <select id="time" name="time" value={formData.time} onChange={e=>handleSelectChange("time",e.target.value)} className={`w-full border rounded-md p-2 ${errors.time?"border-red-500":""}`}>
                <option value="">Select time</option>
                {timeSlots.map((time, i)=>(<option key={i} value={time}>{time}</option>))}
              </select>
              {errors.time && <p className="text-red-500 text-xs">{errors.time}</p>}
            </div>
            <div>
              <Label htmlFor="guests">Number of Guests</Label>
              <select id="guests" name="guests" value={formData.guests} onChange={e=>handleSelectChange("guests",e.target.value)} className={`w-full border rounded-md p-2 ${errors.guests?"border-red-500":""}`}>
                <option value="">Select guests</option>
                {[1,2,3,4,5,6,7,8].map(num=>(<option key={num} value={num}>{num} {num===1?"person":"people"}</option>))}
              </select>
              {errors.guests && <p className="text-red-500 text-xs">{errors.guests}</p>}
            </div>
            <div className="flex justify-between gap-2 mt-4">
              <AnimatedButton type="button" onClick={handleBack} className="bg-stone-300 text-stone-800">Back</AnimatedButton>
              <AnimatedButton type="button" onClick={handleNext} className="bg-amber-700 text-white">Next</AnimatedButton>
            </div>
          </motion.div>
        ) : step===2 ? (
          <motion.div key="requests" initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-100,opacity:0}} className="space-y-4">
            <div>
              <Label htmlFor="specialRequests">Special Requests</Label>
              <Textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange} placeholder="Dietary restrictions, special occasions, seating preferences, etc."/>
            </div>
            <div className="flex justify-between gap-2 mt-4">
              <AnimatedButton type="button" onClick={handleBack} className="bg-stone-300 text-stone-800">Back</AnimatedButton>
              <AnimatedButton type="button" onClick={handleNext} className="bg-amber-700 text-white">Next</AnimatedButton>
            </div>
          </motion.div>
        ) : (
          <motion.div key="review" initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-100,opacity:0}} className="space-y-4">
            <h3 className="text-lg font-bold mb-2">Review your reservation</h3>
            <ul className="text-stone-700 space-y-1">
              <li><b>Name:</b> {formData.name}</li>
              <li><b>Email:</b> {formData.email}</li>
              <li><b>Phone:</b> {formData.phone}</li>
              <li><b>Date:</b> {formData.date}</li>
              <li><b>Time:</b> {formData.time}</li>
              <li><b>Guests:</b> {formData.guests}</li>
              {formData.specialRequests && <li><b>Special Requests:</b> {formData.specialRequests}</li>}
            </ul>
            {errors.form && <p className="text-red-500 text-xs">{errors.form}</p>}
            <div className="flex justify-between gap-2 mt-4">
              <AnimatedButton type="button" onClick={handleBack} className="bg-stone-300 text-stone-800">Back</AnimatedButton>
              <AnimatedButton type="submit" className="bg-amber-700 text-white">Confirm & Book</AnimatedButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
