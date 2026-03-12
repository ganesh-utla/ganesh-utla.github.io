-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profile table
CREATE TABLE IF NOT EXISTS profile (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  bio TEXT,
  email TEXT NOT NULL,
  github TEXT,
  linkedin TEXT,
  twitter TEXT,
  resume_url TEXT,
  profile_image TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech_stack TEXT[],
  github_url TEXT,
  live_url TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Experience table
CREATE TABLE IF NOT EXISTS experience (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  description TEXT,
  tech_stack TEXT[],
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  level TEXT CHECK (level IN ('beginner', 'intermediate', 'advanced', 'expert')),
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Profile policies (public read)
CREATE POLICY "Public read profile" ON profile
  FOR SELECT USING (true);

-- Projects policies (public read)
CREATE POLICY "Public read projects" ON projects
  FOR SELECT USING (true);

-- Experience policies (public read)
CREATE POLICY "Public read experience" ON experience
  FOR SELECT USING (true);

-- Skills policies (public read)
CREATE POLICY "Public read skills" ON skills
  FOR SELECT USING (true);

-- Contact messages policies (public insert only)
CREATE POLICY "Public insert contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES
  ('portfolio-assets', 'portfolio-assets', true),
  ('project-images', 'project-images', true),
  ('resume', 'resume', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies (public read)
CREATE POLICY "Public read portfolio-assets" ON storage.objects
  FOR SELECT USING (bucket_id = 'portfolio-assets');

CREATE POLICY "Public read project-images" ON storage.objects
  FOR SELECT USING (bucket_id = 'project-images');

CREATE POLICY "Public read resume" ON storage.objects
  FOR SELECT USING (bucket_id = 'resume');
