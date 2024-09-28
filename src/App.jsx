



import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [lastQualification, setLastQualification] = useState('');
  const [studentData, setStudentData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || fatherName === '' || age === '' || email === '' || lastQualification === '') {
      alert('Please fill all the fields');
      return;
    }
    const newStudentData = {
      name,
      fatherName,
      email,
      age,
      lastQualification,
    };
    setStudentData([...studentData, newStudentData]);
    // Reset the input fields
    setName('');
    setFatherName('');
    setEmail('');
    setAge('');
    setLastQualification('');
  };

  return (
    <>
    <div className="container">
      <h1>STUDENT FORM</h1>
      <div className="main">
      <form onSubmit={handleSubmit}>

    <h3>NAME:</h3>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
         placeholder='Enter your name' />
       
        <h3>FATHER'S NAME:</h3>
        <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)}
        placeholder="Enter your father's name" />
        <h3>EMAIL</h3>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
         placeholder='Enter your email'/>
      <h3>AGE:</h3>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} 
         placeholder='Enter your age'/>
       <h3>QUALIFICATION:</h3>
        <input type="text" value={lastQualification} onChange={(e) => setLastQualification(e.target.value)}
         placeholder='Enter your last qualification' />
       <br />
        <button type="submit">Submit</button>
      </form>
</div>
<div className="data">
      <h1>STUDENT DATA</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Fathers name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Last qualification</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>{student.lastQualification}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
}

export default App;


// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [name, setName] = useState('');
//   const [fatherName, setFatherName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const [lastQualification, setLastQualification] = useState('');
//   const [studentData, setStudentData] = useState(() => {
//     const storedData = localStorage.getItem('studentData');
//     return storedData ? JSON.parse(storedData) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('studentData', JSON.stringify(studentData));
//   }, [studentData]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === '' || fatherName === '' || age === '' || email === '' || lastQualification === '') {
//       alert('Please fill all the fields');
//       return;
//     }
//     const newStudentData = {
//       name,
//       fatherName,
//       email,
//       age,
//       lastQualification,
//     };
//     setStudentData([...studentData, newStudentData]);
//     // Reset the input fields
//     setName('');
//     setFatherName('');
//     setEmail('');
//     setAge('');
//     setLastQualification('');
//   };

//   return (
//     // ... rest of the code remains the same ...
//     <>
//     //       <form onSubmit={handleSubmit}>
// //         <label htmlFor="name">Name</label>
// //         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
// //         <label htmlFor="fathersname">Father's name</label>
// //         <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
// //         <label htmlFor="email">Email</label>
// //         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
// //         <label htmlFor="age">Age</label>
// //         <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
// //         <label htmlFor="qualification">Last qualification</label>
// //         <input type="text" value={lastQualification} onChange={(e) => setLastQualification(e.target.value)} />
// //         <button type="submit">Submit</button>
// //       </form>

// //       <h1>STUDENT DATA</h1>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>name</th>
// //             <th>fathers name</th>
// //             <th>email</th>
// //             <th>age</th>

// //             <th>last qualification</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {studentData.map((student, index) => (
//             <tr key={index}>
//               <td>{student.name}</td>
//               <td>{student.fatherName}</td>
//               <td>{student.email}</td>
//               <td>{student.age}</td>
//               <td>{student.lastQualification}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default App;