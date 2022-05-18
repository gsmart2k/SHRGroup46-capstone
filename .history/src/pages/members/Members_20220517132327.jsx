import React from 'react'
//components should be imported from here if needed
// make use of your normal import statement here to import components
// make use of the css module folder or tailwind or you can use inline styles
// check the sample on nav and footer for css modules


const Members = ({members}) => {

console.log(members);
  return (
    <section>
    <div className='container'>
    <header>
      Team members
    </header>
<table className='w-full bg-black text-white'>
 
    <tr>
      <th className='text-center py-5 text-[.5rem] uppercase'>fullname</th>
      <th className='text-center py-5 text-[.5rem] uppercase'>gender</th>
      <th className='text-center py-5 text-[.5rem] uppercase'>phone</th>
      <th className='text-center py-5 text-[.5rem] uppercase'>email</th>
      <th className='text-center py-5 text-[.5rem] uppercase'>image</th>
    </tr>
 


  {members&&members.data.map((member,index) => (
      <tr>
      <td className='py-5 text-center text-[.8rem]'>
      {member.firstname} {member.lastname}
      </td>
      <td className='py-5 text-center text-[.8rem] capitalize'>
      {member.gender} 
      </td>
      <td className='py-5 text-center text-[.8rem]'>
      {member.phone} 
      </td>
      <td className='py-5 text-center text-[.8rem]'>
      {member.email} 
      </td>
      <td className='py-5 text-center text-[.8rem]'>
      <img src={member.image} className="w-[50px] h-[50px] rounded-full" alt="" />
      </td>
      </tr>
      ))}


</table>
    
    </div>

    </section>
  )
}

export default Members