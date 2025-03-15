import React from 'react';
 // src/components/UserProfile.jsx
 
 const UserProfile = () => {
 function UserProfile() {
   return (
     <div className="container mx-auto p-4 sm:p-8 max-w-xs sm:max-w-sm"> {/* Responsive container */}
       <div className="flex flex-col items-center">
         <img
           src="profile-picture.jpg" // Replace with the actual path to your image
           alt="Profile Picture"
           className="rounded-full w-24 h-24 sm:w-36 sm:h-36" // Responsive image size
         />
         <h1 className="text-lg sm:text-xl font-bold mt-4">John Doe</h1> {/* Responsive heading */}
         <p className="text-sm sm:text-base text-gray-600 mt-2">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
           nisi in odio varius, id tincidunt quam viverra.
         </p> {/* Responsive paragraph */}
       </div>
     <div className="bg-gray-100 p-4 sm:p-8 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
       <img
         src="https://via.placeholder.com/150"
         alt="User"
         className="rounded-full w-24 h-24 sm:w-36 sm:h-36 md:w-36 md:h-36 mx-auto"
       />
       <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-4 text-center">John Doe</h1>
       <p className="text-sm sm:text-base md:text-base text-gray-600 text-center">
         Developer at Example Co. Loves to write code and explore new technologies.
       </p>
     </div>
   );

 
 export default UserProfile;