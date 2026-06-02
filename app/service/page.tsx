import Link from "next/link";

export default function Kotak() {
  return (
    <div className="w-full h-screen relative bg-white overflow-hidden">
      {/* Background circles */}
      <div className="absolute w-[22.22vw] h-[39.65vh] right-[-5vw] top-[25.37vh] bg-violet-100 rounded-full blur-[132.70px] opacity-60"></div>
      <div className="absolute w-[11.11vw] h-[19.84vh] right-[0vw] top-[16.14vh] bg-violet-200 rounded-full blur-[132.70px] opacity-40"></div>
      <div className="absolute w-[22.22vw] h-[39.65vh] left-[-5vw] bottom-[5vh] bg-violet-100 rounded-full blur-[132.70px] opacity-60"></div>
      <div className="absolute w-[11.11vw] h-[19.84vh] left-[0vw] bottom-[10vh] bg-violet-200 rounded-full blur-[132.70px] opacity-40"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 w-full h-full">
        {[...Array(96)].map((_, i) => (
          <div key={i} className="border border-gray-200/60"></div>
        ))}
      </div>

      {/* Tombol Kembali */}
      <div className="absolute z-20 top-6 left-4 sm:left-6 lg:left-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-700 hover:text-violet-600 transition-colors group"
        >
          <svg 
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm sm:text-base">Kembali</span>
        </Link>
      </div>

      {/* DESKTOP LAYOUT (>=1024px) */}
      <div className="hidden lg:block relative w-full h-full">
        {/* Our Process button */}
        <div className="absolute w-[14.81vw] h-[8.66vh] left-[42.77vw] top-[12.29vh] bg-violet-100 rounded-[57px] border-2 border-violet-400 flex items-center justify-center">
          <span className="text-violet-700 text-[1.39vw] font-bold font-['Syne']">Our Process</span>
        </div>
        
        {/* Title */}
        <div className="absolute left-[21.93vw] top-[23.44vh] text-center text-gray-900 text-[3.47vw] font-bold font-['Syne'] whitespace-nowrap">
          Clear Process. Real Results.
        </div>
        
        {/* Step 1 */}
        <div className="absolute left-[11.63vw] top-[39.5vh] text-gray-900 text-[1.74vw] font-bold font-['Syne']">
          01.<br/>Discover & Define
        </div>
        <div className="absolute left-[11.63vw] top-[51.04vh] text-gray-600 text-[1.16vw] font-normal font-['Inter']">
          Analisis kebutuhan, scope, target, <br/>dan timeline.
        </div>
        
        {/* Step 2 */}
        <div className="absolute left-[41.96vw] top-[39.5vh] text-gray-900 text-[1.74vw] font-bold font-['Syne']">
          02.<br/>Design & Prototype
        </div>
        <div className="absolute left-[41.96vw] top-[51.04vh] text-gray-600 text-[1.16vw] font-normal font-['Inter']">
          UI/UX dirancang dan diuji sebelum <br/>development.
        </div>
        
        {/* Step 3 */}
        <div className="absolute left-[41.96vw] top-[64.29vh] text-gray-900 text-[1.74vw] font-bold font-['Syne']">
          03.<br/>Develop & QA
        </div>
        <div className="absolute left-[41.96vw] top-[75.83vh] text-gray-600 text-[1.16vw] font-normal font-['Inter']">
          Pengembangan sistem plus<br/>pengujian performa dan bug.
        </div>
        
        {/* Step 4 */}
        <div className="absolute left-[70.02vw] top-[64.29vh] text-gray-900 text-[1.74vw] font-bold font-['Syne']">
          04.<br/>Launch & Support
        </div>
        <div className="absolute left-[70.02vw] top-[76.28vh] text-gray-600 text-[1.16vw] font-normal font-['Inter']">
          Serah terima, dokumentasi, <br/>dan masa garansi.
        </div>
      </div>

      {/* MOBILE & TABLET LAYOUT (<1024px) */}
      <div className="lg:hidden relative w-full h-full overflow-y-auto">
        <div className="flex flex-col items-center justify-start min-h-screen px-6 py-8">
          
          <div className="w-[200px] md:w-[240px] h-[60px] md:h-[70px] bg-violet-100 rounded-[57px] border-2 border-violet-400 flex items-center justify-center mt-[5vh] mb-[3vh]">
            <span className="text-violet-700 text-xl md:text-2xl font-bold font-['Syne']">Our Process</span>
          </div>
          
          <h1 className="text-gray-900 text-3xl md:text-4xl font-bold font-['Syne'] text-center mb-8 md:mb-12">
            Clear Process. Real Results.
          </h1>
          
          <div className="w-full max-w-2xl mx-auto space-y-10 md:space-y-12">
            {[
              { n: '01', title: 'Discover & Define', desc: 'Analisis kebutuhan, scope, target, dan timeline.' },
              { n: '02', title: 'Design & Prototype', desc: 'UI/UX dirancang dan diuji sebelum development.' },
              { n: '03', title: 'Develop & QA', desc: 'Pengembangan sistem plus pengujian performa dan bug.' },
              { n: '04', title: 'Launch & Support', desc: 'Serah terima, dokumentasi, dan masa garansi.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="text-center">
                <h2 className="text-gray-900 text-2xl md:text-3xl font-bold font-['Syne'] mb-2">{n}.<br/>{title}</h2>
                <p className="text-gray-600 text-base md:text-lg font-normal font-['Inter']">{desc}</p>
              </div>
            ))}
          </div>
          
          <div className="h-10"></div>
        </div>
      </div>
    </div>
  )
}