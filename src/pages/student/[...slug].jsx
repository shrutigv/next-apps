import React from 'react';

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://localhost:8080/students/${id}`);
  const student = await res.json();

  return {
    props: {
      student,
    },
  };
}

export default function Student({ student }) {

  return (
    <div>
      <h3>{student.name}</h3>
      <div>
        <h4>Student details</h4>
        <p>{student.dob}</p>
        <p>{student.text}</p>
        <p>{student.major}</p>
      </div>
    </div>
  );
}