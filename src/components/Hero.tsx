import HeroImg from '../assets/HeroImg.png';

export default function Hero() {
  return (
    <>
      <div className='flex justify-center items-center bg-[#f4f4f4f4] relative  z-O h-screen pt-32'>
        <h1 className='text-12xl -mr-[400px] mb-[150px] coffee-service text-black relative z-10'>
          Feel
        </h1>
        <span className=' text-3xl text-[#c21e51] relative left-64 '>
          {' '}
          the teaste
        </span>
        <img
          src={HeroImg}
          alt=''
          height={747}
          width={1111}
          className=' h-[600px] w-auto relative z-10'
        />
        <h1 className=' relative z-20 text-6xl -ml-[200px] text-[#c21e51]'>
          of
          <br />
          <span className='text-12xl -pr-12 coffee-service text-black'>
            {' '}
            Cofee
          </span>
        </h1>
      </div>
    </>
  );
}
