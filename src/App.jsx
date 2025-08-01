import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ResumePage from './pages/ResumePage';
import ResumePreviewPage from './pages/ResumePreviewPage';
import CompanyExplorer from './components/CompanyExplorer';
import RoadmapPage from './pages/RoadmapPage';
import InterviewPage from './pages/InterviewPage';
import { ResumeProvider } from './data/resumeDataContext';

function App() {
  return (
    <ResumeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#f5f8fb] text-gray-800 font-inter">
          {/* Navbar */}
          <header className="bg-[#1f2937] text-white sticky top-0 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-lg md:text-xl font-bold tracking-wide">CareerLaunch</h1>
              <nav className="space-x-4 text-sm md:text-base">
                <Link to="/" className="hover:text-yellow-400 transition-colors">🏠 Home</Link>
                <Link to="/resume" className="hover:text-yellow-400 transition-colors">📝 Resume</Link>
                <Link to="/roadmap" className="hover:text-yellow-400 transition-colors">📚 Roadmap</Link>
                <Link to="/interview" className="hover:text-yellow-400 transition-colors">💼 Interview</Link>
                <Link to="/companies" className="hover:text-yellow-400 transition-colors">🏢 Companies</Link>
              </nav>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-grow max-w-7xl mx-auto p-4 md:p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/resume/preview" element={<ResumePreviewPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/interview" element={<InterviewPage />} />
              <Route path="/companies" element={<CompanyExplorer />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
            © 2025 CareerLaunch. All rights reserved.
          </footer>
        </div>
      </Router>
    </ResumeProvider>
  );
}

// ✅ Enhanced Home Page
function Home() {
  return (
    <div className="text-center mt-16">
      <h2 className="text-3xl font-bold text-[#1f2937] mb-4">🚀 Welcome to CareerLaunch</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
        Your one-stop solution for mastering placements with professional resume building, interview practice, company-specific insights, and personalized roadmaps.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 px-4">
        <FeatureCard 
          title="📝 Resume Builder"
          description="Craft your professional resume with AI suggestions and export-ready templates."
        />
        <FeatureCard 
          title="💼 Mock Interviews"
          description="Practice coding, MCQs, and behavioral questions to ace your dream job interview."
        />
        <FeatureCard 
          title="📚 Roadmap Generator"
          description="Get personalized learning plans based on your dream role or company."
        />
        <FeatureCard 
          title="🏢 Explore Companies"
          description="Know the skills, criteria, and hiring process of top tech companies."
        />
        <FeatureCard 
          title="🎯 Skill Tracker (Coming Soon)"
          description="Track your placement prep journey and unlock achievements."
        />
        <FeatureCard 
          title="🤖 Smart Agent (Coming Soon)"
          description="Get real-time feedback and mentoring from your personalized AI coach."
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 border border-gray-200 text-left">
      <h3 className="text-xl font-semibold text-[#1f2937] mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default App;
