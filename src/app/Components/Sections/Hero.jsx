import Button from "../Button"

const Hero = () => {
  return (
    <div className="hero w-full min-h-screen w-full h-screen px-3 p-1">

    <h1 className="text-[6vw] flex flex-col items-start font-anton font-medium text-grey leading-none tracking-tighter mt-35 min-md:text-[7vw] min-md-mt-55 lg:items-end lg:text-7xl lg:text-center pr-[1.5vw]">
      <span className="flex flex-col">
        <span>Beyond</span> <span> Visuals.</span>
      </span>
      <span className="text-white flex flex-col text-start lg:text-end">
        <span>Build with</span>
        <span >Vision.</span>
      </span>
    </h1>

    {/* /heroText */}

    <p className="text-[5.4vw] font-geist text-white mt-[30vh] leading-none tracking-tight text-center md:mt-[35vh] lg:text-[2.5vw] lg:text-start lg:w-[30%] lg:mt-0 lg:px-[1.5vw] lg:tracking-tighter ">Building fast, responsive, and user-focused web experiences <span className="text-grey">that turn ideas into products.</span></p>

<div className="absolute right-1/2 translate-x-1/2 mt-10 lg:right-15 lg:translate-0 lg:bottom-16">
<Button text="Projects" ></Button>
</div>
</div>
  )
}

export default Hero