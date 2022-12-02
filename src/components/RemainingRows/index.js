import './index.css'

const RemainingRows = props => {
  const {item, filtrs} = props
  const {person, city, email, joiningDate, role} = item
  const isNamePresent = JSON.stringify(filtrs).includes('name')
  const isCityPresent = JSON.stringify(filtrs).includes('city')
  const isMailPresent = JSON.stringify(filtrs).includes('email')
  const isDatePresent = JSON.stringify(filtrs).includes('joiningDate')
  const isRolePresent = JSON.stringify(filtrs).includes('role')

  return (
    <tr className="rowremaining">
      {isNamePresent ? (
        <td className="pname">
          <img
            className="dp"
            alt="profile-pic"
            src="https://res.cloudinary.com/dttk0z3nc/image/upload/v1669956952/unsplash_rDEOVtE7vOs_m3kk50.png"
          />
          {person.name}
        </td>
      ) : null}
      {isCityPresent ? <td className="pcity">{city}</td> : null}
      {isMailPresent ? <td className="pmail">{email}</td> : null}
      {isDatePresent ? <td className="pdate">{joiningDate}</td> : null}
      {isRolePresent ? <td className="prole">{role}</td> : null}
    </tr>
  )
}
export default RemainingRows
