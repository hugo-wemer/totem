export interface Patient {
  id: number
  name: string
  transference: string
  diagnostic: string
  temperature: Float32Array
  blood_oxygen: number
  heath_rate: number
  fever: boolean
  headache: boolean
  runny_nose: boolean
}
