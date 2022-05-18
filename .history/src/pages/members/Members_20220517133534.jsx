import React from 'react'
//components should be imported from here if needed
// make use of your normal import statement here to import components
// make use of the css module folder or tailwind or you can use inline styles
// check the sample on nav and footer for css modules


const Members = ({members}) => {

console.log(members);
  return (
    <section className='my-5'>
    <div className='container'>
    <header className='text-[2rem] text-center font-bold uppercase mb-5'>
      Team members
    </header>
<table className='w-full text-white'>
 
    <tr className='bg-black border-white'>
      <th className='text-center  py-5 text-[.5rem] md:text-[1rem] uppercase'>fullname</th>
      <th className='text-center py-5 text-[.5rem] md:text-[1rem] uppercase'>gender</th>
      <th className='text-center py-5 text-[.5rem] md:text-[1rem] uppercase'>phone</th>
      <th className='text-center py-5 text-[.5rem] md:text-[1rem] uppercase'>email</th>
      <th className='text-center py-5 text-[.5rem] md:text-[1rem] uppercase'>image</th>
    </tr>
 


  {members&&members.data.map((member,index) => (
      <tr style={{backgroundColor:index%2===0?"white":"black", color:index%2===0?"black":"white"}} className="py-5 mb-5">
      <td className=' text-center text-[.5rem] md:text-[1rem]'>
      {member.firstname} {member.lastname}
      </td>
      <td className=' text-center text-[.5rem] md:text-[1rem] capitalize'>
      {member.gender} 
      </td>
      <td className=' text-center text-[.5rem] md:text-[1rem]'>
      {member.phone} 
      </td>
      <td className=' text-center text-[.5rem] md:text-[1rem]'>
      {member.email} 
      </td>
      <td className='  text-center text-[.5rem] md:text-[1rem]'>
      <img src={member.image} className="w-[50px] mx-auto h-[50px] rounded-full" alt="" />
      </td>
      </tr>
      ))}


</table>
    
    </div>

    </section>
  )
}

export default Members