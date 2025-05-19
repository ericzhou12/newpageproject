import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-amber-100 shadow-md z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8">
          <Link href="/">
            <h1 className="font-serif font-bold text-amber-900 text-2xl sm:text-3xl py-3 sm:py-4 cursor-pointer">
              The New Page Project
            </h1>
          </Link>
          
          <nav className="pb-3 sm:pb-0 w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-8 font-medium text-amber-900">
              <li className="text-amber-700 border-b-2 border-amber-700 cursor-pointer">About</li>
              <li className="hover:text-amber-700 cursor-pointer">
                <Link href="/donate">Donate</Link>
              </li>
              <li className="hover:text-amber-700 cursor-pointer">Programs</li>
              <li className="hover:text-amber-700 cursor-pointer">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="pt-24 px-4 sm:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Book Shelf Background */}
          <div className="relative rounded-xl overflow-hidden mb-12">
            <div className="bg-amber-800 h-64 sm:h-80 md:h-96 flex items-end">
              {/* Bookshelf illustration at bottom */}
              <div className="w-full h-24 sm:h-32 bg-amber-900 flex items-end">
                {/* Books on shelf - decorative elements */}
                <div className="flex w-full justify-around pb-2 px-6">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-12 sm:w-16 h-16 sm:h-20 rounded-t-sm
                        ${['bg-amber-600', 'bg-amber-500', 'bg-amber-400', 'bg-red-700', 'bg-emerald-700', 'bg-blue-700'][i % 6]}
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Our Story</h1>
              <p className="text-lg sm:text-xl max-w-2xl">
                Every book has a journey. Every reader has a story.
              </p>
            </div>
          </div>

          {/* Mission and History */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-6 text-amber-900">Our Mission</h2>
              <div className="prose prose-amber max-w-none">
                <p className="mb-4">
                  The New Page Project was founded with a simple yet powerful belief: books have the power to transform lives. Our mission is to create new opportunities through literacy by connecting donated books with readers who need them most.
                </p>
                <p className="mb-4">
                  We believe that access to books is not just a luxury but a fundamental right. In communities where resources are scarce, a single book can spark imagination, foster critical thinking, and open doors to new possibilities.
                </p>
                <p>
                  Through book drives, community partnerships, and educational programs, we're working to build a world where every child and adult has access to the joy and knowledge that reading brings.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-amber-600">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-amber-900">Our History</h2>
                <div className="prose prose-amber max-w-none">
                  <p className="mb-4">
                    The New Page Project began in 2018 when our founder, Sarah Chen, visited a rural school with barely 50 books in its library. Moved by the students' enthusiasm despite limited resources, she returned home determined to make a difference.
                  </p>
                  <p>
                    What started as a local book drive in Sarah's garage has grown into an international nonprofit with partners in 25 countries. From that first donation of 200 books, we've now provided over 50,000 books to schools, community centers, and libraries worldwide.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-amber-700">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-amber-900">Our Approach</h2>
                <div className="prose prose-amber max-w-none">
                  <p className="mb-4">
                    We believe that sustainable impact requires a community-centered approach. That's why we partner with local organizations to ensure that our book donations meet the specific needs and interests of each community we serve.
                  </p>
                  <p>
                    Beyond simply donating books, we provide resources for teachers and community leaders, create reading programs, and help establish sustainable library systems that will serve communities for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-8 text-center text-amber-900">Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Team Member Cards */}
              {[
                { name: "Sarah Chen", role: "Founder & Executive Director", color: "bg-amber-100" },
                { name: "Michael Rodriguez", role: "Director of Operations", color: "bg-amber-200" },
                { name: "Aisha Patel", role: "Educational Programs Lead", color: "bg-amber-100" },
                { name: "James Wilson", role: "Partnership Coordinator", color: "bg-amber-200" }
              ].map((member, index) => (
                <div key={index} className={`${member.color} rounded-xl shadow-md overflow-hidden`}>
                  <div className="h-48 bg-amber-800"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-amber-900">{member.name}</h3>
                    <p className="text-amber-700">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="relative bg-white rounded-xl shadow-md p-6 sm:p-8 mb-16">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-lg rotate-12"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-8 text-amber-900">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="text-xl font-medium text-amber-900 mb-2">Access for All</h3>
                  <p className="text-amber-800">
                    We believe literacy and access to books are fundamental rights that should be available to everyone regardless of their circumstances.
                  </p>
                </div>
                
                <div className="border-l-4 border-amber-600 pl-4">
                  <h3 className="text-xl font-medium text-amber-900 mb-2">Community First</h3>
                  <p className="text-amber-800">
                    We work with communities to understand their unique needs and create sustainable solutions that respect local cultures and contexts.
                  </p>
                </div>
                
                <div className="border-l-4 border-amber-700 pl-4">
                  <h3 className="text-xl font-medium text-amber-900 mb-2">Environmental Responsibility</h3>
                  <p className="text-amber-800">
                    By giving books a second life, we promote sustainability and reduce waste while spreading knowledge and joy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stories */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-8 text-center text-amber-900">Impact Stories</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-amber-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-amber-900 mb-2">Chamakor Primary School, Kenya</h3>
                  <p className="text-amber-800 mb-4">
                    "The books from The New Page Project have transformed our school. Our students now have access to stories from around the world, and our reading scores have improved by 40% in just one year."
                  </p>
                  <p className="italic text-amber-700">— Principal Elizabeth Mwangi</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-amber-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-amber-900 mb-2">Community Library, Rural Tennessee</h3>
                  <p className="text-amber-800 mb-4">
                    "In our small town, the library was at risk of closing due to lack of funding. The donation of 1,500 books and support from The New Page Project helped us revitalize our space and engage new readers."
                  </p>
                  <p className="italic text-amber-700">— Maria Jenkins, Librarian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">The New Page Project</h3>
            <p className="text-amber-200">
              Turning the page on literacy barriers, one book at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/donate" className="hover:text-white">Donate</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center">
                <span>F</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center">
                <span>T</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center">
                <span>I</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-amber-800 text-center text-amber-300">
          <p>&copy; {new Date().getFullYear()} The New Page Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}