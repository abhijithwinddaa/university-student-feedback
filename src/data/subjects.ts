export interface Subject {
  code: string;
  name: string;
  semester: number;
  year: string;
  professorId: string;
}

export const subjects: Subject[] = [
  // 2023-2024 Semester 1
  { code: 'MAT5001', name: 'Applied Statistics', semester: 1, year: '2023-2024', professorId: 'prof1' },
  { code: 'CSE5007', name: 'Software Development Framework', semester: 1, year: '2023-2024', professorId: 'prof2' },
  { code: 'CSE5070', name: 'Programming Language - Python', semester: 1, year: '2023-2024', professorId: 'prof3' },
  { code: 'CSE5122', name: 'Database Management System', semester: 1, year: '2023-2024', professorId: 'prof4' },
  { code: 'CSE5124', name: 'Data Communication and Computer Networks', semester: 1, year: '2023-2024', professorId: 'prof5' },
  { code: 'CSE5126', name: 'Introduction to Data Science', semester: 1, year: '2023-2024', professorId: 'prof6' },
  { code: 'CSE6003', name: 'Seminar', semester: 1, year: '2023-2024', professorId: 'prof7' },
  { code: 'FRE1001', name: 'Basic French', semester: 1, year: '2023-2024', professorId: 'prof8' },
  { code: 'ENG5001', name: 'Basics of Communication', semester: 1, year: '2023-2024', professorId: 'prof1' },
  { code: 'PSY5101', name: 'Self Development and Interpersonal Skills', semester: 1, year: '2023-2024', professorId: 'prof2' },

  // 2023-2024 Semester 2
  { code: 'CSE5003', name: 'Advanced Computer Architecture and Organization', semester: 2, year: '2023-2024', professorId: 'prof3' },
  { code: 'CSE5004', name: 'Distributed Operating System', semester: 2, year: '2023-2024', professorId: 'prof4' },
  { code: 'MGT5101', name: 'Digital Entrepreneurship Skills', semester: 2, year: '2023-2024', professorId: 'prof5' },
  { code: 'CSE5049', name: 'Business Analytics', semester: 2, year: '2023-2024', professorId: 'prof6' },
  { code: 'CSE5001', name: 'Data Structures Using Python', semester: 2, year: '2023-2024', professorId: 'prof7' },
  { code: 'CSE5018', name: 'Big Data Framework', semester: 2, year: '2023-2024', professorId: 'prof8' },
  { code: 'CSE5042', name: 'Blockchain Technology and Applications', semester: 2, year: '2023-2024', professorId: 'prof1' },
  { code: 'ENG5002', name: 'Advanced Technical Report Writing', semester: 2, year: '2023-2024', professorId: 'prof2' },

  // 2024-2025 Semester 3
  { code: 'CSE5029', name: 'Advanced Machine Learning', semester: 3, year: '2024-2025', professorId: 'prof3' },
  { code: 'CSE5016', name: 'Data Mining and Predictive', semester: 3, year: '2024-2025', professorId: 'prof4' },
  { code: 'CSE5078', name: 'Generative AI', semester: 3, year: '2024-2025', professorId: 'prof5' },
  { code: 'CSE3009', name: 'Digital Image Processing', semester: 3, year: '2024-2025', professorId: 'prof6' },

  // 2024-2025 Semester 4
  { code: 'SSK2002', name: 'Being Corporate Ready', semester: 4, year: '2024-2025', professorId: 'prof7' },
  { code: 'CSE5002', name: 'Algorithm Design for Computer Application', semester: 4, year: '2024-2025', professorId: 'prof8' },
  { code: 'CSE5011', name: 'Advanced Java Programming', semester: 4, year: '2024-2025', professorId: 'prof1' },
  { code: 'CSE5013', name: 'C# and .NET Framework', semester: 4, year: '2024-2025', professorId: 'prof2' },
  { code: 'CSE5034', name: 'DevOps Orchestration', semester: 4, year: '2024-2025', professorId: 'prof3' },
  { code: 'CSE5024', name: 'Advanced Software Testing', semester: 4, year: '2024-2025', professorId: 'prof4' },
  { code: 'CSE6016', name: 'Data Center Operation and Management MCA', semester: 4, year: '2024-2025', professorId: 'prof5' }
];
