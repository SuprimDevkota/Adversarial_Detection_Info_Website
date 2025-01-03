import { ArrowRight, Shield, Lock, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex justify-center mb-8 space-x-4">
            <Shield className="w-12 h-12 text-accent-DEFAULT" />
            <Lock className="w-12 h-12 text-accent-DEFAULT" />
            <Bug className="w-12 h-12 text-accent-DEFAULT" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Deep Learning based Malware Detection
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up text-muted-foreground" style={{ animationDelay: "0.2s" }}>
            with Adversarial Robustness
          </p>
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 border-2 border-accent-DEFAULT rounded-lg text-lg text-accent-DEFAULT hover:bg-accent-DEFAULT hover:text-white transition-colors animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Learn More <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow border border-muted/20">
              <h3 className="text-xl font-semibold mb-4 text-accent-DEFAULT">Advanced Detection</h3>
              <p className="text-muted-foreground">
                Utilizing deep learning algorithms for accurate malware identification and classification.
              </p>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow border border-muted/20">
              <h3 className="text-xl font-semibold mb-4 text-accent-DEFAULT">Adversarial Defense</h3>
              <p className="text-muted-foreground">
                Robust against sophisticated evasion attempts and adversarial attacks.
              </p>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow border border-muted/20">
              <h3 className="text-xl font-semibold mb-4 text-accent-DEFAULT">Real-time Analysis</h3>
              <p className="text-muted-foreground">
                Continuous monitoring and immediate threat detection capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;