export default function BackgroundImage ({
    bgSrc
}) {
    return(
        <img
            className="absolute inset-0 -z-50 h-full w-full object-cover"
            src={bgSrc}
            alt="background"
        />
    )
}

// How to use this?

// <div className="relative isolate overflow-hidden">
//    <BackgroundImage/>
// </div>


// https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply