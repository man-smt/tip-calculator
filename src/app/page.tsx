'use client'

import React, { useState, useEffect } from 'react'
import { Calculator, DollarSign, Users, Percent, RefreshCw } from 'lucide-react'
import { countriesData } from '@/data/countries'
import Logo from '@/assets/image/Simple Mathematical  Calculator Logo .png'
import Image from 'next/image'

export default function Home() {
  const [bill, setBill] = useState<string>('')
  const [tipPercentage, setTipPercentage] = useState<string>('15')
  const [people, setPeople] = useState<string>('1')
  const [selectedCountry, setSelectedCountry] =
    useState<string>('United States')
  const [results, setResults] = useState<any>(null)

  useEffect(() => {
    const country = countriesData.countries[selectedCountry]
    if (country) {
      setTipPercentage(country.recommended_percentage.toString())
    }
  }, [selectedCountry])

  useEffect(() => {
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
    const tip = billAmount * (parseFloat(tipPercentage) || 0 / 100)
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

  const handleClear = () => {
    setResults(null)
    setBill('')
    setTipPercentage('')
    setPeople('1')
    // setSelectedCountry('United States')
  }

  return (
    <>
      <main className='min-h-screen bg-white flex justify-center'>
        <div className='p-8'>
          <div className='flex items-center justify-center gap-3'>
            <Image height={200} src={Logo} alt='Logo' />
            {/* <div className='p-3 bg-gray-200 rounded-xl'>
              <Calculator className='w-8 h-8 text-black' />
            </div>
            <h1 className='text-3xl font-bold text-black'>Tip Calculator</h1> */}
          </div>

          <div className='space-y-6 w-[90vw]'>
            {/* Country Selection */}
            <div className='bg-gray-100 rounded-xl p-4'>
              <label className='block text-sm font-medium text-black mb-2'>
                Select Country
              </label>
              <select
                className='w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black transition-all'
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {Object.keys(countriesData.countries).map((country) => (
                  <option key={country} value={country} className='text-black'>
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

            {/* Input Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {/* Bill Amount */}
              <div className='bg-gray-100 rounded-xl p-4'>
                <label className='block text-sm font-medium text-black mb-2'>
                  Bill Amount{' '}
                </label>
                <div className='relative'>
                  <div className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600'>
                    {' '}
                    {countriesData.countries[selectedCountry].currency?.symbol}
                  </div>
                  <input
                    type='number'
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-200 border border-gray-300 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition-all'
                    placeholder='Enter Bill Amount'
                    min='0'
                    step='0.01'
                  />
                </div>
              </div>

              {/* Tip Percentage */}
              <div className='bg-gray-100 rounded-xl p-4'>
                <label className='block text-sm font-medium text-black mb-2'>
                  Tip Percentage
                </label>
                <div className='relative'>
                  <Percent className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600' />
                  <input
                    type='number'
                    placeholder='Enter Percentage'
                    value={tipPercentage || 0}
                    onChange={(e) => setTipPercentage(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-200 border border-gray-300 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition-all'
                    min='0'
                    max='100'
                  />
                </div>
              </div>

              {/* Number of People */}
              <div className='bg-gray-100 rounded-xl p-4'>
                <label className='block text-sm font-medium text-black mb-2'>
                  Number of People
                </label>
                <div className='relative'>
                  <Users className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600' />
                  <input
                    type='number'
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-200 border border-gray-300 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition-all'
                    min='1'
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4 justify-end'>
              <button
                onClick={handleCalculate}
                className='flex-1 bg-black hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium transition-colors max-w-[500px]'
              >
                Calculate
              </button>
              <button
                onClick={handleClear}
                className='px-6 py-3 bg-gray-200 hover:bg-gray-300 text-black rounded-xl font-medium transition-colors flex items-center gap-2'
              >
                <RefreshCw className='w-4 h-4' />
                Reset
              </button>
            </div>

            {/* Results */}
            {results && (
              <div className='bg-gray-100 rounded-xl p-6 mt-6'>
                <div className='gap-6'>
                  <div className='col-span-2'>
                    <h3 className='text-gray-600 text-sm mb-1'>Tip Amount</h3>
                    <p className='text-3xl font-bold text-black'>
                      {
                        countriesData.countries[selectedCountry].currency
                          ?.symbol
                      }{' '}
                      {results.tip}
                    </p>
                  </div>
                  <div className='grid grid-cols-3 gap-6 mt-4'>
                    <div>
                      <h3 className='text-gray-600 text-sm mb-1'>
                        Tip per Person
                      </h3>
                      <p className='text-xl font-semibold text-black'>
                        {
                          countriesData.countries[selectedCountry].currency
                            ?.symbol
                        }{' '}
                        {results.tipPerPerson}
                      </p>
                    </div>
                    <div>
                      <h3 className='text-gray-600 text-sm mb-1'>
                        Total Amount
                      </h3>
                      <p className='text-xl font-semibold text-black'>
                        {
                          countriesData.countries[selectedCountry].currency
                            ?.symbol
                        }{' '}
                        {results.total}
                      </p>
                    </div>
                    <div>
                      <h3 className='text-gray-600 text-sm mb-1'>
                        Total Per Person
                      </h3>
                      <p className='text-xl font-semibold text-black'>
                        {
                          countriesData.countries[selectedCountry].currency
                            ?.symbol
                        }{' '}
                        {results.perPerson}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
