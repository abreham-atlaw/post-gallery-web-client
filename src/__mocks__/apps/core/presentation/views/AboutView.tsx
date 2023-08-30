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

        <div className="max-w-[1280px] m-auto px-6 lg:p-4 lg:px-16 font-Lato">
            <p className='mt-4 mb-2 lg:mb-4 text-2xl lg:text-4xl font-Lato'>About</p>
            <div className='flex flex-col lg:flex-row justify-between mb-6'>
                <div className='w-full lg:w-1/2 lg:mr-10'>
                    <p className='lg:text-xl mb-10 lg:mb-0 lg:mt-3 lg:leading-[35px] font-light text-justify'>
                    Discover the captivating world of contemporary art at Post Gallery, an exceptional destination dedicated to artistic exploration. Nestled in the vibrant heart of Addis Ababa Bole, within the Ethiopian Skylight Mall, our gallery beckons art enthusiasts and curious minds alike. Open seven days a week, Post Gallery serves as a sanctuary for the convergence of creativity, communication, and societal transformation through art.
                    <br />
At Post Gallery, we hold steadfast to the belief that art possesses the extraordinary power to communicate, express, and catalyze change. Our unwavering commitment is evident in our diverse array of exhibitions, events, and enriching educational programs that punctuate the calendar year. By showcasing thought-provoking works that challenge conventional perspectives, we kindle intellectual discourse and inspire the genesis of individual artistic journeys.
                    <br />
Embarking on a mission to provide a platform of prominence, our gallery enthusiastically welcomes both budding talents and seasoned artists to illuminate our spaces with their creations. As a catalyst for meaningful conversations, we foster dialogues that dissect the nuances of contemporary art's role in shaping society's narrative. By bridging the gap between artists and admirers, we foster an environment where appreciation for art knows no age bounds, igniting the flames of creativity across generations.
                    <br />
We are ardent advocates that art belongs to all, and this ethos is translated into the very essence of Post Gallery. We remain resolute in crafting an inclusive and inviting ambiance, ensuring accessibility for everyone. Through the synergy of our location, vision, and endeavors, Post Gallery emerges as an oasis where art converges with humanity, stimulating profound connections and inspiring the creation of art in all its manifestations.
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
