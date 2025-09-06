import React from 'react';

const tools = [
  { name: 'Terraform Code Generator', url: 'https://your-lambda-url-terraform', description: 'Generate Terraform code easily.' },
  { name: 'Image to Terraform Code', url: 'https://your-lambda-url-image-to-terraform', description: 'Convert an architecture image to Terraform code.' },
  { name: 'Compliance Checker', url: 'https://your-lambda-url-compliance-checker', description: 'Check your infrastructure compliance.' },
  { name: 'FinOps Dashboard', url: 'https://your-lambda-url-finops-dashboard', description: 'Monitor cloud financial health and usage.' },
  { name: 'AWS Well-Architected Tool', url: 'https://your-lambda-url-well-architected', description: 'Review your architecture against AWS best practices.' },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">🚀 Lambda Tools Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6 transform transition hover:scale-105">
            <h2 className="text-xl font-semibold mb-4">{tool.name}</h2>
            <p className="mb-4">{tool.description}</p>
            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Open Tool
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;