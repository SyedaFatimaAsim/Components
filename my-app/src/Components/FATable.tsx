export default function FATable()
{
    const data = [
        { name: "Robert", age: 23, gender: "Male", designation: "Full Stack(React + Java) Developer" },
        { name: "Michal", age: 24, gender: "Male", designation: "Full Stack Engineer" },
        { name: "Morgan", age: 24, gender: "Female", designation: "React Developer" },
        { name: "Tom", age: 26, gender: "Male", designation: "Front End Developer" },
        { name: "Steve", age: 27, gender: "Female", designation: "UI/UX Designer" }
      ]

    return <>
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.gender}</td>
                  <td>{value.designation}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
}