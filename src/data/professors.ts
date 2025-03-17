export interface Professor {
  id: string;
  name: string;
  subjects: string[];
  profilePicture: string;
}

export const professors: Professor[] = [
  {
    id: 'prof1',
    name: 'Dr. Rajesh Kumar',
    subjects: ['MAT5001', 'CSE5042', 'CSE5011'],
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'prof2',
    name: 'Dr. Priya Sharma',
    subjects: ['CSE5007', 'PSY5101', 'CSE5013'],
    profilePicture: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'prof3',
    name: 'Dr. Amit Patel',
    subjects: ['CSE5070', 'CSE5029', 'CSE5034'],
    profilePicture: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'prof4',
    name: 'Dr. Sneha Gupta',
    subjects: ['CSE5122', 'CSE5016', 'CSE5024'],
    profilePicture: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'prof5',
    name: 'Dr. Arun Singh',
    subjects: ['CSE5124', 'CSE5078', 'CSE6016'],
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'prof6',
    name: 'Dr. Maya Verma',
    subjects: ['CSE5126', 'CSE3009', 'CSE5049'],
    profilePicture: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'prof7',
    name: 'Dr. Rahul Mehta',
    subjects: ['CSE6003', 'SSK2002', 'CSE5001'],
    profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'prof8',
    name: 'Dr. Anita Desai',
    subjects: ['FRE1001', 'CSE5018', 'CSE5002'],
    profilePicture: 'https://images.unsplash.com/photo-1573497019236-17dd59b5fa20?q=80&w=150&auto=format&fit=crop'
  }
];
