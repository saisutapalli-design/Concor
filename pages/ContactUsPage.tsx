import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="min-h-full bg-white font-sans">
      <div className="py-24 px-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black text-[#0096D6] uppercase tracking-[0.5em] mb-6">Connect with Us</p>
          <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-8">Global Reach, <br/>Local Expertise.</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-24">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-16">
            <section>
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">Registered Office</h3>
              <div className="space-y-4">
                <p className="text-xl font-black text-gray-900 leading-tight">CONCOR Bhawan, C-3, Mathura Road, Opp. Apollo Hospital, New Delhi - 110076</p>
                <div className="pt-8 space-y-4 border-t border-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-[#0096D6] rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    </div>
                    <span className="text-sm font-black text-gray-700 tabular">+91-11-41222500 / 600</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-[#0096D6] rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </div>
                    <span className="text-sm font-black text-gray-700">feedback@concorindia.com</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
               <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Regional Support Hubs</h3>
               <div className="space-y-6">
                 {['North Region (NCR)', 'Western Region (Mumbai)', 'Eastern Region (Kolkata)', 'Southern Region (Chennai)'].map(hub => (
                   <div key={hub} className="flex items-center justify-between group cursor-pointer">
                      <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors">{hub}</span>
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-[#0096D6] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                   </div>
                 ))}
               </div>
            </section>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-900/5 overflow-hidden">
               <div className="p-10 border-b border-gray-50">
                  <h3 className="text-xl font-black text-gray-900 mb-2">Inquiry Form</h3>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">Awaiting Operational Context</p>
               </div>
               <div className="p-10 grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                     <input type="text" className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 font-bold text-sm outline-none focus:border-[#0096D6] transition-all" placeholder="Enter name" />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Corporate Email</label>
                     <input type="email" className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 font-bold text-sm outline-none focus:border-[#0096D6] transition-all" placeholder="email@company.com" />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Subject / Business Unit</label>
                     <select className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 font-black text-sm outline-none focus:border-[#0096D6] appearance-none">
                        <option>EXIM Operations Inquiry</option>
                        <option>Terminal Infrastructure Booking</option>
                        <option>Financial / PDA Settlement</option>
                        <option>HR & Career Opportunities</option>
                     </select>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Detailed Message</label>
                     <textarea className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 font-bold text-sm h-32 outline-none focus:border-[#0096D6] transition-all" placeholder="How can we assist with your logistics flow?"></textarea>
                  </div>
                  <button className="md:col-span-2 bg-[#0096D6] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 active:scale-95 transition-all">Submit Protocol Request</button>
               </div>
            </div>

            {/* Interactive Map Section */}
            <div className="space-y-6">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Strategic Interactive Location</h3>
              <div className="h-96 rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm relative group grayscale hover:grayscale-0 transition-all duration-700">
                 {/* Google Map Iframe for Head Office */}
                 <iframe 
                   title="CONCOR Head Office Location"
                   className="w-full h-full border-0"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.748366961556!2d77.28318731131106!3d28.51719607562095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6bb37618997%3A0xc4eb789b533668e2!2sCONCOR%20Bhawan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;