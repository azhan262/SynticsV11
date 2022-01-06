import React from 'react'
import { getStudentsFemaleSchoolsAdult } from '../../../../../Apis/apiForRegistrations';


function SectionForFemaleStudents() {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const registrations = await getStudentsFemale()
        setItems(registrations)
      }
      fetchItems()
    })
    return (
        <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Student List</CardHeader>
              <CardBody>
                <div className="container">
                    <div className="mt-3">
                        <h3>Students List Female</h3>
                        <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Country Code</th>
                            <th>Contact</th>
                            <th>Course</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                            items.map(registrations => (
                                <tr key={registrations._id}>
                                <td>
                                    {registrations.name}
                                </td>
                                <td>
                                    {registrations.email}
                                </td>
                                <td>
                                    {registrations.gender}
                                </td>
                                <td>
                                    {registrations.dob}
                                </td>
                                <td>
                                    {registrations.country_code}
                                </td>
                                <td>
                                    {registrations.phone}
                                </td>
                                <td>
                                    {registrations.country}
                                </td>
                                <td>
                                    {registrations.courses}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    )
}

export default SectionForFemaleStudents
