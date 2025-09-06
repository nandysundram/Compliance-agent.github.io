import React from 'react';

const tools = [
  { name: 'Terraform Code Generator', url: 'https://2jpdo3bst2rvpzymhebdgvgnma0msplp.lambda-url.ap-southeast-1.on.aws/', description: 'Generate Terraform code easily.' },
  { name: 'Image to Terraform Code', url: 'https://horyvmwuwwf4zfunvy7a3kggiu0mmvvn.lambda-url.ap-southeast-1.on.aws/', description: 'Convert an architecture image to Terraform code.' },
  { name: 'Compliance Checker', url: 'https://kfjskb3ttrvcclvb7rw4t3d2na0aebcl.lambda-url.ap-southeast-1.on.aws/', description: 'Check your infrastructure compliance.' },
  { name: 'FinOps Dashboard', url: 'https://2aggu3zily2qmrhxe7msg3crzq0dvvfc.lambda-url.ap-southeast-1.on.aws/', description: 'Monitor cloud financial health and usage.' },
  { name: 'AWS Optimizer', url: 'https://oluu5uhcgo4wiweqvudufymwki0jrdag.lambda-url.ap-southeast-1.on.aws/', description: 'Review your architecture against AWS best practices.' },
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
