-- ============================================
-- Create Profiles Table
-- ============================================

CREATE TABLE public.profiles (

    -- Authentication User ID
    id UUID PRIMARY KEY
        REFERENCES auth.users(id)
        ON DELETE CASCADE,

    -- Personal Information
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,

    -- Hero Section
    headline TEXT NOT NULL,
    hero_description TEXT NOT NULL,

    hero_primary_button_text TEXT NOT NULL,
    hero_primary_button_url TEXT NOT NULL,

    hero_secondary_button_text TEXT,
    hero_secondary_button_url TEXT,

    -- About Section
    about_title TEXT,
    about_description TEXT NOT NULL,

    role TEXT NOT NULL,
    backend TEXT NOT NULL,
    database TEXT NOT NULL,

    -- Contact
    email TEXT NOT NULL unique,
    phone TEXT,
    location TEXT NOT NULL,

    -- Images
    profile_image TEXT,
    cover_image TEXT,

    -- Resume
    resume_url TEXT,

    -- Social Links
    github_url TEXT,
    linkedin_url TEXT,
    facebook_url TEXT,
    twitter_url TEXT,
    website_url TEXT,

    -- Statistics
    years_of_experience INTEGER DEFAULT 0,
    projects_completed INTEGER DEFAULT 0,
    primary_focus TEXT,

    -- Status
    is_available_for_work BOOLEAN DEFAULT TRUE,

    -- SEO
    meta_title TEXT,
    meta_description TEXT,

    -- Timestamp
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()

);

-- ============================================
-- Function: Update updated_at Automatically
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;




-- ============================================
-- Trigger
-- ============================================

CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();