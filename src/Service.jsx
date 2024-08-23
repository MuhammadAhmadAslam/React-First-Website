import Card from "./card"
let Services = () => {
    return(
        <main className="text-gray-600 body-font" id="services">
  <div className="container px-5 py-24 mx-auto">
        <h1 className="text-center mt-10 text-5xl font-extrabold py-10">Our Services</h1>
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis accusantium inventore quibusdam nemo dolores porro
      </p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
      </div>
    </div>

<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
    <Card />
    <Card />
    <Card />
  </div>



    <button className="flex mx-auto mt-16 text-white bg-[#003366] border-0 py-2 px-8 focus:outline-none hover:bg-[#FDDD00] hover:text-[#003366] rounded text-lg">
      Say Hello
    </button>
  </div>
</main>

    )
}

export default Services