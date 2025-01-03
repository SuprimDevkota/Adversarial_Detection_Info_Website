import { Mail, Github, Linkedin } from 'lucide-react';
import SubhamImage from '../images/subham.png'
import SuprimImage from '../images/suprim.png'
import UtsavImage from '../images/utsav.png'

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-primary text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
            <img 
              src={SubhamImage} 
              alt="Description of the image" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
              <h3 className="text-xl font-semibold text-primary">Subham Shrestha</h3>
              <p className="text-gray-600">077BCT082</p>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:077bct082.subham@pcampus.edu.np"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                077bct082.subham@pcampus.edu.np
              </a>
              <a
                href="https://github.com/shresthasubham"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/subham-shrestha-3bb7161a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
            <img 
              src={SuprimImage} 
              alt="Description of the image" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-primary">Suprim Devkota</h3>
              <p className="text-gray-600">077BCT088</p>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:077bct088.suprim@pcampus.edu.np"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                077bct088.suprim@pcampus.edu.np
              </a>
              <a
                href="https://github.com/SuprimDevkota"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/suprim-devkota/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
            <img 
              src={UtsavImage} 
              alt="Description of the image" 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
              <h3 className="text-xl font-semibold text-primary">Utsav Manandhar</h3>
              <p className="text-gray-600">077BCT093</p>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:077bct093.utsav@pcampus.edu.np"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                077bct093.utsav@pcampus.edu.np
              </a>
              <a
                href="https://github.com/Utsav-Manandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/utsav-manandharz-425b08276/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;