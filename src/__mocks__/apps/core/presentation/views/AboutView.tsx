import TheFooter from '@/lib/components/footer/footer'
import NavBar from '@/lib/components/navBar/navBar'
import collection from "@/assets/exhibition.png"
import about from "@/assets/contact.png"

export default function AboutView() {
  return (
    <div>
        <div className='lg:pr-10 lg:pl-16 '>
            <NavBar isDark={true} />
        </div>

        <div className="max-w-[1280px] m-auto px-6 lg:p-4 lg:px-16 font-Mulish">
            <p className='mt-4 mb-2 lg:mb-4 text-2xl lg:text-4xl font-Mulish'>About</p>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='w-full lg:w-1/2 lg:mr-10'>
                    <p className='lg:text-xl mb-10 lg:mb-0 lg:mt-3 lg:leading-[35px] font-light'>
                    Welcome to Post Gallery, a space for the exploration of contemporary art. We believe that art is a powerful tool for communication, expression, and social change. We are committed to presenting work that challenges our perspectives, provokes our thinking, and inspires us to create our own art.
Our gallery is located in the heart of downtown [city name], and we are open to the public seven days a week. We offer a variety of exhibitions, events, and educational programs throughout the year.
Our mission is to:
Provide a platform for emerging and established artists to showcase their work.
Foster a dialogue about contemporary art and its role in society.
Inspire people of all ages to appreciate and create art.
We believe that art is for everyone, and we are committed to making our gallery a welcoming and accessible space for all.
                    </p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full h-96 lg:h-4/5 shadow-md object-cover lg:object-cover' src={about} />
                </div>
            </div>
        </div>

        <TheFooter />
    </div>
  )
}
