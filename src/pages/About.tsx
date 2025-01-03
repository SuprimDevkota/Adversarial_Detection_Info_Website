import methodologyImage from '../images/methodology.png';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-DEFAULT animate-fade-up">
              About the Project
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Our research focuses on developing a robust malware detection system using cutting-edge deep learning techniques,
              specifically designed to maintain high accuracy even in the presence of adversarial attacks.
            </p>
          </div>

          {/* Methodology */}
          <div className="bg-primary-light p-8 rounded-lg border border-muted/20 shadow-xl animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <h2 className="text-3xl font-semibold mb-6 text-accent-DEFAULT">Methodology</h2>
            <img 
              src={methodologyImage} 
              alt="Illustration of methodology" 
              className="mb-6 rounded-lg shadow-md" 
            />
            <p className="text-muted-foreground leading-relaxed">
              We propose a deep learning-based approach for malware detection, which incorporates adversarial robusteness
              by combining n-gram feature extraction and Generative Adversarial Networks (GAN). The primary aim of this
              methodology is to detect malware while enhancing the model's ability to resist adversarial attacks, ensuring that
              the model remains effective.
            </p>
          </div>

          {/* Dataset Section */}
          <div className="bg-primary-light p-8 rounded-lg border border-muted/20 shadow-xl animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <h2 className="text-3xl font-semibold mb-6 text-accent-DEFAULT">Data Collection</h2>
            <p className="text-muted-foreground leading-relaxed">
              We used two datasets in this project: 
              For the malware samples, we used the BODMAS malware dataset and
              we collected the benign data set from a fresh new install of a Windows Operating System in a virtual machine.
              These two were combined into a single dataset which was split into three subsets for training, validation and
              testing respectively. This ensured that the model is trained on a diverse set of examples and evaluated on an unseen
              dataset for robustness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;