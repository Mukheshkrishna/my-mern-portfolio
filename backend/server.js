// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // For MongoDB integration
require('dotenv').config(); // For environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enables CORS for all origins (adjust for production)
app.use(express.json()); // Parses incoming JSON requests

// MongoDB Connection (Placeholder - you'll configure this)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolioDB';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Mongoose Schemas and Models (Examples - customize as needed)

// Profile Schema
const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  bio: { type: String, required: true },
  profileImage: String,
  contact: {
    email: String,
    linkedin: String,
    github: String,
    // Add more contact methods as needed
  }
});
const Profile = mongoose.model('Profile', profileSchema);

// Skill Schema
const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: String // URL or path to icon
});
const Skill = mongoose.model('Skill', skillSchema);

// Experience Schema
const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  // Add more fields like location, responsibilities array etc.
});
const Experience = mongoose.model('Experience', experienceSchema);

// Project Schema
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String], // Array of strings for technologies used
  link: String, // Link to live project or repository
  image: String // URL or path to project image
});
const Project = mongoose.model('Project', projectSchema);

// API Routes

// GET /api/profile - Get all profile data
app.get('/api/profile', async (req, res) => {
  try {
    // Fetch all data from the database
    const profile = await Profile.findOne(); // Assuming only one profile document
    const skills = await Skill.find();
    const experience = await Experience.find().sort({ 'duration': -1 }); // Sort by duration, adjust as needed
    const projects = await Project.find().sort({ 'name': 1 }); // Sort by name, adjust as needed

    // Combine all data into a single object
    const fullProfile = {
      ...profile.toObject(), // Convert Mongoose document to plain object
      skills,
      experience,
      projects
    };
    res.json(fullProfile);
  } catch (err) {
    console.error('Error fetching profile data:', err);
    res.status(500).json({ message: 'Server error fetching profile data' });
  }
});

// Example: POST /api/profile - Add/Update profile data (for initial setup or admin)
// In a real app, you'd secure this with authentication/authorization
app.post('/api/profile', async (req, res) => {
  try {
    const { name, title, bio, profileImage, contact } = req.body;
    let profile = await Profile.findOne();
    if (profile) {
      // Update existing profile
      profile.name = name || profile.name;
      profile.title = title || profile.title;
      profile.bio = bio || profile.bio;
      profile.profileImage = profileImage || profile.profileImage;
      profile.contact = contact || profile.contact;
      await profile.save();
    } else {
      // Create new profile
      profile = new Profile({ name, title, bio, profileImage, contact });
      await profile.save();
    }
    res.status(200).json(profile);
  } catch (err) {
    console.error('Error saving profile:', err);
    res.status(500).json({ message: 'Server error saving profile' });
  }
});

// Example: POST /api/skills - Add a new skill
app.post('/api/skills', async (req, res) => {
  try {
    const { name, icon } = req.body;
    const newSkill = new Skill({ name, icon });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    console.error('Error adding skill:', err);
    res.status(500).json({ message: 'Server error adding skill' });
  }
});

// Example: POST /api/experience - Add a new experience entry
app.post('/api/experience', async (req, res) => {
  try {
    const { title, company, duration, description } = req.body;
    const newExperience = new Experience({ title, company, duration, description });
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    console.error('Error adding experience:', err);
    res.status(500).json({ message: 'Server error adding experience' });
  }
});

// Example: POST /api/projects - Add a new project
app.post('/api/projects', async (req, res) => {
  try {
    const { name, description, technologies, link, image } = req.body;
    const newProject = new Project({ name, description, technologies, link, image });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error('Error adding project:', err);
    res.status(500).json({ message: 'Server error adding project' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// To run this backend:
// 1. Make sure you have Node.js and npm installed.
// 2. Create a new folder for your backend (e.g., `backend`).
// 3. Inside `backend`, run `npm init -y` to create a package.json.
// 4. Install necessary packages: `npm install express cors mongoose dotenv`
// 5. Create `server.js` file and paste the above code.
// 6. Create a `.env` file in the `backend` folder for your MongoDB URI:
//    MONGODB_URI="your_mongodb_connection_string"
//    (e.g., mongodb://localhost:27017/portfolioDB or your MongoDB Atlas URI)
// 7. Run the server: `node server.js`
//    The server will start on http://localhost:5000 (or your specified PORT).

// To populate initial data (example using mock data from frontend):
// You can use a tool like Postman, Insomnia, or a simple script to POST data
// to your backend endpoints (e.g., /api/profile, /api/skills, etc.).
// For example, to add a profile:
// POST to http://localhost:5000/api/profile with JSON body:
/*
{
  "name": "John Doe",
  "title": "Full Stack Developer",
  "bio": "Passionate Full Stack Developer with expertise in building scalable and efficient web applications...",
  "profileImage": "https://placehold.co/150x150",
  "contact": {
    "email": "john.doe@example.com",
    "linkedin": "https://linkedin.com/in/johndoe",
    "github": "https://github.com/johndoe"
  }
}
*/
