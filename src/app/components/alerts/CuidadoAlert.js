import React, { useState } from 'react'

const CuidadoAlert = ({titutlo, explicacion, a ,b, click, click2, estado}) => {
    const [peligro, setPeligro] = useState(estado)

  return (
    <div>
        {peligro ? 
        <div class="bg-yellow-50 border border-blue-200 text-gray-800 rounded-lg p-4" role="alert" tabindex="-1" aria-labelledby="hs-actions-label">
            <div class="flex">
                <div class="shrink-0">
                <svg class="shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                </svg>
                </div>
                <div class="ms-3">
                <h3 id="hs-actions-label" class="font-semibold">
                {titutlo}
                </h3>
                <div class="mt-2 text-sm text-gray-600">
                    {explicacion}
                </div>
                <div class="mt-4">
                    <div class="flex gap-x-3">
                    <button type="button" onClickCapture={() => click()} class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                        {a}
                    </button>
                    <button type="button" onClickCapture={() => setPeligro(click2)} class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
                        {b}
                    </button>
                    </div>
                </div>
                </div>
            </div>
    </div> : ""}
</div>
  )
}

export default CuidadoAlert
