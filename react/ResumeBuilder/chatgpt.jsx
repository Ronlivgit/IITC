import React, { useState } from 'react';

const MyForm = () => {
  const [info, setInfo] = useState({ name: '', email: '' });
  const [educationList, setEducationList] = useState([]);
  const [workExperienceList, setWorkExperienceList] = useState([]);

  const handleInfoChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEducation = () => {
    // Add a new education entry to the list
    setEducationList([...educationList, { school: '', degree: '' }]);
  };

  const handleRemoveEducation = (index) => {
    // Remove the education entry at the specified index
    const updatedEducationList = [...educationList];
    updatedEducationList.splice(index, 1);
    setEducationList(updatedEducationList);
  };

  const handleAddWorkExperience = () => {
    // Add a new work experience entry to the list
    setWorkExperienceList([...workExperienceList, { company: '', position: '' }]);
  };

  const handleRemoveWorkExperience = (index) => {
    // Remove the work experience entry at the specified index
    const updatedWorkExperienceList = [...workExperienceList];
    updatedWorkExperienceList.splice(index, 1);
    setWorkExperienceList(updatedWorkExperienceList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can send data to the server or perform other actions)
    console.log('Submitted data:', { info, educationList, workExperienceList });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Info Section */}
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={info.name} onChange={handleInfoChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={info.email} onChange={handleInfoChange} />
      </div>

      {/* Education Section */}
      <div>
        <h3>Education</h3>
        {educationList.map((education, index) => (
          <div key={index}>
            <input
              type="text"
              value={education.school}
              onChange={(e) => {
                const updatedList = [...educationList];
                updatedList[index].school = e.target.value;
                setEducationList(updatedList);
              }}
              placeholder="School"
            />
            <input
              type="text"
              value={education.degree}
              onChange={(e) => {
                const updatedList = [...educationList];
                updatedList[index].degree = e.target.value;
                setEducationList(updatedList);
              }}
              placeholder="Degree"
            />
            <button type="button" onClick={() => handleRemoveEducation(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddEducation}>
          Add Education
        </button>
      </div>

      {/* Work Experience Section */}
      <div>
        <h3>Work Experience</h3>
        {workExperienceList.map((experience, index) => (
          <div key={index}>
            <input
              type="text"
              value={experience.company}
              onChange={(e) => {
                const updatedList = [...workExperienceList];
                updatedList[index].company = e.target.value;
                setWorkExperienceList(updatedList);
              }}
              placeholder="Company"
            />
            <input
              type="text"
              value={experience.position}
              onChange={(e) => {
                const updatedList = [...workExperienceList];
                updatedList[index].position = e.target.value;
                setWorkExperienceList(updatedList);
              }}
              placeholder="Position"
            />
            <button type="button" onClick={() => handleRemoveWorkExperience(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddWorkExperience}>
          Add Work Experience
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
