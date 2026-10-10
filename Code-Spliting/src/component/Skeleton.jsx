import React from 'react'

const Skeleton = () => {
  return (
    
<div class="max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-sm animate-pulse">
 
  <div class="flex items-center gap-4">
    <div class="h-16 w-16 rounded-full bg-gray-200"></div>

    <div class="flex-1 space-y-2">
      <div class="h-4 w-32 rounded bg-gray-200"></div>
      <div class="h-3 w-24 rounded bg-gray-200"></div>
    </div>
  </div>

 
  <div class="mt-5 space-y-2">
    <div class="h-3 w-full rounded bg-gray-200"></div>
    <div class="h-3 w-3/4 rounded bg-gray-200"></div>
  </div>

 
  <div class="mt-5 flex gap-3">
    <div class="h-10 flex-1 rounded-lg bg-gray-200"></div>
    <div class="h-10 flex-1 rounded-lg bg-gray-200"></div>
  </div>
</div>

  )
}

export default Skeleton
