import GenderChcekbox from "./GenderCheckbox"

const SignUp = () => {
    return (
      <div  className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3x1 font-semibold text-center text-gray-300'>Sign Up 
                <span className='text-blue-500'> ChatApp</span>
            </h1>

            <form action="">
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-white">Full Name</span>
                    </label>
                    <input type="text" placeholder="Joe Doe" className="w-full input input-bordered h-10"/>
                </div>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-white">Username</span>
                    </label>
                    <input type="text" placeholder="joedoe" className="w-full input input-bordered h-10"/>
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text text-white">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text text-white">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
                </div>

                <GenderChcekbox />

                <div>
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Alredy have an account
                    </a>

                    <div>
                        <button className="btn btn-block bt-sm mt-2">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    )
  }
  
export default SignUp

// const SignUp = () => {
//     return (
//       <div  className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//             <h1 className='text-3x1 font-semibold text-center text-gray-300'>Sign Up 
//                 <span className='text-blue-500'> ChatApp</span>
//             </h1>

//             <form action="">
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text text-white">Full Name</span>
//                     </label>
//                     <input type="text" placeholder="Joe Doe" className="w-full input input-bordered h-10"/>
//                 </div>
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text text-white">Username</span>
//                     </label>
//                     <input type="text" placeholder="joedoe" className="w-full input input-bordered h-10"/>
//                 </div>
//                 <div>
//                     <label className="label">
//                         <span className="text-base label-text text-white">Password</span>
//                     </label>
//                     <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//                 </div>
//                 <div>
//                     <label className="label">
//                         <span className="text-base label-text text-white">Confirm Password</span>
//                     </label>
//                     <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
//                 </div>

//                 <GenderChcekbox />

//                 <div>
//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                         Alredy have an account
//                     </a>

//                     <div>
//                         <button className="btn btn-block bt-sm mt-2">Sign Up</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//       </div>
//     )
//   }
  
//   export default SignUp