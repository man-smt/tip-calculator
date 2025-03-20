'use client'

import { useState, useEffect } from 'react'
import { Calculator } from 'lucide-react'
import { countriesData } from '@/data/countries'

export default function Home() {
  const [bill, setBill] = useState<string>('')
  const [tipPercentage, setTipPercentage] = useState<string>('15')
  const [people, setPeople] = useState<string>('1')
  const [selectedCountry, setSelectedCountry] =
    useState<string>('United States')

  useEffect(() => {
    const country = countriesData.countries[selectedCountry]
    if (country) {
      setTipPercentage(country.recommended_percentage.toString())
    }
  }, [selectedCountry])

  useEffect(() => {
    // Get user's location and set country
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
            )
            const data = await response.json()
            const country = data.countryName

            if (countriesData.countries[country]) {
              setSelectedCountry(country)
            }
          } catch (error) {
            console.error('Error getting location:', error)
          }
        },
        (error) => {
          console.error('Error getting location:', error)
        }
      )
    }
  }, [])

  const handleCalculate = () => {
    const billAmount = parseFloat(bill) || 0
    const tip = billAmount * (parseFloat(tipPercentage) / 100)
    const total = billAmount + tip
    const perPerson = total / (parseInt(people) || 1)
    const tipPerPerson = tip / (parseInt(people) || 1)

    const results = {
      tip: tip.toFixed(2),
      total: total.toFixed(2),
      perPerson: perPerson.toFixed(2),
      tipPerPerson: tipPerPerson.toFixed(2),
    }
    setResults(results)
  }

  const [results, setResults] = useState<any>(null)

  const handleClear = () => {
    setResults(null)
    setBill('')
    setTipPercentage('15')
    setPeople('1')
    setSelectedCountry('United States')
  }

  return (
    <main className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-lg p-6 w-full max-w-md'>
        <div className='flex items-center gap-2 mb-6'>
          <Calculator className='w-6 h-6 text-green-600' />
          <h1 className='text-2xl font-bold text-gray-800'>Tip Calculator</h1>
        </div>

        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Select Country
            </label>
            <select
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {Object.keys(countriesData.countries).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {!countriesData.countries[selectedCountry].tipping_customary && (
            <div className='mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md'>
              <p className='text-sm text-yellow-800'>
                Note: Tipping is not customary in {selectedCountry}.
              </p>
            </div>
          )}

          <div>
            <div className='flex justify-between  mb-1'>
              <label className='block text-sm font-medium text-gray-700'>
                Bill Amount
                <b className='text-gray-700 ml-2'>
                  {countriesData.countries[selectedCountry].currency?.symbol}
                </b>
              </label>
              <label className='text-gray-500 text-sm font-medium'>
                (
                {
                  countriesData.countries[selectedCountry].currency
                    ?.currency_name
                }
                )
              </label>
            </div>
            <input
              type='number'
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              placeholder='0.00'
              min='0'
              step='0.01'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Tip Percentage (%)
            </label>
            <div className='flex gap-2'>
              <input
                type='number'
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                min='0'
                max='100'
              />
              <span className='flex items-center text-gray-700'>%</span>
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Number of People
            </label>
            <input
              type='number'
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              min='1'
            />
          </div>

          <div className='flex gap-2 mt-6'>
            <button
              onClick={() => handleCalculate()}
              className='flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors'
            >
              Calculate
            </button>
            <button
              onClick={handleClear}
              className='px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors'
            >
              Reset
            </button>
          </div>

          {results && (
            <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm text-gray-600'>Tip Amount</p>
                  <p className='text-lg font-semibold'>
                    {countriesData.countries[selectedCountry].currency?.symbol}{' '}
                    {results.tip}
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-600'>Total Amount</p>
                  <p className='text-lg font-semibold'>
                    {countriesData.countries[selectedCountry].currency?.symbol}{' '}
                    {results.total}
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-600'>Tip Per Person</p>
                  <p className='text-lg font-semibold'>
                    {countriesData.countries[selectedCountry].currency?.symbol}{' '}
                    {results.tipPerPerson}
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-600'>Total Per Person</p>
                  <p className='text-lg font-semibold'>
                    {countriesData.countries[selectedCountry].currency?.symbol}{' '}
                    {results.perPerson}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
