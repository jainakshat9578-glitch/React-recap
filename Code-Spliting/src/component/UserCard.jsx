import React from 'react'

const UserCard = () => {
  return (
    <div>
     
<div class="max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

  <div class="flex items-center gap-4">
    <img
      src="https://i.pravatar.cc/150?img=12"
      alt="User avatar"
      class="h-16 w-16 rounded-full object-cover"
    />

    <div>
      <h2 class="text-lg font-semibold text-gray-900">
        Rahul Sharma
      </h2>
      <p class="text-sm text-gray-500">@rahul.dev</p>
      <span class="mt-1 inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        Available for work
      </span>
    </div>
  </div>

  
  <p class="mt-4 text-sm leading-6 text-gray-600">
    Building web apps and exploring AI.
    Passionate about clean code and open source.
  </p>

  
  <div class="mt-5 flex justify-around border-y border-gray-100 py-4 text-center">
    <div>
      <p class="font-bold text-gray-900">24</p>
      <p class="text-xs text-gray-500">Projects</p>
    </div>
    <div>
      <p class="font-bold text-gray-900">1.2k</p>
      <p class="text-xs text-gray-500">Followers</p>
    </div>
    <div>
      <p class="font-bold text-gray-900">180</p>
      <p class="text-xs text-gray-500">Following</p>
    </div>
  </div>

 
  <div class="mt-4 flex gap-3">
    <button class="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
      Follow
    </button>
    <button class="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
      View Profile
    </button>
  </div>

</div>

    </div>
  )
}

export default UserCard
