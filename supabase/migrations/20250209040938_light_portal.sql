/*
  # University Feedback System Schema

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - password_hash (text)
      - registration_number (text)
      - branch (text)
      - created_at (timestamp)
      - last_login (timestamp)
    
    - professors
      - id (uuid, primary key)
      - name (text)
      - department (text)
      - created_at (timestamp)
    
    - subjects
      - id (uuid, primary key)
      - name (text)
      - professor_id (uuid, foreign key)
      - semester (integer)
      - created_at (timestamp)
    
    - feedback
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - professor_id (uuid, foreign key)
      - subject_id (uuid, foreign key)
      - feedback_type (text)
      - category (text)
      - feedback_text (text)
      - semester (integer)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  registration_number text UNIQUE NOT NULL,
  branch text NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz
);

-- Professors table
CREATE TABLE professors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  department text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Subjects table
CREATE TABLE subjects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  professor_id uuid REFERENCES professors(id),
  semester integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Feedback table
CREATE TABLE feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  professor_id uuid REFERENCES professors(id),
  subject_id uuid REFERENCES subjects(id),
  feedback_type text NOT NULL,
  category text NOT NULL,
  feedback_text text NOT NULL,
  semester integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE professors ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can read their own data"
  ON users
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Public read access to professors"
  ON professors
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Public read access to subjects"
  ON subjects
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create and read their own feedback"
  ON feedback
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);