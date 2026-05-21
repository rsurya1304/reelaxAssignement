import { useMemo, useState } from 'react'
import { billingFields, locationFields } from '../../utils/constants'
import Button from '../common/Button'
import Card from '../common/Card'
import Input from '../common/Input'

const initialValues = [...billingFields, ...locationFields].reduce((values, field) => {
  values[field.id] = ''
  return values
}, {})

export default function TableSection() {
  const [values, setValues] = useState(initialValues)

  const fields = useMemo(() => [billingFields, locationFields], [])

  const handleChange = (id, value) => {
    setValues((current) => ({ ...current, [id]: value }))
  }

  return (
    <Card className="p-5 sm:p-6">
      <div className="mb-4">
        <h1 className="font-heading text-lg font-bold tracking-normal text-ink-900 sm:text-xl">Review your details</h1>
        <p className="mt-3 text-xs font-bold text-ink-800">Billing Information</p>
      </div>

      <form className="space-y-4">
        {fields.map((group, index) => (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" key={index}>
            {group.map((field) => (
              <Input
                id={field.id}
                key={field.id}
                label={field.label}
                onChange={(event) => handleChange(field.id, event.target.value)}
                placeholder={field.placeholder}
                type={field.type}
                value={values[field.id]}
              />
            ))}
          </div>
        ))}

        <div className="flex justify-end gap-3 pt-1">
          <Button className="min-h-9 px-4 text-xs" variant="ghost">
            Cancel
          </Button>
          <Button className="min-h-9 px-4 text-xs">Save Details</Button>
        </div>
      </form>
    </Card>
  )
}
