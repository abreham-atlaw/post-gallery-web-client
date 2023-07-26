import TheFooter from '@/lib/components/footer/footer'
import NavBar from '@/lib/components/navBar/navBar'
import location from "@/assets/location.png"
import about from "@/assets/contact.png"
import instagram from "@/assets/insta.png"
import twitter from "@/assets/twitter.png"
import facebook from "@/assets/Facebook.png"
import youtube from "@/assets/YouTube.png"
import mark from "@/assets/Mark.png"
import phone from "@/assets/Phone.png"
import email from "@/assets/Email.png"


export default function ContactView() {
  return (
    <div>
        <div className='lg:pr-10 lg:pl-16 '>
            <NavBar isDark={true} />
        </div>

        <div className="max-w-[1280px] m-auto px-6 lg:p-4 lg:px-16 font-Lato">
            <p className='mt-4 mb-4 lg:mb-14 text-2xl lg:text-4xl font-Lato font-medium'>Contact</p>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='w-full lg:w-1/2 lg:mr-28'>
                    <img className='w-full h-96 lg:h-min shadow-md object-cover lg:object-cover' src={about} />
                </div>
                <div className='w-full lg:w-1/2 mt-9 lg:mt-0'>
                    <p className='mb-2 lg:mb-3 text-2xl lg:text-4xl font-Lato font-light'>Post Gallery</p>
                    <p className='text-xl font-light'> 
                        Skylight mall <br/>
                        Addis Ababa, Ethiopia<br/>
                        Monday - Saturday, 10am - 1pm & 2 - 6pm<br/>
                        Tel: +251 912345678<br/>
                        Postgallery@gmail.com
                    </p>
                    <img className='w-full h-96 lg:h-60 mt-6 object-cover lg:object-cover' src={location} />
                    <div className='flex flex-row mt-6'>
                        <div className='w-1/2'>
                            <div className='flex flex-row align-center mb-3'>
                                <img className='w-7 h-7 object-contain mr-2' src={instagram} />
                                <p className='text-base'>Instagram</p>
                            </div>
                            <div className='flex flex-row align-center mb-3'>
                                <img className='w-7 h-7 object-contain mr-2' src={twitter} />
                                <p className='text-base'>Twitter</p>
                            </div>
                            <div className='flex flex-row align-center mb-3'>
                                <img className='w-7 h-7 object-contain mr-2' src={facebook} />
                                <p className='text-base'>Facebook</p>
                            </div>
                            <div className='flex flex-row align-center mb-3'>
                                <img className='w-7 h-7 object-contain mr-2' src={youtube} />
                                <p className='text-base'>Youtube</p>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='flex flex-row align-center mb-3'>
                                <img className='w-7 h-7 object-contain mr-2' src={mark} />
                                <p className='text-base'>AA, Ethiopian Skylight Mall</p>
                            </div>
                            <div className='flex flex-row align-center mb-3'>
                                <img className='w-7 h-7 object-contain mr-2' src={phone} />
                                <p className='text-base'>0912345678</p>
                            </div>
                            <div className='flex flex-row align-center mb-3'>
                                <img className='w-7 h-7 object-contain mr-2' src={email} />
                                <p className='text-base'>postgallery@gmail.com</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <TheFooter />
    </div>
  )
}
