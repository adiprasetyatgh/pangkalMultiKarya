export default function BackgroundSkew () {
    return(
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" 
        />
    )
}

// How to use?
//      <div className="relative isolate overflow-hidden">
//          <BackgroundSkew/>
//          <Components/>
//      </div>