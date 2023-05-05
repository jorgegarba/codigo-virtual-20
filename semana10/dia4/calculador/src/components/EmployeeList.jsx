import React from 'react'
import Employee from './Employee'

const EmployeeList = ({employees,onDeleteEmployee}) => {
  return (
    <div className='employee-list'>
      {employees.length > 0 ?(
        employees.map((employee)=>(
            <div>
                <Employee
                key={employee.id}
                id={employee.id}
                name={employee.employeeName}
                discount={employee.discount}
                onDeleteEmployee={onDeleteEmployee}/>
            </div>
        ))
      ):(
        <p>no hay empoleados Registrados</p>
      )}
    </div>
  )
}

export default EmployeeList
