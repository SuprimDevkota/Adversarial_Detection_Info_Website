import { Code2, Brain, Shield, Cpu } from 'lucide-react';

const Technology = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-primary text-center">Technologies Used</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Deep Learning Framework */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-semibold text-primary">Deep Learning Framework</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• TensorFlow - Secondary framework for validation</li>
              <li>• CUDA - GPU acceleration support</li>
              <li>• NumPy - Numerical computations</li>
            </ul>
          </div>

          {/* Development Tools */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Code2 className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-2xl font-semibold text-primary">Development Tools</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• Python 3.9+ - Primary programming language</li>
              <li>• Git - Version control</li>
              <li>• Kaggle Notebooks - Research and analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;