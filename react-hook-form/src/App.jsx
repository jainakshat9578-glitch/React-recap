import React from 'react'
import { useForm } from 'react-hook-form';

const App = () => {

  const {register, handleSubmit, reset, formState:{errors}} = useForm();
// handleSubmit-> preventDefault ka kaam kr rha hai form submit hone pr reload hone se prevent krta hai!
// register-> hame input ko subscribe krna hai or hume uss input field ka data chahiye!
// reset -> form submit hone ke baad saari input fields fir se blank hojayegi!

  const handleFormSubmit = (data)=>{
    console.log(data)
    reset(); 
  }

  return (
    <div class="min-h-screen bg-red-100 flex items-center justify-center p-6">

   <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

     <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
       Registration Form
     </h2>

     <form
     onSubmit={handleSubmit(handleFormSubmit)} /* har input field pe register lagaya uska data isse aayega! */
     class="space-y-5">

    
       <div>
         <label
           for="name"
           class="block text-sm font-medium text-gray-700 mb-2"
         >
           Full Name
         </label>

         <input {...register('name',{required: 'Name is required',minLength:{
          value: 3,
          message: "Name must be of atleast 3 characters."
         }, maxLength: {
          value: 10,
          message: "Name contain maximum 10 characters."
         }})}
           type="text"
           id="name"
           name="name"
           placeholder="Enter your name"
           class="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
         />
         {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
       </div>

  
     <div>
         <label
           for="email"
           class="block text-sm font-medium text-gray-700 mb-2"
         >
           Email
         </label>

         <input {...register('email',{required: "Email is required", 
         pattern:{
          value:  "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.",
          message: "Enter a valid Email Address"
         }})}
           id="email"
           name="email"
           placeholder="Enter your email"
           class="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
         />
         {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
       </div>

   
       <div>
         <label
           for="phone"
           class="block text-sm font-medium text-gray-700 mb-2"
         >
           Phone Number
         </label>

         <input {...register('phone')}
           type="tel"
           id="phone"
           name="phone"
           placeholder="Enter your phone number"
           class="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"         />
       </div>


       <div>
         <label
           for="message"
           class="block text-sm font-medium text-gray-700 mb-2"
         >
           Message
        </label>
      <textarea {...register('message')}
           id="message"
           name="message"
           rows="4"
         placeholder="Write something..."
           class="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
         ></textarea>
       </div>

     
       <button
         type="submit"
         class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition active:scale-96"
       >
         Submit
       </button>

     </form>

   </div>

 </div>
  )
}

export default App
